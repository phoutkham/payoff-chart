## 📈 Payoff Chart - Option Chart

A lightweight and interactive JavaScript library to visualize option payoff diagrams based on TradingView's powerful Lightweight Charts. Perfect for traders, educators, and developers building financial tools or option strategy visualizations.

[Demo Light Version](https://phoutkham.github.io/payoff-chart/example_light.html)

[Demo Dark Version](https://phoutkham.github.io/payoff-chart/example_dark.html)

### 🚀 Features

* ⚡ Based on TradingView’s ultra-fast Lightweight Charts

* 🎨 Customizable colors, breakeven lines, and PnL zones

* 📱 Works in all modern browsers

* 🛠️ Easy integration with any JavaScript/ES6 project

## 📦 Installation

```bash
  npm install payoff-chart
```

Or via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/payoff-chart@1.0.5/dist/payoff-chart.js"></script>

<script>
  
  const payoffchart = new Payoffchart('payoff-chart', { width: 400, height: 300 });

</script>
```

es6 module.

```html
<script type="module">
  
  import Payoffchart from "https://cdn.jsdelivr.net/npm/payoff-chart@1.0.5/dist/payoff-chart.esm.js";

  const payoffchart = new Payoffchart('payoff-chart', { width: 400, height: 300 });
  
</script>
```

### Installation for React-App.

```bash
  npm install payoff-chart
```

```js
import { useEffect } from 'react';
import Payoffchart from 'payoff-chart';

function App() {

  useEffect(() => {
    
    const payoffchart = new Payoffchart('payoff-chart', { width: 400, height: 300 });
    
    payoffchart.setExpiryPriceLine([
      { strike: 100, value: 1 },
      { strike: 110, value: 1 },
      { strike: 120, value: -1 }
    ]);
    
  }, []);

  return (
    <div id="payoff-chart"></div>
  );
}

export default App;
```

## 🛠️ Usage.

To create a basic payoff chart.

```js
import Payoffchart from 'payoff-chart';

const payoffchart = new Payoffchart('payoff-chart', { width: 400, height: 300 });

payoffchart.setExpiryPriceLine([
  { strike: 100, value: 1 },
  { strike: 110, value: 1 },
  { strike: 120, value: -1 }
]);

payoffchart.setTodayPriceLine([
  { strike: 100, value: 1 },
  { strike: 120, value: -1 },
]);

/* adding the vertical line */
payoffchart.addVertLine({
  strike: 110,
  value: 1,
  options: {
    labelText: 'Break Event',
    color: '#777',
    labelTextColor: '#777'
  }
});
```

To add or remove the vertical line.

```js
/* adding the vertical line */
const breakEventLine = payoffchart.addVertLine({
  strike: 110,
  value: 1,
  options: {
    labelText: 'Break Event',
    color: '#777',
    labelTextColor: '#777'
  }
});

/* removing the vertical line */
payoffchart.removeVertLine(breakEventLine);
```

## 🎨 Customization.
You can use the Lightweight Charts API directly. [Lightweight Charts Documentation](https://tradingview.github.io/lightweight-charts/)

Example: Change the background color and grid line color.

```js
  payoffchart.chart.applyOptions({
    layout: {
      background: { color: "#000" },
      textColor: "#fff",
      fontSize: 12,
      //fontFamily: 'your font here'
    },
    grid: {
      vertLines: { color: "#555" },
      horzLines: { color: "#555" },
    }
  })
```

Example: Change the expiry price line color and width.

```js
  payoffchart.expiryPriceLine.applyOptions({
    lineWidth: 4,
    topLineColor: 'rgb(0,53,255)',
    topFillColor1: 'rgba( 0, 0, 0, 0)',
    topFillColor2: 'rgba( 0, 0, 0, 0)',
    bottomLineColor: 'rgb(210,0,255)',
    bottomFillColor1: 'rgba( 0, 0, 0, 0)',
    bottomFillColor2: 'rgba( 0, 0, 0, 0)',
  })
```

Example: Change the today price line color and width.

```js
  payoffchart.todayPriceLine.applyOptions({
    lineWidth: 4,
    topLineColor: 'rgb(255,130, 0)',
    topFillColor1: 'rgba( 0, 0, 0, 0)',
    topFillColor2: 'rgba( 0, 0, 0, 0)',
    bottomLineColor: 'rgb(255,130, 0)',
    bottomFillColor1: 'rgba( 0, 0, 0, 0)',
    bottomFillColor2: 'rgba( 0, 0, 0, 0)',
  })
```