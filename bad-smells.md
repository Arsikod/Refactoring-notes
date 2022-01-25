## Mysterious Name:

Renaming is not just an exercise in changing names. When you can't think of a good name for something, it's often a sign of a deeper design malaise. Puzzling over a tricky name has often led us to significant simplifications to our code.

## Duplicated Code:

Duplication means that every time you read these copies, you need to read them carefully to see if there's any difference. If you need to change the duplicated code, you have to find and catch each duplication.

## Long Function

If you have a good name for a function, you mostly don’t need to look at its body.

How do you identify the clumps of code to extract? A good technique is to look for comments. They often signal this kind of semantic distance. A block of code with a comment that tells you what it is doing can be replaced by a method whose name is based on the comment. Even a single line is worth extracting if it needs explanation.

With loops, extract the loop and the code within the loop into its own method. If you find it hard to give an extracted loop a name, that may be because it's doing two different things—in which case don't be afraid to use Split Loop to break out the separate tasks.

## Long Parameter List

Rather than pulling lots of data out of an existing data structure, you can use Preserve Whole Object to pass the original data structure instead.

## Global Data

The problem with global data is that it can be modified from anywhere in the code base, and there's no mechanism to discover which bit of code touched it.

## Mutable Data

I can update some data here, not realizing that another part of the software expects something different and now fails—a failure that's particularly hard to spot if it only happens under rare conditions.

## Divergent Change

Divergent change occurs when one module is often changed in different ways for different reasons. If you look at a module and say, “Well, I will have to change these three functions every time I get a new database; I have to change these four functions every time there is a new financial instrument,” this is an indication of divergent change.

## Shotgun Surgery

Shotgun surgery is similar to divergent change but is the opposite. You whiff this when, every time you make a change, you have to make a lot of little edits to a lot of different classes. When the changes are all over the place, they are hard to find, and it’s easy to miss an important change.

## Feature Envy

A classic case of Feature Envy occurs when a function in one module spends more time communicating with functions or data inside another module than it does within its own module. The function clearly wants to be with the data, so use Move Function to get it there. Sometimes, only a part of a function suffers from envy, in which case use Extract Function on the jealous bit, and Move Function to give it a dream home.
The heuristic we use is to determine which module has most of the data and put the function with that data.
The fundamental rule of thumb is to put things together that change together.

## Data Clumps

Often, you’ll see the same three or four data items together in lots of places: as fields in a couple of classes, as parameters in many method signatures. Bunches of data that hang around together really ought to find a home together.

## Primitive Obsession

We find many programmers are curiously reluctant to create their own fundamental types which are useful for their domain—such as money, coordinates, or ranges.
A telephone number is more than just a collection of characters.

## Repeated Switches

The problem with such duplicate switches is that, whenever you add a clause, you have to find all the switches and update them. Against the dark forces of such repetition, polymorphism provides an elegant weapon for a more civilized codebase.

## Loops

These days, however, first-class functions are widely supported, so we can use Replace Loop with Pipeline to retire those anachronisms. We find that pipeline operations, such as filter and map, help us quickly see the elements that are included in the processing and what is done with them.

## Speculative Generality

You get it when people say, “Oh, I think we'll need the ability to do this kind of thing someday” and thus add all sorts of hooks and special cases to handle things that aren’t required. The result is often harder to understand and maintain.

## Comments

If you need a comment to explain what a block of code does, try Extract Function. If the method is already extracted but you still need a comment to explain what it does, use Change Function Declaration to rename it. If you need to state some rules about the required state of the system, use Introduce Assertion.

Temporary Field
Message Chains
Middle Man
Insider Trading
Large Class
Alternative Classes with Different Interfaces
Data Class
Refused Bequest
