# Pages Framework Object Oriented With JavaScript

JsPages is an experimental prototype of a web framework, inspired by [Yegor Bugayenko](https://www.yegor256.com/) with the project [jpages](https://github.com/yegor256/jpages).

Check also my related projects out.

1. [PhpPages](https://github.com/schillermann/phppages)

## Concept of the Framework

It is supposed to be a reference to Alan Kay's Smalltalk and the origin of JavaScript with its lightness.

### Building and transpiling free

Scripting languages ​​like JavaScript were developed to make changes faster and easier, in contrast to compiler languages.
So you don't need any extra effort to get JsPages framework running.

### Type support

With [JSDoc](https://jsdoc.app/) you have type support, without all the overhead of TypeScript.

### [class](<https://en.wikipedia.org/wiki/Class_(computer_programming)>) free

The keyword class was introduced to align with languages ​​like C++ or Java.
However, this involves some technical overhead to make the object look like a class.
In the end, it only looks like one and can be disappointing in its behavior if you expect a real class.
To create an object in javascript, you do not need a class.

### [static](<https://en.wikipedia.org/wiki/Static_(keyword)>) free

Every object is independent.
Static methods, on the other hand, have no implied scoping to an object.
It's just a collection of functions.

### [DTO](https://en.wikipedia.org/wiki/Data_transfer_object) free

Like in C, DTO is a struct that holds data.
However, OOP has the concept of encapsulating data and behavior together.

## Quickstart

This is how you start a Web Server:

```javascript
import { page, webServer } from "jspages";

webServer(page.simplePage("Hello World!")).start();
```

## Web Server page with route

```javascript
import { page, webServer } from "jspages";

webServer({
  withMetadata: function (name, value) {
    if (name !== page.pageInterface.PATH) {
      return this;
    }

    if (value === "/profile") {
      return page.textPage("It's me. It's Mario.");
    }

    return this;
  },
  viaOutput: function (output) {
    return output.withMetadata(page.pageInterface.STATUS_CODE, "404");
  },
}).start();
```
