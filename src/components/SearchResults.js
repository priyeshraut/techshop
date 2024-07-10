import React, { useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product";
import MoveToTop from "./MoveToTop";
import { useSelector } from "react-redux";
import useFirstComponentAndMoveToTop from "../hooks/useFirstComponentAndMoveToTop";

const SearchResults = () => {
  const { topLinkRef, firstComponentRef } = useFirstComponentAndMoveToTop();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");


  const filteredProducts = useSelector((store) => store.search.filteredProducts);

  return (
    <main ref={firstComponentRef}>
        <section className="searchResults categorySection smallScreenPadding">
          <div className="searchResultsCat productCat container mainContainer">
            <h2>Seacrh Results</h2>
            <div>
              {filteredProducts.length !== 0 ? (
                <p>
                  {filteredProducts.length} items found for "{query}"
                </p>
              ) : (
                <p>No results found for "{query}". Try a new search.</p>
              )}
            </div>
            <div className="items">
              {filteredProducts &&
                filteredProducts.map((data) => (
                    <Product 
                    key={data.id}
                      id={data.id}
                      item={data}
                      itemName={data.itemName}
                      image={data.image}
                      price={data.price}
                      cutPrice={data.cutPrice}
                      sale={data.sale}
                      qty={true}
                      addToCart={true}
                    />
                ))}
            </div>
          </div>
        </section>
      <MoveToTop ref={topLinkRef} />
    </main>
  );
};

export default SearchResults;
