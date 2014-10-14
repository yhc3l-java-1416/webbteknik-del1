/******************************************************************
Copyright (c) 2011 Tom Blackmore
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. The name of the author may not be used to endorse or promote products
   derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
********************************************************************/
/*
 * Namespace for all html base controls
 */
var wui = {};
/*
 * This is the controls namespace
 * Dependencies: 
 *  wui.js
 */
wui.controls = {};/*
 * This is the very simple base object for building all other controls
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
wui.controls.control = ( function() {
    var count = 0;
    return function(type) {
        var idNumber = count;
        count += 1;
        var elementName = type ? type: "div";
        var mainElement = document.createElement(elementName);

        var show = function() {
            mainElement.style.display = 'block';
        };
        
        var hide = function() {
            mainElement.style.display = 'none';
        };
        
        var toggle = function() {
            if (mainElement.style.display === 'none') {
                show();
            } else {
                hide();
            }
        };
        
        var getControlNumber = function() {
            return idNumber;
        };
        
        var setOnClick = function(fn) {
            mainElement.onclick = fn;
        };
        
        var click = function(){
            var ev = document.createEvent('MouseEvents');
            ev.initEvent('click', true, true);
            mainElement.dispatchEvent(ev);
        };
        
        var css = (function(){
          var classes = [];
          
          var updateElement = function(){
            var i;
            var result = "";
            for(i=0; i < classes.length; i++){
              result += classes[i] + " ";
            }
            mainElement.className = result;
          };
          
          var addClass = function(className){
            var i;
            var exists = false;
            for(i=0; i < classes.length; i++){
              if(className === classes[i]){
                exists = true;
                break;
              }
            }
            if(!exists){
              classes.push(className);
              updateElement();
            }
          };
          
          var removeClass = function(className){
            var i;
            var newClasses = [];
            var deleted = false;
            for(i=0; i < classes.length; i++){
              if(className !== classes[i]){
                newClasses.push(classes[i]);
              }
            }
            classes = newClasses;
            updateElement();
          };
          
          var clear = function(className){
            classes = [];
            updateElement();
          };
          
          return {
            addClass: addClass,
            removeClass: removeClass,
            clear: clear
          }
        }());
        
        var setWidth = function(width) {
            mainElement.style.width = width;
        };
        var setHeight = function(height) {
            mainElement.style.height = height;
        };
        var setId = function(text) {
            mainElement.id = text;
        };
        var getDomElement = function() {
            return mainElement;
        };
        var appendControl = function(control) {
            mainElement.appendChild(control.getDomElement());
        };
        return{
            getDomElement: getDomElement,
            getControlNumber: getControlNumber,
            appendControl: appendControl,
            show: show,
            hide: hide,
            toggle: toggle,
            setWidth: setWidth,
            setHeight: setHeight,
            setOnClick: setOnClick,
            click: click,
            css: css,
            setId: setId
        };
    };
}());/**
 * @projectDescription  A basic titlebar with three containers.
 * @author Tom Blackmore
 * @version 0.1
 * 
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 * 
 *  wui.css
 * 
 */
wui.controls.app = function(){
    var that = wui.controls.control();
    that.css.addClass("wui_position_vbox");
    that.css.addClass("wui_position_fullscreen");
    that.show = function(){
        that.getDomElement().style.display = '-webkit-box';
    };
    return that;
};

 /*
 * This is the panels namespace
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
 wui.controls.panels = {};/*
 * A basic panel.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *  wui_controls_panels.js
 * 
 *  wui.css
 */
wui.controls.panels.standard = function() {
    var that = wui.controls.control();
    that.css.addClass("wui_controls_panel");
    that.css.addClass("wui_position_vbox");
    that.css.addClass("wui_position_flex");
    that.setText = function(text) {
        that.getDomElement().innerHTML = text;
    };
    that.show = function() {
        that.getDomElement().style.display = '-webkit-box';
    };
    return that;
};/*
 * A basic scroll panel.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *  wui_controls_panels.js
 *  wui_controls_panels_standard.js
 *  lib/iscroll/iscroll-3.7.1.js
 *
 *  wui.css
 *  wui_controls_panels_panel.css
 */
wui.controls.panels.scroll = function() {
    var that = wui.controls.control();
    var id = "scroll__" + that.getControlNumber();
    that.css.addClass("wui_position_flex");
    that.setId(id);
 
    var scroller =  wui.controls.panels.standard();
    that.appendControl(scroller);
	var mainDiv = that.getDomElement();
    that.scroll = new iScroll(scroller.getDomElement(), {
        desktopCompatibility: true
    });

    that.setText = function(text) {
        scroller.setText(text);
        that.scroll.refresh();
    };
    that.appendControl= function(control) {
        scroller.getDomElement().appendChild(control.getDomElement());
        that.scroll.refresh();
    };
    that.show = function() {
        that.getDomElement().style.display = 'block';
        that.scroll.refresh();
    };
    that.scroll.refresh();

	// Prevent other parts of the page from being draggable
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    },
    false);

    that.clear = function() {
        scroller.getDomElement().innerHTML = "";
    };
    that.getDomElement = function() {
        return mainDiv;
    };
    return that;
}; /*
 * This is the lists namespace
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
 wui.controls.lists = {}; /*
 * This is the list items namespace
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 */
wui.controls.lists.items = {};
/*
 * This is the standard listItem
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 * 
 *  wui_controls_lists_standard.css
 */
wui.controls.lists.items.standard = function(text) {
    var that = wui.controls.control("li");
    that.setText = function(text) {
        that.getDomElement().innerHTML = text;
    };
    if (typeof text !== "undefined") {
        that.setText(text);
    }
    return that;
}; /*
 * This is the standard listItem
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 *  wui_controls_lists_items.js
 */
wui.controls.lists.items.arrow = function(text) {
    var that = wui.controls.control("li");
    that.css.addClass("wui_position_hbox");
    var textDiv = wui.controls.control("div");
    textDiv.css.addClass("wui_position_flex");
    var imgElement = wui.controls.control("div");
    imgElement.css.addClass("wui_controls_lists_items_arrow_icon");
    that.setText = function(text) {
        textDiv.getDomElement().innerHTML = text;
    };
    if (typeof text !== "undefined") {
        that.setText(text);
    }
	that.appendControl(textDiv);
    that.appendControl(imgElement);
    return that;
};
 /*
 * This is a standard list
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 */
wui.controls.lists.standard = function(){
	 var that = wui.controls.control("ul");
     that.css.addClass("wui_controls_lists_standard");
     that.items =(function() {
        var add = function(listItem) {
     		that.appendControl(listItem);
     	};
     	return {
     		add: add
     	}
     }());
     that.clear = function(){
        that.getDomElement().innerHTML = "";
     };
     return that;
};

 /*
 * This is a rounded list
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 * 
 *  wui_controls_lists_rounded.css
 */
wui.controls.lists.rounded = function(){
	var that = wui.controls.lists.standard();
    that.css.addClass("wui_controls_lists_rounded");
    return that;
};
/*
 * A basic titlebar with three containers.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 * 
 *  wui.css
 *  wui_controls_titlebar.css
 */
wui.controls.titleBar = function() {
    var that = wui.controls.control("header");
    var mainDiv = that.getDomElement();
    that.rightContainer = wui.controls.control();
    that.leftContainer = wui.controls.control();
    var title = document.createElement("h1");
    
    title.className = "wui_position_flex wui_control_titleBar_title";
    that.css.addClass("wui_position_hbox");
    that.css.addClass("wui_control_titleBar");
    that.rightContainer.css.addClass("wui_control_titleBar_rightContainer");
    that.leftContainer.css.addClass("wui_control_titleBar_leftContainer");
    
    that.show = function() {
        that.getDomElement().style.display = "-webkit-box";
    };
    
    that.setText = function(text) {
        title.innerHTML = text;
    };
       
    mainDiv.appendChild(that.leftContainer.getDomElement());
    mainDiv.appendChild(title);
    mainDiv.appendChild(that.rightContainer.getDomElement());
    
    return that;
}; /*
 * This is the menu namespace
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
 wui.controls.menu = {}; /*
 * Create a menuItem to load in a menuBar
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_menu.js
 * 
 *  wui_controls_menu_menuItem.css
 */
wui.controls.menu.menuItem = function() {
    var that = wui.controls.control("span");
    that.css.addClass("wui_position_flex");
    that.css.addClass("wui_control_menuItem");
    var icon = wui.controls.control();
    icon.css.addClass("wui_control_menuItem_icon");
    var selected = false;
    var panelControl;
    var normalIcon = "";
    var selectedIcon = "";
    var a = wui.controls.control("a");
    that.setText = function(text) {
        a.getDomElement().innerHTML = text;
    };
    that.setPanel = function(panel) {
        panelControl = panel;
    };
    that.getPanel = function(){
    	return panelControl;
    };
    that.showPanel = function() {
        if (panelControl) {
            panelControl.show();
        }
    };
    that.hidePanel = function() {
        if (panelControl) {
            panelControl.hide();
        }
    };
    that.setIconControl = function(text) {
        normalIcon = text;
        if (!selected) {
            icon.getDomElement().innerHTML = normalIcon;
        }
    };
    that.setSelectedIconControl = function(text) {
        selectedIcon = text;
    };
    that.select = function() {
        if (selectedIcon.length > 1) {
            icon.getDomElement().innerHTML = selectedIcon;
        }
        selected = true;
        that.css.addClass("wui_control_menuItem_active");
        that.showPanel();
    };
    that.deselect = function() {
        icon.getDomElement().innerHTML = normalIcon;
        selected = false;
        that.css.removeClass("wui_control_menuItem_active");
        that.hidePanel();
    };
    that.show = function() {
        that.getDomElement().style.display = '-webkit-box';
    };
    that.appendControl(icon);
    that.appendControl(a);
    return that;
};
 /*
 * Create a menubar
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_menu.js
 * 
 *  wui_controls_menu_menuBar.css
 */
wui.controls.menu.menuBar = function() {
    var that = wui.controls.control("nav");
    var items = [];
    var i;
    that.css.addClass("wui_position_hbox");
    that.css.addClass("wui_control_menuBar");
    var activeItem;

    that.setActive = function(menuItem) {
        for (i = 0; i < items.length; i++) {
            items[i].deselect();
        }
        menuItem.select();
        activeItem = menuItem;
    };
    
    that.getActive = function(){
    	return activeItem;
    };
    
    that.items = (function() {
        var add = function(menuItem) {
            menuItem.setOnClick( function() {
                that.setActive(menuItem);
            });
            items.push(menuItem);
            that.appendControl(menuItem);
        };
        return{
            add: add
        };
    }());
    
    return that;
}; /*
 * This is the buttons namespace
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
wui.controls.buttons = {}; /*
 * A standard button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 * 
 *  wui_controls_buttons_standard.css
 */
wui.controls.buttons.standard = function() {
    var that = wui.controls.control();
    that.setText = function(text) {
        that.getDomElement().innerHTML = text;
    };
    that.css.addClass("wui_controls_buttons_standard");
    return that;
}; /*
 * A red button button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 * 
 *  wui_controls_buttons_standard.css
 *  wui_controls_buttons_red.css
 */
wui.controls.buttons.red = function() {
    var that = wui.controls.buttons.standard();
    that.css.addClass("wui_controls_buttons_red");
    return that;
}; /*
 * An add button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 * 
 *  wui_controls_buttons_add.css
 */
wui.controls.buttons.add = function() {
    var that = wui.controls.buttons.standard();
    that.css.clear();
    that.css.addClass("wui_controls_buttons_add");
    that.setText("+");
    that.setText = undefined;
    return that;
}; /*
 * A simple back button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 * 
 *  wui_controls_buttons_back.css
 */
wui.controls.buttons.back = function() {
    var that = wui.controls.buttons.standard();
    that.css.clear();
    that.css.addClass("wui_controls_buttons_back");
    return that;
};
 /*
 * A round grey lamp button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 * 
 *  wui_controls_buttons_greyLamp.css
 */
wui.controls.buttons.greyLamp = function() {
    var that = wui.controls.buttons.standard();
    that.css.clear();
    that.css.addClass("wui_controls_buttons_greyLamp");
    return that;
}; /*
 * A round green lamp button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *  wui_controls_buttons_greyLamp.js
 * 
 *  wui_controls_buttons_greyLamp.css
 *  wui_controls_buttons_greenLamp.css
 */
wui.controls.buttons.greenLamp = function() {
    var that = wui.controls.buttons.greyLamp();
    that.css.addClass("wui_controls_buttons_greenLamp");
    return that;
}; /*
 * A round orange lamp button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *  wui_controls_buttons_greyLamp.js
 * 
 *  wui_controls_buttons_greyLamp.css
 *  wui_controls_buttons_orangeLamp.css
 */
wui.controls.buttons.orangeLamp = function() {
    var that = wui.controls.buttons.greyLamp();
    that.css.addClass("wui_controls_buttons_orangeLamp");
    return that;
}; /*
 * A round red lamp button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *  wui_controls_buttons_greyLamp.js
 * 
 * 	wui_controls_buttons_greyLamp.css
 *  wui_controls_buttons_redLamp.css
 */
wui.controls.buttons.redLamp = function() {
    var that = wui.controls.buttons.greyLamp();
    that.css.addClass("wui_controls_buttons_redLamp");
    return that;
};