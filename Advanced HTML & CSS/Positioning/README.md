This lesson just covers static, relative, and absolute positioning.

[+] STATIC POSITIONING [+]
position: static --> the default positioning mode (that you are used to)

[+] STATIC vs RELATIVE [+]
- static is the default position of every element (this means that the properties top, right, bottom, and left do not affect the position of the element)
- relative is pretty much the same as static, but the properties (top, right, bottom, and left) displace the element relative to its normal position in the flow of the document

[+] ABSOLUTE POSITIONING [+]
position: absolute --> allows you to position something at an exact point on the screen without disturbing the other elements around it.

- it removes an element from the normal document flow while being psotiioned relative to an ancestor element ("elements that are removed from the normal flow of the document don't affect other elements and are also not affected by other elements")
- allows you to position elements anywhere on the screen using top, right, bottom, and left properties
- is useful when you want to position something at an EXACT point on the screen
- a couple of good use cases for absolute positioning are:
    - modals
    - image with a caption on it
    - icons on top of other elements