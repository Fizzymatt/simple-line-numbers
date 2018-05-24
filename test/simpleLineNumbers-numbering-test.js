var SimpleLineNumbers = require('../index');

describe('SimpleLineNumbers', () => {
    test('applies the default numbering if no start value is specified', () => {
        document.body.innerHTML = `<pre>
        <code line-numbers>/* Gather round and see my functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>`;
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName('line-numbers-wrapper');
        var lineNumEls = wrappers[0].getElementsByTagName('span');
        expect(lineNumEls.length).toBe(3);
        for (var i=0; i<=2; i++) expect(lineNumEls[i].innerText).toBe(i+1);
    });

    test('applies the correct numbering if a start value is specified', () => {
        document.body.innerHTML = `<pre>
        <code line-numbers="1">/* Gather round and see my functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>`;
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName('line-numbers-wrapper');
        var lineNumEls = wrappers[0].getElementsByTagName('span');
        expect(lineNumEls.length).toBe(3);
        for (var i=0; i<=2; i++) expect(lineNumEls[i].innerText).toBe(i+1);
    });

    test('applies the correct numbering, using the start value as an offset', () => {
        var numsStartVal = 8;
        document.body.innerHTML = `<pre>
        <code line-numbers="${numsStartVal}">/* Gather round and see my functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>`;
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName('line-numbers-wrapper');
        var lineNumEls = wrappers[0].getElementsByTagName('span');
        expect(lineNumEls.length).toBe(3);
        for (var i=0; i<=2; i++) expect(lineNumEls[i].innerText).toBe(i+numsStartVal);
    });
});
