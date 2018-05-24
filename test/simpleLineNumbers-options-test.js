var SimpleLineNumbers = require('../index');

describe('SimpleLineNumbers', () => {
    var defaultValues = {
        targetAttribute: 'line-numbers',
        lineNumbersWrapperClass: 'line-numbers-wrapper',
        codeStyles: { display: 'block', 'padding-left': '20px' },
        lineNumbersWrapperStyles: {
            position: 'absolute',
            top: '0px',
            'border-right-color': '#000',
            'border-right-width': '1px',
            'border-right-style': 'dashed',
            'border-right': '1px dashed #000'
        },
        lineNumberSpans: { display: 'block' },
        preElement: { position: 'relative' }
    };

    beforeEach(() => {
        document.body.innerHTML = `<pre>
        <code line-numbers="1">/* Gather round and see my functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>`;
    });

    test('applies the default styles to the "pre" element if none are specified', () => {
        new SimpleLineNumbers({});
        var preEls = document.getElementsByTagName('pre');
        expect(preEls[0].style._values).toEqual(defaultValues.preElement);
    });

    test('does not apply the default styles to the "pre" element if the corresponding override is specified', () => {
        var customOptions = {
            stylesheetOverrides: {
                preElement: true,
                codeElement: false,
                lineNumbersWrapper: false,
                lineNumberSpans: false
            }
        };
        new SimpleLineNumbers(customOptions);
        var preEls = document.getElementsByTagName('pre');
        var codeEls = document.getElementsByTagName('code');
        var wrappers = document.getElementsByClassName(defaultValues.lineNumbersWrapperClass);
        var lineNumberSpans = wrappers[0].getElementsByTagName('span');

        expect(preEls[0].style._values).toEqual({});
        expect(codeEls[0].style._values).toEqual(defaultValues.codeStyles);
        expect(wrappers[0].style._values).toEqual(defaultValues.lineNumbersWrapperStyles);
        expect(lineNumberSpans.length).toEqual(3);
        for (var i=0; i<lineNumberSpans.length; i++) {
            expect(lineNumberSpans[i].style._values).toEqual(defaultValues.lineNumberSpans);
        }
    });

    test('looks for the default attribute on the "code" element if none is specified', () => {
        new SimpleLineNumbers({});
        var codeEls = document.getElementsByTagName('code');
        expect(codeEls[0].hasAttribute(defaultValues.targetAttribute)).toBe(true);
        expect(codeEls[0].style._values).toEqual(defaultValues.codeStyles);
    });

    test('looks for a custom attribute on the "code" element if one is specified', () => {
        document.body.innerHTML = `<pre>
        <code thisIsaTest="1">/* Gather round and see my functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>`;
        var customOptions = { targetAttribute: 'thisIsaTest' };
        new SimpleLineNumbers(customOptions);
        var codeEls = document.getElementsByTagName('code');
        expect(codeEls[0].hasAttribute(customOptions.targetAttribute)).toBe(true);
        expect(codeEls[0].style._values).toEqual(defaultValues.codeStyles);
    });

    test('applies the default styles to the "code" element if none are specified', () => {
        new SimpleLineNumbers({});
        var codeEls = document.getElementsByTagName('code');
        expect(codeEls[0].style._values).toEqual(defaultValues.codeStyles);
    });

    test('does not apply the default styles to the "code" element if the corresponding override is specified', () => {
        var customOptions = {
            stylesheetOverrides: {
                preElement: false,
                codeElement: true,
                lineNumbersWrapper: false,
                lineNumberSpans: false
            }
        };
        new SimpleLineNumbers(customOptions);
        var preEls = document.getElementsByTagName('pre');
        var codeEls = document.getElementsByTagName('code');
        var wrappers = document.getElementsByClassName(defaultValues.lineNumbersWrapperClass);
        var lineNumberSpans = wrappers[0].getElementsByTagName('span');

        expect(preEls[0].style._values).toEqual(defaultValues.preElement);
        expect(codeEls[0].style._values).toEqual({});
        expect(wrappers[0].style._values).toEqual(defaultValues.lineNumbersWrapperStyles);
        expect(lineNumberSpans.length).toEqual(3);
        for (var i=0; i<lineNumberSpans.length; i++) {
            expect(lineNumberSpans[i].style._values).toEqual(defaultValues.lineNumberSpans);
        }
    });

    test('applies custom "padding-left" to the "code" element if values are specified', () => {
        var customOptions = { codeGapConfig: { value: 100, unit: 'em' } };
        new SimpleLineNumbers(customOptions);
        var codeEls = document.getElementsByTagName('code');
        expect(codeEls[0].style._values).toEqual({
            display: defaultValues.codeStyles.display,
            'padding-left': `${customOptions.codeGapConfig.value}${customOptions.codeGapConfig.unit}`
        });
    });

    test('looks for the default attribute on the wrapper element if none is specified', () => {
        new SimpleLineNumbers({});
        var codeEls = document.getElementsByTagName('code');
        var wrapperEl = codeEls[0].nextElementSibling;
        expect(wrapperEl.tagName).toBe('SPAN');
        expect(wrapperEl.className).toBe(defaultValues.lineNumbersWrapperClass);
        expect(wrapperEl.style._values).toEqual(defaultValues.lineNumbersWrapperStyles);
    });

    test('looks for a custom attribute on the wrapper element if one is specified', () => {
        var customOptions = { lineNumbersWrapperClass: 'thisIsaTest' }
        new SimpleLineNumbers(customOptions);
        var codeEls = document.getElementsByTagName('code');
        var wrapperEl = codeEls[0].nextElementSibling;
        expect(wrapperEl.tagName).toBe('SPAN');
        expect(wrapperEl.className).toBe(customOptions.lineNumbersWrapperClass);
        expect(wrapperEl.style._values).toEqual(defaultValues.lineNumbersWrapperStyles);
    });

    test('applies the default styles to the wrapper element if none are specified', () => {
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName(defaultValues.lineNumbersWrapperClass);
        expect(wrappers[0].style._values).toEqual(defaultValues.lineNumbersWrapperStyles);
    });

    test('does not apply the default styles to the wrapper element if the corresponding override is specified', () => {
        var customOptions = {
            stylesheetOverrides: {
                preElement: false,
                codeElement: false,
                lineNumbersWrapper: true,
                lineNumberSpans: false
            }
        };
        new SimpleLineNumbers(customOptions);
        var preEls = document.getElementsByTagName('pre');
        var codeEls = document.getElementsByTagName('code');
        var wrappers = document.getElementsByClassName(defaultValues.lineNumbersWrapperClass);
        var lineNumberSpans = wrappers[0].getElementsByTagName('span');

        expect(preEls[0].style._values).toEqual(defaultValues.preElement);
        expect(codeEls[0].style._values).toEqual(defaultValues.codeStyles);
        expect(wrappers[0].style._values).toEqual({});
        expect(lineNumberSpans.length).toEqual(3);
        for (var i=0; i<lineNumberSpans.length; i++) {
            expect(lineNumberSpans[i].style._values).toEqual(defaultValues.lineNumberSpans);
        }
    });

    test('applies the default styles to the line-number "span" elements if none are specified', () => {
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName(defaultValues.lineNumbersWrapperClass);
        var lineNumberSpans = wrappers[0].getElementsByTagName('span');

        expect(lineNumberSpans.length).toEqual(3);
        for (var i=0; i<lineNumberSpans.length; i++) {
            expect(lineNumberSpans[i].style._values).toEqual(defaultValues.lineNumberSpans);
        }
    });

    test('does not apply the default styles to the line-number "span" elements if the corresponding override is specified', () => {
        var customOptions = {
            stylesheetOverrides: {
                preElement: false,
                codeElement: false,
                lineNumbersWrapper: false,
                lineNumberSpans: true
            }
        };
        new SimpleLineNumbers(customOptions);
        var preEls = document.getElementsByTagName('pre');
        var codeEls = document.getElementsByTagName('code');
        var wrappers = document.getElementsByClassName(defaultValues.lineNumbersWrapperClass);
        var lineNumberSpans = wrappers[0].getElementsByTagName('span');
    
        expect(preEls[0].style._values).toEqual(defaultValues.preElement);
        expect(codeEls[0].style._values).toEqual(defaultValues.codeStyles);
        expect(wrappers[0].style._values).toEqual(defaultValues.lineNumbersWrapperStyles);
        expect(lineNumberSpans.length).toEqual(3);
        for (var i=0; i<lineNumberSpans.length; i++) {
            expect(lineNumberSpans[i].style._values).toEqual({});
        }
    });
});