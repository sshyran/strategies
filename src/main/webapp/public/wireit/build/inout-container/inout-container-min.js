YUI.add("inout-container",function(e,t){e.InOutContainer=e.Base.create("inout-container",e.Container,[],{renderUI:function(){e.InOutContainer.superclass.renderUI.call(this),this._renderInputsOutputs()},_renderInputsOutputs:function(){this.setStdModContent(e.WidgetStdMod.BODY,"<ul class='inputs'></ul><ul class='outputs'></ul>");var t=this.get("boundingBox"),n=t.one("ul.inputs"),r=t.one("ul.outputs"),i=this.get("inputs"),s=this.get("outputs"),o,u;for(o=0,u=i.length;o<u;o++)e.Node.create("<li>"+i[o].label+"</li>").appendTo(n),this.add({type:"TerminalInput",name:i[o].name,dir:[-0.3,0]});for(o=0,u=s.length;o<u;o++)e.Node.create("<li>"+s[o].label+"</li>").appendTo(r),this.add({type:"TerminalOutput",name:s[o].name,dir:[.3,0]});e.later(100,this,function(){var t,o;for(t=0;t<i.length;t++)this.item(t).align(n.all("li").item(t),[e.WidgetPositionAlign.TC,e.WidgetPositionAlign.LC]);for(t=0;t<s.length;t++)o=this.item(i.length+t),o.align(r.all("li").item(t),[e.WidgetPositionAlign.TL,e.WidgetPositionAlign.RC]),o.set("x",o.get("x")+11)})}},{ATTRS:{resizable:{value:!1},inputs:[],outputs:[]}})},"@VERSION@",{requires:["container","terminal-input","terminal-output"],skinnable:!0});