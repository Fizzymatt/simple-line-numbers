# simple-line-numbers #

## Description ##

A front-end NPM module designed to display line-numbers against code examples that are marked-up inside ```<pre>``` and ```<code>``` elements.

## Purpose ##

I required a small, standalone module that I could use to create left-aligned line-numbers without having to depend upon a language highlighting tool for line-numbering functionality.

## Instructions ##

- install the module:

```bash
npm i simple-line-numbers
```

- include and instantiate the module in your code:

```javascript
// ES6
import SimpleLineNumbers from 'simple-line-numbers';
new SimpleLineNumbers({});

// ES5
require('simple-line-numbers')({});
```

- on the page(s) where you run simple-line-numbers, ensure that you wrap your code examples in ```<pre>``` and ```<code>``` elements as below (**notice the line-numbers attribute**):

```html
<pre>
    <code line-numbers="1">/* Gather round and see my functions */
const x = () => 'this is a string';
const y = () => 'this is another string';
    </code>
</pre>
```

## The line-numbers attribute ##

If you want simple-line-numbers to produce numbers against your code examples then the ```<code>``` tag must contain a **line-numbers** attribute. This is **line-numbers** by default, and can actually be customised.

The value tells simple-line-numbers which number to use on the first line (defaults to 1 if you don't provide a value).

So, ```<code line-numbers="7">....``` will produce numbers against our code as follows:

```text
7
8
9
10
11
12
13
14
....and so on 
```

## Styling Options ##

There are several customisations that can be made to the default behaviour of simple-line-numbers. If any of these options is not provided then a default value will be used.

For example (default values are shown):

```javascript
new SimpleLineNumbers({
    targetAttribute: 'line-numbers',
    lineNumbersWrapperClass: 'line-numbers-wrapper',
    lineNumbersStyles: {
        paddingRight: '1rem',
        borderRight:'#b5f7ff 1px dashed'
    },
    codeGapConfig: { value: 20, unit: 'px' },
    stylesheetOverrides: {
        preElement: false,
        codeElement: false,
        lineNumbersWrapper: false,
        lineNumberSpans: false
    },
    floatingLineNumbers: false
});
```

- **targetAttribute**: specify the class name that simple-line-numbers should use to identify your ```<code>``` tags.

- **lineNumbersWrapperClass**: specify the class that will be applied to the parent ```<span>``` element that simple-line-numbers uses to surround the line-numbers that it generates.

For example (remember that simple-line-numbers generates this markup for you):

```html
<span class="line-numbers-wrapper">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
    <span>7</span>
</span>
```

- **lineNumbersStyles.paddingRight**: the padding that will be applied to the right-hand side of the parent ```<span>``` element that simple-line-numbers uses to surround the line-numbers that it generates.

- **lineNumbersStyles.borderRight**: the type of border that will be applied to the right-hand side of the parent ```<span>``` element that simple-line-numbers uses to surround the line-numbers that it generates.

- **codeGapConfig**: by default, simple-line-numbers detects the widest line number (e.g. '111' is three times as wide as '1') and creates a gap between the code example and the line-numbers that is large enough to accomodate this. You can use the **codeGapConfig** to supply a value and a unit that will allow the gap to be tweaked.

- **stylesheetOverrides**: these are options that will allow all javascript generated values (including defaults) to be ignored in favour of those supplied by stylesheets.
For example, if all of these value were set to **true** then you might supply css styles similar to the following (obviously this will depend on your requirements):

```css
code {
    display: block;
    padding-left: 70px;
}

pre {
    position: relative;
}

.line-numbers-wrapper {
    position: absolute;
    top: 0;
    padding-right: 1rem;
    border-right: #000 1px dashed;
}

.line-numbers-wrapper span {
    display: block;
}
```

- **floatingLineNumbers**: this will allow the text in the ```<code>``` block to disappear beneath the line-numbers when scrolled, maintaining the visibility of the line-numbers at all times.

NOTE: you'll probably need to give the line-numbers a background colour to make this look nice. You can use the **lineNumbersStyles** option for this.

e.g.

```javascript
lineNumbersStyles: {
        paddingRight: '1rem',
        borderRight:'#b5f7ff 1px dashed',
        backgroundColor: '#fff'
    },
```

## Running the tests ##

You'll need to have **jest** installed globally, so run the following if you haven't installed **jest** already:

```npm i jest -g```

After you've installed **jest**, you can run the tests with:

```npm test```

## Using the test harness ##

- navigate to the test-harness directory
- open the **index.html** file in a browser

If necessary, rebuild **bundle.js** by running ```browserify client.js -o bundle.js``` at the terminal

If you don't have **browserify**, install it with ```npm i -g browserify```

## More info ##

For instructions on how to use the built-in test harness, please read my article: [How to use the simple-line-numbers NPM package to add line numbers to your code examples](https://hackerbox.io/articles/simple-line-numbers).

Also, don't forget to check out some of my other articles (e.g. [Passing environment variables into a Dockerised NGINX configuration](https://hackerbox.io/articles/dockerised-nginx-env-vars/)) to see how I've used the plugin for my own purposes.

Note that in my articles I'm using a third-party plugin called [microlight](https://www.npmjs.com/package/microlight) for the actual code highlighting.

- [Visit my blog](https://hackerbox.io)
- [Follow me on Twitter](https://twitter.com/hackerb0x)
- [Find me on Facebook](https://www.facebook.com/hackerboxio-199712474109488/)
