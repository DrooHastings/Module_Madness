Module Madness
In this challenge, you will need to spin up a new project (much like we did in lecture). You will create three modules as specified below, then create a server.js that will use these modules!



Module Three - Output an Account Balance
The third module should require the other two modules (i.e. Module One and Module Two). It should also have two exported functions:

The first function should call Module 2, passing the result of Module 1 as an argument.
The second function should return the text “Account balance: \n”.
server.js
Finally, in the server.js file use the functions from Module 3 to produce the following output in the console:

Account balance:
$156,301
