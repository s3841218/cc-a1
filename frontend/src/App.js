import './App.css';
// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


//Components
import Navbar from './components/Navbar';

function App() {



  return (
    <Router>
      <Navbar />
 


      <main>
        <Routes>
          {/* <Route exact path="/" component={HomeScreen} /> */}
          <Route exact path="/" element={<HomeScreen />} />
          {/* <Route exact path="/product/:id" component={ProductScreen} /> */}
          <Route exact path="/product/:id" element={<ProductScreen />} />
          {/* <Route exact path="/cart" component={CartScreen} /> */}
          <Route exact path="/cart" element={<CartScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
      </Router>
  );
}

export default App;
