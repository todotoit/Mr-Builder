# Mr Builder

[TODO](http://todo.to.it) Collection of Grunt tasks and scripts to work with Frontend app with happyness.

### Briefly

- You need a project folder with the mandatory `app` folder in it.
- In `app` there'll be all the source project files
- `package.json` file is mandatory
- `env.json` not mandatory but useful
- `grunt dev` and `grunt build` require the `--app=path/to/project` at least the first time
- At least one `html` file need to be present with the `build:css` and `build:js` tags
- Use the boilerplate as starting point
- Run the builder with `grunt build --app=<full_path_to_project_folder>`
- If you have a copy of Mr Builder in project folder (for remote building purpose), to avoid conflict, pass --nover as additional argument


### override

- create `grunt/config` folder in project folder to put updated or new configs and to put new aliases.yml
- create `grunt/tasks` folder in project folder to put updated or new custom task

PS: using --nover will skip the above override setting as well


### env.json

This file is for custom config related to specific project requirements. The object `config` can have the following keys:

- `dist`: the folder name for the built files
- `async_bundle`: boolean to load the bundled js in async or with regular script tag
- `firebase_disabled`: to backup specific firebase db on each build, progressively. It needs `name` for file name and `root` the full api url that point to the desired branch of the json db
- `contentful`: dump as json a specific content type in Contentful. It needs `token`, `space` and `type` in order to work properly. Currently only one dump.