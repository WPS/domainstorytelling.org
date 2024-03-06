---
permalink: /quick-start-guide
title: "Quick-Start Guide"
layout: splash
header: 
  overlay_color: "#f59542"
  overlay_image: /assets/images/home/sunflower-8.jpeg
---

## Your First Domain Story

Imagine you are a software developer who was tasked to develop an app for a cinema. The app should have an online reservation feature. Since you have no clue where to start, you decide to interview a cashier. He works at the ticket counter and takes reservations by phone and in person. The picture shows a graphical recording of the cashier's Domain Story. To read the story, just follow the numbers:

![A domain story showing the process of buying movie tickets](/assets/images/quick-start-guide/dst_egpm.png)

1. The customer asks the cashier for a reservation.
2. The cashier looks up the screen plan in the ticket system to find available seats.
3. ... (you get the idea)

## The pictographic language

To record Domain Stories, we need a vocabulary and pictograms that represent the vocabulary:

| ![Actor](/assets/images/quick-start-guide/icon_actor.png) | Domain Stories are told from an *actor*'s perspective. Actors may be a person, a group, or a software system. Hence, we use different pictograms.
| ![Work object](/assets/images/quick-start-guide/icon_work_object.png) | Actors create, work with, and exchange *work objects* and *information about work objects* such as documents and messages. The pictograms represent the work object’s medium.
| ![Arrows](/assets/images/quick-start-guide/icon_arrows.png) | The actor's *activities* are depicted as arrows.
| ![Annotations](/assets/images/quick-start-guide/icon_annotation.png) | Textual *annotations* are useful to document assumptions, variations and exceptions.

To add a specific meaning to a pictogram, we name it with a term from the domain language: An actor *cashier*, a work object *screen plan*, an activity *confirms* etc.

In the examples on this website, we use about a dozen of Google's Material icons that represent typical office work. You should compile your own set of pictograms that fits to your domain.

### Now we can build a sentence…

- Every sentence starts with an *actor* who initiates an *activity*.
- Next, you need a *work object* or a piece of information that the *actor* does something with. Choose a pictogram that represents the medium of that work object (e.g. a paper icon, an email icon or a bubble for verbal information).
- Connect the *actor* and the *work object* with an *arrow*. Name the *arrow* according to the *activity* (e.g. creates, edits, sends).
- If the *activity* involves another *actor*, draw another *arrow* from the *work object* to that *actor*. Often, a preposition (e.g. to, with) makes a good name for the *arrow*.

So the basic syntax is: *subject* – *predicate* – *object*. Keep in mind that anyone should be able to read the graphical Domain Story out loud.

### …and tell a story

By numbering the arrows, we express the sequence of activities. Every actor should appear only once in a Domain Story. However, if you use the same work object in several sentences, you have to draw it several times (maybe with different pictograms).

## Feeling lost?

Most business process modeling approaches show what can *possibly* happen in a process:

![BPMN diagram](/assets/images/quick-start-guide/control_flow.png)

While there is value in such "algorithmic" descriptions, for many purposes you would be better suited with some examples of what *actually* happens. To paraphrase requirements engineering expert Peter Hruschka:

> “Sometimes three good examples are more helpful to understand the requirements than a bad abstraction.”

Domain Storytelling helps you to find meaningful examples of what actually happens in a business process. Maybe you noticed that the visual language does not contain any symbols for cases, exceptions and parallelism. Instead, the context of a Domain Story is defined with assumptions: *“Let’s assume the customer calls. How do you take her reservation?”* While you record the story, additional assumptions might be necessary: *“Assuming that there are enough seats available, what do you do next?”*

Important alternatives and error cases deserve their own Domain Story. Usually, very few Domain Stories are sufficient to understand a business process. After recording Domain Stories for a few processes, you will become fluent in the domain language.

## Domain Storytelling Workshops

Domain Stories are developed in workshops. Participants include domain experts (often from several departments), IT experts and a moderator. The moderator communicates the purpose of the workshop. All participants contribute to the story. The moderator keeps the participant’s story going by asking questions like:

- What happens next?
- Where do you get this information from?
- How do you determine what to do next?

The moderator helps to record the Domain Stories graphically. The story needs to be visible for all participants (e.g. on a whiteboard or projected on a screen). The participants see what gets recorded and give feedback immediately.

Once the story is finished, the moderator checks if all participants agree upon the recorded Domain Story.  Objections, important variations, edge cases and so on are not dismissed but written down and may trigger another Domain Story.

> Modeling is a thinking tool.The act of modeling is more important than the actual model.

Do not think of Domain Stories as documentation. Use them to dive into [Domain Driven Design](./domain-driven-design), or [to uncover requirements](/requirements) for software development. Inviting the right people to the workshops is important because the primary goal is to learn and communicate. A picture of a Domain Story serves as an aid to memory for those present at the workshop, but it is not a replacement for participating.

## Tools

Often a whiteboard and some sticky notes are all you need.

![Modeling with sticky notes](/assets/images/quick-start-guide/sticky_notes.png)

But since drawing the icons can be tedious, we have developed a *whiteboard kit* to speed up the recording process. You can <a href="/assets/images/quick-start-guide/DST_Whiteboard-Kit.pdf" target="_blank">download this template</a> and make your own kit.

![Modeling with the Whiteboard Kit](/assets/images/quick-start-guide/whiteboard_kit.jpg)

Often, you want to model several Domain Stories in one workshop. But modeling space on whiteboards, flip charts and walls is limited. Digital modeling tools are an alternative. Use a projector to share the computer screen so that everyone can see how the Domain Story evolves. You can visualize Domain Stories with tools like PowerPoint, Visio, yEd or other general purpose drawing tools. However, such tools have limitations. The Domain Storytelling community came up with a modeling tool that is specifically designed for Domain Stories: Egon.io—The Domain Story Modeler, made by [WPS – Workplace Solutions GmbH](https://www.wps.de/en). It is open source and runs in your browser. <a href="https://egon.io" target="_blank">Try it online!</a> Or download <a href="https://github.com/WPS/domain-story-modeler/releases" target="_blank">the latest release from GitHub</a>. Read the documentation and give feedback <a href="https://github.com/WPS/domain-story-modeler" target="_blank">on Github</a>.

![Modeling with Egon.io](/assets/images/quick-start-guide/cinema_06.png)
