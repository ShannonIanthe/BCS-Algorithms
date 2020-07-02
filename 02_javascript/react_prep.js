
"========================================================================"
"============================= productsRender ==========================="
"========================================================================" 


 We have a list of products in this array:


const products = [
{
	product    : 'flash t-shirt',
	price      :  27.50,
	category   : 't-shirts',
	bestSeller :  false,
	image      : 'https://www.juniba.pk/wp-content/uploads/2018/02/the-flash-distressed-logo-t-shirt-black.png',
	onSale     :  true
},
{
	product    : 'batman t-shirt',
	price      :  22.50,
	category   : 't-shirts',
	bestSeller :  true,
	image      : 'https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png',
	onSale     :  false
},
{
	product    : 'superman hat',
	price      :  13.90,
	category   : 'hats',
	bestSeller :  true,
	image      : 'https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg',
	onSale     :  false
}
]


 Print out in console first all the products and then for bestsellers only print those having `bestSeller: true`.


"========================================================================"
"============================== namePairs ==============================="
"========================================================================" 

Print out maitching pairs of first/lastnames in the console by using only one loop:


let firstnames = ["Clifford", "Russel", "Michael", "Dennis", "Andre"];
let lastnames = ["Smith", "Simmons", "Diamond", "Coles", "Benjamin"];



Expected output:

Clifford Smith
Russel Simmons
Michael Diamond
Dennis Coles
Andre Benjamin


"========================================================================"
"============================== checkUserData ==========================="
"========================================================================" 

Create a function called checkUserData that will get a
username and a password from a user, using the prompt.

Then you need to check, inside an array of users, if there is 
a user that matches username and password provided by the input.

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

But in both cases a series of messages saying with a delay of 1 second: 

This message will desappear in 3
This message will desappear in 2
This message will desappear in 1

