!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Strikethrough=e():t.Strikethrough=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}var i=function(){function t(e){var n=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=n,this.button=null,this.tag="S",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}return o(t,null,[{key:"CSS",get:function(){}}]),o(t,[{key:"render",value:function(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}},{key:"surround",value:function(t){if(t){var e=this.api.selection.findParentTag(this.tag);e?this.unwrap(e):this.wrap(t)}}},{key:"wrap",value:function(t){var e=document.createElement(this.tag);e.appendChild(t.extractContents()),t.insertNode(e),this.api.selection.expandToTag(e)}},{key:"unwrap",value:function(t){this.api.selection.expandToTag(t);var e=window.getSelection(),n=e.getRangeAt(0),o=n.extractContents();t.parentNode.removeChild(t),n.insertNode(o),e.removeAllRanges(),e.addRange(n)}},{key:"checkState",value:function(){var t=this.api.selection.findParentTag(this.tag);this.button.classList.toggle(this.iconClasses.active,!!t)}},{key:"toolboxIcon",get:function(){return'<svg width="20" height="20"><path d="M7.083 12.917c0 1.985 1.258 2.813 3.229 2.813 1.362 0 2.552-0.556 2.552-1.875 0-1.246-0.661-1.528-1.563-1.979-0.156-0.052-0.417-0.156-0.625-0.208h-10.677v-2.24h20v2.24h-4.323c0.052 0.104 0.156 0.26 0.208 0.365 0.208 0.521 0.365 1.146 0.365 1.823 0 2.409-1.572 3.619-3.49 4.167-0.729 0.208-1.51 0.313-2.396 0.313-0.521 0-1.094-0.052-1.615-0.156-1.141-0.228-2.115-0.544-2.917-1.146-1.189-0.892-2.031-2.079-2.031-4.115h3.281zM12.865 6.667c0-1.603-1.021-2.344-2.656-2.344-1.176 0-2.064 0.378-2.448 1.146-0.104 0.208-0.156 0.469-0.156 0.729 0 0.521 0.313 0.99 0.833 1.354 0.417 0.26 0.833 0.521 1.563 0.781h-5.104c-0.052-0.104-0.156-0.156-0.208-0.26-0.313-0.521-0.417-1.146-0.417-1.875 0-1.497 0.778-2.57 1.667-3.281 1.070-0.749 2.49-1.25 4.323-1.25 1.826 0 3.34 0.522 4.323 1.406 0.915 0.823 1.615 1.976 1.615 3.594h-3.333z"></path></svg>'}}],[{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{s:{}}}}]),t}();t.exports=i}])});