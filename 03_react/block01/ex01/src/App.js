import React from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const products = [{
    product    : 'flash t-shirt',
    price      :  27.50,
    category   : 't-shirts',
    bestSeller :  false,
    image      : 'https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg',
    onSale     :  true
  },
  {
    product    : 'batman hat',
    price      :  22.50,
    category   : 'hats',
    bestSeller :  true,
    image      : 'https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png',
    onSale     :  false
  },
  {
    product    : 'superman shorts',
    price      :  13.90,
    category   : 'shorts',
    bestSeller :  true,
    image      : 'https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg',
    onSale     :  false
  },
  {
    product    : 'batman shirt',
    price      :  22.50,
    category   : 'shirts',
    bestSeller :  true,
    image      : 'https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png',
    onSale     :  false
  },
  {
    product    : 'batman pants',
    price      :  22.50,
    category   : 'pants',
    bestSeller :  true,
    image      : 'https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png',
    onSale     :  false
  },
  {
    product    : 'batman shoes',
    price      :  22.50,
    category   : 'shoes',
    bestSeller :  true,
    image      : 'https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png',
    onSale     :  false
  }];
  let renderProducts = (arr) => (
    arr.map(  (item,idx)=>{
      return <div key={idx}>
      <h1>Category: {item.category}</h1>
      <p>Price: {item.price}</p>
      </div>
    }  )
  )

  return (
    <div className="App">
      <Header />
      {renderProducts(products)}
      <Footer />
    </div>
  );
}

export default App;
