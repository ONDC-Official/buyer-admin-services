import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactEcharts from "echarts-for-react";
import { formatBarChartTooltip } from "./utility";
export default class StackedLine extends Component {
  getOption = () => {
    let options = {
      title: {
        text: this.props.title,
        // left: "center",
      },
      tooltip: {
        trigger: 'axis',
        // axisPointer: {
        //   type: 'shadow'
        // },
        // appendToBody: true,
        // formatter: this?.props?.tooltipFormatter || null
      },
      legend: {
        data: this.props.legend,
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '60rem',
        bottom: '3%',
        containLabel: true
      },
      xAxis: this.props.xAxis,
      yAxis: this.props.yAxis,
      series: this.props.series
    };

    return options
  };

  onChartClick = (params) => {
    console.log(params)
    if (this.props?.onChartClick) {
      this.props?.onChartClick(params)
    }
  }

  render() {
    console.log(this.props);
    return (
      <ReactEcharts
        option={this.getOption()}
        style={{ height: this.props.height, width: this.props.width }}
        opts={{ renderer: "svg" }}
        showLoading={this.props.loading}
        className={this.props.className}
      />
    );
  }
}
