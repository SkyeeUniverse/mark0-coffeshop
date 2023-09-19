import espresso from "../assets/menu/espresso.png";
import React from "react";

const Menu = () => {
  return (
    <div>
      <section id="menu2" className="menu">
        <div>
          <h2>
            Menu <span>Kami</span>
          </h2>
          <p>
            dignissim convallis aenean et tortor at risus viverra adipiscing at
            in tellus integer feugiat scelerisque.
          </p>
        </div>
        <div className="row-menu">
          <div className="menu-card">
            <img src={espresso} alt="espresso" className="menu-card-img" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 15K</p>
          </div>
          <div className="menu-card">
            <img src={espresso} alt="espresso" className="menu-card-img" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 15K</p>
          </div>
          <div className="menu-card">
            <img src={espresso} alt="espresso" className="menu-card-img" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 15K</p>
          </div>
          <div className="menu-card">
            <img src={espresso} alt="espresso" className="menu-card-img" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 15K</p>
          </div>
          <div className="menu-card">
            <img src={espresso} alt="espresso" className="menu-card-img" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 15K</p>
          </div>
          <div className="menu-card">
            <img src={espresso} alt="espresso" className="menu-card-img" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 15K</p>
          </div>
          <div className="menu-card">
            <img src={espresso} alt="espresso" className="menu-card-img" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 15K</p>
          </div>
          <div className="menu-card">
            <img src={espresso} alt="espresso" className="menu-card-img" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 15K</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
