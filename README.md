# grunt-plist

> Grunt plugin for patching macOS plist files

### Grunt
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-plist --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-plist');
```

## The "plist" task

### Overview
In your project's Gruntfile, add a section named `plist` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    plist: {
        intel: {
            'file': "build/tmp/HTML5test-darwin-x64/HTML5test.app/Contents/Info.plist",
            'properties': {
                'LSRequiresNativeExecution': false
            }
        }
    }
})
```

For each .plist file that you want to patch you can add a section. Each sections has two options that you need to set, such as the path to the plist file and which properties you want to set.


#### file
Type: `String`

The .plist file you want to patch. The original file will be overwritten with the changes listed in the properties object.


#### properties
Type: `Object`

An object containing all keys and values that will be overwritten or appended to the already existing .plist file. Properties not listed here will be copied over from the original file. 