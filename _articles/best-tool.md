---
title: "What's the Best Tool"
excerpt: "For Domain Storytelling"
toc: true
toc_sticky: true
header: 
  overlay_color: "#f59542"
  overlay_image: /assets/images/home/sunflower-9.jpeg
  teaser: /assets/images/articles/best-tool/teaser.jpg
author: hofstef
# perma-link is generated from file name
# see https://mmistakes.github.io/minimal-mistakes/docs/layouts/#layout-collection for more layout options
---

This article compares three digital tools for Domain Storytelling:
- A [template for Miro](https://miro.com/miroverse/domain-storytelling/)
- [Egon](https://egon.io), an open-source modeling tool that runs in your browser
- A set of [PlantUML macros](https://github.com/johthor/DomainStory-PlantUML)

To compare the tools, I modeled the same Domain Story with each of them: A fine-grained, digitalized, as-is story about risk management at the fictional auto leasing company Alphorn – a case study from out [book](/book). It is not necessary to understand the background of the case study. I simply chose this example because despite being small it illustrates the notation and grammar of Domain Storytelling very well.

> Disclaimer: I am responsible for two out of these three tools: Egon and the Miro template.

# The Miro Template

[Miro](https://miro.com) is a collaborative online whiteboard. It is a commercial tool but a free plan is available. The [Domain Storytelling template](https://miro.com/miroverse/domain-storytelling/) is part of the [Miroverse](https://miro.com/miroverse/), a community platform where any Miro user can publish a template. 

I created the template because in my online trainings, some participants wanted to use Miro and I saw them struggle: Should actors and work objects be modeled with sticky notes? Is it a good idea to write the sequence number into the arrows label? Where do annotations go? The template provides answers to these (and more) questions. Of course, you could arrive at different (maybe even better) conclusions. Here's my solution:

![A domain story modeled with Miro](/assets/images/articles/best-tool/01-miro-example.jpg)

- Actors and work objects are modeled with icons and a label that are grouped together. Actors are larger than work objects, with actors taking up the space of a size S sticky note.
- Sequence numbers are separate elements. Activities are modeled with arrows that start at sequence numbers.I recommend to snap the arrow to the sequence number so that they can be moved easily together. 
- Annotations are collected in the top right corner. The activities that they refer to are referenced by number.

The template comes with a palette and a default icons set:

![The pallette](/assets/images/articles/best-tool/02-palette.jpg)

The icon set should be adapted to the domain that is modeled. The template contains some suggestions for that.

I would be interested to get your feedback on the template, e.i. leave a *comment* or a like:

![Miroverse](/assets/images/articles/best-tool/03-miroverse.png)

# Egon – The Domain Story Modeler

Egon was specifically built for modeling domain stories. Hence, it comes with a lot of features that help you to model quickly:

![A domain story modeled with Egon](/assets/images/articles/best-tool/04-egon-example.egn.svg)

- Activities are automatically numbered
- Stories can be replayed sentence by sentence
- Stories can be exported as (animated) SVG images and documented in other systems, e.g. Confluence.
- Custom icon set

Egon runs in your browser, is open source, does not require an account, does not track you, and does not process or store your data. If you don't want to use the version we provide at [https://egon.io](https://egon.io), you can run it locally as a Docker container or host it on your own webserver.

# PlantUML Macros

PlantUML is a popular modeling tool. As the name suggests, it was originally developed for modeling UML diagrams. It is extensible and custumizable.

set of macros by johannes thorn

![A domain story modeled with PlantUML](/assets/images/articles/best-tool/05-PlantUML-example.svg)

source code

link github
very different from other tools. no live modelling => diagrams as code
included in standard library (not newest version)
v0.3 fully supports DST syntax
modeling language
auto numbering: _
shorthands
layout is generadted
uses material icons like egon => extensible
lots of work went into this
personally, I would not use it for live modeling in workshops (too slow, distracting). It was intended for documentation
different tools implement plantUML, different library versions

# Comparison

best tools is the one that works best for you; e.g. if you have everything in Miro or PlantUML, ...
tools are conceptually different: ![Conceptual differences]()
open source vs. vendor licking
replay still killer feature


