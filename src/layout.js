export const makeData = (x, y, name, type, color, dash, text) => ({
    x,
    y,
    text,
    name,
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

export const createFaultLayout = (x, y, z) => ({
    opacity: 0.8,
    mode: "lines",
    line: {
        width: 6,
        color: "#39e75f",
    },
    type: "scatter3d",

    x: x,
    y: y,
    z: z,
});

export const layoutWbd = (scale,max,min,minTVD,wellName) => ({
    width: 1620,
    height: 780,

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
            range: [min - scale, max + scale],
            gridcolor: "#8a8a8a",
            tickcolor: "#050505",
            backgroundcolor: "#ededed",
            showbackground: true,
        },
        yaxis: {
            title: "Northing",
            nticks: 8,
            range: [min - scale, max + scale],
            gridcolor: "#8a8a8a",
            tickcolor: "#050505",
            backgroundcolor: "#f0f1f2",
            showbackground: true,
        },
        zaxis: {
            title: "TVD",
            nticks: 5,
            range: [minTVD - scale * 0.5, -3000],
            gridcolor: "#8a8a8a",
            tickcolor: "#050505",
            backgroundcolor: "#ededed",
            showbackground: true,
        },
    },
});