# Webdev default structure

Setting up a new folder, creating files and structuring folders can be time consuming. This boilerplate is intended to be used at the beginning of developing a new website.

In order to use this, you should be familiar with following technologies:
- HTML
- SASS (SCSS specifically)
- JavaScript
- NPM (Node package manager)
- live-server (npm)
- parcel (only needed for production building)

## The setup

This structure contains two top-folders. 
`src/` and `dist/`
You should only work with the contents inside the `src/` folder, as the `dist` folder is only used to bundle all your contents from `src/` for production use.

Inside the `src/` folder, we have

    │   index.html
    │
    ├───assets
    │   ├───fonts
    │   ├───images
    │   └───videos
    ├───scripts
    │   │   main.js
    │   │
    │   └───vendors
    │           hammerjs.min.js
    │           is.min.js
    │           svg-inject.min.js
    │
    └───styles
        │   main.css
        │
        └───scss
            │   primary.scss
            │
            └───modules
                    _base.scss
                    _colours.scss
                    _css-reset.scss
                    _global.scss
                    _index.scss
                    _media-queries.scss
                    _special.scss

- `index.html` is the main html file
- `assets`/ is the folder containing all our static files (images, fonts, videos,... - nothing that we can code/change within our code editor).
- `scripts` is the folder containing our `main.js` file but also all vendor specific javascript files
- `styles` is the folder containing our main.css file but also all the primary.scss files and the module files


## Start with
Clone this repository to an empty folder, change the GitHub url to yours using:

    git remote set-url origin https://github.com/myName/GitTest.git
    
## How to use
To run the **scss** compiler, write the following command in your terminal

    npm run dev-sass 
To run the **live-server**, write the following command in your terminal

    npm run dev-server
and then you should be able to visit your website at [127.0.0.1:8080](127.0.0.1:8080)


## What are the different SCSS files for?
|File                         |Usage                         |
|-----------------|-----------------------------|
|`_css-reset.scss`|Resets the browser default css values   (dont change this)         |
|`_colours.scss`  |Create color schemes with variables to be used in all scss files            |
|`_global.scss`   |Create global styling for e.g. components, info boxes, buttons,...|
|`_index.scss`   |index.html specific page styling|
|`_media-queries.scss`   |Media queries, contains both, mobile first or desktop first queries (**delete one of them**)|
|`_special.scss`   |Everything else that should be considered as most important and overwrites previous css rules|

## Production build (optional)
If you're done with coding everything inside your `src/` folder, write the following command in your terminal

    npm run build
   
   And upload the files & folder inside the `dist/` folder to your webserver.
   
**What's the difference?**
Well, using `npm run build` takes everything inside the  `src/` folder and uses parcel to minify, uglify and transpile your code. This way we reduce the file size and make the website available for older website.

## Scalability

Eventough this seems to be for many projects overkill or not enough, I believe that this should be a good standard file/folder structure as it allows scalability to a bigger project while still keep it simple.



## Reference

This project is based on following references/methods:
- [CSS at trivago — Part 1: Structure and ITCSS](https://medium.com/@pistenprinz/css-at-trivago-part-1-structure-and-itcss-52f63ed557ca) 
- [Bem naming convention](https://en.bem.info/)
- [Bootstrap Media Queries Breakpoints](https://v4-alpha.getbootstrap.com/layout/overview/#responsive-breakpoints)
- [idiomatic CSS](https://github.com/necolas/idiomatic-css)

