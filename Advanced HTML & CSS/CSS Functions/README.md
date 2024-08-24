- CSS has functions, but they're already defined (not the same as other programming languages).

(Ex.) color: rgb(0, 42, 255);
background: linear-gradient(90deg, blue, red);

[+] calc() [+]
- calc() is useful when mixing units, and can actually be nested within itself

(Ex.) :root {
	--header: 3rem;
	--footer: 40px;
	--main: calc(100vh - calc(var(--header) + var(--footer)));
}

"--header, --footer, and --main are all examples of CSS variables. You will be learning about these in the next lesson."

"Setting main to equal the outcome of: 100vh - (3rem + 40px). To put it another way: main = 100vh - (header + footer). calc() is handling the math for us even though we are mixing vh, rem and px units. Combined with CSS variables, calc() can save us from the headache of repeating CSS rules."

[+] min() [+]
-