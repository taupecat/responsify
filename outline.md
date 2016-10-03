# RESPONSIFY All the Things!

A guide to responsive WordPress in three acts:

1. Be Mobile-First
1. Responsive Images
2. Flexbox

* There is no "mobile" vs. "desktop": the web is the web is the web
* More than breakpoints: responsive is accessible, performant, compatible
* Basics
	* 
* Responsive images in WordPress
	* scrset + sizes
* Flexbox
* Device detection
* Polyfills



* Mobile-friendly
* Desktop-friendly
* Future-friendly




## It's a Mobile-First Kind of World

* ~ 56% of all web traffic now comes from mobile devices (source: SimilarWeb "The State of Mobile Web in the US 2015")
* However, keeping desktop users happy is still important. Desktop users spend more time per visit on a website
	* 5:19 Desktop, 3:05 Mobile
* Designing for mobile is designing for performance
	* Be conscious of file size, connection speeds, JavaScript
	* Can my website work with JavaScript turned off?
	* Is my site accessible to people with disabilities?
* All those plugins and included files add up
	* HTTP/2 helps


## Responsive Images, Now Playing in WordPress Core Near You

* Since WordPress 4.4
* srcset + sizes
* Use the right image format for the job
	* PNGs are great for flat colors, alpha transparency, high filesize
	* JPEGs are for photographs, show artifacts
	* SVGs are great for logos, vectors, but not for intricate designs
* Hyper-compressed JPEGs
* SVG masking of JPEGs

## Let's spend some time with Flexbox

* No longer the great layout promise of the future; flexbox is ready _today_
* Flexbox browser support is ~ 97% USA, globally
* Goes back to IE 10 (with prefixes and old syntax)
	* Autoprefixer goes a long way
* CSS Grids are Flexbox: The Next Generation










# RESPONSIFY ALL THE THINGS!

## Make Your Site Everything-Friendly

## "Responsify"

* Everybody tweet out about responsifying your website

## Obligatory "About Me"

* Only mention Twitter

# Introduction

## Why Does It Exist?

* Reaction to "mobile" vs. "desktop" sites
    * Multiple code bases make it hard to maintain
    * "Server attention span" problem
    * How do you know which to serve to whom?
* Lines are blurred by multitude of devices
* Increasingly, all around the world, a "mobile" device is
  a person's **primary** means of accessing the Internet

## Responsive Design Is…

* Fluid layouts
* Flexible images and media
* CSS3 Media Queries

# Basic Techniques

## Set Your Viewport

* <meta name="viewport" content="width=device-width, initial-scale=1">
* Don't set maximum-scale, minimum-scale, and user-scalable

## Create Your Fluid Grid

* target / context = result

## CSS Media Queries

# Advanced Techniques

## Images

### <picture> Element

* <picture> element works much like <video> and <audio> elements
* Uses built-in media queries to determine proper image for the viewport
* Includes an <img> fallback for older browsers
* Not supported in any browser yet
* Picturefill is a JavaScript tool that mimics the <picture> element

### srcset Attribute

* srcset is a new attribute for the <img> element
* Contains multiple images with targeted media queries
* Syntax is unintuitive
* Implemented in WebKit nightly builds

### Responsive JPEGs

* Progressive
* High compression, 2.2x Size

### Warning for Images in WordPress

* WordPress likes to use "width" and "height" attributes
* To override these, use "width" and "max-width" CSS properties
* **Always** set `height: auto;` or your images will be distorted

### Icon Fonts

* Don't use images if you don't have to
* Icon fonts offer alternatives that are scalable, colorable, work with shadows
* Genericons: built by Automattic & used in Twenty Thirteen

## Layout

### box-sizing: border-box;

```
*, *:after, *:before {
    box-sizing: border-box;
}
```

### Flexbox

* Support is increasing


## CSS Preprocessors

* Almost an essential tool for responsive design
* Variables, functions, mixins
* Media query bubbling

## Miscellany

### Viewport Relative Units

* vw, vh, vmin, vmax

### Root-ems




# Resources

## Books

* *Responsive Web Design*, Ethan Marcotte
* *Mobile First*, Luke Wroblewski
* *Implementing Responsive Design*, Tim Kadlec

## Web

* *This Is Responsive*, Brad Frost
* @RWD

## My Book










blue: #80b2ff
green: #80ffb2
yellow: #e5ff80
red: #ff8080

sizes: 84.6875vw, (min-width: 710px) 65.07042vw, (min-width: 910px) 60.65934vw