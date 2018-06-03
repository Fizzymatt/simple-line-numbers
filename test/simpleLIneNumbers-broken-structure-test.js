var SimpleLineNumbers = require('../index');

describe('SimpleLineNumbers', () => {
    test('takes no action of the "pre" element is missing', () => {
        document.body.innerHTML = `<code line-numbers="1">/* Gather round and see my functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>`;
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName('line-numbers-wrapper');
        expect(wrappers.length).toBe(0);
    });

    test('takes no action if the "code" block is empty', () => {
        document.body.innerHTML = `<pre>
        <code line-numbers="1"></code>
    </pre>`;
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName('line-numbers-wrapper');
        expect(wrappers.length).toEqual(0);
    });

    test('creates a single line-number if only one line is used (without a line-break)', () => {
        document.body.innerHTML = `<pre>
        <code line-numbers="1">thereIsNoLinebreak</code>
    </pre>`;
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName('line-numbers-wrapper');
        var lineNumEls = wrappers[0].getElementsByTagName('span');
        expect(lineNumEls.length).toBe(1);
    });
});