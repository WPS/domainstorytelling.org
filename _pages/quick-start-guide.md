---
permalink: /quick-start-guide
title: "Quick-Start Guide"
excerpt: "What you need to know about Domain Storytelling to get started."
layout: single
toc: true
toc_sticky: true
header: 
  overlay_color: "#f59542"
  overlay_image: /assets/images/home/sunflower-8.jpeg
---

# Your First Domain Story

Matthew runs a small movie theater for arthouse films—called Metropolis—that enjoys an excellent reputation among cineastes. Local craft beer and organic snacks round off the cinema experience. One day Matthew meets his school friend Anna. When he learns that Anna has been developing apps for almost ten years, he gets an idea.

**Movie theater manager Matthew:** “My customers like the old-fashioned charm of my cinema. But they do not like my old-fashioned box office. Today's moviegoers are not used to buying tickets in person at the box office anymore. Customers have been asking me to sell tickets online. Can you develop an app for me?”

**App developer Anna:** “You run just one cinema, and there's only a handful of movies per week, two or three shows a day. Sounds easy.”

**Matthew:** “Great! But one small thing: We also show international movies in foreign languages in our program. Also, in addition to the online sales through the app, I still need the box office for less tech-savvy moviegoers. And I'd like users of the app to be able to sign up for a yearly subscription.”

**Anna:** “Subscriptions? Online and offline sales? Shows in foreign languages? That's more complicated than I thought….”

The next day they meet again in Matthew's office. They are standing in front of a whiteboard, and Anna is holding a marker in her hand.

**App developer Anna:** “Yesterday you said that the app essentially has three use cases: One: selling standard tickets; two: selling special tickets for foreign-language movies; and three: signing up for a yearly subscription.”

**Movie theater manager Matthew:** “Uh, yes, that's right.”

**Anna:** “I would like to understand how Metropolis operates today. That will help me to develop an app that meets your requirements. Could you please explain to me how you sell tickets at the box office?”

**Matthew:** “Sure. You sell the tickets and mark the seat in the seating plan and…”

**Anna:** “Wait a minute. Who sells the tickets?”

**Matthew:** “I have two students working for me. But sometimes I do it myself.”

**Anna:** “Okay, but what role do you or the students have then?”

**Matthew:** “Cashier.”

Anna draws a stick figure on the whiteboard and writes “cashier” underneath.

![The first actor](/assets/images/quick-start-guide/01fig01-first-actor.svg)

**Anna:** “Who buys the tickets?”

**Matthew:** “A moviegoer. One without a subscription.”

Anna draws a second stick figure and calls it “moviegoer.” Next to it, she writes down that the moviegoer has no subscription.

![The second actor and the first annotation](/assets/images/quick-start-guide/01fig02-second-actor-gray.svg)

**Anna:** “What does a moviegoer have to do to buy a ticket?”

**Matthew:** “They tell the cashier which show they want to see.”

**Anna:** “I will draw a speech bubble as an icon for the show here, because the two of them talk to each other.”

Anna continues drawing and numbers the arrow.

![The first activity](/assets/images/quick-start-guide/01fig03-first-activity-gray.svg)

**Anna:** “And then?”

**Matthew:** “Usually the cashier suggests the best seat available.”

**Anna:** “Ah, so the moviegoer picks a seat in advance! How does the cashier suggest seats?”

**Matthew:** “I take the seating plan for the show and search for available seats. In the seating plan, I can see which seats have already been sold and which are still available.”

Anna draws and explains the icons.

**Anna:** “Here, I'm using a film icon instead of the speech bubble to symbolize the show.”

**Matthew:** “The seating plan is a grid. Can you draw a grid?”

![The second activity](/assets/images/quick-start-guide/01fig04-second-activity-gray.svg)

Then, Anna reads back what she has understood.

**Anna:** “Second, the cashier gets the seating plan for the show. Third, they search for available seats. Is that ok?”

![The third activity](/assets/images/quick-start-guide/01fig05-third-activity-gray.svg)

Matthew nods in agreement.

**Anna:** “And now the cashier suggests the available seats to the moviegoer?”

**Matthew:** “Exactly.”

**Anna:** “I will move the annotation ‘does not have a subscription’ up a bit to get enough space for that fourth sentence.”

![The fourth activity](/assets/images/quick-start-guide/01fig06-fourth-activity-gray.svg)

Within a few minutes, the whiteboard is filled with a story about a moviegoer who buys tickets from a cashier at the box office. Icons and arrows are rearranged during the session. Finally, Anna retells the story from the beginning.

![The whole story](/assets/images/quick-start-guide/01fig07-whole-story.svg)

**Matthew:** “Yes, that's right. But I forgot about the international movies.”

**Anna:** “You mean the shows in a foreign language? I thought you sell special tickets for those.”

**Matthew:** “No, no! We usually show the movies in English. When it is a foreign movie, we also show it in its original language. We don't sell extra tickets; you only have to point out to the moviegoers which language the movie will be shown in.”

**Anna:** “When does the cashier do that?”

**Matthew:** “Here.”

Matthew points to the arrow with the number 4. Anna amends the sentence “Cashier suggests available seats to moviegoer” with a comment “and mentions language”.

![Adding another annotation](/assets/images/quick-start-guide/01fig08-another-annotation-gray.svg)

**Anna:** “It seems we are finished with our little ‘Going to the movies’ story. Of course, we have looked only at the best possible outcome; I call this the ‘happy path.’ I will ask you about other cases later.”

After a few more Metropolis domain stories, Anna has gained a good insight into the cinema domain. She knows terms like “seating plan,” “show,” “cashier,” “to search for available seats,” and “to mark seats.” She has an initial understanding of the most important processes. With this knowledge about the purpose of the app and its context, she can think about how the app will work and how the processes will change.

# The Pictographic Language

To record Domain Stories, we need a vocabulary and pictograms that represent the vocabulary:

| ![Actor](/assets/images/quick-start-guide/icon_actor.png) | Domain Stories are told from an *actor*'s perspective. Actors may be a person, a group, or a software system. Hence, we use different pictograms.
| ![Work object](/assets/images/quick-start-guide/icon_work_object.png) | Actors create, work with, and exchange *work objects* and *information about work objects* such as documents and messages. The pictograms represent the work object’s medium.
| ![Arrows](/assets/images/quick-start-guide/icon_arrows.png) | The actor's *activities* are depicted as arrows.
| ![Annotations](/assets/images/quick-start-guide/icon_annotation.png) | Textual *annotations* are useful to document assumptions, variations and exceptions.

To add a specific meaning to a pictogram, we name it with a term from the domain language: An actor *cashier*, a work object *screen plan*, an activity *confirms* etc.

In the examples on this website, we use about a dozen of Google's Material icons that represent typical office work. You should compile your own set of pictograms that fits to your domain.

## Now we can build a sentence…

- Every sentence starts with an *actor* who initiates an *activity*.
- Next, you need a *work object* or a piece of information that the *actor* does something with. Choose a pictogram that represents the medium of that work object (e.g. a paper icon, an email icon or a bubble for verbal information).
- Connect the *actor* and the *work object* with an *arrow*. Name the *arrow* according to the *activity* (e.g. creates, edits, sends).
- If the *activity* involves another *actor*, draw another *arrow* from the *work object* to that *actor*. Often, a preposition (e.g. to, with) makes a good name for the *arrow*.

So the basic syntax is: *subject* – *predicate* – *object*. Keep in mind that anyone should be able to read the graphical Domain Story out loud.

## …and tell a story

By numbering the arrows, we express the sequence of activities. Every actor should appear only once in a Domain Story. However, if you use the same work object in several sentences, you have to draw it several times (maybe with different pictograms).

# Feeling lost?

Most business process modeling approaches show what can *possibly* happen in a process:

![BPMN diagram](/assets/images/quick-start-guide/control_flow.png)

While there is value in such "algorithmic" descriptions, for many purposes you would be better suited with some examples of what *actually* happens. To paraphrase requirements engineering expert Peter Hruschka:

> “Sometimes three good examples are more helpful to understand the requirements than a bad abstraction.”

Domain Storytelling helps you to find meaningful examples of what actually happens in a business process. Maybe you noticed that the visual language does not contain any symbols for cases, exceptions and parallelism. Instead, the context of a Domain Story is defined with assumptions: *“Let’s assume the customer calls. How do you take her reservation?”* While you record the story, additional assumptions might be necessary: *“Assuming that there are enough seats available, what do you do next?”*

Important alternatives and error cases deserve their own Domain Story. Usually, very few Domain Stories are sufficient to understand a business process. After recording Domain Stories for a few processes, you will become fluent in the domain language.

# Domain Storytelling Workshops

Domain Stories are developed in workshops. Participants include domain experts (often from several departments), IT experts and a moderator. The moderator communicates the purpose of the workshop. All participants contribute to the story. The moderator keeps the participant’s story going by asking questions like:

- What happens next?
- Where do you get this information from?
- How do you determine what to do next?

The moderator helps to record the Domain Stories graphically. The story needs to be visible for all participants (e.g. on a whiteboard or projected on a screen). The participants see what gets recorded and give feedback immediately.

Once the story is finished, the moderator checks if all participants agree upon the recorded Domain Story.  Objections, important variations, edge cases and so on are not dismissed but written down and may trigger another Domain Story.

> Modeling is a thinking tool.The act of modeling is more important than the actual model.

Do not think of Domain Stories as documentation. Use them to dive into [Domain Driven Design](./domain-driven-design), or [to uncover requirements](/requirements) for software development. Inviting the right people to the workshops is important because the primary goal is to learn and communicate. A picture of a Domain Story serves as an aid to memory for those present at the workshop, but it is not a replacement for participating.

# Tools

Often a whiteboard and some sticky notes are all you need.

![Modeling with sticky notes](/assets/images/quick-start-guide/sticky_notes.png)

But since drawing the icons can be tedious, we have developed a *whiteboard kit* to speed up the recording process. You can <a href="/assets/images/quick-start-guide/DST_Whiteboard-Kit.pdf" target="_blank">download this template</a> and make your own kit.

![Modeling with the Whiteboard Kit](/assets/images/quick-start-guide/whiteboard_kit.jpg)

Often, you want to model several Domain Stories in one workshop. But modeling space on whiteboards, flip charts and walls is limited. Digital modeling tools are an alternative. Use a projector to share the computer screen so that everyone can see how the Domain Story evolves. You can visualize Domain Stories with tools like PowerPoint, Visio, yEd or other general purpose drawing tools. However, such tools have limitations. The Domain Storytelling community came up with a modeling tool that is specifically designed for Domain Stories: Egon.io—The Domain Story Modeler, made by [WPS – Workplace Solutions GmbH](https://www.wps.de/en). It is open source and runs in your browser. <a href="https://egon.io" target="_blank">Try it online!</a> Or download <a href="https://github.com/WPS/egon.io/releases" target="_blank">the latest release from GitHub</a>. Read the documentation and give feedback <a href="https://github.com/WPS/egon.io" target="_blank">on Github</a>.

![Modeling with Egon.io](/assets/images/quick-start-guide/cinema_06.png)
