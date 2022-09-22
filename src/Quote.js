import React, { Component } from "react";
import Slider from "react-slick";
import './App.css';
import "./slick.css";
import "./slick-theme.css";

const proverbs = ["What divides us pales in comparison to what unites us.",   
                  "Diversity is about all of us and about us having to figure out how to walk through this world together.", 
                  "A diverse mix of voices leads to better discussions, decisions, and outcomes for everyone.",
                  "It is time for parents to teach young people early on that in diversity, there is beauty, and there is strength.",
                  "The greater the diversity, the greater the perfection.",
                  "Our ability to reach unity in diversity will be the beauty and the test of our civilization."];
const getRandomIndex = function(length){
  return parseInt(Math.random() * length)
}
export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <>
    <div className="quote-main">      
    </div>
      <div>
        <h2 className="top__quote"> Diversity Equity and Inclusion</h2>
        <Slider {...settings}>
          <div className="img ig1">
            <span className="ranquote">{proverbs[getRandomIndex(proverbs.length)]}</span>
          </div>
          <div className="img ig2">
            <span className="ranquote">{proverbs[getRandomIndex(proverbs.length)]}</span>
          </div>
          <div className="img ig3">
            <span className="ranquote">{proverbs[getRandomIndex(proverbs.length)]}</span>
          </div>
          <div className="img ig4">
            <span className="ranquote">{proverbs[getRandomIndex(proverbs.length)]}</span>
          </div>
          <div className="img ig5">
            <span className="ranquote">{proverbs[getRandomIndex(proverbs.length)]}</span>
          </div>
          <div className="img ig6">
            <span className="ranquote">{proverbs[getRandomIndex(proverbs.length)]}</span>
          </div>
        </Slider>
      </div>
      </>
    );
  }
}