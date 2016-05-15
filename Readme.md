# Mr Builder

[TODO](http://todo.to.it) StarterKit scaffolding to work with Frontend app with happyness.


# Setting up the new project

- Create a new repository on Github without init files for your new project
- Clone Mr-Builder into your local system without history using ```git clone --depth 1 https://github.com/todotoit/Mr-Builder```
- Rename the folder as per your new project
- Set the new remote ```git remote set-url origin <GithubRepositoryUrl>```
- Push the repo ```git push```


# Setting up the development

- Clone your new project repository based on Mr-Builder
- run ```npm install``` or ```sudo npm install`` if you are on mac
- run ``` grunt dev``` to start your development session




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

Please refer to `build` task declaration in `.grunt/aliases.yml` for further
info.



## Notes and links

http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/
