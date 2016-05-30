# Mr Builder

[TODO](http://todo.to.it) Collection of Grunt tasks and scripts to work with Frontend app with happyness.


# Setting up your new project repository

- Create a new repository on Github without init files for your new project
- Clone Mr-Builder into your local system without history using ```git clone --depth 1 https://github.com/todotoit/Mr-Builder```
- Rename the folder as per your new project
- Rename the project name and reset the version into ```package.json``` file
- Set the new remote ```git remote set-url origin <GithubRepositoryUrl>```
- Push the repo ```git push```


# Setting up the development

- Clone your new project repository based on Mr-Builder
- run ```npm install``` or ```sudo npm install`` if you are on mac
- run ``` grunt dev``` to start your development session



# Setting the environment

There is a ```env.json``` file for environment configs. It's an hash that can be populated with different envs.
The key env ```default``` is required, it's the one that will be used once a grunt task ahs been launced without parameter.
If you need to set different **default** env in different machines, gitignore env.json file and put a version on each machine with the ```default``` key set properly.
Otherwise you can call a grunt task using a parameter corresponding the env key within the env.json file:

	grunt build --end=development

This command will run the build task and the object in the ```development``` key will be passed in the appData.env object.




## Available npm scripts


### npm run tag

This script will patch the version in the package.json and will create the corresponding git tag. Usually it is used before a release/deploy.


### npm run serve

Shortcut of ```http-server``` 


### npm run deploy_on_github_pages

Deploy the public folder (which is the built version) on Github Pages on the same repository.
Remember that you can deploy any branches because the build  will be run on your local machine.
You can easily set up additional Github Pages in order to set different version of the build.


### npm run sassdev

Alias of ```grunt gruntsassdev --gruntfile GruntSassDev.js```.
Run this command to start a development session with .scss files alongside the live reload of Browser-sync.
You need to change the GruntSassDev.js file which is the grunt file used for this specific tasks because the original one is too slow for proper development job.


### npm run dev

Alias of ```grunt dev```.
Start a regular session with Browser-sync.



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
