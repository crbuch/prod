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