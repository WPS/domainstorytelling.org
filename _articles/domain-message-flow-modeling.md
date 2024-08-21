---
title: "Visualizing Communication Between Bounded Contexts"
excerpt: "With Domain Message Flow Modeling."
toc: true
toc_sticky: true
header: 
  overlay_color: "#f59542"
  overlay_image: /assets/images/home/sunflower-9.jpeg
  teaser: /assets/images/articles/domain-message-flow/placing-online-order-no-title.egn.svg
author: hofstef
# perma-link is generated from file name
# see https://mmistakes.github.io/minimal-mistakes/docs/layouts/#layout-collection for more layout options
---

In 2020, [Nick Tune](https://nick-tune.me/) introduced a useful idea to the Domain-Driven Design (DDD) community: a way to visualize the flow of messages (i.e., commands, events, and queries) in a bounded context architecture. Nick calls his technique *Domain Message Flow Modeling* and some of the key reasons for using it are:

- Validate newly designed boundaries and interactions by analyzing and uncovering coupling.
- Cheap discovery: Can we identify any hidden complexity before we start implementing?
- Analyzing IT landscapes by focusing on the domain rather than on existing system boundaries.

Nick wrote a comprehensive [introduction to Domain Message Flow Modeling](https://github.com/ddd-crew/domain-message-flow-modelling). He says that he was heavily inspired by the C4 Model and by Domain Storytelling. 

> This article shows how to adapt Domain Storytelling to model domain message flows.
 
In software terms, this would probably be called a “backport”. I hope this encourages Domain Storytelling practitioners to try Domain Message Flow Modeling.

# A Pictographic Language for Domain Message Flow Modeling

If you are new to Domain Storytelling, you might want to read the [Quick Start Guide](/quick-start-guide) first.
{: .notice--primary}

## Overview

In Domain Storytelling, *actors* and *work objects* are expressed with icons and labeled with their concrete meaning. The concepts of Domain Message Flow Modeling can be mapped to Domain Storytelling’s pictographic language as follows:

| concept | modeled as | icon* |
| ------- | ---------- | ----- |
| user (or persona or role) | actor | ![](/assets/images/articles/domain-message-flow/user.svg) |
| bounded context | actor | ![](/assets/images/articles/domain-message-flow/bounded-context.svg) |
| system | actor | ![](/assets/images/articles/domain-message-flow/system.svg) |
| command | work object | ![](/assets/images/articles/domain-message-flow/command.svg) |
| event | work object | ![](/assets/images/articles/domain-message-flow/event.svg) |
| view (query) | work object | ![](/assets/images/articles/domain-message-flow/view.svg) |

*) Which icons you use is up to you. I chose some Google Material icons that resemble Nick Tune’s example (user, bounded context, system) and [Vaughn Vernon's suggestions](https://kalele.io/symbolsicons-for-event-storming/) (command, event, view/query). 

## Example

This is my take on Nick’s “placing an online order” example:

![Placing an online order when all items are in stock](/assets/images/articles/domain-message-flow/placing-online-order-no-title.egn.svg)

I created this diagram with [egon.io](https://egon.io/). However, I could have created a similar looking picture with tools like Miro or a whiteboard with sticky notes. The principles of the pictographic language would have been the same (e.g., bounded contexts modeled as actors), just the icons and labels would have looked a bit different.

## Considerations

You might wonder why Domain Message Flow Modeling distinguishes between bounded contexts and systems. Nick’s reasoning – and I am simplifying here – is that a bounded context is something that the organization controls (naming, boundaries, etc.), whereas the “systems” are not in the organization’s zone of control. I see another benefit as I experienced that modeling bounded contexts prevents people from jumping to architectural conclusions (e.g., if “sales”, “notifications”, and “billing” should be implemented as microservices).

In my example, I use annotations to model the message content (e.g., “order id”, “items”, and “payment method”). This resembles the format that Nick describes as “separate message & contents”.

The actual message flow is modeled with activities. In a domain story, an activity is visualized as arrow and usually labeled with a verb. In a “classic” domain story, the first sentence would have read “shopper places order using website”. But from a *message flow* point of view, the shopper triggers a “place order” command – the shopper’s intention becomes part of the work objects (i.e., event, command, and query). Therefore, the activities in the above example are not labeled; they are reduced to visualizing the flow of messages. The order of the messages is expressed with sequence numbers.

# Domain Message Flows are Examples

A domain message flow model shows the behavior of bounded contexts – it shows a process, not a structure. That process is illustrated by an example. In Domain Storytelling, we call that [scenario-based modeling](/quick-start-guide#scenario-based-modeling). “Placing an online order when all items are in stock” is a different scenario from “placing an online order when one item is out of stock”. Each scenario is visualized in a separate picture and might show different bounded contexts and systems. 

The goal of scenario-based modeling is not to cover all possible variations but the most important ones – the 80% case, the most common variations, or important error cases.

# How the Pictures are Created

Domain Storytelling combines a pictographic language with a workshop format. How much of the workshop’s collaborative potential can be applied to Domain Message Flow Modeling depends on the situation. Collaborating in workshops makes sense particularly if you want to design *to-be* architectures (with candidate bounded contexts). Documenting existing architecture (*as-is* modeling) could also work with less collaboration.

Acknowledgement: I thank Nick Tune for reviewing a draft of this article and Vaughn Vernon for suggesting icons.
{: .notice--primary}
