# 2rm Craft Framework

![Two Rivers Marketing](https://pbs.twimg.com/profile_images/742745134081572864/xZvmLkgv.jpg)

## About Craft CMS

Craft is a content-first CMS that aims to make life enjoyable for developers and content managers alike. It is optimized for bespoke web and application development, offering developers a clean slate to build out exactly what they want, rather than wrestling with a theme.

Learn more about Craft at [craftcms.com](https://craftcms.com).


## Resources
- [Demo site](https://demo.craftcms.com/)
- [Craft Slack](https://craftcms.com/community#slack)
- [Craft CMS Stack Exchange](http://craftcms.stackexchange.com/)

#### Community Resources
- [Mijingo](https://mijingo.com/craft) – Video courses and other learning resources
- [Envato Tuts+](https://webdesign.tutsplus.com/categories/craft-cms/courses) – Video courses
- [Straight Up Craft](http://straightupcraft.com/) – Articles, tutorials, and more
- [pluginfactory.io](https://pluginfactory.io/) – Craft plugin scaffold generator

#### Notable Plugins
- [SEOMatic](https://github.com/nystudio107/seomatic) - A turnkey SEO implementation for Craft CMS that is comprehensive, powerful, and flexible.
- [Neo](https://github.com/spicywebau/craft-neo) - Neo is a Craft CMS field type that builds upon the concept of the Matrix field type with a number of very useful features. Neo has been carefully crafted (pun intended) to ensure it matches the look and feel of Craft.
- [Retour](https://github.com/spicywebau/craft-neohttps://github.com/nystudio107/retour) - Retour allows you to intelligently redirect legacy URLs, so that you don't lose SEO value when rebuilding & restructuring a website.


## Front-end developent
From the project root, run `npm install` to install project dependencies.

To run static builds `grunt static`

Server deployment scripts: `grunt build-static`

This project uses [Grunt](https://gruntjs.com/) to build and compile css and javascript assets.
To build the project, from the _src directory run `grunt` to build & watch css, js & twig file(s).

#### Notable Packages

- [Bootstrap 4](https://getbootstrap.com/)
- [Font Awesome - JS implementation](https://fontawesome.com/)
- [SASS](https://sass-lang.com/)

#### Included Javascript Libraries

- [Jquery](https://jquery.com/)
- [Cookies.js](https://github.com/js-cookie/js-cookie)
- [Flexslider](https://github.com/woocommerce/FlexSlider)

## Craft development
Make a copy of `local.env` and rename to `.env`. Configure accordingly; this file is not checked into version control.

From project root, run `composer install`

Create local copy of Database and import most recent database found in _src/_db

For craft development: `grunt dev`

Server deployment scripts: `grunt prod`

#### Database location

```
 _src/_db

```

#### Server Environments

##### Staging:


#### Craft Admin Account:

Username: `support@2rm.com`
Password: `2rmdev`