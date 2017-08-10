v1.0.3
==================
* fix comment for analyzer

v1.0.2
==================
* runtime theming for demo

v1.0.1
==================
* fix display issue in FF with line height change

v1.0.0
==================
* component redesign
* update documentation regarding mobile
* Major bump to pick up redesigned sub-dependencies

v0.10.20
==================
* ensure we call _hide() on detached so that the tooltip if fully reset when being detached externally

v0.10.19
==================
* fixed problem with externally moving tooltip in the dom

v0.10.18
==================
* accessibility improvements

v0.10.17
==================
* fixed CodePen (second half of #17)

v0.10.16
==================
* fixed demo (half of #17)

v0.10.15
==================
* fixed incorrect event name in comments/docs per #18

v0.10.14
==================
* Added events to help watch the tooltip show/hide cycle. The 4 events now are:
  * px-tooltip-show-request (new)
  * px-tooltip-show
  * px-tooltip-hide-request (new)
  * px-tooltip-hide (new)
* removed console.logs

v0.10.13
==================
* Change show process so that several request end up in only 1 processing
* Maintain cancel feature on show
* solve timing issues

v0.10.12
==================
* Set position after showing instead of after requesting showing

v0.10.11
==================
* When showing wiat for attached before removing the hidden class (to avoid flicker)

v0.10.10
==================
* fix _fitBelow function
* make sure smart orientation works with scrolling

v0.10.9
==================
* remove debugger

v0.10.8
==================
* fix racing conditions on detaching for several browsers

v0.10.7
==================
* Update to px-demo
* removed demosass
* Updated to cool grays

v0.10.6
==================
* Update colors design to pick up new colors

v0.10.5
==================
* ensure tooltip stops showing and listening to events after being removed

v0.10.4
==================
* changing ghp.sh to account for Alpha releases

v0.10.3
==================
* fixed light tooltip color

v0.10.2
==================
* allow to manually call _show without it origniatiing from an event (falling back on target)

v0.10.1
==================
* fix watchdog for cases were target is an array

v0.10.0
==================
* Updated dependencies

v0.9.19
==================
* adding light version theme vars

v0.9.18
==================
* changing browser in wct testing from safari 8 to safari 10 on elcapitan

v0.9.17
==================
* Added a watchdog to remove the tooltip if the parent has been removed
* Added watchDogTimeout to get control over the watchDog performance impact (205ms by default)
* Fixed hide/show issues
* Fies event lsitening problems

v0.9.16
==================
* changing all devDeps to ^

v0.9.15
==================
* Update px-theme to 2.0.1 and update test fixtures

v0.9.14
==================
* turned max width into a mixin

v0.9.13
==================
* give (hidden) default values to mouseCoords in case the tooltip has been requried to be shown without the mouse positions being known yet

v0.9.12
==================
* update dependencies for dropdown

v0.9.11
==================
* removing px-theme style call

v0.9.10
==================
* ensure smart orientation works with followMouse

v0.9.9
==================
* changing Gruntfile.js to gulpfile.js

v0.9.8
==================
* bower updating px-demo-snippet

v0.9.7
=================
* rebuild css

v0.9.6
=================
* updated dependencies

v0.9.5
=================
* added style variables for theming

v0.9.3
=================
* handle case were the tooltipParent is null

v0.9.2
=================
* bumped demo snippet

v0.9.1
=================
* Reshow tooltip on mouseup

v0.7.11
=================
* fixed style link issue

v0.7.10
=================
* fixed style link issue

v0.7.9
=================
* made tooltip be able to follow mouse cursor

v0.7.8
=================
* updated bower to bring in codepen

v0.7.7
=================
* Added tooltipParent property definition

v0.7.6
=================
* added overflow to demoContainer and removed flex__wrap from mega-demo

v0.7.5
=================
* updated mega demo styles and bower px-demo-snippet to ^

v0.7.4
=================
* added image to readme, removed watch, added view on github

v0.7.3
=================
* updated gh-pages script to vulcanize demo

v0.7.2
=================
* added mega demo

v0.7.1
=================
* merge PR for long  word break

v0.7.0
=================
* Upgrade to Polymer 1.5.0

v0.6.8
=================
* remove calculateRem from Sass

v0.6.6
=================
* updated readme

v0.6.6
=================
* PR to make sure tooltip is hidden when item is clicked.

v0.6.5
=================
* PR to fix max tooltip width.

v0.6.4
=================
* added oss_notice to bower ignore

v0.6.3
=================
* added pull request check inside travis

v0.6.2
=================
* added auto github pages functionality

v0.6.1
=================
* fix case where parent could not be found at initializationß

v0.6.0
=================
* Upgrade to Polymer 1.4.0

v0.5.0
==================
* Added ability to pass an element into 'for'. Allows for a tooltip to be placed anywhere in the dom.

v0.4.0
==================
* removed the position attribute, which wasn't needed anymore.
* changed the behavior of the component to ensure that the positioning will work every single time.
* updated internal comments and cleaned up code a bit.
* Added testing in line with our usual testing methods.

v0.3.2
==================
* Updated License

v0.3.1
==================
* removed console logs.

v0.3.0
==================
* added the _position_ attribute, allowing the element to position itself correctly when it's under an e

v0.2.1
==================
* added a 5px margin to the tooltip, regardless of orientation.

v0.2.2
==================
* fixed up the README.md file according to specs, also fixed some js errors.
