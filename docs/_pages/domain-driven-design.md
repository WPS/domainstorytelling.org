---
permalink: /domain-driven-design
title: "Domain-Driven Design with Domain Storytelling"
layout: splash
header: 
  overlay_color: "#f59542"
  overlay_image: /images/domain-driven-design/kandinsky.jpg
---

Since Eric Evans coined the term *Domain-Driven Design (DDD)*, an ever growing DDD community builds software that reflects its domain. If you are new to DDD, we recommend <a href="https://leanpub.com/theanatomyofdomain-drivendesign" target="_blank">this concise introduction</a> by Scott Millett.

> “Domain-Driven Design is a language and domain-centric approach to software design for complex problem domains.” – Scott Millet

DDD consists of patterns, principles and practices. For some of them Domain Storytelling is of particular use.

## Get familiar with your domain

Domain Storytelling is a *knowledge crunching* technique. The people who participate in a Domain Storytelling workshop will get new insights into the domain. The resulting Domain Stories express their shared understanding.

When you approach a domain, we recommend to start coarse-grained. Invite people from several departments to create coarse-grained Domain Stories. Do not limit yourself by existing organizational boundaries (or perceived bounded contexts, if you already familiar with DDD) and visualize Domain Stories that span over several departments.

## Strategic Design

If you want to develop software, you need more than just an understanding of a domain. You need rich domain models that express deep knowledge. But the more details you add, the more ambiguous and complex your models will get. In DDD, we make our models manageable by partitioning the domain into bounded contexts. Every bounded context has its own set of models and ultimately its own, unambiguous ubiquitous language.

Finding good context boundaries is hard. Domain Stories can help because they show how people work together within and across subdomains – and how unsuitable boundaries prevent people from working together.

## Putting it all together

Watch this talk to see how Domain Storytelling helps you to practice DDD:

{% include video id="lZYo2lKacYo" provider="youtube" %}