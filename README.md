Px-Tooltip
-----------------------------------------------

## Overview

Px-Tooltip is a Predix Experience ('Px') component

## Getting Started



From the component's directory...

```
$ npm install
$ bower install
$ grunt sass
```

### API and examples

From the component's directory

```
$ grunt depserve
```

Starts a local server. Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### LiveReload

By default grunt depserve is configured to enable LiveReload and will be watching for modifications in your root directory as well as `/css`.

Your browser will also need to have the LiveReload extension installed and enabled. For instructions on how to do this please refer to [livereload.com/extensions/](http://livereload.com/extensions/).

Add, remove, modify file system patterns specified in the `depserve.options.livereload` array in your `Gruntfile.js`

This is an example depserve configuration:

```
depserve: {
    options: {
        open: '&lt;%= depserveOpenUrl %&gt;,
        livereload: [__dirname + "/js", __dirname + "/css", __dirname]
    }
}
```

Disable LiveReload by removing the `livereload` key from the configuration object.

### DevMode

From the component's directory run:

```
$ grunt devmode
```

Starts a local server exactly the same as if you had run `grunt depserve` however in addition it also runs `grunt watch` concurrently which will execute commands on file change according to the specified matching patterns.

This is an example `grunt watch` configuration which watches for changes to SASS files, then on changes executes SASS compilation and automatic prefixing:

```
watch: {
    sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
            interrupt: true
        }
    }
}
```

### Options

**for**
The element to which the tooltip provides additional information.  Optional, tooltip will be attached to parent element if a 'for' id is not provided.

**orientation**
The position of the tooltip relative to the 'for' element. Currently supports 'top', 'bottom', 'left' and 'right'.

**tooltip-message**
The text message that will be displayed in the tooltip. Also support HTML elements.

**delay**
The delay in milliseconds until the tooltip is displayed.

### example

```
<div class="sample-container">
    <div id="hoverDivTop">Hover for tooltip<br/><span>(top, 5 sec delay)</span></div>
    <px-tooltip
        for="hoverDivTop"
        orientation="top"
        delay="5000"
        tooltip-message="Top tooltip">
    </px-tooltip>
</div>

```

```
<div class="sample-container">
    <div>No id needed for tooltip
        <px-tooltip
            orientation="top"
            tooltip-message="No id tooltip">
        </px-tooltip>
    </div>
</div>

```

### Extending behavior

See Polymer composition patterns

GE Coding Style Guide
---------------------

[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)


### Known Issues
