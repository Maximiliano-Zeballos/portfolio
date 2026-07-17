# Portfolio

My personal portfolio. Static site with a three.js background scene, no framework, no build step.

Live: https://maximiliano-zeballos.github.io/portfolio/

## Run locally

Any static server works:

```
python -m http.server 8765
```

Then open http://localhost:8765.

## Structure

- `index.html`: markup and meta
- `styles.css`: all styling
- `main.js`: language toggle (ES/EN) and scroll reveal
- `scene.js`: three.js scene wrapped in a `<crystal-scene>` web component
