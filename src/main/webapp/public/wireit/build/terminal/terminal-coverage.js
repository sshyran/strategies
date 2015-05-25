if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/terminal/terminal.js']) {
   __coverage__['build/terminal/terminal.js'] = {"path":"build/terminal/terminal.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":20},"end":{"line":1,"column":39}}},"2":{"name":"(anonymous_2)","line":35,"loc":{"start":{"line":35,"column":11},"end":{"line":35,"column":23}}},"3":{"name":"(anonymous_3)","line":39,"loc":{"start":{"line":39,"column":16},"end":{"line":39,"column":27}}},"4":{"name":"(anonymous_4)","line":48,"loc":{"start":{"line":48,"column":11},"end":{"line":48,"column":22}}},"5":{"name":"(anonymous_5)","line":54,"loc":{"start":{"line":54,"column":17},"end":{"line":54,"column":28}}},"6":{"name":"(anonymous_6)","line":58,"loc":{"start":{"line":58,"column":17},"end":{"line":58,"column":28}}},"7":{"name":"(anonymous_7)","line":62,"loc":{"start":{"line":62,"column":16},"end":{"line":62,"column":27}}},"8":{"name":"(anonymous_8)","line":66,"loc":{"start":{"line":66,"column":17},"end":{"line":66,"column":28}}},"9":{"name":"(anonymous_9)","line":76,"loc":{"start":{"line":76,"column":15},"end":{"line":76,"column":28}}},"10":{"name":"(anonymous_10)","line":82,"loc":{"start":{"line":82,"column":18},"end":{"line":82,"column":31}}},"11":{"name":"(anonymous_11)","line":93,"loc":{"start":{"line":93,"column":10},"end":{"line":93,"column":22}}},"12":{"name":"(anonymous_12)","line":131,"loc":{"start":{"line":131,"column":20},"end":{"line":131,"column":34}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":154,"column":3}},"2":{"start":{"line":24,"column":0},"end":{"line":138,"column":3}},"3":{"start":{"line":36,"column":6},"end":{"line":36,"column":25}},"4":{"start":{"line":40,"column":6},"end":{"line":40,"column":38}},"5":{"start":{"line":41,"column":6},"end":{"line":45,"column":7}},"6":{"start":{"line":42,"column":9},"end":{"line":42,"column":51}},"7":{"start":{"line":43,"column":9},"end":{"line":43,"column":51}},"8":{"start":{"line":44,"column":9},"end":{"line":44,"column":23}},"9":{"start":{"line":49,"column":6},"end":{"line":49,"column":39}},"10":{"start":{"line":50,"column":6},"end":{"line":50,"column":50}},"11":{"start":{"line":51,"column":6},"end":{"line":51,"column":48}},"12":{"start":{"line":55,"column":6},"end":{"line":55,"column":44}},"13":{"start":{"line":59,"column":6},"end":{"line":59,"column":76}},"14":{"start":{"line":63,"column":6},"end":{"line":63,"column":44}},"15":{"start":{"line":67,"column":6},"end":{"line":67,"column":39}},"16":{"start":{"line":69,"column":6},"end":{"line":71,"column":7}},"17":{"start":{"line":70,"column":9},"end":{"line":70,"column":61}},"18":{"start":{"line":77,"column":6},"end":{"line":77,"column":74}},"19":{"start":{"line":83,"column":6},"end":{"line":85,"column":7}},"20":{"start":{"line":84,"column":9},"end":{"line":84,"column":80}},"21":{"start":{"line":94,"column":6},"end":{"line":97,"column":49}},"22":{"start":{"line":99,"column":6},"end":{"line":99,"column":71}},"23":{"start":{"line":132,"column":12},"end":{"line":132,"column":41}}},"branchMap":{"1":{"line":41,"type":"if","locations":[{"start":{"line":41,"column":6},"end":{"line":41,"column":6}},{"start":{"line":41,"column":6},"end":{"line":41,"column":6}}]},"2":{"line":69,"type":"if","locations":[{"start":{"line":69,"column":6},"end":{"line":69,"column":6}},{"start":{"line":69,"column":6},"end":{"line":69,"column":6}}]},"3":{"line":83,"type":"if","locations":[{"start":{"line":83,"column":6},"end":{"line":83,"column":6}},{"start":{"line":83,"column":6},"end":{"line":83,"column":6}}]}},"code":["(function () { YUI.add('terminal', function (Y, NAME) {","","/**"," * @module terminal"," */","","'use strict';","","/**"," * Terminal is responsible for wire edition"," *"," * @class Terminal"," * @extends Widget"," * @uses WidgetChild"," * @uses WidgetPosition"," * @uses WidgetPositionAlign"," * @uses WiresDelegate"," * @uses TerminalDragEdit"," * @uses TerminalScissors"," * @uses TerminalDDGroups"," * @constructor"," * @param {Object} oConfigs The user configuration for the instance."," */","Y.Terminal = Y.Base.create(\"terminal\", Y.Widget, [","   Y.WidgetChild,","   Y.WidgetPosition,","   Y.WidgetPositionAlign,","   Y.WiresDelegate,","   Y.TerminalDragEdit,","   Y.TerminalScissors,","   Y.TerminalDDGroups","], {","","","   syncUI: function () {","      this._syncOffset();","   },","","   _syncOffset: function() {","      var offset = this.get('offset');","      if(offset) {","         this._posNode.setStyle('left', offset[0]);","         this._posNode.setStyle('top',  offset[1]);","         this.syncXY();","      }","   },","","   bindUI: function() {","      var bb = this.get('boundingBox');","      bb.on('mouseover', this._onMouseOver, this);","      bb.on('mouseout', this._onMouseOut, this);","   },","","   _onMouseOver: function() {","      Y.later(300, this, this._showOverlay);","   },","","   _showOverlay: function() {","      this.get('boundingBox').addClass( this.getClassName(\"show-overlay\") );","   },","","   _onMouseOut: function() {","      Y.later(300, this, this._hideOverlay);","   },","","   _hideOverlay: function() {","      var bb = this.get('boundingBox');","      // because of the timer, the widget may have been destroyed","      if(bb) {","         bb.removeClass( this.getClassName(\"show-overlay\") );","      }","   },","   ","   // override the WiresDelegate behavior which re-fires the event","   // add the connected class","   _onAddWire: function (e) {","      this.get('boundingBox').addClass(  this.getClassName(\"connected\") );","   },","   ","   // override the WiresDelegate behavior which re-fires the event","   // Remove the connected class if it has no more wires:","   _onRemoveWire: function (e) {","      if(this._wires.length === 0) {","         this.get('boundingBox').removeClass(  this.getClassName(\"connected\") );","      }","   },","   ","   /**","    * This function is a temporary test. I added the border width while traversing the DOM and","    * I calculated the offset to center the wire in the terminal just after its creation","    * @method getXY","    */","   getXY: function () {","      var container = this.get('parent'),","          layer = container.get('parent'),","          layerXY = layer.get('boundingBox').getXY(),","          absXY = this.get('contentBox').getXY();","","      return [absXY[0]-layerXY[0] + 15/2 , absXY[1]-layerXY[1] + 15/2];","   }","","}, {","   ","   ATTRS: {","      ","      /**","       * @attribute name","       */","      name: {","         value: null","      },","      ","      /**","       * Vector direction at the terminal","       * (used by BezierWire ou Scissors)","       * @attribute dir","       */","      dir: {","         value: [0,1]","      },","      ","      alignNode: {","         value: null","      },","","      /**","       * @attribute offset","       */","      offset: {","         value: null,","         validator: function(val) {","            return this._validateXY(val);","         }","      }","      ","   }","   ","});","","","}, '@VERSION@', {","    \"requires\": [","        \"widget\",","        \"widget-child\",","        \"widget-position\",","        \"widget-position-align\",","        \"wire-base\",","        \"wires-delegate\",","        \"terminal-dragedit\",","        \"terminal-scissors\",","        \"terminal-ddgroups\"","    ],","    \"skinnable\": true","});","","}());"]};
}
var __cov_m91W1Rmd0Ek$IpWZt$In0Q = __coverage__['build/terminal/terminal.js'];
__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['1']++;YUI.add('terminal',function(Y,NAME){'use strict';__cov_m91W1Rmd0Ek$IpWZt$In0Q.f['1']++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['2']++;Y.Terminal=Y.Base.create('terminal',Y.Widget,[Y.WidgetChild,Y.WidgetPosition,Y.WidgetPositionAlign,Y.WiresDelegate,Y.TerminalDragEdit,Y.TerminalScissors,Y.TerminalDDGroups],{syncUI:function(){__cov_m91W1Rmd0Ek$IpWZt$In0Q.f['2']++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['3']++;this._syncOffset();},_syncOffset:function(){__cov_m91W1Rmd0Ek$IpWZt$In0Q.f['3']++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['4']++;var offset=this.get('offset');__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['5']++;if(offset){__cov_m91W1Rmd0Ek$IpWZt$In0Q.b['1'][0]++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['6']++;this._posNode.setStyle('left',offset[0]);__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['7']++;this._posNode.setStyle('top',offset[1]);__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['8']++;this.syncXY();}else{__cov_m91W1Rmd0Ek$IpWZt$In0Q.b['1'][1]++;}},bindUI:function(){__cov_m91W1Rmd0Ek$IpWZt$In0Q.f['4']++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['9']++;var bb=this.get('boundingBox');__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['10']++;bb.on('mouseover',this._onMouseOver,this);__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['11']++;bb.on('mouseout',this._onMouseOut,this);},_onMouseOver:function(){__cov_m91W1Rmd0Ek$IpWZt$In0Q.f['5']++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['12']++;Y.later(300,this,this._showOverlay);},_showOverlay:function(){__cov_m91W1Rmd0Ek$IpWZt$In0Q.f['6']++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['13']++;this.get('boundingBox').addClass(this.getClassName('show-overlay'));},_onMouseOut:function(){__cov_m91W1Rmd0Ek$IpWZt$In0Q.f['7']++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['14']++;Y.later(300,this,this._hideOverlay);},_hideOverlay:function(){__cov_m91W1Rmd0Ek$IpWZt$In0Q.f['8']++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['15']++;var bb=this.get('boundingBox');__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['16']++;if(bb){__cov_m91W1Rmd0Ek$IpWZt$In0Q.b['2'][0]++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['17']++;bb.removeClass(this.getClassName('show-overlay'));}else{__cov_m91W1Rmd0Ek$IpWZt$In0Q.b['2'][1]++;}},_onAddWire:function(e){__cov_m91W1Rmd0Ek$IpWZt$In0Q.f['9']++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['18']++;this.get('boundingBox').addClass(this.getClassName('connected'));},_onRemoveWire:function(e){__cov_m91W1Rmd0Ek$IpWZt$In0Q.f['10']++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['19']++;if(this._wires.length===0){__cov_m91W1Rmd0Ek$IpWZt$In0Q.b['3'][0]++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['20']++;this.get('boundingBox').removeClass(this.getClassName('connected'));}else{__cov_m91W1Rmd0Ek$IpWZt$In0Q.b['3'][1]++;}},getXY:function(){__cov_m91W1Rmd0Ek$IpWZt$In0Q.f['11']++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['21']++;var container=this.get('parent'),layer=container.get('parent'),layerXY=layer.get('boundingBox').getXY(),absXY=this.get('contentBox').getXY();__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['22']++;return[absXY[0]-layerXY[0]+15/2,absXY[1]-layerXY[1]+15/2];}},{ATTRS:{name:{value:null},dir:{value:[0,1]},alignNode:{value:null},offset:{value:null,validator:function(val){__cov_m91W1Rmd0Ek$IpWZt$In0Q.f['12']++;__cov_m91W1Rmd0Ek$IpWZt$In0Q.s['23']++;return this._validateXY(val);}}}});},'@VERSION@',{'requires':['widget','widget-child','widget-position','widget-position-align','wire-base','wires-delegate','terminal-dragedit','terminal-scissors','terminal-ddgroups'],'skinnable':true});