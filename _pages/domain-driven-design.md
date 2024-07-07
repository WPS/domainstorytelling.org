---
permalink: /domain-driven-design
title: "Domain-Driven Design with Domain Storytelling"
layout: single
toc: true
toc_sticky: true
toc_label: "Domain-driven Design"
header: 
  overlay_color: "#f59542"
  overlay_image: /assets/images/domain-driven-design/kandinsky.jpg
---


*Domain-Driven Design* (*DDD*) is an approach that deals with the development of business software. DDD does not describe a single modeling method, but it emphasizes collaborative modeling by domain experts and development teams as the essential part of software development. 

> Domain Storytelling is a useful and versatile tool in a DDD practitioner's tool box.

In particular, you can use it for:

## Strategic Design

The more details you learn and model about a domain, the more complex and confusing the models become. To avoid that, DDD suggests to subdivide the domain into bounded contexts. Each bounded context has its own model of the domain and its own domain language. A bounded context is a stable foundation on which to build software. 

Domain Storytelling helps with finding boundaries between bounded contexts and modeling the details within them.

In chapter 10 of the [Domain Storytelling book](/book), we elaborate an important step in strategic design: finding the boundaries between subdomains.
{: .notice--primary}

## Tactical Design

Domain experts and development teams work hard to design domain models in their heads and in diagrams. But why stop before the code level? DDD provides technical guidance (so-called *building blocks*) on how to represent different concepts of a domain in code. 

Teams use Domain Storytelling to figure out which concepts of the domain can best be implemented with which building blocks.

Chapter 12 of the [Domain Storytelling book](/book) shows how to turn an domain story into an object-oriented or functional domain model.
{: .notice--primary}

## Ubiquitous Language

This language is derived from the domain language and is consistent within a bounded context. This language should be used everywhere (ubiquitously)—from the spoken words of the domain expert to the whiteboard to the code. Keep in mind that there are usually several ubiquitous languages in a company (one per bounded context). It is not a uniform, company-wide language. 

Chapter 09 of the [Domain Storytelling book](/book) shows how Domain Storytelling can help you to build up domain knowledge which is a prerequisit for establishing ubiquitous languages..
{: .notice--primary}


## Putting it all Together

Watch this talk to see how Domain Storytelling helps you to practice DDD:

{% include video id="lZYo2lKacYo" provider="youtube" %}
