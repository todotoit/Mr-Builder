
# Octo Happiness

This repository is meant to be the starting point for our frontend applications,
and aid developers to reach happiness when starting a new project.

Basically is a simple folder structure with custom grunt tasks.

The name has been kindly suggested by Github :)

## Folder structure

```
octo-happiness
├── .grunt              grunt tasks folder ( load-grunt-tasks )
├── app                 application main folder
│   ├── css             application css folder
│   ├── index.html      application entry point
│   ├── js              application js folder
│   ├── locales         automatically build folder for locales files
│   └── vendor          bower components folder
├── bower.json
├── Gruntfile.js
├── package.json
├── public              application distribution folder
├── Readme.md
└── resources           application resource's source
    └── locales         application source locale files
```

## Initial setup

Run `npm run setup`

## Available grunt tasks

### dev

Main development task. This tasks should setup the development environment and
run browser-sync.

### build

Build the application for production. This task should perform every needed step
to make the application ready for production.

Output folder for this task is the `public/` folder, which should be served as
the application folder by web servers.

This task currently performs this operations:

- creates a clean `public` folder
- copy relevant static assets
- prepare usemin execution
- concat css and js files
- autoprefix css files
- minify css ( with sourcemaps )
- minify js ( with sourcemaps )
- add revision to js and css files
- perform usemin on `app/index.html`
- perform processhtml on `public/index.html`
- minify html in `public/index.html`
- convert csv files in `resources/locales` to json in `public/locales`
- cleanup

## Missing steps & other issues

Open issues! :) This is and will remain a work in progress, so if you have any
idea feel free to propose it and start a discussion.

## Notes and links

http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/
