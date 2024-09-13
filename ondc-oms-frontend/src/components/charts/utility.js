const renderRight = (val) => `<div style="float: right">${val}</div>`;

const truncateDecimal = (number) => {
    return Math.trunc(number*100)/100
}

export const formatStackedChartTooltip = (params) => {
    let toolTip = `${params[0].axisValue}`
    params.forEach(param => {
        toolTip += `<br/> ${param.marker} ${param.seriesName}: ${renderRight(truncateDecimal(param.value) + "%")}`});
    return toolTip;
}

export const formatPieChartTooltip = (params) => {
    return `${params.seriesName}<br/>
            ${params.marker} ${params.name}: ${renderRight(truncateDecimal(params.value) + "%")}`;
}

export const formatBarChartTooltip = (params) => {
    return `${params[0].marker} ${params[0].name}: ${truncateDecimal(params[0].value)}%`;
}


export const formatAssessmentChartTooltip = (params, stateOptionsScores) => {
    const score = stateOptionsScores[params[0].name][params[0].seriesName]
    let toolTip = `${params[0].axisValue} ${renderRight(score)}`
    params.forEach(param => {
        toolTip += `<br/> ${param.marker} ${param.seriesName}: ${renderRight(truncateDecimal(param.value) + "%")}`});
    return toolTip;
}

export const formatGeoMapToolTip = (params, chartType) => {
    return params.value ? `${params.name}<br/> ${chartType}: ${params.value}`: "";
}
