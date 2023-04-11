import "./App.scss";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import BasicLayout from './layouts/BasicLayout'

const App = () => {
  const navigate = useNavigate();
  const navigateToRegistration = () => {
    navigate("/register");
  }

  const cardsInfo = [
    { title: "1", text: "We are cool" },
    { title: "2", text: "Our team is friendly" },
    { title: "3", text: "=)" },
    { title: "4", text: "Our product is great" }
  ]

  return (
    <BasicLayout>
      <div className="container">
        <div className="row pt-5">
          <div className="col-1"></div>
          <div className="col">
            <div className="d-flex flex-column main-page-slogan">
              <div className="main-page-slogan__short-description">Just try our product</div>
              <div className="main-page-slogan__full-description">And with the help of all our services</div>
              <div className="main-page-slogan__full-description">your business will <b>greatly</b> improve</div>
              <button onClick={() => navigateToRegistration()} type="button" className="mt-5 py-2 text-white border-0 w-100 bg-dark cursor-pointer">Register Now!</button>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="easy-accounting-block my-10">
        <div className="fixed-image-bg py-5 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <p className="col-12 d-flex justify-content-center">Task management has never been so easy!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-8">
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <div className="d-flex flex-column reasons-to-choose-us">
              <div className="reasons-to-choose-us__title">Reasons to choose us</div>
              <div className="reasons-to-choose-us__cards d-flex flex-wrap justify-content-between">
                {cardsInfo.map(card => {
                  return (
                    <div className="reasons-to-choose-us__cards__instance d-flex flex-column col-md-5 mt-4" key={card.title}>
                      <div className="reasons-to-choose-us__cards__instance__title w-100 text-center"><p>{card.title}</p></div>
                      <div className="reasons-to-choose-us__cards__instance__text"><p>{card.text}</p></div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </BasicLayout>

  );
};

export default App;
