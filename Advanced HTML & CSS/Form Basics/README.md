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

