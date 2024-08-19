[+] calc() [+]
Uses:
    - mixing units
    - the ability to nest calc( calc () - calc () )

Ex.
    :root {
    --header: 3rem;
    --footer: 40px;
    --main: calc(100vh - calc(var(--header) + var(--footer)));
    }

    "Setting main to equal the outcome of: 100vh - (3rem + 40px). To put it another way: main = 100vh - (header + footer). calc() is handling the math for us even though we are mixing vh, rem and px units. Combined with CSS variables, calc() can save us from the headache of repeating CSS rules."



[+] min() [+]
Uses:
    - excellent for creating responsive websites

Ex. 
    #iconHolder {
    width: min(150px, 100%);
    height: min(150px, 100%);
    box-sizing: border-box;
    border: 6px solid blue;
    }

    "Focus on this line width: min(150px, 100%); we can make several observations: If there are 150px available to the image, it will take up all 150px. If there are not 150px available, the image will switch to 100% of the parent’s width. In the first case min() selects 150px, since 150px is the smaller (the minimum) between 150px and 100% of the parent’s width; in the second, it chooses 100%. min() behaves as a boundary for the maximum allowed value, which in this example is 150px."

You are able to do basic math inside a min ( ) => for example: width: min(80ch, 100vw - 2rem);



[+] max() [+]
- works the same way as min, but in reverse
- selects the largest possible value from within the parentheses
- "you can think of max() as ensuring a minimum allowed value for a property"

Ex. 
    width: max(100px, 4em, 50%);

    "From this list of given sizes, max() will select the largest one. As long as 4em or 50% result in lengths longer than 100px, max() will select (the bigger) one of them. If they are smaller than 100px (maybe as a cause of user’s font size preferences, or their browser’s window size or zoom level), then 100px will win out as the largest. You can think of 100px in this example as a guard value: width here won’t ever be set to less than 100px.

    The max function is most useful when the viewing window is either exceptionally small, or the user increases the content size by using the browser’s zoom feature. You may not find a lot of use for max at first, but it is a good tool to be aware of for projects where accessibility is important."



[+] clamp() [+]
- great for making elements fluid and responsive
- takes 3 values

Ex.
    h1 {
    font-size: clamp(320px, 80vw, 60rem);
    }

    the smallest value (320px)
    the ideal value (80vw)
    the largest value (60rem)

    "The clamp() CSS function uses these values to set the smallest value, ideal value and largest value. In the above example, this would mean the smallest acceptable font-size would be 320px and the largest would be 60rem. The ideal font-size would be 80vw."



GOOD RECAP OF EVERYTHING: https://web.dev/articles/min-max-clamp
