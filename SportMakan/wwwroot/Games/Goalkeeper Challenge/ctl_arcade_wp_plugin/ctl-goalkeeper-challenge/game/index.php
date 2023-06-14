<!DOCTYPE html>
<html>
    <head>
        <title>GOALKEEPER CHALLENGE</title>
        <link rel="stylesheet" href="css/reset.css" type="text/css">
        <link rel="stylesheet" href="css/main.css" type="text/css">
        <link rel="stylesheet" href="css/orientation_utils.css" type="text/css">
        <link rel="stylesheet" href="css/ios_fullscreen.css" type="text/css">
        <link rel='shortcut icon' type='image/x-icon' href='./favicon.ico' />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,minimal-ui" />
        <meta name="msapplication-tap-highlight" content="no"/>

        <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="js/createjs.min.js"></script>
        <script type="text/javascript" src="js/howler.min.js"></script>
        <script type="text/javascript" src="js/CLang.min.js"></script>
        <script type="text/javascript" src="js/Three.js"></script>
        <script type="text/javascript" src="js/main.js"></script>

    </head>
    <body ondragstart="return false;" ondrop="return false;" >
        <div style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%"></div>
        <script>
            $(document).ready(function () {
                var oMain = new CMain({
                    ball_to_saved: [3, 3, 3, 3, 3, 4, 3, 4, 3, 5],
                    ball_force_left_right: [5, 6, 7, 8, 9, 10, 7, 12, 10, 12], //DIRECTION BALL FORCE LEFT RIGHT
                    ball_force_up: [{min: 6, max: 9}, {min: 5, max: 9}, {min: 3, max: 9}, {min: 1, max: 8}, {min: 2, max: 8}, {min: 4, max: 8},
                        {min: 3, max: 9}, {min: 1, max: 10}, {min: 5, max: 8}, {min: 5, max: 10.5}], //DIRECTION BALL FORCE UP
                    ball_force_velocity: [30, 40, 50, 60, 65, 60, 70, 64, 68, 65], //BALL FORCE VELOCITY
                    max_launch: [5, 5, 6, 5, 5, 6, 6, 6, 5, 6], //MAX MATCH BALL LAUNCH 
                    score_perfect_ball_saved: 10, //ADD SCRORE WHEN THE GUANTES SAVE BALL LOCKED
                    score_ball_saved: 5, //ADD SCRORE WHEN THE GUANTES SAVE BALL
                    score_goal_opponent: -5, // ADD SCRORE WHEN THE OPPONENT GOAL
                    perfect_ball_saved_point: {x: 0.7, z: 0.6}, //POINT COLLISION FOR LOCKED BALL IN HANDS
                    fullscreen:true,        //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
                    audio_enable_on_startup:false, //ENABLE/DISABLE AUDIO WHEN GAME STARTS 
                    check_orientation:true, //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES                     
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
        
        <canvas id="canvas" class='ani_hack' width="1280" height="768"> </canvas>
        <div data-orientation="landscape" class="orientation-msg-container"><p class="orientation-msg-text">Please rotate your device</p></div>
        <div id="block_game" style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:none"></div>
    </body>
</html>
