export const makeTrace = (x, y, name, type="lines", color, text, visible=true, dash) => ({
    x,
    y,
    text,
    name,
    visible,
    line: {
        color,
        dash
    },
    mode: type
});

export const makeLayout = (title, type, tickvals, ytitle, xtitle) => ({
    title,
    height: null,
    legend: {
        orientation: "h",
            y: 1.1,
            xanchor: "center",
            x: .5,
    },
    yaxis: {
        title: ytitle,
        type: type || "linear",
        rangemode: "tozero",
        autorange: true,
        tickformat: "f",
        tickvals,
        gridcolor: "#dbdbdb",
    },
    xaxis: {
        title: xtitle,
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
    displayModeBar: false,
    responsiveConfig: [
        {
        // Mobile devices with width less than or equal to 768px
        breakpoint: 768,
        options: {
            legend: { orientation: 'h', y: -0.2 }
        }
        },
        {
        // Desktop devices with width greater than 768px
        breakpoint: 0,
        options: {
            legend: { orientation: 'v', y: 1 }
        }
        }
    ]
};

export const layoutWbd = (max,min,minTVD,maxTVD,wellName) => ({
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
            range: [minTVD, maxTVD],
            gridcolor: "#8a8a8a",
            tickcolor: "#050505",
            backgroundcolor: "#ededed",
            showbackground: true,
        },
    },
    
});