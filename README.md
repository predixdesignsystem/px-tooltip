# px-tooltip [![Build Status](https://travis-ci.org/PredixDev/px-tooltip.svg?branch=master)](https://travis-ci.org/PredixDev/px-tooltip)

## Overview

`Px-tooltip` is a Predix UI component that provides additional information to users in a popup once they hover over the invoking element for a configurable delay period. When the mouse leaves the target area, the tooltip goes away.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm, and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line:

```
bower install px-tooltip --save
```

Second, import the component in your application with the following tag in your head:

```
<link rel="import" href="/bower_components/px-tooltip/px-tooltip.html"/>
```

Finally, use the component in your application:

```
<px-tooltip tooltip-message="Hello World"></px-tooltip>
```

## Documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-tooltip).


## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-tooltip/issues) to submit any bugs you might find.
