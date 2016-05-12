# CSS vs .JS Animation: Which is Faster?
* [link](https://davidwalsh.name/css-js-animation)
* JavaScript-based DOM animation libraries, such as **Velocity.js** and **GSAP**, are more preformant than jQuery and CSS-based animation libraries.
## jQuery Animation
* JavaScript animation is fast, but jQuery slows it down. Becaause:
    * jQuery cannot avoid layout thrashing due to its codebase that serves many purposes beyond animation.
    * jQuery's memory consumption frequently triggers garbage collections that momentarily freeze animations.
    * jQuery uses setInterval instead of requestAnimationFrame (RAF) in order to protect novices from themselves.
## window.requestAnimationFrame
    * learn it [animation](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)
## CSS Transitions
## JavaScript Animation
    * Velocity.js

# Velocity.js
* Velocity is an animation engine with the same API as jQuery's $.animate().
* It's incredibly fast, and it features color animation, transforms, loops, easings, SVG support and scrolling.
## USE IT
