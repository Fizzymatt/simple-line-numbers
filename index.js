
function SimpleLineNumbers () {
    this.init = function(options) {
        var targetClass = options && options.targetClass || 'line-numbers';
        var lineNumbersWrapperClass = options && options.lineNumbersWrapperClass || 'line-numbers-wrapper';
        var lineNumbersStyles = options && options.lineNumbersStyles || { paddingRight: '1rem', borderRight: '#000 1px dashed' };
        var codeGapConfig = options && options.codeGapConfig || { value: 20, unit: 'px' };
        var defaultStartNumber = 1;
        var stylesheetOvr = options && options.stylesheetOverrides || {};

        var codeEls = document.getElementsByTagName('code');
        for (var item in codeEls) {
            if (!codeEls[item].hasAttribute || !codeEls[item].hasAttribute(targetClass)) continue;

            var preEl = codeEls[item].parentNode;
            if (!preEl) continue;

            var intStartValue = parseInt(codeEls[item].getAttribute(targetClass)) || defaultStartNumber;
            var nodes = codeEls[item].childNodes;

            for (var n = 0; n < nodes.length; n++) {
                var lineCount = (nodes[n].nodeValue.match(/\n/g) || []).length;
                var wrapperEl = document.createElement('span');
                wrapperEl.setAttribute('class', lineNumbersWrapperClass);

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

                preEl.appendChild(wrapperEl);
                if (!stylesheetOvr.preElement) preEl.style.position = 'relative';

                if (!stylesheetOvr.codeElement) {
                    codeEls[item].style.display = 'block';
                    codeEls[item].style.paddingLeft = '' + (wrapperEl.offsetWidth + codeGapConfig.value) + codeGapConfig.unit;
                }
            }
        }
    }
};

module.exports = SimpleLineNumbers;