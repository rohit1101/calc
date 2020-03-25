Calculator App Architecture and Working

    1 Operators and Operands:
        1.1 Select the elements from HTML with .operators and .operands class.
        1.2 Select the input element from the HTML.
        1.3 Then we can manipulate the HTML using the DOM.

    2 Working based on Single Source Of Truth:
        2.1 Declare const expression = ''
        2.2 Add two event listeners (For all the button and for the input element).
        2.3 Once the button is clicked we append the data to the global variable expression.

    3 Calculate()
        3.1 Create a calculate function.
        3.2 Calculate function will access the expression variable and call the in-built eval() function.

    Bro is there a any need of render function here i just can't imagine the point of having the a render function ?
    Only thing we need is once the '=' btn is clicked the input.value=result (assume let result=eval('6+2*10/5'))
