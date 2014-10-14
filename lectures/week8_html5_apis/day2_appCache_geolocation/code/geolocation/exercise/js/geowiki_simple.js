// Info: 
// http://www.mediawiki.org/wiki/API
// http://www.mediawiki.org/wiki/API:Query_-_Meta
// http://www.mediawiki.org/wiki/API:Query_-_Lists
// http://wikilocation.org/documentation/

// Tom's slimmed down crazy Jsonp loader, 
// takes parameters, url and callback. Optional you can provide a callback parameter name
var loadJsonp = (function(){
  var id = 0; // Keep track of the number of times we call this function
  return function(url, callback, callbackParameterName){
       var requestId = id ++; // Generate  unique number for the request
       if(!callbackParameterName){
         callbackParameterName="callback";
       }
       //generate a unique callback function to retrieve the data.
       window["jsonp"+requestId] = function(data){
         if(callback){
           callback(data);
         }
       };
       //generate our script tag
       var s = document.createElement("script");
       s.src = url + "&" + callbackParameterName + "=" + "jsonp" + requestId;
       s.type = "text/javascript";
       s.onload = function(){
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

function getMetaInfoFor(articlename, cb)
{
  // http://en.wikipedia.org/w/api.php?action=query&titles=Albert%20Einstein&prop=info&inprop=protection|talkid&format=json
  var url = "http://en.wikipedia.org/w/api.php?action=query&titles="+articlename+"&prop=info&inprop=protection|talkid&format=json";
  loadJsonp(url, function(data)
    {
        cb(data);
    });
}

function getListFor(title, number, cb)
{
  // http://en.wikipedia.org/w/api.php?action=query&list=allpages&apfrom=Albert%20Einstein&aplimit=5&format=json
  var url = "http://en.wikipedia.org/w/api.php?action=query&list=allpages&apfrom="+title+"&aplimit="+number+"&format=json";
  loadJsonp(url,  function(data)
    {       
        cb(data.query.allpages);
    });
}

function getGeoListFor(lat, lng, number, cb)
{
  // http://en.wikipedia.org/w/api.php?action=query&list=allpages&apfrom=Albert%20Einstein&aplimit=5&format=json
  var url = "http://api.wikilocation.org/articles?lat="+ lat +"&lng="+ lng +"&limit="+ number;
  loadJsonp(url,  function(data)
    {     
        cb(data.articles);
    }, "jsonp");
}

