# UltraLoad.js - Universal Preloader Library

![UltraLoad.js Logo](https://via.placeholder.com/150x50?text=UltraLoad.js)

UltraLoad.js is a lightweight, highly customizable preloader library with 50+ built-in loading animations and 30+ text animations. Perfect for modern web applications, SPAs, and static websites.

## Features ✨

- 50+ unique loading animations (spinners, progress indicators, etc.)
- 30+ text animation effects
- Lottie animations support
- Custom logo integration
- Progress bar with percentage
- Multiple themes (light, dark, glass, etc.)
- Fully accessible (ARIA support)
- Framework agnostic (works with React, Vue, Angular, or vanilla JS)
- Responsive design
- Lightweight (~10KB gzipped)
- Easy to customize with CSS variables

## Installation 📦

### Via NPM
```bash
npm install ultraload-js
```
### Via CDN (Easiest)

```html
<!-- In your HTML <head> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ultraload-js/dist/ultraload.min.css">

<!-- Just before </body> -->
<script src="https://cdn.jsdelivr.net/npm/ultraload-js/dist/ultraload.umd.min.js"></script>
```
## Basic Usage 🚀

### Simple Alert
```html
 <div
      data-loader="ultraload"
      data-config='{
        "iconType": "zigzag-circle"
    }'
    ></div>
```
### Custom Alert with Options

```html
   <div id="ultraload" ></div>
```

```js
// Initialize with default settings
UltraLoad.init();

// Or with custom configuration
UltraLoad.init({
  iconType: 'wave',
  text: 'Loading...',
  textAnimation: 'fadeInUp',
  progressBar: true,
  duration: 5000,
  theme: 'dark'
});
```
---

## UltraLoad – Configuration Options ⚙️

| Option               | Type                  | Default               | Description                                                                 |
|----------------------|-----------------------|------------------------|-----------------------------------------------------------------------------|
| `target`             | `string` / `HTMLElement` | `#ultraload`       | Target element selector or DOM node                                         |
| `text`               | `string`               | `''`                   | Loading text to display                                                     |
| `iconType`           | `string`               | `'default'`            | Type of loading icon (see available types below)                            |
| `textAnimation`      | `string` / `boolean`   | `false`                | Text animation type (see available animations below)                        |
| `progressBar`        | `boolean`              | `false`                | Show progress bar                                                           |
| `progressPercentage` | `boolean`              | `false`                | Show progress percentage                                                    |
| `duration`           | `number`               | `3000`                 | Auto-hide duration in milliseconds                                          |
| `theme`              | `string`               | `'light'`              | Preloader theme (`light`, `dark`, `dark-blur`, `glass-dark`)                |
| `autoHide`           | `boolean`              | `true`                 | Auto-hide after duration                                                    |
| `onComplete`         | `function` / `string`  | `null`                 | Callback when loader hides                                                  |
| `lottieUrl`          | `string`               | `null`                 | URL to Lottie JSON animation                                                |
| `logoUrl`            | `string`               | `null`                 | URL to logo image                                                           |
| `ariaLabel`          | `string`               | `'Loading content'`    | ARIA label for accessibility                                                |
| `ariaLive`           | `string`               | `'polite'`             | ARIA live region politeness (`off`, `polite`, `assertive`)                  |
| `skipLink`           | `boolean`              | `false`                | Add skip link for accessibility                                             |                                       

---

##  Available Icon Types 🎨

| Icon Type         | Description                     |
|-------------------|----------------------------------|
| `default`         | Simple spinner                  |
| `dots-circle`     | Circle of pulsing dots          |
| `wave`            | Wave animation                  |
| `cube-grid`       | 3x3 grid of cubes               |
| `ring`            | Rotating ring                   |
| `bar-jump`        | Jumping bars                    |
| `circle-bounce`   | Bouncing circles                |
| `dual-ring`       | Dual rotating rings             |
| `folding-cube`    | Folding cube animation          |
| `chase`           | Chasing dots                    |
| `circle-dots`     | Rotating circle dots            |
| `ellipsis`        | Dot ellipsis                    |
| `grid`            | Scaling grid                    |
| `hourglass`       | Hourglass animation             |
| `jelly-box`       | Jelly box effect                |
| `orbit`           | Orbiting dot                    |
| `pacman`          | Pacman animation                |
| `pulsar`          | Pulsing effect                  |
| `ripple`          | Ripple effect                   |
| `roller`          | Rolling dots                    |
| `spinner`         | Classic spinner                 |
| `square-spin`     | Spinning square                 |
| `swirl`           | Swirling effect                 |
| `timer`           | Timer animation                 |
| `wobble`          | Wobble effect                   |
| `zigzag`          | Zigzag pattern                  |
| `atom`            | Atom animation                  |
| `infinity`        | Infinity symbol                 |
| `metronome`       | Metronome effect                |
| `moon`            | Moon phases                     |
| `newton-cradle`   | Newton's cradle                 |
| `pinwheel`        | Pinwheel animation              |
| `radar`           | Radar sweep                     |
| `revolving-dot`   | Revolving dots                  |
| `scaling-squares` | Scaling squares                 |
| `semi-circle`     | Semi-circle rotation            |
| `spinning-circles`| Spinning circles                |
| `spring`          | Spring animation                |
| `stretch`         | Stretching effect               |
| `trefoil`         | Trefoil knot                    |
| `twin-circles`    | Twin circles                    |
| `vortex`          | Vortex effect                   |
| `whirl`           | Whirling animation              |
| `windmill`        | Windmill blades                 |
| `yin-yang`        | Yin yang symbol                 |
| `zigzag-circle`   | Zigzag circle                   |
| `dna`             | DNA helix                       |
| `ferris-wheel`    | Ferris wheel                    |
| `galaxy`          | Galaxy animation                |
| `hyperspace`      | Hyperspace effect               |
| `quantum`         | Quantum dots                    |

---

## ✨ Text Animation Types

- `typing` – Typing effect
- `fadeIn` – Simple fade in
- `fadeInUp` – Fade in from bottom
- `bounceIn` – Bounce effect
- `rubberBand` – Rubber band stretch
- `wave` – Wave effect on each character
- `glitch` – Glitch effect
- `neon` – Neon glow
- `shadow-dance` – Dancing shadows
- `dropping` – Dropping words
- `zoomIn` – Zoom in effect
- `flipInX` – 3D flip on X-axis
- `rotateIn` – Rotation effect
- `slideInDown` – Slide down effect
- `pulse` – Pulsing effect
- `shake` – Shaking effect
- `jello` – Jello wobble
- `lightSpeedIn` – Light speed entrance

---
## 🛠️ API Methods

### `UltraLoad.init(config)`
Initialize the loader with custom configuration.

```js
UltraLoad.init({
  target: "#ultraload",
  text: "Loading...",
  iconType: "wave",
  progressBar: true,
  duration: 4000
});
```

### `UltraLoad.show(target)`
Show the loader.  
**Parameters**:
- `target` *(optional)* – DOM selector or element. Default is `#ultraload`.

```js
UltraLoad.show(); // shows the default loader
```

### `UltraLoad.hide(target, callback)`
Hide the loader.  
**Parameters**:
- `target` *(optional)* – DOM selector or element.
- `callback` *(optional)* – Function or string to execute after hide.

```js
UltraLoad.hide("#my-loader", () => console.log("Loader hidden"));
```

### `UltraLoad.setProgress(percent, target)`
Set the loading progress percentage (0–100).  
**Parameters**:
- `percent` *(required)* – Number between 0 and 100.
- `target` *(optional)* – Loader target.

```js
UltraLoad.setProgress(75);
```

### `UltraLoad.setText(text, target)`
Update the loading text.  
**Parameters**:
- `text` *(required)* – New loading text.
- `target` *(optional)* – Loader target.

```js
UltraLoad.setText("Almost done...");
```

### `UltraLoad.setAriaLabel(label, target)`
Update the ARIA label for accessibility.  
**Parameters**:
- `label` *(required)* – ARIA label text.
- `target` *(optional)* – Loader target.

```js
UltraLoad.setAriaLabel("Please wait, loading...");
```

---

## Framework Integration 🔌

### React
```jsx
import { UltraLoad } from 'ultraload-js';

function App() {
  return <div id="ultraload" />;
}

// Initialize in useEffect
useEffect(() => {
  UltraLoad.init({
    iconType: 'atom',
    text: 'Loading React App...'
  });
}, []);
```

### Vue
```js
import { UltraLoad } from 'ultraload-js';

export default {
  mounted() {
    UltraLoad.init({
      target: this.$refs.loader,
      iconType: 'orbit'
    });
  }
}
```

### Angular

```ts
import { Component, AfterViewInit } from '@angular/core';
import { UltraLoad } from 'ultraload-js';

@Component({
  selector: 'app-root',
  template: '<div #loader></div>'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('loader') loader: ElementRef;

  ngAfterViewInit() {
    UltraLoad.init({
      target: this.loader.nativeElement,
      theme: 'dark-blur'
    });
  }
}
```

---

## Customization 🎨

- You can customize the loader using CSS variables:
```css
:root {
  --ultraload-bg: rgba(255, 255, 255, 0.9);
  --ultraload-text-color: #333;
  --ultraload-primary: rgba(0, 0, 0, 0.1);
  --ultraload-accent: #00d4ff;
  --ultraload-progress-bg: rgba(0, 0, 0, 0.1);
  --ultraload-progress-color: linear-gradient(90deg, #00d4ff, #ff005e);
}
```

---
## 🌐 Browser Support

UltraLoad is rigorously tested across all modern browsers and devices:

| Browser | Version | Mobile Support | Notes |
|---------|---------|----------------|-------|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" width="16"> Chrome | 49+ | ✅ Android 5+ | Full functionality |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg" width="16"> Firefox | 45+ | ✅ All devices | Best performance |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/safari/safari-original.svg" width="16"> Safari | 9+ | ✅ iOS 9+ | Reduced animations |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/edge/edge-original.svg" width="16"> Edge | 15+ | ✅ Windows Mobile | Full support |

---

## 🌐 Documentation

👉 **Documentation:** <https://changealert.netlify.app/>

---

## 📚 Documentation & Links

- **GitHub:** <https://github.com/rajkumarnimod/changealert>
- **LinkedIn:** <https://www.linkedin.com/in/rajkumar-nimod>

---

## 🏷️ Keywords

`UltraLoad`, `website preloader`, `JavaScript preloader`, `loading spinner`, `page loader`, `custom preloader`, `UI loader`, `progress bar`, `lottie animation`, `CSS preloader`, `loading screen`, `full screen loader`, `animated preloader`, `JS loading indicator`, `custom loading screen`

---

## Author

Created with ❤️ by Rajkumar Nimod.

Connect with me on [LinkedIn](https://www.linkedin.com/in/rajkumar-nimod)
📫 rajkumar221299@gmail.com

---
## 🙏 Credits

We'd like to thank all the people who contributed to this project.

👉 [View full contributors list →](CONTRIBUTORS.md)

---

## 📄 License

MIT License – Free for personal and commercial use.

---

## 🌟 Support the Project

If you find UltraLoad useful:

- ⭐ Star the repo
- 🗣 Share with fellow developers
- 📢 Mention it in blogs, videos, or tutorials
