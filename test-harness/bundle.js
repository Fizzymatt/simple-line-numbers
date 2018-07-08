(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function SimpleLineNumbers (options) {
    var targetAttribute = options && options.targetAttribute || 'line-numbers';
    var lineNumbersWrapperClass = options && options.lineNumbersWrapperClass || 'line-numbers-wrapper';
    var lineNumbersStyles = options && options.lineNumbersStyles || { paddingRight: '1rem', borderRight: '#000 1px dashed' };
    var codeGapConfig = options && options.codeGapConfig || { value: 20, unit: 'px' };
    var defaultStartNumber = 1;
    var floatingLineNumbers = options && options.floatingLineNumbers || false;
    var stylesheetOvr = options && options.stylesheetOverrides || {};

    var codeEls = document.getElementsByTagName('code');

    for (var item in codeEls) {
        if (!codeEls[item].hasAttribute || !codeEls[item].hasAttribute(targetAttribute)) continue;

        var preEl = codeEls[item].parentNode;
        if (!preEl || preEl.tagName.toLowerCase() !== 'pre') continue;

        var intStartValue = parseInt(codeEls[item].getAttribute(targetAttribute)) || defaultStartNumber;
        var nodes = codeEls[item].childNodes;
        if (nodes.length === 0) continue;

        var wrapperEl = document.createElement('span');

        wrapperEl.setAttribute('class', lineNumbersWrapperClass);
        preEl.appendChild(wrapperEl);

        for (var n = 0; n < nodes.length; n++) {
            var lineCount = (nodes[n].nodeValue.match(/\n/g) || []).length;
            if (lineCount === 0 && nodes[n].nodeValue !== '') lineCount = 1;

            if (!stylesheetOvr.lineNumbersWrapper) {
                wrapperEl.style.position = 'absolute';
                wrapperEl.style.top = 0;
                Object.assign(wrapperEl.style, lineNumbersStyles);
            }

            for (var l = 0; l < lineCount; l++) {
                var el = document.createElement('span');
                el.innerText = intStartValue + l;
                if (!stylesheetOvr.lineNumberSpans) el.style.display = 'block';
                wrapperEl.appendChild(el);
            }
        }

        
        if (!stylesheetOvr.preElement) preEl.style.position = 'relative';

        if (!stylesheetOvr.codeElement) {
            floatingLineNumbers && (codeEls[item].style.overflow = 'auto');
            codeEls[item].style.display = 'block';
            codeEls[item].style.paddingLeft = '' + (wrapperEl.offsetWidth + codeGapConfig.value) + codeGapConfig.unit;
        }
    }
};

module.exports = SimpleLineNumbers;
},{}],2:[function(require,module,exports){
var SimpleLineNumbers = require('../index');
new SimpleLineNumbers ({
    floatingLineNumbers: true,
    lineNumbersStyles: {
        paddingRight: '1rem',
        borderRight: '#000 1px dashed',
        backgroundColor: '#fff'
    }
});
},{"../index":1}]},{},[2]);
