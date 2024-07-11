---
title: "How to Model Repeating Activities"
excerpt: "3 ways to model loops in domain stories."
toc: true
toc_sticky: true
header: 
  overlay_color: "#f59542"
  overlay_image: /assets/images/home/sunflower-9.jpeg
  teaser: /assets/images/articles/01/01-warehouse-bpmn.svg
author: hofstef
# perma-link is generated from file name
# see https://mmistakes.github.io/minimal-mistakes/docs/layouts/#layout-collection for more layout options
---

# To Loop or not to Loop

In many business process modeling languages, repeating activities are modeled as loops. 

Here is a simple example: In a warehouse, all items on a picklist need to be picked and scanned.

![A simple loop in a BPMN diagram](/assets/images/articles/01/01-warehouse-bpmn.svg)

In the above BPMN diagram, *gateways* are used to model a loop in the business process.
Domain Storytelling is a [scenario-based](/quick-start-guide#scenario-based-modeling) approach which means its pictographic modeling language was kept simple and does deliberately not include symbols for loops and for distinguishing cases. 

# The Domain Story Way(s)

However, you can still model repeating activities. In fact, you have multiple options to do so. Which one fits best depends on the [granularity](/quick-start-guide#scope) that you aim for.

Here is the short, initial, coarse-grained domain story without repetition.

![Picking items in a warehouse](/assets/images/articles/01/02-warehouse-dst.png)

Now, we can discuss different possibilities to model that the warehouse worker has to scan every item on the picklist.

## Model Repeating Activities with Annotations

This works well when modeling rather coarse-grained *what* happens (and less *how* exactly it happens). On an even more coarse-grained level, you probably would not model repeating activities at all (at least not in the example that I came up with).

![Way 1: Use Annotations](/assets/images/articles/01/03-warehouse-dst-way1.png)

The repeating activity here is the second sentence—a warehouse worker scans an item with a scanner. I used an annotation to model that this is done for every line item on a picklist. That means that the loop is only modeled implicitly—which is ok for me on kite level.

## Group Repeating Activities

This solution works well when the domain story is medium-grained. To show that this story is on a lower level than the previous one, I added more detail to the story. So now that sentence 2 is a bit more complex, it makes sense to group all the work objects that are involved in the repeated activity. The group is labeled accordingly so that we know it is intended to depict repetition.

![Way 1: Use Groups](/assets/images/articles/01/04-warehouse-dst-way2.png)
 
Note: If there were several repeating activities, they could all be modeled inside the same group.

## Make Repetition Part of the Story 

This solution works best for fine-grained domain stories. In the example, we model a typical picklist with three different line items and a total of eight items. The warehouse worker needs to make four picks to complete the picklist (activities 2-5). 
 
![Way 3: Use Concrete Example](/assets/images/articles/01/05-warehouse-dst-way3.png)

This is the “scenario style” of modeling repetition and the most explicit solution. Of course, this leads to a comprehensive model. But this effort is well spent because it helps to uncover that picking small parts (like screws) is different from picking large goods (like steel plates) and packaged parts (like handles). 

Note: In a different example where all repeating activities are performed exactly the same way, an annotation or a group might be a better solution even when modeling fine-grained.

# Summary

You can model repeating activities either with:

- annotations, 
- by grouping activities, or
- by coming up with a detailed example that spells out the repeating activities.

I think that all these solutions are good; which one is best for your modeling problem depends on the granularity that you aim for. 
