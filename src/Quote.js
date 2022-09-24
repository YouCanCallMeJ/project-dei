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
// const getRandomIndex = function(length){
//   return parseInt(Math.random() * length)
// }


export default class SimpleSlider extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,count1:0,
      count2:0,count3:0,
      count4:0,count5:0
    };   
  }
  

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
            <span className="ranquote">{proverbs[0]}</span>
            <br/><span className ="likes" onClick={()=>this.setState({count : this.state.count+1})}>👍{this.state.count}</span>
            <br/><button className="copyBtn" onClick={()=>{
                          navigator.clipboard.writeText(proverbs[0])
                          alert("Copy completed!");}}>📥copy</button>
          </div>
          <div className="img ig2">
            <span className="ranquote">{proverbs[1]}</span>
            <br/><span className ="likes" onClick={()=>this.setState({count1 : this.state.count1+1})}>👍{this.state.count1}</span>
            <br/><button className="copyBtn" onClick={()=>{
                          navigator.clipboard.writeText(proverbs[1])
                          alert("Copy completed!");}}>📥copy</button>
          </div>
          <div className="img ig3">
            <span className="ranquote">{proverbs[2]}</span>
            <br/><span className ="likes" onClick={()=>this.setState({count2 : this.state.count2+1})}>👍{this.state.count2}</span>
            <br/><button className="copyBtn" onClick={()=>{
                          navigator.clipboard.writeText(proverbs[2])
                          alert("Copy completed!");}}>📥copy</button>
          </div>
          <div className="img ig4">
            <span className="ranquote">{proverbs[3]}</span>
            <br/><span className ="likes" onClick={()=>this.setState({count3 : this.state.count3+1})}>👍{this.state.count3}</span>
            <br/><button className="copyBtn" onClick={()=>{
                          navigator.clipboard.writeText(proverbs[3])
                          alert("Copy completed!");}}>📥copy</button>
          </div>
          <div className="img ig5">
            <span className="ranquote">{proverbs[4]}</span>
            <br/><span className ="likes" onClick={()=>this.setState({count4 : this.state.count4+1})}>👍{this.state.count4}</span>
            <br/><button className="copyBtn" onClick={()=>{
                          navigator.clipboard.writeText(proverbs[4])
                          alert("Copy completed!");}}>📥copy</button>
          </div>
          <div className="img ig6">
            <span className="ranquote">{proverbs[5]}</span>
            <br/><span className ="likes" onClick={()=>this.setState({count5 : this.state.count5+1})}>👍{this.state.count5}</span>
            <br/><button className="copyBtn" onClick={()=>{
                          navigator.clipboard.writeText(proverbs[5])
                          alert("Copy completed!");}}>📥copy</button>
          </div>
        </Slider>
      </div>
      </>
    );
  }
}