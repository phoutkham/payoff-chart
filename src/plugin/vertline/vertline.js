function centreOffset(lineBitmapWidth) {
  return Math.floor(lineBitmapWidth * 0.5);
}

function positionsLine(
  positionMedia,
  pixelRatio,
  desiredWidthMedia,
  widthIsBitmap
) {
  const scaledPosition = Math.round(pixelRatio * positionMedia);
  const lineBitmapWidth = widthIsBitmap
    ? desiredWidthMedia
    : Math.round(desiredWidthMedia * pixelRatio);
  const offset = centreOffset(lineBitmapWidth);
  const position = scaledPosition - offset;
  return { position, length: lineBitmapWidth };
}

class VertLinePaneRenderer {
  constructor(x, options, y) {
    this._x = x;
    this._y = y;
    this._options = options;
  }

  draw(target) {
    target.useBitmapCoordinateSpace(scope => {
      if (this._x === null) return;
      const ctx = scope.context;
      const position = positionsLine(
        this._x,
        scope.horizontalPixelRatio,
        this._options.width
      );
      const positionY = positionsLine(
        this._y,
        scope.verticalPixelRatio,
        this._options.width
      );

      ctx.fillStyle = this._options.color;

      ctx.beginPath();
      ctx.setLineDash([
        4 * scope.verticalPixelRatio,
        2 * scope.verticalPixelRatio,
      ]);
      ctx.moveTo(position.position, 0);
      ctx.lineTo(position.position, scope.bitmapSize.height);
      ctx.strokeStyle = this._options.color;
      ctx.lineWidth = 2;
      ctx.stroke();

      this._drawTextLabel(scope, this._options.labelText, position.position, positionY.position, this._options);

    });
  }

  _drawTextLabel(scope, text, x, y, options) {
    scope.context.font = '24px Arial';
    scope.context.beginPath();


    const offset = 5 * scope.horizontalPixelRatio;
    const textWidth = scope.context.measureText(text);
    const leftAdjustment = options.left ? textWidth.width + offset * 4 : 0;


    if(this._options.labelBackgroundColor) {
      scope.context.fillStyle = this._options.labelBackgroundColor;
      scope.context.roundRect(x + offset - leftAdjustment, y - 24, textWidth.width + offset * 2,  24 + offset, 5);
      scope.context.fill();
    }

    scope.context.beginPath();
    scope.context.fillStyle = options.labelTextColor;
    scope.context.fillText(text, x + offset * 2 - leftAdjustment, y);
  }
}

class VertLinePaneView {
  constructor(source, options) {
    this._source = source;
    this._options = options;
  }
  update() {
    const series = this._source._series;
    const timeScale = this._source._chart.timeScale();
    this._y = series.priceToCoordinate(this._source._value);
    this._x = timeScale.timeToCoordinate(this._source._time);
  }
  renderer() {
    return new VertLinePaneRenderer(this._x, this._options, this._y);
  }
}

const defaultOptions = {
  color: '#777',
  labelText: '',
  width: 2,
  labelTextColor: 'white',
  showLabel: false,
};

export class VertLine {
  constructor(
    chart,
    series,
    time,
    value,
    options
  ) {
    const vertLineOptions = {
      ...defaultOptions,
      ...options,
    };
    this._chart = chart;
    this._series = series;
    this._time = time;
    this._value = value;
    this._paneViews = [new VertLinePaneView(this, vertLineOptions)];
    this._timeAxisViews = [new VertLineTimeAxisView(this, vertLineOptions)];
  }
  updateAllViews() {
    this._paneViews.forEach(pw => pw.update());
    this._timeAxisViews.forEach(tw => tw.update());
  }
  timeAxisViews() {
    return this._timeAxisViews;
  }
  paneViews() {
    return this._paneViews;
  }}

class VertLineTimeAxisView {
  constructor(source, options) {
    this._source = source;
    this._options = options;
  }
  update() {
    const timeScale = this._source._chart.timeScale();
    this._x = timeScale.timeToCoordinate(this._source._time);
  }
  visible() {
    return this._options.showLabel;
  }
  tickVisible() {
    return this._options.showLabel;
  }
  coordinate() {
    return this._x ?? 0;
  }
  text() {
    return this._options.labelText;
  }
  textColor() {
    return this._options.labelTextColor;
  }
  backColor() {
    return this._options.labelBackgroundColor;
  }
}