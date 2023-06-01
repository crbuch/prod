export const makeTrace = (x, y, name, type, color, dash, text, visible) => ({
    x,
    y,
    text,
    name,
    visible,
    type: type || "line",
    line: {
        color,
        dash,
    },
});

export const makeLayout = (title, type, tickvals) => ({
    title,
    yaxis: {
        type: type || "linear",
        rangemode: "tozero",
        autorange: true,
        tickformat: "f",
        tickvals,
        gridcolor: "#dbdbdb",
    },
    xaxis: {
        gridcolor: "#dbdbdb",
    },
});

export const config = {
    modeBarButtonsToRemove: [
        "sendDataToCloud",
        "autoScale2d",
        "hoverClosestCartesian",
        "hoverCompareCartesian",
        "lasso2d",
        "zoomIn2d",
        "zoomOut2d",
        "toggleSpikelines",
    ],
    displaylogo: false,
    responsive: true,
};

export const layoutWbd = (max,min,minTVD,wellName) => ({
    width: 1620,
    height: 700,

    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0,
    },

    title: {
        text: "Drilling for " + wellName + ", Dimmit County, TX",
        y: 0.98,
    },

    legend: {
        x: 0.8,
        y: 0.8,
    },
    scene: {
        aspectmode: "cube",
        xaxis: {
            title: "Easting",
            nticks: 8,
            range: [max, min],
            gridcolor: "#8a8a8a",
            tickcolor: "#050505",
            backgroundcolor: "#ededed",
            showbackground: true,
        },
        yaxis: {
            title: "Northing",
            nticks: 8,
            range: [max, min],
            gridcolor: "#8a8a8a",
            tickcolor: "#050505",
            backgroundcolor: "#f0f1f2",
            showbackground: true,

        },
        zaxis: {
            title: "TVD",
            nticks: 5,
            range: [minTVD, -3000],
            gridcolor: "#8a8a8a",
            tickcolor: "#050505",
            backgroundcolor: "#ededed",
            showbackground: true,
        },
    },
    
});