## Exercise 1

    Create a brand new React application with 'React create App' 
    this app needs to display a list of categories from an array,
    the categories are 't-shirts' , 'hats' , 'shorts' , 'shirts',
    'pants', 'shoes', in order to display them you will need to use Array.map

***Your solution goes to the ex01 folder***

## Exercise 2 

   - Create a static page that display a list of products.
   - Include an header and a footer in it with not functionality.
   - Display the products divided in two categories : all products , best sellers. 
   - Use an array of objects as a products collection , imported from an external file. 
   - Use an external component to display each single item.
   - The product component should at display : product_name , price , image , on sale
   - For the products structure you can use the follow one : 

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

   Use this as an example : https://www.chalkd.co.nz/collections/all









