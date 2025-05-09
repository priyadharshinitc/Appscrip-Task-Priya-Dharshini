import React, { useState } from "react";
import "../styles/Shop.css";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import SidePanel from "./SidePanel";
import ProductList from "./ProductList";

const Shop = () => {
  const [showSidePanel, setShowSidePanel] = useState(false);

  const displaySidePanel = () => {
    setShowSidePanel(prev => !prev);
  }

  return (
    <>
      <div className="filterSection__mobileView">
        <button className="filterSection__btn filterSection__filter" onClick={displaySidePanel}>
          FILTER
        </button>

        <div className="filterSection__divider"></div>

        <select  className="filterSection__btn filterSection__recommend">
            <option value="recommended">RECOMMENDED</option>
            <option value="newest first">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price: high to low">PRICE: HIGH TO LOW</option>
            <option value="price: low to high">PRICE: LOW TO HIGH</option>
          </select>
      </div>

      <div className="filterSection__tabletView">
        <div className="filterSection__leftPanel">
          <h4 className="filterSection__productQuantity">20 ITEMS</h4>

          <button className="filterSection__filterBtn" onClick={displaySidePanel}>
            {
              showSidePanel ? <span>
                <MdKeyboardArrowLeft /> HIDE FILTER</span> : <span><MdKeyboardArrowRight /> SHOW FILTER</span>
            }
          </button>
        </div>

        <select className="filterSection__btn filterSection__recommend">
          <option value="recommended">RECOMMENDED</option>
          <option value="newest first">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="price: high to low">PRICE: HIGH TO LOW</option>
          <option value="price: low to high">PRICE: LOW TO HIGH</option>
        </select>
      </div>

      <main className="mainContainer">
        <aside className={`sidePanelWrapper ${showSidePanel ? "open": ""}`}>
          <SidePanel />
        </aside>
        <ProductList />
      </main>
    </>
  );
};

export default Shop;