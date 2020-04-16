import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews.js';

function App() {
  /*
  const userLogged = "Kevin Bowie";
  const userLoggedJSX = <strong>BWA For Future</strong>;

  let a = 1;
  let b = 2;

  return (
    <div className="App">

      {userLogged}
      {userLoggedJSX}
      {a + b / 200}

    </div>
  );*/


  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Youdra Dora" category="LEBARAN" />
      <ReviewItems />
    </div>
  );
}

function FotoProduk() {
  return (
      <div className="Foto">
        <img src="index.jpg"/>
      </div>
    );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;

  let text = '';
  if(isDiscount == "yes") {
    text = `Diskon ${discount}% Off`;
  }
  else if(isDiscount == 'coming') {
    text = 'Coming soon';
  }
  else {
    text = 'Belum ada diskon';
  }

  return (
    <p>{text}</p>
  );
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = ['Tidak kusut terkena air', 'Bahan lebih halus', 'Tidak gerah'];
  const listBenefits = benefits.map((benefit) => <li key={benefit}>{benefit}</li>);

  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 73.309.300</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">
          One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features lightweight, visible cushioning just like the original from 88. Signature details and materials celebrate the game-changing icon. 
        </p>
        <ul>{listBenefits}</ul>
        <a href="#" onClick={(e) => TambahCart(name, e)}>Add to Cart</a>
      </div>
    </div>
  ); 
}

function TambahCart(name, e) {
  return console.log(`Membeli ${name}`);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
}

export default App;
