    
function myMain() {
            hideHeadLayer();
            hideVideoLayer();
            txtNo();
            shell();
            showCollar();
        }
        /* controllers */
        function sh() {
            document.getElementById('sh-shelter').style.opacity = 1;
            document.getElementById('sh-shelter').style.zIndex = 2;
            document.getElementById('sh-shelter').style.top = '-110px';
        }

        function shBack() {
            document.getElementById('sh-shelter').style.opacity = 1;
            document.getElementById('sh-shelter').style.zIndex = 2;
            document.getElementById('sh-shelter').style.top = '-55px';
        }
        //
        function brSx() {
            document.getElementById('br-shelter_SX').style.opacity = 1;
            document.getElementById('br-shelter_SX').style.zIndex = 2;
            document.getElementById('br-shelter_SX').style.left = '-352px';
            document.getElementById('br-shelter_SX').style.top = '-42px';
        }

        function brSxBack() {
            document.getElementById('br-shelter_SX').style.opacity = 1;
            document.getElementById('br-shelter_SX').style.left = '-330px';
            document.getElementById('br-shelter_SX').style.top = '-55px';
        }
        //
        function brDx() {
            document.getElementById('br-shelter_DX').style.opacity = 1;
            document.getElementById('br-shelter_DX').style.left = '-297px';
            document.getElementById('br-shelter_DX').style.top = '-66px';
        }

        function brDxBack() {
            document.getElementById('br-shelter_DX').style.opacity = 1;
            document.getElementById('br-shelter_DX').style.left = '-330px';
            document.getElementById('br-shelter_DX').style.top = '-55px';
        }
        //
        function avSx() {
            document.getElementById('av-shelter_SX').style.opacity = 1;
            document.getElementById('av-shelter_SX').style.left = '-352px';
            document.getElementById('av-shelter_SX').style.top = '-42px';
        }

        function avSxBack() {
            document.getElementById('av-shelter_SX').style.opacity = 1;
            document.getElementById('av-shelter_SX').style.left = '-330px';
            document.getElementById('av-shelter_SX').style.top = '-55px';
        }
        //
        function avDx() {
            document.getElementById('av-shelter_DX').style.opacity = 1;
            document.getElementById('av-shelter_DX').style.left = '-297px';
            document.getElementById('av-shelter_DX').style.top = '-66px';

        }

        function avDxBack() {
            document.getElementById('av-shelter_DX').style.opacity = 1;
            document.getElementById('av-shelter_DX').style.left = '-330px';
            document.getElementById('av-shelter_DX').style.top = '-55px';
        }
        //
        function handSx() {
            document.getElementById('hand-shelter_SX').style.opacity = 1;
            document.getElementById('hand-shelter_SX').style.left = '-349px';
            document.getElementById('hand-shelter_SX').style.top = '-72px';
        }

        function handSxBack() {
            document.getElementById('hand-shelter_SX').style.opacity = 1;
            document.getElementById('hand-shelter_SX').style.left = '-330px';
            document.getElementById('hand-shelter_SX').style.top = '-55px';
        }
        //
        function handDx() {
            document.getElementById('hand-shelter_DX').style.opacity = 1;
            document.getElementById('hand-shelter_DX').style.left = '-309px';
            document.getElementById('hand-shelter_DX').style.top = '-28px';
        }

        function handDxBack() {
            document.getElementById('hand-shelter_DX').style.opacity = 1;
            document.getElementById('hand-shelter_DX').style.left = '-330px';
            document.getElementById('hand-shelter_DX').style.top = '-55px';
        }
        //
        function pelSx() {
            document.getElementById('pet-shelter_SX').style.zIndex = 0;
            document.getElementById('pel-shelter_SX').style = 'transform: scale(0.9)';
            document.getElementById('pel-shelter_SX').style.left = '-419px';
            document.getElementById('pel-shelter_SX').style.top = '-58px';
        }

        function pelSxBack() {

            document.getElementById('pel-shelter_SX').style = 'transform: scale(0.8);';
            document.getElementById('pel-shelter_SX').style.left = '-330px';
            document.getElementById('pel-shelter_SX').style.top = '-55px';
        }
        //
        function coll() {
            document.getElementById('pet-shelter_DX').style.zIndex = 2;
            document.getElementById('coll-shelter').style = 'transform: scale(0.9)';
            document.getElementById('coll-shelter').style.left = '-419px';
        }

        function collBack() {
            document.getElementById('coll-shelter').style = 'transform: scale(0.8)';
            document.getElementById('coll-shelter').style.left = '-330px';
            document.getElementById('coll-shelter').style.top = '-55px';
        }
        //
        function petSx() {

            document.getElementById('pet-shelter_SX').style = 'transform: scale(0.9)';
            document.getElementById('pet-shelter_SX').style.left = '-419px';
        }

        function petSxBack() {

            document.getElementById('pet-shelter_SX').style = 'transform: scale(0.8)';
            document.getElementById('pet-shelter_SX').style.left = '-330px';
            document.getElementById('pet-shelter_SX').style.top = '-55px';
            document.getElementById('pet-shelter_SX').style.zIndex = 2;
        }
        //
        function petDx() {
            document.getElementById('pet-shelter_DX').style = 'transform: scale(0.9)';
            document.getElementById('pet-shelter_DX').style.left = '-419px';
        }

        function petDxBack() {
            document.getElementById('coll-shelter').style.zIndex = 0;
            document.getElementById('pet-shelter_SX').style.zIndex = 0;
            document.getElementById('pet-shelter_DX').style = 'transform: scale(0.8)';
            document.getElementById('pet-shelter_DX').style.left = '-330px';
            document.getElementById('pet-shelter_DX').style.top = '-55px';
            document.getElementById('pet-shelter_DX').style.zIndex = 1;

        }

        function co() {
            hideMiniBones();
            document.getElementById('co-shelter').style = 'transform: scale(0.9)';
            document.getElementById('co-shelter').style.left = '-200px';
        }

        function coBack() {
            hideMiniBones();
            document.getElementById('coll-shelter').style.zIndex = 0;
            document.getElementById('co-shelter').style.zIndex = 0;
            document.getElementById('co-shelter').style = 'transform: scale(0.8)';
            document.getElementById('co-shelter').style.left = '-330px';
            document.getElementById('co-shelter').style.top = '-55px';
            document.getElementById('pel-shelter_DX').style.zIndex = 1;
            document.getElementById('pet-shelter_DX').style.zIndex = 2;
            document.getElementById('co-shelter').style.zIndex = 0;
            document.getElementById('pet-shelter_SX').style.zIndex = 2;

        }
        //
        function pelDx() {
            document.getElementById('pel-shelter_DX').style.opacity = 1;
            document.getElementById('pel-shelter_DX').style.left = '-239px';
            document.getElementById('pel-shelter_DX').style.top = '-55px';
            document.getElementById('co-shelter').style.zIndex = 0;

        }

        function pelDxBack() {
            document.getElementById('pel-shelter_DX').style.opacity = 1;
            document.getElementById('pel-shelter_DX').style.left = '-330px';
            document.getElementById('pel-shelter_DX').style.top = '-55px';
            document.getElementById('co-shelter').style.zIndex = 0;
        }
        //
        function gSx() {
            document.getElementById('g-shelter_SX').style.opacity = 1;
            document.getElementById('g-shelter_SX').style.left = '-362px';
            document.getElementById('g-shelter_SX').style.top = '-42px';
        }

        function gSxBack() {
            document.getElementById('g-shelter_SX').style.opacity = 1;
            document.getElementById('g-shelter_SX').style.left = '-330px';
            document.getElementById('g-shelter_SX').style.top = '-55px';
        }
        //
        function gDx() {
            document.getElementById('g-shelter_DX').style.opacity = 1;
            document.getElementById('g-shelter_DX').style.left = '-287px';
            document.getElementById('g-shelter_DX').style.top = '-66px';
            document.getElementById('pel-shelter_DX').style.zIndex = 0;
            document.getElementById('co-shelter').style.zIndex = 0;

        }

        function gDxBack() {
            document.getElementById('g-shelter_DX').style.opacity = 1;
            document.getElementById('g-shelter_DX').style.left = '-330px';
            document.getElementById('g-shelter_DX').style.top = '-55px';

        }
        //
        function sfSx() {
            document.getElementById('sf-shelter_SX').style.opacity = 1;
            document.getElementById('sf-shelter_SX').style.left = '-362px';
            document.getElementById('sf-shelter_SX').style.top = '-52px';
        }

        function sfSxBack() {
            document.getElementById('sf-shelter_SX').style.opacity = 1;
            document.getElementById('sf-shelter_SX').style.left = '-330px';
            document.getElementById('sf-shelter_SX').style.top = '-55px';
        }
        //
        function sfDx() {
            document.getElementById('sf-shelter_DX').style.opacity = 1;
            document.getElementById('sf-shelter_DX').style.left = '-297px';
            document.getElementById('sf-shelter_DX').style.top = '-66px';

        }

        function sfDxBack() {
            document.getElementById('sf-shelter_DX').style.opacity = 1;
            document.getElementById('sf-shelter_DX').style.left = '-330px';
            document.getElementById('sf-shelter_DX').style.top = '-55px';
        }
        //
        function poSx() {
            document.getElementById('po-shelter_SX').style.opacity = 1;
            document.getElementById('po-shelter_SX').style.left = '-352px';
            document.getElementById('pos-shelter_SX').style.top = '-22px';
        }

        function poSxBack() {
            document.getElementById('po-shelter_SX').style.opacity = 1;
            document.getElementById('po-shelter_SX').style.left = '-330px';
            document.getElementById('po-shelter_SX').style.top = '-55px';
        }
        //
        function poDx() {
            document.getElementById('po-shelter_DX').style.opacity = 1;
            document.getElementById('po-shelter_DX').style.left = '-307px';
            document.getElementById('po-shelter_DX').style.top = '-56px';

        }

        function poDxBack() {
            document.getElementById('po-shelter_DX').style.opacity = 1;
            document.getElementById('po-shelter_DX').style.left = '-330px';
            document.getElementById('po-shelter_DX').style.top = '-55px';
        }
        //
        function Sx() {
            document.getElementById('s-shelter_SX').style.opacity = 1;
            document.getElementById('s-shelter_SX').style.left = '-362px';
            document.getElementById('s-shelter_SX').style.top = '-48px';
        }

        function SxBack() {
            document.getElementById('s-shelter_SX').style.opacity = 1;
            document.getElementById('s-shelter_SX').style.left = '-330px';
            document.getElementById('s-shelter_SX').style.top = '-55px';
        }
        //
        function Dx() {
            document.getElementById('s-shelter_DX').style.opacity = 1;
            document.getElementById('s-shelter_DX').style.left = '-297px';
            document.getElementById('s-shelter_DX').style.top = '-56px';

        }

        function DxBack() {
            document.getElementById('s-shelter_DX').style.opacity = 1;
            document.getElementById('s-shelter_DX').style.left = '-330px';
            document.getElementById('s-shelter_DX').style.top = '-55px';
        }
        //
        function psSx() {
            document.getElementById('p-shelter_SX').style.opacity = 1;
            document.getElementById('p-shelter_SX').style.left = '-372px';
            document.getElementById('p-shelter_SX').style.top = '-50px';
        }

        function psSxBack() {
            document.getElementById('p-shelter_SX').style.opacity = 1;
            document.getElementById('p-shelter_SX').style.left = '-330px';
            document.getElementById('p-shelter_SX').style.top = '-55px';
        }
        //
        function psDx() {
            document.getElementById('p-shelter_DX').style.opacity = 1;
            document.getElementById('p-shelter_DX').style.left = '-287px';
            document.getElementById('p-shelter_DX').style.top = '-56px';

        }

        function psDxBack() {
            document.getElementById('p-shelter_DX').style.opacity = 1;
            document.getElementById('p-shelter_DX').style.left = '-330px';
            document.getElementById('p-shelter_DX').style.top = '-55px';
        }
        //
        function pdSx() {
            document.getElementById('pd-shelter_SX').style.opacity = 1;
            document.getElementById('pd-shelter_SX').style.left = '-372px';
            document.getElementById('pd-shelter_SX').style.top = '-50px';
        }

        function pdSxBack() {
            document.getElementById('pd-shelter_SX').style.opacity = 1;
            document.getElementById('pd-shelter_SX').style.left = '-330px';
            document.getElementById('pd-shelter_SX').style.top = '-55px';
        }
        //
        function pdDx() {
            document.getElementById('pd-shelter_DX').style.opacity = 1;
            document.getElementById('pd-shelter_DX').style.left = '-287px';
            document.getElementById('pd-shelter_DX').style.top = '-56px';

        }

        function pdDxBack() {
            document.getElementById('pd-shelter_DX').style.opacity = 1;
            document.getElementById('pd-shelter_DX').style.left = '-330px';
            document.getElementById('pd-shelter_DX').style.top = '-55px';
        }
        //
        function guSx() {
            document.getElementById('gu-shelter_SX').style.opacity = 1;
            document.getElementById('gu-shelter_SX').style.left = '-372px';
            document.getElementById('gu-shelter_SX').style.top = '-50px';
        }

        function guSxBack() {
            document.getElementById('gu-shelter_SX').style.opacity = 1;
            document.getElementById('gu-shelter_SX').style.left = '-330px';
            document.getElementById('gu-shelter_SX').style.top = '-55px';
        }
        //
        function guDx() {
            document.getElementById('gu-shelter_DX').style.opacity = 1;
            document.getElementById('gu-shelter_DX').style.left = '-287px';
            document.getElementById('gu-shelter_DX').style.top = '-56px';

        }

        function guDxBack() {
            document.getElementById('gu-shelter_DX').style.opacity = 1;
            document.getElementById('gu-shelter_DX').style.left = '-330px';
            document.getElementById('gu-shelter_DX').style.top = '-55px';
        }


        function showBody() {

            document.getElementById('skeleton').style.opacity = 1;
            document.getElementById('mini_bones').style.opacity = 0;
            sh();
            brSx();
            brDx();
            avSx();
            avDx();
            handSx();
            handDx();
            pelSx();
            coll();
            petSx();
            petDx();
            co();
            pelDx();
            coll();
            petSx();
            petDx();
            pelDx();
            gSx();
            gDx();
            sfSx();
            sfDx();
            Sx();
            Dx();
            psSx();
            psDx();
            pdSx();
            guSx();
            guDx();
            var divsArr = ['sh-shelter', 'br-shelter_SX', 'br-shelter_DX', 'av-shelter_SX', 'av-shelter_DX', 'hand-shelter_SX', 'hand-shelter_DX', 'pet-shelter_SX', 'pel-shelter_SX', 'pet-shelter_DX', 'coll-shelter', 'pel-shelter_DX', 'co-shelter', 'g-shelter_SX', 'g-shelter_DX', 'sf-shelter_SX', 'sf-shelter_DX', 'po-shelter_SX', 'po-shelter_DX', 's-shelter_DX', 's-shelter_SX', 'pd-shelter_SX', 'pd-shelter_DX', 'gu-shelter_SX', 'gu-shelter_DX', 'p-shelter_DX', 'p-shelter_SX'];
            for (var i = 0; i < divsArr.length; i++) {
                document.getElementById(divsArr[i]).style.opacity = 0;
            }

            cleanUp();
        }

        function shell() {
            var divsArr = ['mini_bones', 'skeleton', 'sh-shelter', 'br-shelter_SX', 'br-shelter_DX', 'av-shelter_SX', 'av-shelter_DX', 'hand-shelter_SX', 'hand-shelter_DX', 'pet-shelter_SX', 'pel-shelter_SX', 'pet-shelter_DX', 'coll-shelter', 'pel-shelter_DX', 'co-shelter', 'g-shelter_SX', 'g-shelter_DX', 'sf-shelter_SX', 'sf-shelter_DX', 'po-shelter_SX', 'po-shelter_DX', 's-shelter_DX', 's-shelter_SX', 'pd-shelter_SX', 'pd-shelter_DX', 'gu-shelter_SX', 'gu-shelter_DX', 'p-shelter_DX', 'p-shelter_SX'];
            for (var i = 0; i < divsArr.length; i++) {
                document.getElementById(divsArr[i]).style.opacity = 1;
            }
            shBack();
            brSxBack();
            brDxBack();
            avSxBack();
            avDxBack();
            handSxBack();
            handDxBack();
            pelSxBack();
            collBack();
            petSxBack();
            petDxBack();
            coBack();
            pelDxBack();
            collBack();
            petSxBack();
            petDxBack();
            pelDxBack();
            gSxBack();
            gDxBack();
            sfSxBack();
            sfDxBack();
            SxBack();
            DxBack();
            psSxBack();
            psDxBack();
            pdSxBack();
            guSxBack();
            guDxBack();
            posItems();
            document.getElementById('sh-shelter').style.zIndex = 2;
        }

        function hideMiniBones() {
            document.getElementById('mini_bones').style.zIndex = 0;
        }

        function bones() {
            showBody();
            document.getElementById('sh-shelter').style.zIndex = 0;
            document.getElementById('skeleton').style.opacity = 0;
            document.getElementById('mini_bones').style.opacity = 1;
        }

        function showHead() {
            hideVideoLayer();
            document.getElementById('container_head').style.opacity = 1;
            txtHead();
        }

        function ShowVideoLayer() {
            hideHeadLayer();
            if (document.getElementById('video_player').style.opacity == 0) {
                document.getElementById('video_player').style.opacity = 1;
            }
        }

        function hideHeadLayer() {
            document.getElementById('container_head').style.opacity = 0;
        }

        function hideVideoLayer() {
            document.getElementById('video_player').style.opacity = 0;
        }
        //text

       function txtForeArm(){
           document.getElementById('readMe').innerHTML = 'forearm selected';
       }
       function txtArm(){
           document.getElementById('readMe').innerHTML = 'arm selected';
       }
       function txtShoulder(){
           document.getElementById('readMe').innerHTML = 'shoulder selected';
       }
       function txtCollar(){
           document.getElementById('readMe').innerHTML = 'collar selected';
       }
      function txtHand(){
           document.getElementById('readMe').innerHTML = 'hand selected';
       }
       function txtAbdomen(){
           document.getElementById('readMe').innerHTML = 'abdomen selected';
       }
       function txtPelvis(){
           document.getElementById('readMe').innerHTML = 'pelvis selected';
       }
       function txtChest(){
           document.getElementById('readMe').innerHTML = 'chest selected';
       }
       function txtUpperLeg(){
           document.getElementById('readMe').innerHTML = 'upper leg selected';
       }
       function txtKnie(){
           document.getElementById('readMe').innerHTML = 'knie selected';
       }
       function txtLowerLeg(){
           document.getElementById('readMe').innerHTML = 'lower leg selected';
       }
       function txtFoot(){
           document.getElementById('readMe').innerHTML = 'foot selected';
       }
       function txtHead(){
           document.getElementById('readMe').innerHTML = 'head section';
       }
       function txtNo(){
           document.getElementById('readMe').innerHTML = '';
       }
       //end text
        function showArm() {
            ShowVideoLayer();
            txtForeArm();
            document.getElementById('film').src = 'vid/FOREARM.mp4';
        }

        function showArmUp() {
            ShowVideoLayer();
            txtArm();
            document.getElementById('film').src = 'vid/ARM.mp4';
        }

        function showHand() {
            ShowVideoLayer();
            txtHand();
            document.getElementById('film').src = 'vid/HAND.mp4';
        }

        function showCollar() {
            ShowVideoLayer();
            txtCollar();
            document.getElementById('film').src = 'vid/COLLAR.mp4';
        }

        function showBellySide() {
            ShowVideoLayer();
            txtAbdomen();
            document.getElementById('film').src = 'vid/BELLY-SIDE.mp4';
        }

        function showBelly() {
            ShowVideoLayer();
            txtAbdomen();
            document.getElementById('film').src = 'vid/BELLY.mp4';
        }

        function showPelvis() {
            ShowVideoLayer();
            txtPelvis();
            myDiv.innerHTML = 'pelvis selected';
        }

        function showChest() {
            ShowVideoLayer();
            txtChest();
            document.getElementById('film').src = 'vid/CHEST.mp4';
        }

        function showUpperLeg() {
            ShowVideoLayer();
            txtUpperLeg();
            document.getElementById('film').src = 'vid/LEG_UPPER.mp4';

        }

        function showKnie() {
            ShowVideoLayer();
            txtKnie();
            document.getElementById('film').src = 'vid/KNIE.mp4';
        }

        function showKnieLow() {
            ShowVideoLayer();
            txtLowerLeg();
            document.getElementById('film').src = 'vid/KNIE_LOW.mp4';
        }

        function showKnieBack() {
            ShowVideoLayer();
            txtLowerLeg();
            document.getElementById('film').src = 'vid/KNIE_BACK.mp4';
        }

        function showShoulder() {
            ShowVideoLayer();
            txtShoulder();
            document.getElementById('film').src = 'vid/SHOULDER.mp4';
        }

        function showFoot() {
            ShowVideoLayer();
            txtFoot();
            document.getElementById('film').src = 'vid/FOOT.mp4';
        }

        function showFootBetween() {
            ShowVideoLayer();
            txtFoot();
            document.getElementById('film').src = 'vid/FOOT_BETWEEN.mp4';
        }

        function cleanUp() {
            myNum = '20px';
            var divsArr = ['sh-shelter', 'br-shelter_SX', 'br-shelter_DX', 'av-shelter_SX', 'av-shelter_DX', 'hand-shelter_SX', 'hand-shelter_DX', 'pet-shelter_SX', 'pel-shelter_SX', 'pet-shelter_DX', 'coll-shelter', 'pel-shelter_DX', 'co-shelter', 'g-shelter_SX', 'g-shelter_DX', 'sf-shelter_SX', 'sf-shelter_DX', 'po-shelter_SX', 'po-shelter_DX', 's-shelter_DX', 's-shelter_SX', 'pd-shelter_SX', 'pd-shelter_DX', 'gu-shelter_SX', 'gu-shelter_DX', 'p-shelter_DX', 'p-shelter_SX'];
            for (var i = 0; i < divsArr.length; i++) {
                document.getElementById(divsArr[i]).style.top = myNum;
            }
        }

        function posItems() {
            myNum = '-55px';
            var divsArr = ['sh-shelter', 'br-shelter_SX', 'br-shelter_DX', 'av-shelter_SX', 'av-shelter_DX', 'hand-shelter_SX', 'hand-shelter_DX', 'pet-shelter_SX', 'pel-shelter_SX', 'pet-shelter_DX', 'coll-shelter', 'pel-shelter_DX', 'co-shelter', 'g-shelter_SX', 'g-shelter_DX', 'sf-shelter_SX', 'sf-shelter_DX', 'po-shelter_SX', 'po-shelter_DX', 's-shelter_DX', 's-shelter_SX', 'pd-shelter_SX', 'pd-shelter_DX', 'gu-shelter_SX', 'gu-shelter_DX', 'p-shelter_DX', 'p-shelter_SX'];
            for (var i = 0; i < divsArr.length; i++) {
                document.getElementById(divsArr[i]).style.top = myNum;
            }
        }

            