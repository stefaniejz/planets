import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class SaturnComponent extends React.Component {
    state = {name:"Saturn",
    description1:"Saturn is the sixth planet from the Sun and the second largest planet in our solar system.",
    description2:"Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/151_saturn_carousel_1.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/152_saturn_carousel_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/153_saturn_carousel_3.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/154_saturn_carousel_4.jpg"],
    indepth_description:["Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.",
    "Surrounded by more than 60 known moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of water that spray from Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries.",
    "The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times. The planet is named for the Roman god of agriculture and wealth, who was also the father of Jupiter."],
    size_and_distance:["With a radius of 36,183.7 miles (58,232 kilometers), Saturn is 9 times wider than Earth. If Earth were the size of a nickel, Saturn would be about as big as a volleyball.",
    "From an average distance of 886 million miles (1.4 billion kilometers), Saturn is 9.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 80 minutes to travel from the Sun to Saturn."],
    orbit_and_rotation:["Saturn has the second-shortest day in the solar system. One day on Saturn takes only 10.7 hours (the time it takes for Saturn to rotate or spin around once), and Saturn makes a complete orbit around the Sun (a year in Saturnian time) in about 29.4 Earth years (10,756 Earth days).",
    "Its axis is tilted by 26.73 degrees with respect to its orbit around the Sun, which is similar to Earth's 23.5-degree tilt. This means that, like Earth, Saturn experiences seasons."],
    structure:["Like Jupiter, Saturn is made mostly of hydrogen and helium. At Saturn's center is a dense core of metals like iron and nickel surrounded by rocky material and other compounds solidified by the intense pressure and heat. It is enveloped by liquid metallic hydrogen inside a layer of liquid hydrogen—similar to Jupiter's core but considerably smaller.",
    "It's hard to imagine, but Saturn is the only planet in our solar system whose average density is less than water. The giant gas planet could float in a bathtub if such a colossal thing existed."],
    formation:["Saturn took shape when the rest of the solar system formed about 4.5 billion years ago, when gravity pulled swirling gas and dust in to become this gas giant. About 4 billion years ago, Saturn settled into its current position in the outer solar system, where it is the sixth planet from the Sun. Like Jupiter, Saturn is mostly made of hydrogen and helium, the same two main components that make up the Sun."],
    kid_friendly:[""],
    surface:["As a gas giant, Saturn doesn’t have a true surface. The planet is mostly swirling gases and liquids deeper down. While a spacecraft would have nowhere to land on Saturn, it wouldn’t be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet crush, melt and vaporize spacecraft trying to fly into the planet."],
    atmosphere:["Saturn is blanketed with clouds that appear as faint stripes, jet streams and storms. The planet is many different shades of yellow, brown and grey.",
    "Winds in the upper atmosphere reach 1,600 feet per second (500 meters per second) in the equatorial region. In contrast, the strongest hurricane-force winds on Earth top out at about 360 feet per second (110 meters per second). And the pressure—the same kind you feel when you dive deep underwater—is so powerful it squeezes gas into liquid.",
    "Saturn's north pole has an interesting atmospheric feature—a six-sided jet stream. This hexagon-shaped pattern was first noticed in images from the Voyager I spacecraft and has been more closely observed by the Cassini spacecraft since. Spanning about 20,000 miles (30,000 kilometers) across, the hexagon is a wavy jet stream of 200-mile-per-hour winds (about 322 kilometers per hour) with a massive, rotating storm at the center. There is no weather feature like it anywhere else in the solar system."],
    Magnetosphere:["Saturn's magnetic field is smaller than Jupiter's but still 578 times as powerful as Earth's. Saturn, the rings, and many of the satellites lie totally within Saturn's enormous magnetosphere, the region of space in which the behavior of electrically charged particles is influenced more by Saturn's magnetic field than by the solar wind.",
    "Aurorae occur when charged particles spiral into a planet's atmosphere along magnetic field lines. On Earth, these charged particles come from the solar wind. Cassini showed that at least some of Saturn's aurorae are like Jupiter's and are largely unaffected by the solar wind. Instead, these aurorae are caused by a combination of particles ejected from Saturn's moons and Saturn's magnetic field's rapid rotation rate. But these non-solar-originating aurorae are not completely understood yet."],
    moons:["Saturn is home to a vast array of intriguing and unique worlds. From the haze-shrouded surface of Titan to crater-riddled Phoebe, each of Saturn's moons tells another piece of the story surrounding the Saturn system. Currently Saturn has 53 confirmed moons with 29 additional provisional moons awaiting confirmation."],
    Potential_for_life:"Saturn's environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to. While planet Saturn is an unlikely place for living things to take hold, the same is not true of some of its many moons. Satellites like Enceladus and Titan, home to internal oceans, could possibly support life.",
    date_of_discovery:"Unknown",
    discovered_by:"Known by Ancients",
    average_orbit_distance:"1,426,666,422 km",
    mean_orbit_velocity:"34,701 km/h",
    orbit_eccentricity:"0.05386179",
    equatorial_inclination:"26.7 degrees",
    equatorial_radius:"58,232 km",
    equatorial_circumference:"365,882.4 km",
    volume:"827,129,915,150,897 km3",
    density:"0.687 g/cm3",
    mass:"568,319,000,000,000,000,000,000,000 kg",
    surface_area:"42,612,133,285 km2",
    surface_gravity:"10.4 m/s2",
    escape_velocity:"129,924 km/h",
    atomospheric_constituents:"Hydrogen, Helium",
    exploration:["Saturn is the sixth planet from the Sun and the second largest planet in our solar system.",
    "Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn's.",
    "Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium."],
    significant_events:[]}
    
    render(){
        return(
        <div className="Saturn">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Saturn
                <br></br>
                Jewel of Our Solar System
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 10759 earth days
                    <br></br>
                   Planet type: Gas Giant
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
            <MoreDestination></MoreDestination>
        </div>
        
        )
    }

    
}

export default SaturnComponent