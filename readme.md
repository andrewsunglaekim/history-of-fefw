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

Even though jQuery was a great success, it also born other frustrations that we didn't know about at first.

We began to realize our code lacked structure. We were doing DOM introspection in lieu of state management


## Next

Great, we've got our 3 pillars of front end development by 1995. So everything was simple and easy to develop once these specs came out.

Not in the slightest. We faced many issues and still do today with compatibility issues between browsers. That didn't stop developers from creating new features against the browser though.

And we, as developers today, are probably pretty happy with the next "revolution" in front end code.

## AJAX
 This gave us as developers the ability to fetch things asynchronously. It allowed us to finally make server requests on the client!

Though there was access to this technology by 1998, it wasn't largely popularized until Google leveraged the technology for their popular Gmail and Google maps web applications.

By April of 2006, the w3c released the first specification for XMLHttpRequest object.


We are javascript developers first; FE Framework developers second.
