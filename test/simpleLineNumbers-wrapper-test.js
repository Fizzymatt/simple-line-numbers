var SimpleLineNumbers = require('../index');

describe('SimpleLineNumbers', () => {
    test('targets a code element that has the default "line-numbers" class', () => {
        document.body.innerHTML = `<pre>
        <code line-numbers="1">/* Gather round and see my functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>`;
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName('line-numbers-wrapper');
        expect(wrappers.length).toBe(1);
    });

    test('targets a code element that has the default "line-numbers" class, even if no start value is specified', () => {
        document.body.innerHTML = `<pre>
        <code line-numbers>/* Gather round and see my functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>`;
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName('line-numbers-wrapper');
        expect(wrappers.length).toBe(1);
    });

    test('targets multiple code elements that have the default "line-numbers" class', () => {
        document.body.innerHTML = `<pre>
        <code line-numbers="1">/* Gather round and see my functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>
    <pre>
        <code line-numbers="1">/* Gather round and see my other functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>`;
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName('line-numbers-wrapper');
        expect(wrappers.length).toBe(2);
    });

    test('targets ONLY the code elements that have the default "line-numbers" class', () => {
        document.body.innerHTML = `<pre>
        <code line-numbers="1">/* Gather round and see my functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>
    <pre>
        <code>/* Gather round and see my other functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>
    <pre>
        <code line-numbers="1">/* Gather round and see my other functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>`;
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName('line-numbers-wrapper');
        expect(wrappers.length).toBe(2);
    });

    test('takes no action if there is no default "line-numbers" class present', () => {
        document.body.innerHTML = `<pre>
        <code>/* Gather round and see my functions */
    const x = () => 'this is a string';
    const y = () => 'this is another string';
        </code>
    </pre>`;
        new SimpleLineNumbers({});
        var wrappers = document.getElementsByClassName('line-numbers-wrapper');
        expect(wrappers.length).toBe(0);
    });
});
