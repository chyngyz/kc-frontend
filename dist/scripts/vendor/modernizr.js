/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */; // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function() {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url("../../ is a reliable method for detecting ACTUAL support for this! setCss('background:url(https:/),url(https:/),red url(https:/)'); / If the UA supports multiple backgrounds, there should be three occurrences / of the string "url(" in the return value for elemStyle.background return (/(url/s*/(.*?){3}/).test(mStyle.background); }; / this will false positive in Opera Mini / github.com/Modernizr/Modernizr/issues/396 tests['backgroundsize'] = function() { return testPropsAll('backgroundSize'); }; tests['borderimage'] = function() { return testPropsAll('borderImage'); }; / Super comprehensive table about all the unique implementations of / border-radius: muddledramblings.com/table-of-css3-border-radius-compliance tests['borderradius'] = function() { return testPropsAll('borderRadius'); }; / WebOS unfortunately false positives on this test. tests['boxshadow'] = function() { return testPropsAll('boxShadow'); }; / FF3.0 will false positive on this test tests['textshadow'] = function() { return document.createElement('div').style.textShadow === ''; }; tests['opacity'] = function() { / Browsers that actually have CSS Opacity implemented have done so / according to spec, which means their return values are within the / range of [0.0,1.0] - including the leading zero. setCssAll('opacity:.55'); / The non-literal . in this regex is intentional: / German Chrome returns this value as 0,55 / github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632 return (/^0.55$/).test(mStyle.opacity); }; / Note, Android < 4 will pass this test, but can only animate / a single property at a time / goo.gl/v3V4Gp tests['cssanimations'] = function() { return testPropsAll('animationName'); }; tests['csscolumns'] = function() { return testPropsAll('columnCount'); }; tests['cssgradients'] = function() { /** * For CSS Gradients syntax, please see: * webkit.org/blog/175/introducing-css-gradients/ * developer.mozilla.org/en/CSS/-moz-linear-gradient * developer.mozilla.org/en/CSS/-moz-radial-gradient * dev.w3.org/csswg/css3-images/#gradients- */ var str1 = 'background-image:', str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));', str3 = 'linear-gradient(left top,#9f9, white);'; setCss( / legacy webkit syntax (FIXME: remove when syntax not in use anymore) (str1 + '-webkit- '.split(' ').join(str2 + str1) + / standard syntax / trailing 'background-image:' prefixes.join(str3 + str1)).slice(0, -str1.length) ); return contains(mStyle.backgroundImage, 'gradient'); }; tests['cssreflections'] = function() { return testPropsAll('boxReflect'); }; tests['csstransforms'] = function() { return !!testPropsAll('transform'); }; tests['csstransforms3d'] = function() { var ret = !!testPropsAll('perspective'); / Webkit's 3D transforms are passed off to the browser's own graphics renderer. / It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in / some conditions. As a result, Webkit typically recognizes the syntax but / will sometimes throw a false positive, thus we must do a more thorough check: if ( ret && 'webkitPerspective' in docElement.style ) { / Webkit allows this media query to succeed only if the feature is enabled. / `@media (transform-3d),(-webkit-transform-3d){ ... }` injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) { ret = node.offsetLeft === 9 && node.offsetHeight === 3; }); } return ret; }; tests['csstransitions'] = function() { return testPropsAll('transition'); }; /*>>fontface*/ / @font-face detection routine by Diego Perini / javascript.nwbox.com/CSSSupport/ / false positives: / WebOS github.com/Modernizr/Modernizr/issues/342 / WP7 github.com/Modernizr/Modernizr/issues/538 tests['fontface'] = function() { var bool; injectElementWithStyles('@font-face {font-family:"font";src:url("https:")}',function( node,rule ){var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText:sheet.cssText || '') : ''}article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

          
          'version': version,

          
          'shivCSS': (options.shivCSS !== false),

          
          'supportsUnknownElements': supportsUnknownElements,

          
          'shivMethods': (options.shivMethods !== false),

          
          'type': 'default',

          // shivs the document according to the specified `html5` object options
          'shivDocument': shivDocument,

          //creates a shived element
          createElement: createElement,

          //creates a shived documentFragment
          createDocumentFragment: createDocumentFragment
        };

        

        // expose html5
        window.html5 = html5;

        // shiv the document
        shivDocument(document);

    }(this, document));
    

    // Assign private properties to the return object with prefix
    Modernizr._version      = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    
    Modernizr._prefixes     = prefixes;
    
    
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;
    

    
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq            = testMediaQuery;
    

    
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent      = isEventSupported;
    

    
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };
    

    
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps  = testPropsAll;
    


    
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr{position:absolute}boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to,you might do something like... // // var transEndEventNames ={//       'WebkitTransition':'webkitTransitionEnd',//'MozTransition' : 'transitionend',//'OTransition' : 'oTransitionEnd',//'msTransition' : 'MSTransitionEnd',//'transition' : 'transitionend'//})(this, this.document);
__ESCAPED_SOURCE_END_CLEAN_CSS__