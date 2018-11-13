var container, stats;
        var camera, scene, renderer;
        var pointLight, stats;
        var mixer, animationClip;
        var mystart;
        var clock = new THREE.Clock();
        var mouseX = 0,
            mouseY = 0;
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        init();

        function init() {
            container = document.createElement('div');
            document.body.appendChild(container);
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
            camera.position.z = 4;
            // scene
            scene = new THREE.Scene();
            scene.background = new THREE.Color( 0x272727 );
            var ambient = new THREE.AmbientLight(0x444444);
            scene.add(ambient);
            var directionalLight = new THREE.DirectionalLight(0xffeedd);
            directionalLight.position.set(0, 0, 1.1).normalize();
            scene.add(directionalLight);
            // BEGIN Clara.io JSON loader code
            var objectLoader = new THREE.ObjectLoader();
            objectLoader.load("json/gundam_pose.json", function(obj) {
                scene.add(obj);
                mixer = new THREE.AnimationMixer(obj);
                mystart = true; //just for testing purposes:bermarte
                if (mystart == true) {
                    mixer.clipAction(obj.animations[0]).play();
                } else {
                    mixer.clipAction(obj.animations[0]).stop();
                }
                animate();

            });
            // END Clara.io JSON loader code
            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);
            document.addEventListener('mousemove', onDocumentMouseMove, false);
            window.addEventListener('resize', onWindowResize, false);
        }

        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function onDocumentMouseMove(event) {
            mouseX = (event.clientX - windowHalfX) / 2;
            mouseY = (event.clientY - windowHalfY) / 2;
        }

        function animate() {

            requestAnimationFrame(animate);
            mixer.update(clock.getDelta());
            render();

        }

        function render() {
            camera.position.x += (mouseX - camera.position.x) * .05;
            camera.position.y += (-mouseY - camera.position.y) * .05;
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        }
