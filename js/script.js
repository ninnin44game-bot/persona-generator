/* =========================
   設定
========================= */

// サーバー数
const SERVER_COUNT = 40;

// エリア数
const AREA_COUNT = 6;


/* =========================
   表を作る
========================= */

const serverList =
    document.getElementById("server-list");


/*
    サーバー1～40を作る
*/

for (
    let serverNumber = 1;
    serverNumber <= SERVER_COUNT;
    serverNumber++
) {

    // 行を作る
    const row =
        document.createElement("tr");


    /* =========================
       サーバー名
    ========================= */

    const serverCell =
        document.createElement("th");

    serverCell.className =
        "server-name";

    serverCell.textContent =
        `サーバー${serverNumber} `;

    row.appendChild(serverCell);


    /* =========================
       エリア1～6
    ========================= */

    for (
        let areaNumber = 1;
        areaNumber <= AREA_COUNT;
        areaNumber++
    ) {

        const cell =
            document.createElement("td");


        /*
            4色ボタン
        */

        const buttons =
            document.createElement("div");

        buttons.className =
            "color-buttons";


        // 青
        buttons.appendChild(
            createColorButton(
                "青",
                "blue",
                cell
            )
        );


        // 黄
        buttons.appendChild(
            createColorButton(
                "黄",
                "yellow",
                cell
            )
        );


        // 赤
        buttons.appendChild(
            createColorButton(
                "赤",
                "red",
                cell
            )
        );


        // 虹
        buttons.appendChild(
            createColorButton(
                "虹",
                "rainbow",
                cell
            )
        );


        cell.appendChild(buttons);


        /*
            時間表示
        */

        const times =
            document.createElement("div");

        times.className =
            "times";

        times.innerHTML = `
    <div>
                <span>前回</span>
                <strong>--:--:--</strong>
                <em></em>
            </div>

    <div>
        <span>最新</span>
        <strong>--:--:--</strong>
        <em></em>
    </div>
`;


        cell.appendChild(times);


        /*
            セルを行に追加
        */

        row.appendChild(cell);

    }


    /*
        行を表に追加
    */

    serverList.appendChild(row);

}


/* =========================
   色ボタンを作る関数
========================= */

function createColorButton(
    colorName,
    colorClass,
    cell
) {

    const button =
        document.createElement("button");


    button.className =
        `color - button ${colorClass} `;


    button.textContent =
        colorName;


    /* =========================
       ボタンを押したとき
    ========================= */

    button.addEventListener("click", function () {

        // 現在時刻を取得
        const now = new Date();

        // 時:分:秒にする
        const time =
            now.toLocaleTimeString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });


        // このセルの「前回」と「最新」を取得
        const timeBoxes =
            cell.querySelectorAll(".times > div");

        const previousTime =
            timeBoxes[0].querySelector("strong");

        const latestTime =
            timeBoxes[1].querySelector("strong");

        const previousColor =
            timeBoxes[0].querySelector("em");

        const latestColor =
            timeBoxes[1].querySelector("em");


        /* =========================
           最新 → 前回
        ========================= */

        previousTime.textContent =
            latestTime.textContent;

        previousColor.textContent =
            latestColor.textContent;


        /* =========================
           今回の押下を最新にする
        ========================= */

        latestTime.textContent =
            time;

        latestColor.textContent =
            colorName;

    });


    return button;
}
