<!DOCTYPE html>
<html>
    <head>
        <title>HOCKEY SHOOTOUT</title>
        <link rel="stylesheet" href="css/reset.css" type="text/css">
        <link rel="stylesheet" href="css/main.css" type="text/css">
        <link rel="stylesheet" href="css/orientation_utils.css" type="text/css">
        <link rel="stylesheet" href="css/ios_fullscreen.css" type="text/css">
        <link rel='shortcut icon' type='image/x-icon' href='./favicon.ico' />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,minimal-ui" />
        <meta name="msapplication-tap-highlight" content="no"/>

        <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="js/easeljs-NEXT.min.js"></script>
        <script type="text/javascript" src="js/howler.min.js"></script>
        <script type="text/javascript" src="js/CLang.min.js"></script>
        <script type="text/javascript" src="js/Three.js"></script>
        <script type="text/javascript" src="js/CHelpText.js"></script>
        <script type="text/javascript" src="js/main.js"></script>


    </head>
    <body ondragstart="return false;" ondrop="return false;" >
        <div style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%"></div>
        <script>
            $(document).ready(function () {
                var oMain = new CMain({
                    area_goal: [{id: 0, probability: 70},  {id: 1, probability: 60}, {id: 2, probability: 20}, {id: 3, probability: 60}, {id: 4, probability: 70}, 
                                {id: 5, probability: 60},   {id: 6, probability: 20}, {id: 7, probability: 0}, {id: 8, probability: 25}, {id: 9, probability: 60}, 
                                {id: 10, probability: 70},  {id: 11, probability: 35},{id: 12, probability: 30},{id: 13, probability: 35},{id: 14, probability: 70}], //PROBABILITY AREA GOALS START TO LEFT UP TO RIGHT DOWN 
                    //0  1  2  3  4
                    //5  6  7  8  9
                    //10 11 12 13 14
                    num_of_penalty: 15, //MAX NUMBER OF PENALTY FOR END GAME
                    multiplier_step: 0.1, //INCREASE MULTIPLIER EVERY GOAL
                    fullscreen: true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
                    check_orientation:true,     //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
                    audio_enable_on_startup:false, //ENABLE/DISABLE AUDIO WHEN GAME STARTS 
                    num_levels_for_ads: 2//NUMBER OF TURNS PLAYED BEFORE AD SHOWING //
                            //////// THIS FEATURE  IS ACTIVATED ONLY WITH CTL ARCADE PLUGIN./////////////////////////// 
                            /////////////////// YOU CAN GET IT AT: ///////////////////////////////////////////////////////// 
                            // http://codecanyon.net/item/ctl-arcade-wordpress-plugin/13856421 ///////////
                });
                $(oMain).on("start_session", function (evt) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeStartSession();
                    }
                });

                $(oMain).on("end_session", function (evt) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeEndSession();
                    }
                });

                $(oMain).on("start_level", function (evt, iLevel) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeStartLevel({level: iLevel});
                    }
                });

                $(oMain).on("restart_level", function (evt, iLevel) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeRestartLevel({level: iLevel});
                    }
                });

                $(oMain).on("end_level", function (evt, iLevel) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeEndLevel({level: iLevel});
                    }
                });

                $(oMain).on("save_score", function (evt, iScore, szMode) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeSaveScore({score: iScore, mode: szMode});
                    }
                });

                $(oMain).on("show_interlevel_ad", function (evt) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeShowInterlevelAD();
                    }
                });

                $(oMain).on("share_event", function (evt, iScore) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeShareEvent({img: TEXT_SHARE_IMAGE,
                            title: TEXT_SHARE_TITLE,
                            msg: TEXT_SHARE_MSG1 + iScore + TEXT_SHARE_MSG2,
                            msg_share: TEXT_SHARE_SHARE1 + iScore + TEXT_SHARE_SHARE1});
                    }
                });


                if (isIOS()) {
                    setTimeout(function () {
                        sizeHandler();
                    }, 200);
                } else {
                    sizeHandler();
                }
            });

        </script>
        <div class="check-fonts">
            <p class="check-font-1">test 1</p>
        </div> 
        <canvas id="canvas" class='ani_hack' width="1360" height="640"> </canvas>
        <div data-orientation="landscape" class="orientation-msg-container"><p class="orientation-msg-text">Please rotate your device</p></div>
        <div id="block_game" style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:none"></div>
    </body>
</html>
