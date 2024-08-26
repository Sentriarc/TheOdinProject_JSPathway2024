[+] The form element [+]
- Form Element: a container element like the div element, which wraps all of the inputs a user will interact with
    - accepts 2 essential attributes:
        - action (takes a URL that tells the form where it should send its data to be processed)
        - method (tells the browser which HTTP request method it should use to submit the form)
    - The GET and POST request methods are the two you will find yourself using the most.
        - GET: used when we want to retrieve something from a server
            Ex.
                Google uses a GET request when you search as it "gets" the search results.
        - POST: used when we want to change something on the server
            Ex. 
                When a usr makes an account or makes a payment on a website.
    Overall Ex. (The markup for creating a form element looks like this:)
        <form action="example.com/path" method="post">

        </form>

[+] Form controls [+]
- Form controls: everything that the user will interact with on a form

[+] The input element [+]
<form action="example.com/path" method="post">
  <input type="text">
</form>

[+] Labels [+]
<form action="example.com/path" method="post">
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name">
</form>

"Labels accept a /for/ attribute, which associates it with a particular input. The input we want to associate with a label needs an /id/ attribute with the same value as the label’s /for/ attribute.

When a label is associated with an input and is clicked, it will focus the cursor on that input, ready for the user to input some data. This helps make our forms more accessible to users who rely on assistive technologies."

[+] Placeholder attribute [+]
- Use placeholder text to demonstrate how text should be entered and formatted.

Ex. 
    <label for="first_name">First Name:</label>
    <input type="text" id="first_name" placeholder="Bob...">

[+] The name attribute [+]
- "We need to use labels so that users understand what the data entered into an input field will represent. Just like that, we also need to let the backend, where we send our data, know what each piece of data represents."

Ex. ("We do this by adding a name attribute to our inputs:")
    <label for="first_name">First Name:</label>
    <input type="text" id="first_name" name="first_name">

"The /name/ attribute serves as a reference to the data inputted into a form control after submitting it. You can think of it as a variable name for the input. Form input should always have a /name/ attribute; otherwise, it will be ignored when the form is submitted."

The output would be in the "form" object. It should look something like this:

Ex.
    "form": {
        "age": "33",
        "first_name": "John",
        "last_name": "Doe"
    },


[+] Using form controls outside of forms [+]
- Forms don't always have to send something to the backend. You can actually display stuff according to the input.


[+] The type attribute [+]
- email
    Ex.
        <label for="user_email">Email Address:</label>
        <input type="email" id="user_email" name="email" placeholder="you@example.com">

- password
    Ex.
        <label for="user_password">Password:</label>
        <input type="password" id="user_password" name="password">

- number
    Ex.
        <label for="amount">Amount:</label>
        <input type="number" id="amount" name="amount">

- date
    Ex.
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob">


[+] Text area [+]
- does not require a closing tag
- "Text area elements accept a couple of unique attributes that other form controls do not. These are the rows and cols attributes. They allow you to control the initial height (rows) and width (cols) of the text area:"
    <textarea rows="20" cols="60"></textarea>


[+] Selection elements [+]
- This element allows for dropdown selection lists.
Ex. 
    <select name="Car">
        <option value="mercedes">Mercedes</option>
        <option value="tesla">Tesla</option>
        <option value="volvo">Volvo</option>
        <option value="bmw">BMW</option>
        <option value="mini">Mini</option>
        <option value="ford">Ford</option>
    </select>

NOTE: All the option elements should have a /value/ attribute (otherwise the text content inside is used). This value will be sent to the server when the form is submitted.

- We can set one of the options to be the default selected element when the browser first renders the form. In order to do this, we must give one of the options a "selected" attribute.

Ex.
    <select name="Car">
        <option value="mercedes">Mercedes</option>
        <option value="tesla">Tesla</option>
        <option value="volvo" selected>Volvo</option>
        <option value="bmw">BMW</option>
        <option value="mini">Mini</option>
        <option value="ford">Ford</option>
    </select>

- We can also split the list of options into groups using the <optgroup> element.

Ex.
    <select name="fashion">
        <optgroup label="Clothing">
            <option value="t_shirt">T-Shirts</option>
            <option value="sweater">Sweaters</option>
            <option value="coats">Coats</option>
        </optgroup>
        <optgroup label="Foot Wear">
            <option value="sneakers">Sneakers</option>
            <option value="boots">Boots</option>
            <option value="sandals">Sandals</option>
        </optgroup>
    </select>

[+] Radio buttons [+]
- allows us to create multiple options that the user can choose one of

Ex.
    <h1>Ticket Type</h1>
    <div>
        <input type="radio" id="child" name="ticket_type" value="child">
        <label for="child">Child</label>
    </div>

    <div>
        <input type="radio" id="adult" name="ticket_type" value="adult">
        <label for="adult">Adult</label>
    </div>

    <div>
        <input type="radio" id="senior" name="ticket_type" value="senior">
        <label for="senior">Senior</label>
    </div>

- When a radio button is selected after a different one is selected, the previous one will be deselected.
- We can set the default selected radio button by adding the "checked" attribute to it.

Ex. 
    <h1>Ticket Type</h1>
    <div>
        <input type="radio" id="child" name="ticket_type" value="child">
        <label for="child">Child</label>
    </div>

    <div>
        <input type="radio" id="adult" name="ticket_type" value="adult" checked>
        <label for="adult">Adult</label>
    </div>

    <div>
        <input type="radio" id="senior" name="ticket_type" value="senior">
        <label for="senior">Senior</label>
    </div>


[+] Checkboxes [+]
- are similar to radio buttons, but multiple options can be chosen
- To create a checkbox, we use the input element with a "type" attribute of "checkbox."

Ex.
    <h1>Pizza Toppings</h1>

    <div>
        <input type="checkbox" id="sausage" name="topping" value="sausage">
        <label for="sausage">Sausage</label>
    </div>

    <div>
        <input type="checkbox" id="onions" name="topping" value="onions">
        <label for="onions">Onions</label>
    </div>

    <div>
        <input type="checkbox" id="pepperoni" name="topping" value="pepperoni">
        <label for="pepperoni">Pepperoni</label>
    </div>

    <div>
        <input type="checkbox" id="mushrooms" name="topping" value="mushrooms">
        <label for="mushrooms">Mushrooms</label>
    </div>

- we can set checkboxes to be checked by default using the "checked" attribute

Ex.
    <div>
        <input type="checkbox" id="newsletter" name="news_letter" checked>
        <label for="newsletter">Send me the news letter</label>
    </div>

[+] Buttons [+]
- accepts a "type" attribute that tells the browser what kind of button it is dealing with


[+] Submit buttons [+]
<button type="submit">Submit</button>


[+] Reset button [+]
<button type="reset">Reset</button>


[+] Generic button [+]
- just a generic button that can be used for anything
<button type="button">Click to Toggle</button>


[+] Organizing form elements [+]
- too many inputs = no-no
    - Luckily, HTML provides a couple of elements that make it easy to organize forms into sections that are visually distinct and manageable to digest.


[+] Fieldset element [+]
- allows us to group related form inputs into one logical unit
- To create a fieldset, we use the <fieldset> element. Whatever form inputs we want to group together go within the opening and closing fieldset tags.

Ex.
    <fieldset>
        <label for="first_name">First Name</label>
        <input type="text" id="first_name" name="first_name">

        <label for="last_name">Last Name</label>
        <input type="text" id="last_name" name="last_name">
    </fieldset>


[+] Legend [+]
- is used to give field sets a heading/caption so the user can see what a grouping of inputs is for
- "To create a legend, we use the <legend> element with the text we want to display within its opening and closing tags. A legend should always come right after an opening fieldset tag:"

Ex.
    <fieldset>
        <legend>Contact Details</legend>

        <label for="name">Name:</label>
        <input type="text" id="name" name="name">

        <label for="phone_number">Phone Number:</label>
        <input type="tel" id="phone_number" name="phone_number">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
    </fieldset>

    <fieldset>
        <legend>Delivery Details</legend>

        <label for="street_address">Street Address:</label>
        <input type="text" id="street_address" name="street_address">

        <label for="city">City:</label>
        <input type="text" id="city" name="city">

        <label for="zip_code">Zip Code:</label>
        <input type="text" id="zip_code" name="zip_code">
    </fieldset>

- "A common use-case for these elements is using a fieldset to group radio buttons and using a legend to communicate to the user what each of the options is ultimately for:"

    <fieldset>
        <legend>What would you like to drink?</legend>

        <div>
            <input type="radio" name="drink" id="coffee" value="coffee">
            <label for="coffee">Coffee</label>
        </div>

        <div>
            <input type="radio" name="drink" id="tea" value="tea">
            <label for="tea">Tea</label>
        </div>

        <div>
            <input type="radio" name="drink" id="soda" value="soda">
            <label for="soda">Soda</label>
        </div>
    </fieldset>


[+] GENERAL NOTES [+]
- each browser has its own style, so your form will look different on each one
    - to counteract this, we have to override these default styles and style them ourselves