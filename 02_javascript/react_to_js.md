Create a function called checkUserData that will get a
username and a password from a user, using the prompt.

Then you need to check, inside an array of users, if exists
a user that match username and password provided by the user.

The array of users will have the following structure:

let users = [
     {username:'mario',password:'1234'},
     {username:'laura',password:'5678'},
     {username:'paula',password:'9101'}
]

In case that there is a match you should display a welcome message : 
`Welcome back {USERNAME}` 
otherwise a negative one :
`Wrong credentials provided :(`

But in both cases a series of messages saying : 

This message will desappear in 3
This message will desappear in 2
This message will desappear in 1
