import {createOptionsChart as createChart, BaselineSeries, LineStyle } from 'lightweight-charts';
import {VertLine} from "./plugin/vertline/vertline.js";
import {Tooltip} from "./plugin/tooltip/tooltip.js";

const defaultOptions = {
  rightPriceScale: {
    visible: false
  },
  leftPriceScale: {
    visible: true,
    borderVisible: false
  },
  timeScale: {
    borderVisible: false,
    textColor: '#ddd'
  },
  crosshair: {
    mode: 0,
  }
}

export default class Payoffchart {
  constructor(elementId, chartOptions) {
    this.chartContainer = document.getElementById(elementId);
    this.chartContainer.innerHTML = '';
    this.chartContainer.style.position = 'relative';

    const options = {...defaultOptions, ...chartOptions};

    this.chart = createChart(this.chartContainer, options);

    this.expiryPriceLine = this.chart.addSeries(BaselineSeries, {
      baseValue: {type: 'price', price: 0},
      lineWidth: 2,
      //lineStyle: LineStyle.Dashed,
      topLineColor: 'rgba( 38, 166, 154, 1)',
      topFillColor1: 'rgba( 38, 166, 154, 0.2)',
      topFillColor2: 'rgba( 38, 166, 154, 0.2)',
      bottomLineColor: 'rgba( 239, 83, 80, 1)',
      bottomFillColor1: 'rgba( 239, 83, 80, 0.2)',
      bottomFillColor2: 'rgba( 239, 83, 80, 0.2)',
      lastValueVisible: false, // Show last value on scale
      priceLineVisible: false, // Hide default price line
    });

    this.todayPriceLine = this.chart.addSeries(BaselineSeries, {
      baseValue: {type: 'price', price: 0},
      lineWidth: 2,
      lineStyle: LineStyle.Dashed,
      topLineColor: 'rgba( 38, 166, 154, 1)',
      topFillColor1: 'rgba( 38, 166, 154, 0)',
      topFillColor2: 'rgba( 38, 166, 154, 0)',
      bottomLineColor: 'rgba( 239, 83, 80, 1)',
      bottomFillColor1: 'rgba( 239, 83, 80, 0)',
      bottomFillColor2: 'rgba( 239, 83, 80, 0)',
      lastValueVisible: false, // Show last value on scale
      priceLineVisible: false, // Hide default price line
    });

    /* hide trading-view logo */
    document.getElementById('tv-attr-logo').style.display = 'none';

    this.tooltip = new Tooltip(this.chartContainer, this.expiryPriceLine);

    this.chart.subscribeCrosshairMove(param => {
      this.tooltip.update(param, this.expiryPriceLine, this.todayPriceLine);
    });

  }

  setExpiryPriceLine(data) {
    const converted = data.map(({ strike, value }) => { return { time: strike, value }});

    this.expiryPriceLine.setData(converted);

    this.expiryPriceLine.priceScale().applyOptions({
      autoScale: true,
    });

    this.chart.timeScale().fitContent();
  }

  setTodayPriceLine(data) {
    const converted = data.map(({ strike, value }) => { return { time: strike, value }});

    this.todayPriceLine.setData(converted);

    this.todayPriceLine.priceScale().applyOptions({
      autoScale: true,
    });

    this.chart.timeScale().fitContent();
  }

  addVertLine({strikePrice, value, options}) {

    const vertLine = new VertLine(this.chart, this.expiryPriceLine, strikePrice, value, options);

    this.expiryPriceLine.attachPrimitive(vertLine);

    return vertLine;
  }

  removeVertLine(primitive) {
    this.expiryPriceLine.detachPrimitive(primitive);
  }
}
