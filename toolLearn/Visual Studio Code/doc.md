## Getting Started
1. VSCode is a lightweight but powerful source code editor. And it comes with built-in support for **JavaScript**,TypeScript and Node.js.

### The Basics
#### Layout
The UI is divided into four areas: `Editor, side Bar, status Bar and View Bar`
1. editor
    * side by side Editing
    * configuring the editor
    * Save/Auto Save: `file.autoSave` or `files.autoSaveDelay`
2. side Bar:
    * Explorer: is used to browse, open, and manage all of the files and folders in your project.
        * Type `cmd+P` to quickly search and open a file by its name.
        * Use the `file.exclude` setting to configure rules for hiding files and folders from the explorer
        * *Working Files*: this is a list of active files
    * Search
        * exclude files: `search.exclude`
        * From the Explorer you can right-click on a folder and select Find in Folder to search inside a folder only.
#### Command Palette
1. Quick File Navigation:
    * `ctrl+tab`
    * `ctrl+-` or `ctrl+shift+-`

### Editing Evolved
#### Bracket matching
* Matching brackets will be highlighted as soon as the cursor is near of them.
* `⇧⌘\`: jump to the matching bracket
#### Selection & Multi cursor
* `Alt+Click` or `⌥⌘↓` or `⌥⌘↑` or `cmd+D` or `cmd+k+D` or `⇧⌘L`
* Column text selection: Hold Shift and Alt while dragging to do column text selection
* `⌃⇧⌘←` and `⌃⇧⌘→`: Quickly shrink or expand the current selection (applies to all languages)
#### IntelliSense
* setting: `editor.quickSuggestions` and `editor.suggestOnTriggerCharacters`
#### Parameter Hints
#### Snippets and Emmet Abbreviations
#### Go to Definition
#### Go to Symbol: `:`
#### Open symbol by name: `#`
#### Folding
* Fold (`⇧⌘[`) 
* Unfold (`⇧⌘]`)
* Fold All (`⇧⌥⌘[`) 
* Unfold All (`⇧⌥⌘]`) 
* Fold Level X (`⌘K ⌘2 for level 2`) 
#### Gutter indicators
* red, green and blue
#### Peek
#### Hover
#### Rename Symbol
* `F12`
#### Errors & Warnings

### Version Control

### Debugging
1. Breakpoints
2. Data inspection
    * VARIABLES: Variables can be inspected in the VARIABLES section of the Debug view or by hovering over their source in the editor
    * WATCH: Varibles and expressions can also be evaluated and watched in the Debug view WATCH section
3. Debug Console
4. Debug actions
    * Continue / Pause F5
    * Step Over F10
    * Step Into F11
    * Step Out ⇧F11
    * Restart ⇧⌘F5
    * Stop ⇧F5
#### Node Debugging（not read)

### Tasks
1. Note that task support is only available when working on a workspace folder.It is not available when editing single files.
#### Examples of Tasks in Action
    * Transpiling TypeScript to JavaScript
    * Compiling Markdown to HTML
    * Transpiling Less and Sass into CSS
#### Processing Task Output with Problem Matchers
#### Autodetecting Gulp, Grunt and Jake Tasks
#### Mapping Gulp, Grunt and Jake Output to Problem Matchers
1. `⇧⌘B`: Run Build Task
#### Output Window Behavior
#### Operating System Specific Properties
#### Variable substitution
    * `${workspaceRoot}` the path of the folder opened in VS Code
    * `${file}` the current opened file
    * `${fileBasename}` the current opened file's basename
    * `${fileDirname}` the current opened file's dirname
    * `${fileExtname}` the current opened file's extension
    * `${cwd}` the task runner's current working directory on startup
    
### Accessibility
#### Zoom
#### High Contrast Theme
#### Keyboard Navigation
#### Tab Navigation
#### Tab trapping
#### Screen Readers

## Customization
### Snippets
1. $1, $2 for tab stops
2. ${id} and ${id:label} and ${1:label} for variables
3. Variables with the same id are connected
4. description is the description used in the IntelliSense drop down

## Languages
### Javascript
1. JavaScript support can operate in two different modes:
    * File Scope: no jsconfig.json
    * Explicit Project: with jsconfig.json 
#### Excludes
#### jsconfig Options
#### IntelliSense
#### JSDoc annotations

### JSON 

