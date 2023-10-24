# Unit Tests: "multiplication"

😃 - Expect  const multiplication(2, 5) to be a number.
😃 - Expect the return to be equal to 10.
😃 - Expect to console.log(multiplication).

🤬 - Returns an undefined variable if they are not defined.
🤬 - Syntax error message. ("b", 5).
🤬 - User doesn't have a prompt to input numbers.



# "concactOdds"

😃 - Create two arrays and that display properly in the console.
      concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]).
😃 - Use the .reduce function to return one array.
😃 - Use the .filter function to only display odds in the console.

🤬 - Make sure the all variables are defined so they do not throw an undefined error.
🤬 - Make sure they are displayed in some sort of an order in the array (lowest --> highest.)
🤬 - Should return [-1, 1, 3, 9, 15] not[2, 4, etc.].

# Functional Tests: "Shoping Cart Chekcout"

😃 - Prompt displays properly to let user choose to checkout as a guest. If(user === guest)
      statement.     
😃 - Display message ("You have items in your cart!, "Checkout", .items,  "now").
😃 - Discount code apply "10%OFF" at checkout.
😃 - Display's properly on a mobile device.

🤬 - Throws and error when trying to checkout as a guest. Premission error.
🤬 - Checkout button does not work.
🤬 - Takes you to the wrong page when clicking checkout as guest.
🤬 - erroer when entering customer infomation upon checkout.