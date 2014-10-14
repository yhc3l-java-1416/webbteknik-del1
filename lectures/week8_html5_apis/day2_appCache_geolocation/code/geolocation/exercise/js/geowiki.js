// Info:
// http://www.mediawiki.org/wiki/API
// http://www.mediawiki.org/wiki/API:Query_-_Meta
// http://www.mediawiki.org/wiki/API:Query_-_Lists
// http://wikilocation.org/documentation/

// Tom's slimmed down crazy Jsonp loader,
// takes parameters, url and callback. Optional you can provide a callback parameter name
var loadJsonp = (function() {
    var id = 0; // Keep track of the number of times we call this function
    return function(url, callback, callbackParameterName) {
        var requestId = id ++; // Generate  unique number for the request
        //generate a unique callback function to retrieve the data.

        if(!callbackParameterName) {
            callbackParameterName="callback";
        }

        window["jsonp"+requestId] = function(data) {
            if(callback) {
                callback(data);
            }
        };
        //generate our script tag
        var s = document.createElement("script");
        s.src = url + "&"+ callbackParameterName +"=" + "jsonp" +requestId;
        s.type = "text/javascript";
        s.onload = function() {
            //when everything is loaded tidy up,
            //clear our unique global function
            window["jsonp"+requestId] = "undefined";
            //remove the script tag
            document.getElementsByTagName('head')[0].removeChild(s);
        };
        //add the script tag to the head section
        document.getElementsByTagName('head')[0].appendChild(s);
    }
})();
var compositePanel = function(scroll) {
    var that = wui.controls.panels.standard();
    that.titleBar = wui.controls.titleBar();
    that.mainContent = wui.controls.panels.standard();
    if(scroll) {
        that.mainContent = wui.controls.panels.scroll();
    }
    that.setText = undefined;
    that.appendControl(that.titleBar);
    that.appendControl(that.mainContent);
    return that;
};
wikiPanel = function() {
    var that = wui.controls.panels.standard();

    var getMetaInfoFor = function(articlename, cb) {
        // http://en.wikipedia.org/w/api.php?action=query&titles=Albert%20Einstein&prop=info&inprop=protection|talkid&format=json
        var url = "http://en.wikipedia.org/w/api.php?action=query&titles="+articlename+"&prop=info&inprop=protection|talkid&format=json";
        loadJsonp(url, function(data) {
            console.log("-- getMetaInfoFor got "+data+" from server for article '"+articlename+"'");
            console.dir(data);
            cb(data);
        });
    };
    var getListFor = function(title, number, cb) {
        // http://en.wikipedia.org/w/api.php?action=query&list=allpages&apfrom=Albert%20Einstein&aplimit=5&format=json
        var url = "http://en.wikipedia.org/w/api.php?action=query&list=allpages&apfrom="+title+"&aplimit="+number+"&format=json";
        loadJsonp(url, function(data) {
            cb(data.query.allpages);
        });
    };
    var getGeoListFor = function(lat, lng, number, cb) {
        // http://en.wikipedia.org/w/api.php?action=query&list=allpages&apfrom=Albert%20Einstein&aplimit=5&format=json
        var url = "http://api.wikilocation.org/articles?lat="+ lat +"&lng="+ lng +"&limit="+ number +"&radius="+ 5000;
        loadJsonp(url, function(data) {
            cb(data.articles);
        }, "jsonp");
    };
    that.wikiInfoPanel = function() {
        var that1 = compositePanel(true);
        that1.setId("infoPanel");
        that1.backButton = wui.controls.buttons.back();
        that1.backButton.setText("back");
        that1.backButton.setOnClick( function() {
            that1.hide();
            that.wikiListPanel.show();
        });
        that1.titleBar.leftContainer.appendControl(that1.backButton);
        that1.load = function(article) {
            that1.titleBar.setText("Info");
            that1.list = wui.controls.lists.rounded();
            that1.mainContent.setText("");
            that1.header = wui.controls.control("h2");
            getMetaInfoFor(article.title, function(data) {
                for(var a in data.query.pages) {
                    var art = data.query.pages[a]; // We only expect one!
                    that1.header.getDomElement().innerHTML=art.title;
                    that1.list.items.add(wui.controls.lists.items.standard("Touched: "+art.touched));
                    that1.list.items.add(wui.controls.lists.items.standard("Lastrevid: "+art.lastrevid));
                }
            });
            that1.mainContent.getDomElement().style.backgroundColor = "#999";
            that1.mainContent.appendControl(that1.header);
            that1.mainContent.appendControl(that1.list);
        };
        return that1;
    }();
    var createList = function(articles) {
        var list = wui.controls.lists.standard();
        for(var i in articles) {
            var article = articles[i];
            var li = wui.controls.lists.items.arrow();
            //console.log(article.title);
            li.setText(article.title);
            li.setOnClick((function(art) {
                return function() {
                    that.wikiInfoPanel.load(art);
                    that.wikiListPanel.hide();
                    that.wikiInfoPanel.show();
                };
            })(article));
            list.items.add(li);
        }
        return list;
    };
    that.wikiListPanel = function() {
        var that1 = compositePanel(true);
        that1.setId("listPanel");
        that1.load = function(text, limit) {
            that1.titleBar.setText(text);
            getListFor(text, limit, function(articles) {
            	that1.mainContent.setText("");
                that1.mainContent.appendControl(createList(articles));
            });
        };
        that1.geoload = function(lat, lon, limit) {
            getGeoListFor(lat, lon, limit, function(articles) {
            	that1.mainContent.setText("");
                that1.mainContent.appendControl(createList(articles));
            });
        };
        return that1;
    }();
    that.load = function(text, limit) {
        that.wikiListPanel.load(text, limit);
    };
    that.geoload = function(lat, lon, limit) {
        that.wikiListPanel.geoload(lat, lon, limit);
    };
    that.wikiInfoPanel.hide();
    that.appendControl(that.wikiInfoPanel);
    that.appendControl(that.wikiListPanel);
    return that;
};
