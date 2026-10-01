# Sine wave path generator: a JavaScript helper

A small function that writes the `d` attribute of an SVG `<path>` for a sine wave whose phase, amplitude and
cycle width you set. Call it again whenever an input changes and the wave redraws. It was first written for a
VOR phase picture (the reference and variable 30 Hz signals sliding against each other) and works for any AC
page: a voltage wave, a current wave that leads or lags it, a wave whose frequency the student changes.

This is not an SVG file. Paste the function into the page that uses it. For one fixed wave, use
`sine-wave-static.svg` in this folder instead.

## Three rules before you use it

1. **Color by quantity.** A voltage wave is violet `#b48cff`, a current wave is cyan `#39d7ff`. Never a decorative
   color, and two waves on one figure each get a word label as well as a color.
2. **Start only when the page shows.** In a paged lesson, start any animation on the page's `lp:enter` event and
   stop it on `lp:leave`, so a wave on page 6 is not running while the student reads page 2.
3. **Honor reduced motion.** When `prefers-reduced-motion: reduce` is set, draw the wave once in its final state
   and let the student step it with buttons or a slider instead of animating it.

## The function

```javascript
/**
 * Generate the `d` attribute for an SVG <path> that draws a sine wave.
 *
 * @param {number} phaseShiftDeg  Phase offset in degrees. Positive shifts the wave left
 *                                (it leads); negative shifts it right (it lags).
 * @param {number} amplitude      Peak distance from the zero line, in user units.
 * @param {Object} [opts]
 * @param {number} [opts.cycleWidth=90]  User units for one full cycle.
 * @param {number} [opts.baseline=55]    Y coordinate of the zero line.
 * @param {number} [opts.xStart=-30]     Where the path starts.
 * @param {number} [opts.xEnd=400]       Where the path ends.
 * @param {number} [opts.step=2]         Spacing between sample points (smaller is smoother).
 * @returns {string}  The SVG path `d` attribute.
 */
function generateSinePath(phaseShiftDeg, amplitude, opts = {}) {
  const cycleWidth = opts.cycleWidth ?? 90;
  const baseline   = opts.baseline   ?? 55;
  const xStart     = opts.xStart     ?? -30;
  const xEnd       = opts.xEnd       ?? 400;
  const step       = opts.step       ?? 2;
  const phaseShiftPx = (phaseShiftDeg / 360) * cycleWidth;
  let d = '';
  for (let x = xStart; x <= xEnd; x += step) {
    const t = (x + phaseShiftPx) / cycleWidth * 2 * Math.PI;
    const y = baseline - amplitude * Math.sin(t);
    d += (x === xStart ? 'M ' : 'L ') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
  }
  return d;
}
```

## How to use it

Declare the path in the figure, colored by what it shows:

```html
<svg class="fig-svg" viewBox="0 0 400 110" role="img" aria-label="Voltage wave">
  <path id="voltWave" fill="none" stroke="#b48cff" stroke-width="3"/>
</svg>
```

Draw it:

```javascript
const wave = document.getElementById('voltWave');
wave.setAttribute('d', generateSinePath(/* phase */ 45, /* amplitude */ 28));
```

Tie it to a slider so the phase follows the student's input:

```javascript
const slider = document.getElementById('bearingSlider');
slider.addEventListener('input', () => {
  const b = parseFloat(slider.value);
  wave.setAttribute('d', generateSinePath(-b, 28));  // -b makes a lag move visibly to the right
});
```

## Conventions

**Phase sign.** A positive `phaseShiftDeg` shifts the wave left (it leads in time). A negative value shifts it right
(it lags). For a "variable lags reference by the bearing" picture, pass `-bearing` so a larger bearing moves the
wave further right.

**Cycle width.** Pick `cycleWidth` for the number of cycles you want visible. The default 90 units per cycle shows
about 4 cycles in a 400 unit wide figure.

**Smoothness.** A `step` of 2 units draws a clean curve in a figure about 400 units wide. Use 1 for extra
smoothness, or 3 to 4 for fast redraws on slow phones.

**Line weight.** At least 3 units in a 400 unit wide figure, so the wave is about 2.7 px on a phone.

## When to use this or the static wave

| You want | Use |
|---|---|
| One fixed wave in a teaching figure | `sine-wave-static.svg` |
| A wave whose phase, amplitude or frequency follows a control | this generator |
| Two waves with a visible phase relationship (voltage and current, or VOR reference and variable) | this generator, called twice in the same update |
| A wave that scrolls across a scope screen | this generator with a `requestAnimationFrame` loop, started on `lp:enter` and stopped on `lp:leave`, or a CSS `@keyframes` translation of a wrapping `<g>` |

See also `../../../media-motion/animation.md` (the sine wave building recipe and the motion rules) and
`../../../media-motion/simulations.md` (when the student should drive it).
