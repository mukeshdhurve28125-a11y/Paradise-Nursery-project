import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedNodes, setAddedNodes] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from indoor air.", cost: "$12" },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", description: "Removes mold spores and purifies air.", cost: "$18" },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity and purifies indoor pollutants.", cost: "$14" },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/02/ficus-elastica-4850608_1280.jpg", description: "Easy to grow and effective at toxins removal.", cost: "$20" },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/18/08/aloe-vera-3284620_1280.jpg", description: "Clears toxins and provides soothing gel.", cost: "$10" }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2017/07/18/18/24/lavender-2516681_1280.jpg", description: "Calming scent that aids relaxation.", cost: "$20" },
        { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2018/06/23/15/58/jasmine-3492981_1280.jpg", description: "Sweet floral scent to boost mood.", cost: "$18" },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating aroma used in cooking.", cost: "$15" },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/27/18/28/mint-1165038_1280.jpg", description: "Refreshing herbal aroma.", cost: "$10" },
        { name: "Eucalyptus", image: "https://cdn.pixabay.com/photo/2018/05/23/21/28/eucalyptus-3425268_1280.jpg", description: "Fresh woody scent helpful for respiration.", cost: "$22" },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2017/05/18/18/02/lemon-balm-2324296_1280.jpg", description: "Citrusy aroma that reduces stress.", cost: "$12" }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Echinacea", image: "https://cdn.pixabay.com/photo/2016/08/04/11/40/echinacea-1568892_1280.jpg", description: "Known for boosting immune system health.", cost: "$16" },
        { name: "Peppermint", image: "https://cdn.pixabay.com/photo/2017/07/11/18/14/peppermint-2494580_1280.jpg", description: "Soothes digestive issues and headaches.", cost: "$13" },
        { name: "Holy Basil (Tulsi)", image: "https://cdn.pixabay.com/photo/2021/01/08/09/20/tulsi-5900010_1280.jpg", description: "Adaptogenic herb that fights stress.", cost: "$14" },
        { name: "Chamomile", image: "https://cdn.pixabay.com/photo/2017/06/10/16/05/chamomile-2390013_1280.jpg", description: "Calming herb used for restful tea.", cost: "$11" },
        { name: "Calendula", image: "https://cdn.pixabay.com/photo/2016/07/18/16/23/marigold-1526227_1280.jpg", description: "Soothes skin and minor wounds.", cost: "$12" },
        { name: "Thyme", image: "https://cdn.pixabay.com/photo/2017/05/11/19/44/thyme-2305193_1280.jpg", description: "Antimicrobial herb good for coughs.", cost: "$10" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedNodes((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleHomeClick = () => {
    window.location.reload();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
          <h3>Paradise Nursery</h3>
        </div>
        <ul className="nav-links">
          <li><a href="#" onClick={handleHomeClick}>Home</a></li>
          <li><a href="#" onClick={handleContinueShopping}>Plants</a></li>
          <li>
            <a href="#" onClick={handleCartClick} className="cart-icon-container">
              🛒 <span className="cart-count">{totalCartQuantity}</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      {!showCart ? (
        <div className="product-grid-container">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{categoryObj.category}</h2>
              <div className="plant-cards-wrapper">
                {categoryObj.plants.map((plant, plantIndex) => (
                  <div key={plantIndex} className="plant-card">
                    <img src={plant.image} alt={plant.name} className="plant-image" />
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-cost">{plant.cost}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedNodes[plant.name]}
                    >
                      {addedNodes[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
