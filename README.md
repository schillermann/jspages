# Pages Framework Object Oriented With JavaScript

JsPages is an experimental prototype of a web framework, inspired by [Yegor Bugayenko](https://www.yegor256.com/) with the project [jpages](https://github.com/yegor256/jpages).

## Concept of the Framework

It is supposed to be a reference to Alan Kay's Smalltalk and the origin of JavaScript with its lightness.

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
