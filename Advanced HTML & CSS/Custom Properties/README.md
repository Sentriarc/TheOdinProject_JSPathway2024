{+} CUSTOM PROPERTIES {+}
- allows for reference of a CSS value however many times needed throughout a file (i.e. "instead of having to update every single instance of a specific value (“This shade of red is too light, let’s change the shade on all seven of these selectors”), we only need to update a single instance: the custom property itself.")
- helps keep colors consisten throughout a project (especially large projects)



[-] Syntax [-]
Ex.
    .error-modal {
    --color-error-text: red;
    --modal-border: 1px solid black;
    --modal-font-size: calc(2rem + 5vw);

    color: var(--color-error-text);
    border: var(--modal-border);
    font-size: var(--modal-font-size);
    }

    "That’s it! First, we declare our custom property with a double hyphen followed by a case-sensitive, hyphen-separated property name (color-error-text wouldn’t be the same as Color-Error-Text). The use of Kebab case (single hyphens to separate words) is very important here because spaces are not valid (--color error text would not work). Then we can store any valid CSS value in our newly declared custom property, whether it be a color value, shorthand values, or even a more complex function, just to give you a few examples.

    When we want to access a custom property, we use the var() function as the value of a CSS property, and then place our custom property inside of the parenthesis (including the double hyphen at the beginning)."



[+] Fallback Values [+]
- The var() function accepts two parameters
    1. custom property that we want to assign
    2. optional fallback value
        - "When a fallback value is provided in addition to a custom property, the fallback value will be used if the custom property is invlaid or hasn't been declared yet. We can even pass in another custom property as a fallback, which can have its own fallback value as well!"

        Ex.
            .fallback {
            --color-text: white;

            background-color: var(--undeclared-property, black);
            color: var(--undeclared-again, var(--color-text, yellow));
            }

        "In the above example, our background-color property would have a value of black and our color property would have a value of white. If the --color-text custom property was invalid or didn’t exist, the fallback to our fallback would take over and the color property would have a value of yellow."



[+] Scope [+]
- the scope of a custom property is determined by the selector
- this scope includes the selector the custom property was declared for as well as many descendants of that selector
- works similarly to JS

Ex.
    HTML
        <div class='cool-div'>
            <p class='cool-paragraph'>Check out my cool, red background!</p>
        </div>

        <p class='boring-paragraph'>I'm not in scope so I'm not cool.</p>

    CSS
        .cool-div {
        --main-bg: red;
        }

        .cool-paragraph {
        background-color: var(--main-bg);
        }

        .boring-paragraph {
        background-color: var(--main-bg);
        }

        "In the example [above], only the element with the cool-paragraph class would get styled with a red background since it’s a descendant of the element where our custom property is declared."



[+] The :root Selector [+]
"While there may be times where you will want to limit the scope of a custom property, you may want to be able to use other custom properties on many, unrelated selectors. One workaround would be declaring the same custom property on a bunch of selectors, but that defeats one of the purposes of using custom properties in the first place (the ease of changing multiple instances of a value at once).

A better solution is declaring those custom properties on the :root selector, which is essentially the same thing as the html selector except it has a higher specificity."

Ex.
    HTML
    <p class='cool-paragraph'>Lorem ipsum dolor sit amet.</p>

    <p class='exciting-paragraph'>Lorem ipsum dolor sit amet.</p>

    CSS
    :root {
        --main-color: red;
    }

    .cool-paragraph {
        color: var(--main-color);
    }

    .exciting-paragraph {
        background-color: var(--main-color);
    }

    "By declaring our custom property on the :root selector in the example above, we can access it on any other valid selector within our CSS file, since any other selector would be considered a descendant of the :root selector."



[+] Creating Themes With Custom Properties [+]
https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-custom-properties#creating-themes-with-custom-properties




[-] Media Queries [-]
prefers-color-scheme media query
- checks whether a user has selected a theme preference on their OS/user agent (i.e. if your default OS is on dark mode, the website will adapt accordingly)
- only dark & light are valid values for this media query
- light theme is applied if the user has it as a default or no preference selected
- does not allow users to change the theme themselves (which is why you should allow them to regardless if you have this in your code or not)



GOOD RECAP: https://www.youtube.com/watch?v=PHO6TBq_auI