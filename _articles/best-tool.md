---
title: "What's the Best Tool?"
excerpt: "A Comparison."
toc: true
toc_sticky: true
header: 
  overlay_color: "#f59542"
  overlay_image: /assets/images/home/sunflower-9.jpeg
  teaser: /assets/images/articles/best-tool/teaser.jpg
author: hofstef
# perma-link is generated from file name
# see https://mmistakes.github.io/minimal-mistakes/docs/layouts/#layout-collection for more layout options
gallery01:
  - url: /assets/images/articles/best-tool/01-miro-example.jpg
    image_path: /assets/images/articles/best-tool/01-miro-example-small.jpg
    alt: "Miro Example"
    title: "Miro Example"
gallery02:
  - url: /assets/images/articles/best-tool/02-palette.jpg
    image_path: /assets/images/articles/best-tool/02-palette-small.jpg
    alt: "Miro Template - Palette"
    title: "Miro Template - Palette"
galleryPlantUML:
  - url: /assets/images/articles/best-tool/05-PlantUML-example.svg
    image_path: /assets/images/articles/best-tool/05-PlantUML-example.svg
    alt: "A domain story modeled with PlantUML"
    title: "A domain story modeled with PlantUML"
---

This article compares three digital tools for Domain Storytelling:
- A [template for Miro](https://miro.com/miroverse/domain-storytelling/)
- [Egon](https://egon.io), an open-source modeling tool
- A [PlantUML library](https://github.com/johthor/DomainStory-PlantUML)

To compare the tools, I modeled the same Domain Story with each of them: A fine-grained, digitalized, as-is story about risk management at the fictional auto leasing company Alphorn – a case study from our [book](/book). It is not necessary to understand the background of the case study. I chose this example because it is small yet it illustrates the notation and grammar of Domain Storytelling very well.

> Disclaimer: I created two out of these three tools: Egon and the Miro template.

# The Miro Template

[Miro](https://miro.com) is a collaborative online whiteboard. It is a commercial tool but a free plan is available. The [Domain Storytelling template](https://miro.com/miroverse/domain-storytelling/) is part of the [Miroverse](https://miro.com/miroverse/), a community platform where any Miro user can publish a template. 

I created the template because in my online trainings, some participants wanted to use Miro and I saw them struggle: 

- Should actors and work objects be modeled with sticky notes?
- Is it a good idea to write the sequence number into the arrows label?
- Where do annotations go?
 
The template provides answers to these (and more) questions. Of course, you could arrive at different (maybe even better) conclusions. Here's my solution:

{% include gallery id="gallery01" caption="A domain story modeled with Miro." %}

- Actors and work objects are modeled with icons and labels that are grouped together. Actors are larger than work objects, with actors taking up the space of a size S sticky note.
- Sequence numbers are separate elements. 
- Activities are modeled with arrows. Every activity starts at a sequence number. I recommend to snap the arrow to the sequence number so that they can be easily moved together. 
- Annotations are collected in the top right corner. The activities that they refer to are referenced by number.

The template comes with a palette and a default icons set:

{% include gallery id="gallery02" caption="The palette." %}

The icon set should be adapted to the domain that is modeled. The template contains some suggestions for that.

> I am interested in your feedback. Please leave a comment or a like on Miroverse:
![Miroverse](/assets/images/articles/best-tool/03-miroverse.png)

# Egon – The Domain Story Modeler

Egon was specifically built for modeling domain stories. Hence, it comes with a lot of useful features (see [User Guide](https://egon.io/howto) for a full list of features):

![A domain story modeled with Egon](/assets/images/articles/best-tool/04-egon-example.egn.svg)

- Activities are automatically numbered (speeds up modeling)
- Stories can be replayed sentence by sentence (good for reviewing the story)
- Stories can be exported as (animated) SVG images (for documentation in other systems, e.g. Confluence)
- Customizable icon set (to make your stories more tangible)

Egon is open source software (see our [GitHub Repository](https://github.com/WPS/egon.io). It runs in your browser, does not require an account, does not track you, and does not process or store your data. If you don't want to use the version we provide at [https://egon.io](https://egon.io), you can run it locally as a Docker container or host it on your own webserver.

# PlantUML Library

PlantUML is a popular UML modeling tool. Thanks to its extensibility, it also supports a number of non-UML diagram types.

In contrast to the other two tools, the visual representation of the model is not created by hand. Instead, it is generated from a textual description. This approach is called "diagrams as code". Here's the code for the risk management example and the corresponding diagram:

```
@startuml
'v0.3.1
!include <domainstory/Domainstory>

Person(riskmanager, risk manager)
Person(salesperson, sales person)
System(rating, rating agency website)
System(risk, risk management system)

Document(risk_assessment, $label=risk assessment, $note=needs to be present in the\nsystem because only then the \nvoting result can be entered)
Document(credit_rating_form, $label=credit rating form)
Document(contract, $label=contract)
Document(report, $label=credit rating report (PDF))

activity(_, riskmanager, fills out, credit_rating_form)
activity(., credit_rating_form, with information from, Document: contract, on, rating)

activity(_<, rating, generates, Document: credit rating report (PDF), for, riskmanager)

activity(_, riskmanager, creates, risk_assessment)
activity(., risk_assessment, for, contract, with, report)
activity(., report, in, risk)

activity(_, riskmanager, decides on, Info: voting result, in, risk)

activity(_, riskmanager, passes on, Document: voted contract, to, salesperson)

activity(_, salesperson, signs, Document: contract)

@enduml
```

{% include gallery id="galleryPlantUML" caption="A domain story modeled with PlantUML." %}

The source code contains terms like "activity", "person" and "system". This means that a diagram is specified with a *modeling language* (rather than mere visual elements like rectangles and lines). This modeling language is defined by a set of PlantuML macros developed by Johannes Thorn. His public [GitHub repository](https://github.com/johthor/DomainStory-PlantUML) contains excellent documentation of his library.

Beginning with version 0.3, PlantUML fully supports the syntax of Domain Storytelling. It even provides auto-numbering of activities, parallel activities, an extensible icon set, and sentences with multiple work objects. 

The look of the diagrams was inspired by Egon, e.g. the same icon family is used. Since PlantUML is themeable, you can change that.

Since the story is generated from code, you have limited control over the layout. There are, however, a few parameters that influence the layout algorithm. Again, I refer you to the documentation on GitHub for the details. In my experience with other diagrams-as-code tools, these layout optimizations should be used scarcely and only as the last step of modeling (because every new sentence will change the layout anyway).

> The small print: PlantUML is not just *one* tool. There are many editors that support PlantUML (e.g. plugins for your favorite IDE). To use them for Domain Storytelling, you need to include the Domain Storytelling library. 

# Comparison

The three tools are conceptually different: 

![Conceptual differences](/assets/images/articles/best-tool/teaser.jpg)

- Egon and the Miro template were designed for visual diagramming during workshops. The conceptual difference is that Miro is just a general purpose drawing tool whereas Egon is a specialized modeling tool.
- PlantUml generates diagrams from code. It was designed as a documentation tool, i.e. to digitalize domain stories that were modeled on whiteboards with pen and sticky notes. 

Egon and PlantUML are open-source software. They use text-based formats for describing domain stories that could be converted to input formats for other tools. Hence, there is no vendor lock-in. Miro is a commercial tool and your diagrams can only be exported as images.

Similarly, Egon and PlantUML can be run locally. Miro is software-as-a-service and requires an internet connection and Miro services to be up and running. 

Despite these differences, the best tool for Domain Storytelling is the one that works best for *you*:

- If you already use Miro and want to model a domain story every once in a while, the Miro template might be the best tool for you.
- If your focus is on documentation and you already use PlantUML to document software architecture and design, the PlantUML library enables you to generate everything with your favorite tool. Personally, I would not use it for live modeling in workshops as the sudden changes in layout after every sentence would be distracting. Also, I have limited experience with the modeling language which slows down modeling.
- Egon supports you best during modeling workshops with unique features like "replay". 
