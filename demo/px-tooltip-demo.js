/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-icon-set/px-icon-set.js';
import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import 'px-demo/css/px-demo-content-helper-styles.js';
import '../px-tooltip.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-demo-content-helper-styles"></style>

    <!-- Header -->
    <px-demo-header module-name="px-tooltip" description="A tooltip is a type of popup that provides additional information to users once they hover over the invoking element for a configurable delay period. When the mouse leaves the target area, the tooltip goes away. Not generally recommended for mobile applications, where hover behavior can be inconsistent." desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}" on-chosen-config-changed="_hideTooltip"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">
        <button class="btn btn--tertiary" id="btn1" type="button" name="button">Hover over me, tooltip orientation is {{props.orientation.value}}</button>
        <px-tooltip id="tooltip" for="btn1" orientation="{{props.orientation.value}}" delay="{{props.delay.value}}" tooltip-message="{{props.tooltipMessage.value}}" tooltip-style="{{props.tooltipStyle.value}}">
        </px-tooltip>
        

      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-tooltip">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-tooltip" hide="[&quot;assignParentResizable&quot;,&quot;getTargetPositionCenterOfLeftRight&quot;,&quot;getTargetPositionCenterOfTopBottom&quot;,&quot;notifyResize&quot;,&quot;resizerShouldNotify&quot;,&quot;stopResizeNotificationsFor&quot;]"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-tooltip-demo',

  properties: {

    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    configs: {
      type: Array,
      value: function(){
        return [

          { configName: "Auto position",
            orientation: "auto",
            tooltipMessage: "This is a tooltip",
            delay: 50,
            siblingElement: "<button id='btn1'>Hover over me</button>"
          },

          { configName: "Bottom",
            orientation: "bottom",
            tooltipMessage: "This is a tooltip",
            delay: 50,
            siblingElement: "<button id='btn1'>Hover over me</button>"
          }
        ]
      }
    }
  },

  demoProps: {
    smartOrientation: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    for: {
      type: String,
      defaultValue: 'btn1'
    },

    delay: {
      type: String,
      defaultValue: '50',
      inputType: 'text',
      inputPlaceholder: '50'
    },

    tooltipMessage: {
      type: String,
      defaultValue: 'This is a tooltip',
      inputType: 'text',
      inputPlaceholder: 'Tooltip message'
    },

    orientation: {
      type: String,
      inputType: 'dropdown',
      defaultValue: 'auto',
      inputChoices: ['auto', 'left', 'right', 'top', 'bottom']
    },

    siblingElement: {
      type: String,
      defaultValue: '<button id="btn1">Hover over me</button>',
      inputDisabled: true
    },

    parentComponent: {
      type: Array,
      defaultValue: ["<div>","</div>"]
    }

  },

  _hideTooltip() {
    this.$.tooltip.opened = false;
  }
});
