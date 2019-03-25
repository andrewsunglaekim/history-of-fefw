# History of front end frameworks
> slide 1

In this talk, we'll explore how far we've come down the evolutionary chain of front end development. Through this exploration, we highlight the importance of the underlying technologies of front end frameworks that we know and love today.

> slide 2

One of the [Merriam-Webster dictionary definitions](https://www.merriam-webster.com/dictionary/history?utm_campaign=sd&utm_medium=serp&utm_source=jsonld) of history is

```
a chronological record of significant events (such as those affecting a nation or institution) often including an explanation of their causes
```

People, throughout time, leverage history as lessons learned. We, as developers, are no different. It's important to know where we came from to identify problems and situations we've already solved.

It is often said that winners write the history books. Fortunately for developers, we learn from both winners and losers.

> slide 3

This slide was just meant as a joke, but the reality is that we've come ...

> slide 4

this far in front end development. Granted, there is still a bunch of jQuery code out in production, but it's not a tool that we reach for anymore as front end developers starting on new projects. It's not too long ago that jQuery had a long reign.

> slide 5

Javascript in the earlier days was plagued with browser compatibility issues. jQuery solved a lot of those problems and much more. It made our lives easier and became the gold standard of javascript development. However, we started to feel some of the pains that jQuery alone couldn't solve. So we started building lots of frameworks.

Another scarier or potentially more exciting prospect is this:

> slide 6

Technology is constantly innovating. What is considered best practice now could be obsolete in the conceivable future.

> slide 7

This is why we are front end developers first and framework developers second.

Let's dive into some front end history to get some insights into where we are today in front end code.

> slide 8

## A brief history lesson - The beginning

In 1980, Tim Berners-Lee developed and prototyped a system called ENQUIRE at CERN(European Organization for Nuclear Research) that allowed researchers there to communicate with each other. In 1990, HTML was born based off that system.

> slide 9

Soon after, Håkon Wium Lie proposed the first iteration of CSS in 1994. By 1996, The W3C CSS recommendation(CSS1) is released.

Also in 1996, the iconic space jam website was created. Look at that masterpiece.

> slide 10


In 1995, Netscape Communications hired Brendan Eich to embed a programming language into their browser. In May of 1995, Brendan Eich wrote a prototype in 10 days under the name Mocha while officially being called LiveScript. It later was renamed to Javascript to ride on the marketing coat tails of the popular Java programming language.

## Click events

> slide 11

Javascript changed everything. There was no way to add any dynamic behaviors to an application until the advent of this browser language. We were no longer restricted to static elements, we could now manipulate the DOM programmatically and add event driven behaviors. With the introduction of JS, developers could start adding behaviors to our website.

Like a click event in React

> slide 12

A click event in Vue

> slide 13

A click event in jQuery

> slide 14

A click event in vanilla JS

> slide 15

What's interesting about this slide, is that it's the only slide where the code just works by itself. Probably more fascinating then that, is the very fact that this last slide is the underlying technology for the previous 3 slides.

## AJAX

Does anyone remember mapquest?

> slide 16

This site was awesome for its time! But each interaction with the map was an entire page load. Those blue arrows and "zoom" functionalities were requests made by servers that required page refreshes for everything. There was probably a lot of pain points in developing UI's with restrictions of having to make server requests for data. That is until 1998.

> slide 17

In 1998, the Microsoft Outlook Web Access team created the core competencies that surrounded the `XMLHttpRequest` object. We could now fetch data asynchronously and not lock users out of the UI. This changed everything.

> slide 18

Well, not right away at least. By 2004 and 2005 Google leveraged the technology for their gmail and google maps web applications. By April of 2006, the w3c released the first specification for the XMLHttpRequest object.

Another amazing thing was introduced in 2006

> slide 19

[jQuery](https://en.wikipedia.org/wiki/JQuery#History) was introduced and initially released in August 26, 2006.

Early on it's biggest advantage was that it solved a lot of major browser compatibility issues.

The native language and current browser implementations solve a lot of those historical issues. But we as developers are still facing browser compatibility issues today.

This library made one of the biggest impacts on web development in front end development history.

It lowered the barrier to entry for creating beautiful UI's with event driven behaviors. All you needed was a text editor and a browser.

It made writing javascript fun. It was popular for a very long time.

> slide 20

As the barrier to entry for JS lowered, the feature set that javascript provided was becoming more apparent to those outside of technologists.

Designers, product owners, project managers were evolving as fast as the technology was moving.

As product designers and project managers grew to learn the capabilities that JS could provide, the UI's became much more complex

> slide 21

Heres a graphic and a bit of code to illustrate how jQuery just wasn't enough for developers.

> slide 22

Even though jQuery was a great success, it also born other frustrations that we didn't know about at first.

We began to realize our code lacked structure. We were chaining massive amounts of unmaintainable code with little regards to abstraction and encapsulation.

There was DOM introspection in lieu of state management.

We had problems...

> slide 23

While this all was happening. Server side technologies had been innovating and rolling out new technologies as well.
Technologies Like

- spring MVC
- Ruby on Rails
- Django

There was a common coding pattern, MVC. The Model View Controller paradigm coupled with REST became a standard for server side web development.

It set the precedent for the front end to aspire to.

> slide 24

A quick aside. We've innovated in recent history, but most things we've come up with aren't ostensibly new.

We very much stand on the shoulders of giants. So many coding patterns are used on both server and client. Even networking and code as infrastructure.

So much of code knowledge is foundational in that it builds upon itself. Things are easier to put on top of the foundation the broader and stronger it is.

> slide 25

Anyways back into our history lesson. We struggled with the growing complexity of uis and building them with jQuery.

We ultimately wanted server rendered views with none of the down side.

We wanted SPA architecture.

We needed the front end framework

> slide 26

BackboneJS and AngularJS were some of the very first JS frameworks to be released.

> slide 27

We solved so many problems!

- Client side routing, enabling SPA architecture
- Better encapsulation of component logic
- Abstraction of some of the explicit DOM interactions
- code maintainability and developer ergonomics
- quicker app prototyping
- (AngularJS) 2 way data binding – now a standard feature for most front end frameworks

[2-way data binding codepen](https://codepen.io/manishiitg/pen/ZYOmbB)

> slide 28

But then came some of the problems.

Dependency management became a nightmare. Whether it was source code or vendor code it became pretty unwieldy when the application started to scale in the early years.

> slide 29

nodeJS was a keystone technology in solving many of these dependency management issues we were facing.

It allowed us to build and compile our code in a language we were all comfortable with, javascript.
