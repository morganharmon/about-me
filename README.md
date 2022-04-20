## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
header, body, h1, div-name, div-pronouns, div-animal, img-animal, animal-button, footer
1. **For each HTML element ask: Why do I need this?**
header - includes title and metadata
h1 - main title: About Me
div-name: a div for where my name goes
div-pronouns: a div for where my pronouns go
div-animal: a div for a pic of my favorite animal
img-animal: pic of animal
animal-button: a button to reveal my animal pic
footer: date created etc
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
header: add header tag and metadata
h1: add title
div-name: add div
div-pronouns: add div
div-animal: add div
img-animal: add img within animal div, set it to display:none in css
animal-button: add an event listener for 'click', remove class 'hidden' from img on 'click'
footer: add footer info
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
on load: img is hidden
click button: img is revealed
click button again: img is re-hidden(?)
1. **Think about how to validate each of your features according to a Definition of Done**
each div needs at minimum the basic info it is for. Styling is extra
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
event listener depends on the button existing, and the img being hidden on load
-complete hidden img before button

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
