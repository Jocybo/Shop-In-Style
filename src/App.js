import './App.css';
import Head from './head';
import Card from './card';
import { useState } from 'react';
import Cartitems from './Cartitems';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.css'

function App() {

  let products = [
    {
      id: 1,
      img: ("https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png"),
      title: "Nike",
      description: "Unisex Adilettle Shoe",
      price: 3199,
      price1 : 4199,
      isIfen : true
    },
    {
      id: 2,
      img: ("https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/384639/04/sv01/fnd/IND/fmt/png"),
      title: "Puma",
      description: "Unisex Slip-on Sneaker",
      price: 3299,
      price1 : 5999,
      sale: true,
      rating: true,
      isIfen : true
    },
    {
      id: 3,
      img: ("https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg"),
      title: "Addidas",
      description: "Comfort for Sports",
      price: 2599,
      sale: true,
      isIfen : true
    },
    {
      id: 4,
      img: ("https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010904454-Grey-1000010904454_01-2100.jpg"),
      title: "HRX",
      description: "Running Shoe",
      price: 1499,
      rating: true
    },
    {
      id: 5,
      img: ("https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw93085aed/images/large/8316671_7.jpeg?sw=800&sh=800"),
      title: "Bata",
      description: "Formal Profession Shoe",
      price: 3000,
      price1 : 4699,
      sale: true,
      isIfen : true

    },
    {
      id: 6,
      img: ("https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010183441-Brown-1000010183441_02-2100.jpg"),
      title: "U.S Polo",
      description: "Men Coloured Sneaker",
      price: 1799,
      price1 : 2499,
      isIfen : true

    },
    {
      id: 7,
      img: ("https://5.imimg.com/data5/TR/FE/MY-11667266/boys-shoes-500x500.jpg"),
      title: "Bata",
      description: "formal Tan color shoe",
      price: 799,
      price1 : 999,
      rating: true,
      sale: true,
      isIfen : true
    },
    {
      id: 8,
      img: ("https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010119487-Blue-1000010119487_02-2100.jpg"),
      title: "U.S Polo",
      description: "Men Sneakers",
      price: 499,
      rating: true
    },
  ]

  // using State for handling caritems and total : 

  const [cartitems, setCartitems] = useState([])
  const [total, setTotal] = useState(0)


  // Funtion for adding a item to the Cart :

  let handleCart = (item) => {
    setCartitems([...cartitems, item]);
    setTotal(total + item.price);
  };

  // Function for Remove the item From Cart :

  let handleRemoveCart = (item) => {
    let itemIndex = cartitems.findIndex((obj) => item.id === obj.id);
    cartitems.splice(itemIndex, 1);
    setCartitems([...cartitems]);
    setTotal(total - item.price);
  };

  return (
    <div className='container-fluid'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#!">All Products</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <div class="btn btn-outline-dark">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                <ol class="list-group list-group-numbered">
                  {
                    cartitems.map((item) => {
                      return <Cartitems item={item} handleRemoveCart={handleRemoveCart} />
                    })
                  }
                </ol>
                <h6 className='text-center'>Total : {total}</h6>
              </div>
            </form>

          </div>
        </div>
      </nav>
      <Head />
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              products.map((product) => {
                return <Card data={product} cartItem={cartitems}handleCart={handleCart} />
              })
            }
          </div>
        </div>
      </section>
    </div >
  );
}

export default App;
