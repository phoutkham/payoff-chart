export class Tooltip {
  constructor(chartContainer) {
    this.toolTipMargin = 20;
    this.chartContainer = chartContainer;

    this.toolTipElement = document.createElement('div');
    this.toolTipElement.classList.add('payoff-tooltip');

    this.toolTipElement.style.cssText = `
          width: 140px;
          position: absolute;
          display: none;
          padding: 8px;
          color: #555555;
          box-sizing: border-box;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
          font-size: 12px;
          text-align: left;
          line-height: 20px;
          z-index: 1000;
          top: 0px;
          left: 0px;
          pointer-events: none;
          border-radius: 5px;
          font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #fff;`;

    this.chartContainer.appendChild(this.toolTipElement);

  }

  update(param, expiryPriceLine, todayPriceLine) {
    if (
      param.point === undefined ||
      !param.time ||
      param.point.x < 0 ||
      param.point.x > this.chartContainer.clientWidth ||
      param.point.y < 0 ||
      param.point.y > this.chartContainer.clientHeight
    ) {
      this.toolTipElement.style.display = 'none';
    } else {

      const expiryPriceData = param.seriesData.get(expiryPriceLine);
      const todayPriceData = param.seriesData.get(todayPriceLine);

      if(expiryPriceData === undefined && todayPriceData === undefined) return;

      const dateStr = new Date(param.time).getTime();
      this.toolTipElement.style.display = 'block';


      const expiryPrice = (expiryPriceData?.value !== undefined) ? expiryPriceData.value : NaN;
      const todayPrice = (todayPriceData?.value !== undefined) ? todayPriceData.value : NaN;

      const expiryPriceElement = isNaN(expiryPrice) ? '' : `<br/><span style="float: left">Expiry:</span><span style="float: right; color: ${expiryPrice > 0 ? 'green' : 'red'}">${expiryPrice.toLocaleString()}</span>`;
      const todayPriceElement = isNaN(todayPrice) ? '' : `<br/><span style="float: left">Today:</span><span style="float: right; color: ${todayPrice > 0 ? 'green' : 'red'}">${todayPrice.toLocaleString()}</span>`;

      this.toolTipElement.innerHTML = `
          <span style="float: left">Price:</span>
          <span style="float: right">${dateStr.toLocaleString()}</span>
          ${expiryPriceElement}
          ${todayPriceElement}
      `;

      const y = param.point.y;
      let left = param.point.x + this.toolTipMargin;

      const toolTipWidth = this.toolTipElement.clientWidth;
      const toolTipHeight = this.toolTipElement.clientHeight;

      if (left > this.chartContainer.clientWidth -  toolTipWidth) {
        left = param.point.x -  this.toolTipMargin -  toolTipWidth;
      }

      let top = y +  this.toolTipMargin;

      if (top > this.chartContainer.clientHeight -  toolTipHeight) {
        top = y -  toolTipHeight -  this.toolTipMargin;
      }

      this.toolTipElement.style.left = left + 'px';
      this.toolTipElement.style.top = top + 'px';
    }
  }
}