<!DOCTYPE html>
<html lang="ja">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BLANCO予約フォーム</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css">


    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!--  -->
    <link rel="stylesheet" href="default.css">
    <link rel="stylesheet" href="default.date.css">
    <link rel="stylesheet" href="default.time.css">
    <script src="picker.js"></script>
    <script src="picker.date.js"></script>
    <script src="picker.time.js"></script>
    <script src="legacy.js"></script>

    <!-- 日本語化対応 -->
    <script src="ja_JP.js"></script>
    <!--  -->
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q672W50ZQH"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-Q672W50ZQH');
    </script>

</head>

<body>

    <style media="screen">
        .mini_h2 {
            padding: 0.2em 0.3em;
            margin: 0 0.2em;
            border-radius: 5px;
            background: #f1f2f3;
            color: #404040;
            font-size: 0.9em;
            display: block;
            text-align: center;
        }

        .horizontal_scroll {
            list-style: none;
            overflow-x: scroll;
            -webkit-overflow-scrolling: touch;
            padding: 0 0 12px 8px;
            display: -ms-flexbox;
            display: flex;
        }

        .horizontal_scroll li {
            margin-right: 5px;
        }


        h2 {
            padding: 0.5em;
            color: #ff968f;
            border-top: dashed 3px #ff968f;
        }


        .box {
            margin-top: 20px;
        }

        .p-3 {
            width: 100%;
        }

        /* ============================ */
        .my-checkbox {
            display: block;
            position: relative;
            margin: 20px;
            color: rgba(0, 0, 0, 0.7);
            cursor: pointer;
            user-select: none;
            font-size: 18px;
        }

        .my-checkbox2 {
            display: block;
            position: relative;
            margin: 0px;
            color: rgba(0, 0, 0, 0.7);
            cursor: pointer;
            user-select: none;
            font-size: 16px;
            padding: 0px 5px 0px 18px;
            margin-top: 19px;
        }

        .my-checkbox input {
            display: none;
        }

        .checkmark {
            position: absolute;
            top: 0;
            /* 上からの位置 */
            left: 0;
            min-height: 35px;
            /* 幅 */
            width: 100%;
            /* 幅 */
            border: solid 2px #d4dae2;
            /* 線 */
            border-radius: 4px;
            box-sizing: border-box;
            padding-left: 8px;
        }


        /* チェックが入ったとき */
        .my-checkbox input:checked+.checkmark {
            background-color: #ea809b;
            /* チェック時の色 */
            border-color: #d6496d;
            /* チェック時の色 */
            color: #464646;
        }


        .sousin {
            color: #fff;
            background-color: #757575;
            border: #636363 solid 2px;
            font-size: 25px;
            font-weight: bold;
        }

        h3 {
            margin-top: 30px;
            text-align: center;
        }

        .time-picker-orign input {
            width: 102px !important;
            display: inline-block;
            padding: 0px 0px 0px 8px;
        }

        .time-picker-orign span {
            font-size: 1rem;
        }

        br.mini-br {
            display: none;
        }

        @media screen and (max-width: 370px) {
            br.mini-br {
                display: block;
            }
        }

        .accordion-check {
            display: none;
        }

        .accordion-label {
            background: #999999;
            border-radius: 50px;
            color: #fff;
            display: inline-block;
            margin-bottom: 1px;
            padding: 10px 20px;
        }

        .accordion-content {
            border-radius: 10px;
            height: 0;
            opacity: 0;
            padding: 10px;
            transition: .5s;
            visibility: hidden;
        }

        .accordion-check:checked+.accordion-label+.accordion-content {
            margin: 10px 0px;
            height: 100%;
            opacity: 1;
            padding: 10px;
            visibility: visible;
            border: 2px solid #b8b8b8;
        }

        .sub-box h2 {
            border-top: none;
            padding: 0px;
        }
    </style>

    <form class="mx-2 px-2">

        <p class="mt-3">以下に予約情報を入力して送信ボタンを押してください♪</p>
        <p class="mt-3">⚠ご予約は予約時間から15分を過ぎるとキャンセルになりますのでご注意ください。</p>
        <hr>

        <!-- 候補１ -->
        <div class="box">
            <h2 class="mt-3">ご希望の日付</h2>
            <p>定休日：日曜日・不定休</p>
            <input class="form-control" type="text" id="datepicker" maxlength="10" placeholder="日付を選ぶ"><br>
        </div>

        <!--  -->

        <div class="box time-picker-orign">
            <h2 class="mt-3">ご希望の時間</h2>
            <p class="mini-h2">選択したお時間の間でご案内できるか確認・提案させていただきます。</p>
            <input class="form-control" type="text" id="timepicker" maxlength="10" placeholder="時間を選ぶ">
            <span>から</span>
            <input class="form-control" type="text" id="timepicker2" maxlength="10" placeholder="時間を選ぶ">
            <span>までの間</span>
        </div>

        <!-- /候補１ -->
        <br>
        <!-- 候補２～３ -->
        <input id="accordion-check1" class="accordion-check" type="checkbox">
        <label class="accordion-label" for="accordion-check1">第２希望を追加する</label>
        <div class="accordion-content">

            <div class="box sub-box">
                <h2 class="mt-3">第２希望の日付</h2>
                <p>定休日：日曜日・不定休</p>
                <input class="form-control" type="text" id="datepicker2" maxlength="10" placeholder="日付を選ぶ">
            </div>

            <!--  -->

            <div class="box sub-box time-picker-orign">
                <h2 class="mt-3">第２希望の時間</h2>
                <input class="form-control" type="text" id="timepicker2-1" maxlength="10" placeholder="時間を選ぶ">
                <span>から</span>
                <input class="form-control" type="text" id="timepicker2-2" maxlength="10" placeholder="時間を選ぶ">
                <span>までの間</span>
            </div>


        </div>

        <!--  -->

        <input id="accordion-check2" class="accordion-check" type="checkbox">
        <label class="accordion-label" for="accordion-check2">第３希望を追加する</label>
        <div class="accordion-content">

            <div class="box sub-box">
                <h2 class="mt-3">第３希望の日付</h2>
                <p>定休日：月曜日・不定休</p>
                <input class="form-control" type="text" id="datepicker3" maxlength="10" placeholder="日付を選ぶ">
            </div>

            <!--  -->

            <div class="box sub-box time-picker-orign">
                <h2 class="mt-3">第３希望の時間</h2>
                <input class="form-control" type="text" id="timepicker3-1" maxlength="10" placeholder="時間を選ぶ">
                <span>から</span>
                <input class="form-control" type="text" id="timepicker3-2" maxlength="10" placeholder="時間を選ぶ">
                <span>までの間</span>
            </div>

        </div>

        <!-- /候補２～３ -->


        <div class="box">
            <h2 class="mt-3">お名前</h2>
            <input class="form-control w-100 mt-1" name="names" maxlength="10" placeholder="お名前を入力">
        </div>



        <!--  -->

        <h2 class="mt-3">概要</h2>
        <div>
            <input class="form-control w-100 mt-1" name="memo" placeholder="例)カップルで『よもぎ蒸し』できますか？">
        </div>
        <br>
        <input type="submit" class="p-3 mt-4 mb-5 btn sousin" value="送信">
        <br>
    </form>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
    <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2.1/sdk.js"></script>
    <script src="liff.js"></script>
    <script src="index.js"></script>
</body>

</html>
