# Coffeekraken s-sprite-transition-component <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!-- <a href="https://travis-ci.org/coffeekraken/s-sprite-transition">
		<img src="https://img.shields.io/travis/coffeekraken/s-sprite-transition.svg?style=flat-square" />
	</a> -->
	<a href="https://www.npmjs.com/package/coffeekraken-s-sprite-transition-component">
		<img src="https://img.shields.io/npm/v/coffeekraken-s-sprite-transition-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-sprite-transition/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-s-sprite-transition-component.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/s-sprite-transition">
		<img src="https://img.shields.io/npm/dt/coffeekraken-s-sprite-transition-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-sprite-transition">
		<img src="https://img.shields.io/github/forks/coffeekraken/s-sprite-transition.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-sprite-transition">
		<img src="https://img.shields.io/github/stars/coffeekraken/s-sprite-transition.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

<p class="lead">Create nice transitions using sprites</p>

[![View demo](http://components.coffeekraken.io/assets/img/view-demo.png)](http://components.coffeekraken.io/app/s-sprite-transition-component)

## Table of content

1. **[Demo](http://components.coffeekraken.io/app/s-sprite-transition-component)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Javascript API](doc/js)
5. [Demos and downloads](#readme-demos-downloads)
6. [Generate a sprite](#readme-generate-sprite)
7. [Sugar Web Components Documentation](https://github.com/coffeekraken/sugar/blob/master/doc/webcomponent.md)
8. [Browsers support](#readme-browsers-support)
9. [Code linting](#readme-code-linting)
10. [Contribute](#readme-contribute)
11. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
12. [Licence](#readme-license)

<a name="readme-install"></a>
## Install

```
npm install coffeekraken-s-sprite-transition-component --save
```

<a name="readme-get-started"></a>
## Get Started

First, import the component into your javascript file like so:

```js
import ComponentName from 'coffeekraken-s-sprite-transition-component'
```

Then simply use it inside your html like so:

```html
<s-sprite-transition src="urban-full-480x270@60.png" frame-width="480" still-frame="30"></s-sprite-transition>
```

and control your transition with javascript like so:

```js
const $transition = document.querySelector('s-sprite-transition')
$transition.addEventListener('ready', async (e) => {
  await $transition.animateIn()
  await $transition.animateOut()
})
```

<a id="readme-demos-downloads"></a>
## Demos and downloads

Here's some demos with each time the sprite to download

### Urban transition

[![View demo](http://components.coffeekraken.io/assets/img/view-demo.png)](http://components.coffeekraken.io/app/s-sprite-transition-component)

[Source](https://tympanus.net/codrops/2016/09/29/transition-effect-with-css-masks/)
[Download the sprite](/demo/data/urban-full-480x270@60.png)

### Ink transition

[![View demo](http://components.coffeekraken.io/assets/img/view-demo.png)](http://components.coffeekraken.io/app/s-sprite-transition-component?demo=ink)

[Source](https://codyhouse.co/gem/ink-transition-effect)
[Download the sprite](/demo/data/ink-640x360@26.png)

### Draw transition

[![View demo](http://components.coffeekraken.io/assets/img/view-demo.png)](http://components.coffeekraken.io/app/s-sprite-transition-component?demo=draw)

[Download the sprite](/demo/data/draw-480x270@60.png)

<a id="readme-generate-sprite"></a>
## Generate a sprite

In order to generate a sprite, you'll need to:

1. Create your transition
2. Export it as a **png sequence**
3. Go to [https://www.toptal.com/developers/css/sprite-generator/](https://www.toptal.com/developers/css/sprite-generator/)
4. Upload your sequence. I found out that uploading more than 10 by 10 mess with the images order...
5. Remove the padding in the option above the upload section
6. Select **Left-right** in the "Align elements" option
7. Click **Download**
8. Enjoy your transition and share it with me it you want

<a id="readme-browsers-support"></a>
## Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari |
| --------- | --------- | --------- | --------- |
| IE11+ | last 2 versions| last 2 versions| last 2 versions

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

> The webcomponent API (custom elements, shadowDOM, etc...) is not supported in some older browsers like IE10, etc... In order to make them work, you will need to integrate the [corresponding polyfill](https://www.webcomponents.org/polyfills).

<a id="readme-code-linting"></a>
##  Code linting

This package uses some code linting rules. Here's the list:

1. [StandardJS](https://standardjs.com/) for javascript files
2. [Stylelint](https://github.com/stylelint/stylelint) with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for `scss` files

> Your commits will not been accepted if the code style is not respected!

<a id="readme-contribute"></a>
## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>
## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.  

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>
## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
