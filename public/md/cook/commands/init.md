# Cook init

Initialize a new Cook project in the current directory by creating a `cook.config.json` configuration file.

## Usage

```bash
cook init
```

## Description

The `init` command creates a new Cook project configuration file (`cook.config.json`) in the current directory. It guides you through an interactive setup process to configure your project's basic information and command groups.

## Interactive Setup

The command will prompt you for:

1. **Project name** - The name of your project
2. **Serve commands** - Commands to run your development server
3. **Build commands** - Commands to build your project
4. **Clean commands** - Commands to clean up your project

## Example

```bash
$ cook init
cook.config.json file not found, creating a new
one...
Enter project name: my-awesome-project
Enter commands to serve the project (Enter empty
line to finish)
1  $ : npm run dev
2  $ : rm -rf ./cache
3  $ :
Enter commands to build the project (Enter empty
line to finish)
1  $ : rm -rf ./dist
2  $ : rm -rf ./build
3  $ : npm run build
4  $ :
Enter commands to clean the project (Enter empty
line to finish)
1  $ : rm -rf ./node_modules
2  $ :
cook.config.json has been created successfully.
```

## Generated Configuration

After running `cook init`, a `cook.config.json` file will be created with the following structure:

```json
{
    "name": "my-awesome-project",
    "author": "developer",
    "stir": true,
    "cmd": {
        "serve": [
            "npm run dev",
            "rm -rf ./cache"
        ],
        "build": [
            "rm -rf ./dist",
            "rm -rf ./build",
            "npm run build"
        ],
        "clean": [
            "rm -rf ./node_modules"
        ]
    },
    "template": {
        "name": "",
        "category": "",
        "date": "",
        "author": "",
        "stack": [],
        "github": ""
    }
}
```

## Options

This command has no additional options.

## Notes

- If a `cook.config.json` file already exists, the command will not overwrite it
- You can add multiple commands for each group by entering them one by one
- Press Enter on an empty line to finish adding commands to a group
- The template section is initialized empty and can be configured later for template creation
