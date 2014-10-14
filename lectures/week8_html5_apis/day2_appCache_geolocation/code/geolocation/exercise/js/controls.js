/**
 * Namespace for all html base controls
 */
var webkitUi = {};
webkitUi.misc = (function(){
  var array = (function(){

        // Array Remove - By John Resig (MIT Licensed)
        // can remove as simply as remove(index); where index is index of array 
        // element to remove
        var remove = function(array, from, to){
            var rest = array.slice((to || from) + 1 || array.length);
            array.length = from < 0 ? array.length + from: from;
            return array.push.apply(array, rest);
        };

        /*
         * A binary search function for arrays.
         *      array : array to search
         *      find : the item to find
         *      compareFn : a compare function that takes argument
         *                  (array[i], find)
         *                  returns 0 when they are equal
         *                  returns -1 when the a is less than b
         *                  returns +1 when the a is greater than b
         *                  e.g. Compare strings:
         *                  function(a,b){ return (a===b)?0:(a>b)?1:-1; }
         *                  Compare numbers:
         *                  function(a,b){return a - b;}
         */
        var binarySearch = function(array, find, compareFn){
            var low = 0,
            high = array.length - 1,
            i,
            comparison;
            while (low <= high){
                i = parseInt((low + high) / 2, 10);
                comparison = compareFn(array[i], find);
                if (comparison < 0){
                    low = i + 1;
                    continue;
                }
                if (comparison > 0){
                    high = i - 1;
                    continue;
                }
                return i;
            }
            return null;
        };
        return{
            remove: remove,
            binarySearch: binarySearch
        };
    })();
  var script = (function(){
        /*
         * Public method to load external scripts
         *
         *      src:        url to script
         *      timeOut:    remove script after certain time. (null if we
         *                  shouldn't remove)
         *      callback:   callback method that will fire when the script is
         *                  loaded.
         */
        var loadScript = (function(){
            var loadedScripts = [];
            return function(src, callback, timeOut){
                //console.log(src, timeOut,callback);
                var loaded = false;
                for (var i = 0; i < loadedScripts.length; i++){
                    if (loadedScripts[i] === src){
                        loaded = true;
                        break;
                    }
                }
                if (!loaded){
                    var s = document.createElement("script");
                    s.src = src;
                    s.id = src;
                    s.type = "text/javascript";
                    s.onload = function(){
                    if (callback){
                                callback();
                                loadedScripts.push(src);
                            }
                    };
                    document.getElementsByTagName('head')[0].appendChild(s);
                    if (timeOut){
                        var removeCurrentScript = function(){
                            var eltScript = document.getElementById(src);
                            eltScript.parentNode.removeChild(eltScript);
                        };
                        setTimeout(removeCurrentScript, timeOut);
                    }
                } else{
                    if (callback){
                        callback();
                    }

                }
            };
        })();
        return{
                loadScript: loadScript
        };
    })();
    return {
      script:script,
      array:array
      };
})();


webkitUi.controls = (function(){
    /**
     * A generic control
     */
    var control = (function(){
        var count = 0;
        return function(type){
            count += 1;

            var elementName = type ? type: "div";
            var mainDiv = document.createElement(elementName);

            var show = function(){
                mainDiv.style.display = 'block';
            };

            var hide = function(){
                mainDiv.style.display = 'none';
            };

            var toggle = function(){
                if (mainDiv.style.display === 'none'){
                    show();
                } else{
                    hide();
                }
            };

            var getControlNumber = function(){
                return count;
            };

            var setOnClick = function(fn){
                mainDiv.onclick = fn;
            };

            var setClass = function(text){
                mainDiv.className = text;
            };

            var setWidth = function(width){
                mainDiv.style.width = width;
            };

            var setHeight = function(height){
                mainDiv.style.height = height;
            };

            var setId = function(text){
                mainDiv.id = text;
            };

            return{
                getElement: function(){
                    return mainDiv;
                },
                getControlNumber: getControlNumber,
                show: show,
                hide: hide,
                toggle: toggle,
                setWidth: setWidth,
                setHeight: setHeight,
                setOnClick: setOnClick,
                setClass: setClass,
                setId: setId
            };
        };
    })();

    // create a button
    var buttons = (function(){
        var button = function(){
            var that = control();
            that.setText = function(text){
                that.getElement().innerHTML = text;
            };
            that.click = function(){
              var ev = document.createEvent('MouseEvents');
              ev.initEvent('click',true,true);
              that.getElement().dispatchEvent(ev);
            };
            return that;
        };

        var normal = function(){
            var that = button();
            that.setClass("buttonNormal");
            return that;
        };

        var red = function(){
            var that = button();
            that.setClass("buttonRed");
            return that;
        };

        var back = function(){
            var that = button();
            that.setClass("buttonBack");
            return that;
        };

        var add = function(){
            var that = button();
            that.setClass("buttonAdd");
            that.setText("+");
            return that;
        };

        var greyLamp = function(){
            var that = button();
            that.setClass("buttonGreyLamp");
            return that;
        };

        var greenLamp = function(){
            var that = button();
            that.setClass("buttonGreenLamp");
            return that;
        };

        var orangeLamp = function(){
            var that = button();
            that.setClass("buttonOrangeLamp");
            return that;
        };

        var redLamp = function(){
            var that = button();
            that.setClass("buttonRedLamp");
            return that;
        };

        return{
            normal: normal,
            red: red,
            back: back,
            add: add,
            greyLamp: greyLamp,
            greenLamp: greenLamp,
            orangeLamp: orangeLamp,
            redLamp: redLamp
        };
    })();


    // titleBar 
    var titleBar = function(){
        var title;
        var that = control();
        var mainDiv = that.getElement();
        that.show = function(){
          that.getElement().style.display = "-webkit-box";
        };
        that.setClass("titleBar");
        var heading = document.createElement("h1");
        heading.className= "flex";
        
        that.setText = function(text){
            heading.innerHTML = text;
        };

        var rightContainer = control();
        rightContainer.setClass("rightTitlebarContainer");
        
        var leftContainer = control();
        leftContainer.setClass("leftTitlebarContainer");

        that.rightContainer = (function(){
            
            var addElement = function(element){
                rightContainer.getElement().appendChild(element);
            };

            var clear = function(){
                rightContainer.getElement().innerHTML = "";
            };

            return{
                addElement: addElement,
                clear: clear
            };
        })();

        that.leftContainer = (function(){
            
            var addElement = function(element){
                leftContainer.getElement().appendChild(element);
            };

            var clear = function(){
                leftContainer.getElement().innerHTML = "";
            };
            return{
                addElement: addElement,
                clear: clear
            };
        })();

        
        mainDiv.appendChild(leftContainer.getElement());
        mainDiv.appendChild(heading);
        mainDiv.appendChild(rightContainer.getElement());
        return that;
    };

    var panel = function(){
        var that = control();
        that.setClass("panel");
        that.setText = function(text){
            that.getElement().innerHTML = text;
        };
        that.show = function(){
            that.getElement().style.display = '-webkit-box';
        };
        return that;
    };

    var scrollablePanel = function(){
        var that = panel();
        var id = "scroll__"+that.getControlNumber();
        that.setClass("scrollPanel");
        that.setId(id);
        that.getElement().style.display = 'block';
        //that.setClass("container");
        var mainDiv = that.getElement();
        var scroller = panel();
        var loaded = false;
        var funcQueue = [];
        that.setText = function(text){
            scroller.setText(text);
        };
        that.addElement = function(element){
            var add = function(){  
                            scroller.getElement().appendChild(element);
            
            };
            if (loaded){
                add();
            } else{
                funcQueue.push(add);
            }
        };
        that.show = function(){
            that.getElement().style.display = 'block';
            var refresh = function(){
                that.scroll.refresh();
            };
            if (loaded){
                refresh();
            } else{
                funcQueue.push(refresh);
            }
        };
        mainDiv.appendChild(scroller.getElement());
        //stops the whole page being draggable
        document.addEventListener('touchmove',
        function(e){
            e.preventDefault();
        },
        false);
        webkitUi.misc.script.loadScript("../../resources/lib/iscroll/iscroll-3.7.1.js",
        function(){
            that.scroll = new iScroll(scroller.getElement(), {
                desktopCompatibility: true
            });
            for (var i = funcQueue.length - 1; i >= 0; i--){
                funcQueue[i]();
                webkitUi.misc.array.remove(funcQueue, i);
            }
            loaded = true;
            that.scroll.refresh();   
        });

        that.clear = function(){
          scroller.getElement().innerHTML="";
        };
        
        that.getElement = function(){
            return mainDiv;
        };

        return that;
    };

    var lists = (function(){
        var listItem = function(text){
            var that = control("li");
            that.setText = function(text){
                that.getElement().innerHTML = text;
            };
            
            if (typeof text !== "undefined"){
                that.setText(text);
            }
            return that;
        };
        var arrowListItem = function(text){
            var that = listItem("li");
            that.getElement().innerHTML ="";
            that.setClass("hbox");
            var textDiv = control("div");
            textDiv.setClass("flex");
            var imgElement = control("div");
            imgElement.setClass("arrowLeft");
            that.setText = function(text){
              textDiv.getElement().innerHTML=text;
            };
            if (typeof text !== "undefined"){
                that.setText(text);
            }
            var mainElement = that.getElement();
            
            that.getElement =function(){
              mainElement.appendChild(textDiv.getElement());
              mainElement.appendChild(imgElement.getElement());
              return mainElement;
            };
            return that;
        };

        var fullScreen = function(){
            var that = control("ul");
            that.setClass("fullMenu");
            that.addItem = function(listItem){
                that.getElement().appendChild(listItem.getElement());
            };
            that.clear = function(){
                that.getElement().innerHTML = "";
            };
            return that;
        };
        var rounded = function(){
            var that = fullScreen();
            that.setClass("roundedMenu");
            return that;
        };
        return{
            listItem: listItem,
            arrowListItem: arrowListItem,
            fullScreen: fullScreen,
            rounded: rounded
        };
    })();

    var menu = (function(){
        var menuTab = function(){
            var that = control("span");
            var icon = control();
            icon.setClass("menuIcon");
            var selected = false;
            
            var normalIcon ="";
            var selectedIcon ="";
            
            var a = document.createElement("a");
            var mainDiv = that.getElement();
            var panelControl;

            that.setText = function(text){
                a.innerHTML = text;
            };

            that.setPanel = function(panel){
                panelControl = panel;
            };

            that.showPanel = function(){
                if (panelControl){
                    panelControl.show();
                }
            };

            that.hidePanel = function(){
                if (panelControl){
                    panelControl.hide();
                }
            };

            that.setIcon = function(text){
                normalIcon = text;
                if(!selected){
                  icon.getElement().innerHTML = normalIcon;
                }
            };

            that.setSelectedIcon= function(text){
                selectedIcon = text;
            };
            
            that.select = function(){
                if(selectedIcon.length > 1){
                  icon.getElement().innerHTML = selectedIcon;
                }
                selected = true;
                that.setClass("menuActive");
                that.showPanel();
            };
            
            that.deselect = function(){
                icon.getElement().innerHTML = normalIcon;
                selected = false;
                that.setClass("");
                that.hidePanel();
            };
            
            
            that.getElement = function(){
                mainDiv.appendChild(icon.getElement());
                mainDiv.appendChild(a);
                return mainDiv;
            };

            that.show = function(){
                that.getElement().style.display = '-webkit-box';
            };

            return that;
        };

        // create a menu bar 
        var menuBar = function(){
            var that = control();
            var mainDiv = that.getElement();
            that.setClass("menuBar");
            var tabs = [];

            that.setActive = function(tab){
                for (var i = 0; i < tabs.length; i++){
                    tabs[i].deselect();
                }
                tab.select();
            };

            that.menuTabs = (function(){
                var addTab = function(tab){
                    tab.setOnClick(function(){
                        that.setActive(tab);
                    });
                    tabs.push(tab);
                };
                return{
                    addTab: addTab
                };
            })();

            that.getElement = function(){
                mainDiv.innerHTML = "";
                for (var i = 0; i < tabs.length; i++){
                    mainDiv.appendChild(tabs[i].getElement());
                }
                return mainDiv;
            };
            return that;
        };

        return{
            menuTab: menuTab,
            menuBar: menuBar
        };
    })();
    return{
        control: control,
        titleBar: titleBar,
        panel: panel,
        menu: menu,
        buttons: buttons,
        scrollablePanel: scrollablePanel,
        lists: lists
    };
})();