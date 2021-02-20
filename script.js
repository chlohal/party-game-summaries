var categories = {};

var catsParent = document.getElementById("parent");




for (var i = games.length - 1; i >= 0; i--) {
    var game = games[i];

    if (!categories[game.program]) {
        categories[game.program] = createCategory(game.program);
        catsParent.appendChild(categories[game.program].elem);
    }

    addGameListItem(categories[game.program], game);
}

function createCategory(catName) {
    var catIndex = Object.keys(categories).length;
    var color = `hsl(${catIndex * 24}, 50%, 75%)`,
        colorLighter = `hsla(${catIndex * 24}, 50%, 80%, 0.5)`,
        colorDarker = `hsla(${catIndex * 24}, 50%, 70%, 0.5)`;

    var catElem = document.createElement("li");

    catElem.classList.add(catName.replace(/[^\w]+/g, "-").toLowerCase());
    catElem.style.backgroundColor = color;
    catElem.style.boxShadow = `0.25em 0.25em 0.5em ${colorDarker},
                                -0.25em -0.25em 0.5em ${colorLighter}`

    var catHead = document.createElement("h2");
    catHead.textContent = catName;
    catElem.appendChild(catHead);

    var catGames = document.createElement("ul");
    catGames.classList.add("games-list");
    catElem.appendChild(catGames);

    return {
        elem: catElem,
        list: catGames,
        hue: catIndex * 24
    };
}

function addGameListItem(category, game) {
    var gameElem = document.createElement("li");

    var openModalButton = document.createElement("button");
    openModalButton.setAttribute("aria-label", "See more information");
    openModalButton.innerHTML = genInfoIconSvg(`hsl(${category.hue}, 80%, 20%)`);

    var nameElem = document.createElement("h3");
    nameElem.textContent = game.title;

    var playFreqSparkline = document.createElement("div");
    playFreqSparkline.innerHTML = createSparklineSvg(game, category);

    gameElem.appendChild(openModalButton);
    gameElem.appendChild(nameElem);
    gameElem.appendChild(playFreqSparkline);

    category.list.appendChild(gameElem);
}


function createSparklineSvg(game, category) {
    var chartSize = {
        y: 64,
        x: 256,
        domainPointCount: 6,
        domain: 7 * 6,
        xScale: 7,
        yMargin: 1,
        sparklineHeight: 7,
    };


    var currentDay = getDayNum(new Date());

    var chartStartDay = currentDay - chartSize.domain;

    var path = "M0," + calculateSparklinePoint(game, chartStartDay, chartSize);
    var data = [];

    for (var i = chartStartDay; i <= currentDay; i += chartSize.xScale) {
        var xCoord = (i - chartStartDay) / (currentDay - chartStartDay) * chartSize.x;
        var yCoord = calculateSparklinePoint(game, i, chartSize);

        data.push(1 - (yCoord - chartSize.yMargin) / (chartSize.y - chartSize.yMargin*2));

        if (yCoord == chartSize.y) continue;

        path += "L" + xCoord + "," + yCoord
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" role="img" width="${chartSize.x}" height="${chartSize.y}" 
        viewBox="0 0 ${chartSize.x} ${chartSize.y}"
        aria-labelledby="sparkline${game.jackboxPastGameTypeId || game.title}Title sparkline${game.jackboxPastGameTypeId || game.title}Desc">
        <title id="sparkline${game.jackboxPastGameTypeId || game.title}Title">Game's popularity</title>
        <desc id="sparkline${game.jackboxPastGameTypeId || game.title}Desc">${describeData(data, chartSize)}</desc>
        <defs>
            <linearGradient id="gradient-${category.hue}" x1="0" x2="0" y1="0" y2="1">
                <stop class="stop1" offset="0%" style="stop-color:hsla(${category.hue}, 80%, 20%, 0.2)"/>
                <stop class="stop3" offset="100%" style="stop-color:hsla(${category.hue}, 80%, 20%, 0)"/>
            </linearGradient>
        </defs>
        <path style="fill:none;stroke-width:2px;stroke:hsl(${category.hue}, 80%, 20%)" d="${path}"/>
        <path style="fill:url(#gradient-${category.hue})" d="${path}L${chartSize.x} ${chartSize.y}L0 ${chartSize.y}Z"/>
    </svg>`;
}

function describeData(data) {
    var lastExplainedIndex = 0, explained = 0, lastDelta = null;

    var explaination = `A line graph, starting at ${describePercentInGraph(data[0])}`;

    for(var i = 1; i < data.length; i++) {
        var delta = data[i] - data[lastExplainedIndex];
        if(Math.abs(delta) > 0.1) {
            lastExplainedIndex = i;
            explained++;

            var lastDeltaIsSameDirection = lastDelta !== null && (delta > 0) == (lastDelta > 0)

            explaination += ", "
                + (delta>0?"growing":"dropping")
                + ((delta < 0.2 && data[i] != 0) ? 
                    " a bit" +
                    (lastDeltaIsSameDirection ? " more" : "")
                : 
                    " to " 
                    + describePercentInGraph(data[i]))
                + " "
                + describeXCoordInGraph(i + 0.5, data.length);

            lastDelta = delta;
        }
        
    }

    var lastIdx = explaination.lastIndexOf(", ");

    if(explained > 0) explaination = explaination.substring(0, lastIdx) 
        + (explained < 2 ? " and " : ", and ") 
        + explaination.substring(lastIdx + 2);
    else explaination += " and staying there until the end"

    return explaination;
}

function describeXCoordInGraph(xCoord, width) {
    var quantitized = Math.floor(xCoord / width * 10);

    return {
        0: "at the start",
        1: "close to the start",
        2: "around one-fourth from the start",
        3: "around one-third from the start",
        4: "a little under halfway",
        5: "halfway along the graph",
        6: "a little over halfway",
        7: "around one-third from the end",
        8: "around one-fourth from the end",
        9: "close to the end",
        10: "at the end"
    }[quantitized];
}

function describePercentInGraph(pc) {
    var quantitized = Math.floor(pc * 10);

    return {
        0: "the bottom",
        1: "close to the bottom",
        2: "around one-fourth from the bottom",
        3: "around one-third from the bottom",
        4: "a little under half",
        5: "halfway up",
        6: "a little over half",
        7: "around one-third from the top",
        8: "around one-fourth from the top",
        9: "close to the top",
        10: "the top"
    }[quantitized];
}

function calculateSparklinePoint(game, day, chartSize) {
    var numGamesPlayed = 0;

    for (var i = 0; i < jackboxGameHistory.length; i++) {
        var gameDayNum = getDayNum(new Date(jackboxGameHistory[i].date));

        //stop scanning if we've finished with all the relevant data
        if (gameDayNum > day) continue;

        //if it's too far *ago*, then there still might be relevant data later on. only skip this one.
        if (gameDayNum < day - chartSize.xScale) continue;

        if (jackboxGameHistory[i].game == (game.jackboxPastGameTypeId || game.title)) numGamesPlayed++;
    }

    var effectiveHeight = chartSize.y - chartSize.yMargin * 2;

    return Math.max(0, (effectiveHeight - numGamesPlayed / chartSize.sparklineHeight * effectiveHeight)) + chartSize.yMargin;
}

function getDayNum(date) {
    return Math.ceil((date.getTime() / 1000 / 60 - date.getTimezoneOffset()) / 60 / 24);
}
