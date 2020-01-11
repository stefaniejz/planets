import React from 'react'
import Slider from "react-slick";

export default class MoreDestination extends React.Component {
    state={planets:[{name:"Jupiter",image:"https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png"},
    {name:"Earth",image:"https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png"},
    {name:"Mecury",image:"https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png"},
    {name:"Mars",image:"https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png"},
    {name:"Venus",image:"https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png"},
    {name:"Saturn",image:"https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png"},
    {name:"Uranus",image:"https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png"},
    {name:"Neptune",image:"https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png"},
    {name:"Earth's Moon",image:"https://solarsystem.nasa.gov/system/feature_items/images/31_earth_moon.png"}]}
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
        };
        return (
          <div>
            <h2> More Destinations</h2>
            <Slider {...settings}>
             {this.state.planets.map((planet,index)=>{
                 return  <div>
                    <img src={planet.image} style={{width:300}}></img>
                    <h3>{planet.name}</h3>
                </div>
             })}
            </Slider>
          </div>
        );
      }
  }