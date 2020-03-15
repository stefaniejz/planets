import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class JupiterComponent extends React.Component {
    state = {name:"Jupiter",
    description1:"Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe. ",
    description2:"Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/10_PIA02879_800.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/11_stsci-h-p1936a_800.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/13_PIA22335-800.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/12_P44430Ac_800.jpg"],
    indepth_description:["Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.",
    "Jupiter is surrounded by dozens of moons. Jupiter also has several rings, but unlike the famous rings of Saturn, Jupiter’s rings are very faint and made of dust, not ice."],
    size_and_distance:["With a radius of 43,440.7 miles (69,911 kilometers), Jupiter is 11 times wider than Earth. If Earth were the size of a nickel, Jupiter would be about as big as a basketball.",
    "From an average distance of 484 million miles (778 million kilometers), Jupiter is 5.2 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes Sunlight 43 minutes to travel from the Sun to Jupiter."],
    orbit_and_rotation:["Jupiter has the shortest day in the solar system. One day on Jupiter takes only about 10 hours (the time it takes for Jupiter to rotate or spin around once), and Jupiter makes a complete orbit around the Sun (a year in Jovian time) in about 12 Earth years (4,333 Earth days).",
    "Its equator is tilted with respect to its orbital path around the Sun by just 3 degrees. This means Jupiter spins nearly upright and does not have seasons as extreme as other planets do."],
    structure:["The composition of Jupiter is similar to that of the Sun—mostly hydrogen and helium. Deep in the atmosphere, pressure and temperature increase, compressing the hydrogen gas into a liquid. This gives Jupiter the largest ocean in the solar system—an ocean made of hydrogen instead of water. Scientists think that, at depths perhaps halfway to the planet's center, the pressure becomes so great that electrons are squeezed off the hydrogen atoms, making the liquid electrically conducting like metal. Jupiter's fast rotation is thought to drive electrical currents in this region, generating the planet's powerful magnetic field. It is still unclear if, deeper down, Jupiter has a central core of solid material or if it may be a thick, super-hot and dense soup. It could be up to 90,032 degrees Fahrenheit (50,000 degrees Celsius) down there, made mostly of iron and silicate minerals (similar to quartz)."],
    formation:["Jupiter took shape when the rest of the solar system formed about 4.5 billion years ago, when gravity pulled swirling gas and dust in to become this gas giant. Jupiter took most of the mass left over after the formation of the Sun, ending up with more than twice the combined material of the other bodies in the solar system. In fact, Jupiter has the same ingredients as a star, but it did not grow massive enough to ignite.",
    "About 4 billion years ago, Jupiter settled into its current position in the outer solar system, where it is the fifth planet from the Sun."],
    kid_friendly:[""],
    surface:["As a gas giant, Jupiter doesn’t have a true surface. The planet is mostly swirling gases and liquids. While a spacecraft would have nowhere to land on Jupiter, it wouldn’t be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet crush, melt and vaporize spacecraft trying to fly into the planet."],
    atmosphere:["Jupiter's appearance is a tapestry of colorful cloud bands and spots. The gas planet likely has three distinct cloud layers in its skies that, taken together, span about 44 miles (71 kilometers). The top cloud is probably made of ammonia ice, while the middle layer is likely made of ammonium hydrosulfide crystals. The innermost layer may be made of water ice and vapor.",
    "The vivid colors you see in thick bands across Jupiter may be plumes of sulfur and phosphorus-containing gases rising from the planet's warmer interior. Jupiter's fast rotation—spinning once every 10 hours—creates strong jet streams, separating its clouds into dark belts and bright zones across long stretches.",
    "With no solid surface to slow them down, Jupiter's spots can persist for many years. Stormy Jupiter is swept by over a dozen prevailing winds, some reaching up to 335 miles per hour (539 kilometers per hour) at the equator. The Great Red Spot, a swirling oval of clouds twice as wide as Earth, has been observed on the giant planet for more than 300 years. More recently, three smaller ovals merged to form the Little Red Spot, about half the size of its larger cousin. Scientists do not yet know if these ovals and planet-circling bands are shallow or deeply rooted to the interior."],
    Magnetosphere:["The Jovian magnetosphere is the region of space influenced by Jupiter's powerful magnetic field. It balloons 600,000 to 2 million miles (1 to 3 million kilometers) toward the Sun (seven to 21 times the diameter or Jupiter itself) and tapers into a tadpole-shaped tail extending more than 600 million miles (1 billion kilometers) behind Jupiter, as far as Saturn's orbit. Jupiter's enormous magnetic field is 16 to 54 times as powerful as that of the Earth. It rotates with the planet and sweeps up particles that have an electric charge. Near the planet, the magnetic field traps swarms of charged particles and accelerates them to very high energies, creating intense radiation that bombards the innermost moons and can damage spacecraft.",
    "Jupiter's magnetic field also causes some of the solar system's most spectacular aurorae at the planet's poles."],
    moons:["With four large moons and many smaller moons, Jupiter forms a kind of miniature solar system. Jupiter has 53 confirmed moons and 26 provisional moons awaiting confirmation of discovery. Moons are named after they are confirmed.",
    "Jupiter's four largest moons—Io, Europa, Ganymede and Callisto—were first observed by the astronomer Galileo Galilei in 1610 using an early version of the telescope. These four moons are known today as the Galilean satellites, and they're some of the most fascinating destinations in our solar system. Io is the most volcanically active body in the solar system. Ganymede is the largest moon in the solar system (even bigger than the planet Mercury). Callisto’s very few small craters indicate a small degree of current surface activity. A liquid-water ocean with the ingredients for life may lie beneath the frozen crust of Europa, making it a tempting place to explore."],
    Potential_for_life:"Jupiter’s environment is probably not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to. While planet Jupiter is an unlikely place for living things to take hold, the same is not true of some of its many moons. Europa is one of the likeliest places to find life elsewhere in our solar system. There is evidence of a vast ocean just beneath its icy crust, where life could possibly be supported.",
    date_of_discovery:"Unknown",
    discovered_by:"Known by Ancients",
    average_orbit_distance:"778,340,821 km",
    mean_orbit_velocity:"47,002 km/h",
    orbit_eccentricity:"0.04838624",
    equatorial_inclination:"3.1 degrees",
    equatorial_radius:"69,911 km",
    equatorial_circumference:"439,263.8 km",
    volume:"1,431,281,810,739,360 km3",
    density:"1.326 g/cm3",
    mass:"641,693,000,000,000,000,000,000 kg",
    surface_area:"61,418,738,571 km2",
    surface_gravity:"24.79 m/s2",
    escape_velocity:"216,720 km/h",
    atomospheric_constituents:"Hydrogen, Helium",
    exploration:["While Jupiter has been known since ancient times, the first detailed observations of this planet were made by Galileo Galilei in 1610 with a small telescope. More recently, this planet has been visited by passing spacecraft, orbiters and probes.",
    "Pioneer 10 and 11 and Voyager 1 and 2 were the first to fly by Jupiter in the 1970s, and since then we’ve sent Galileo to orbit the gas giant and drop a probe into its atmosphere. Cassini took detailed photos of Jupiter on its way to neighboring Saturn, as did New Horizons on its quest for Pluto and the Kuiper Belt. NASA’s Juno spacecraft, which arrived in the Jovian system in July 2016, is currently studying the giant planet from orbit."],
    significant_events:["1610: Galileo Galilei makes the first detailed observations of Jupiter.",
    "1973: Pioneer 10 becomes the first spacecraft to cross the asteroid belt and fly past Jupiter.",
    "1979: Voyager 1 and 2 discover Jupiter's faint rings, several new moons and volcanic activity on Io's surface.",
    "1992: Ulysses swung by Jupiter on Feb. 8, 1992. The giant planet's gravity bent the spacecraft's flight path southward and away from the ecliptic plane, putting the probe into a final orbit that would take it over the sun's south and north poles.",
    "1994: Astronomers observe as pieces of comet Shoemaker-Levy 9 collide with Jupiter's southern hemisphere.",
    "1995-2003: The Galileo spacecraft drops a probe into Jupiter's atmosphere and conducts extended observations of Jupiter and its moons and rings.",
    "2000: Cassini makes its closest approach to Jupiter at a distance of approximately 6.2 million miles (10 million kilometers), taking a highly detailed true color mosaic photo of the gas giant.",
    "2007: Images taken by NASA's New Horizons spacecraft, on the way to Pluto, show new perspectives on Jupiter's atmospheric storms, the rings, volcanic Io, and icy Europa.",
    "2009: On 20 July, almost exactly 15 years after fragments of comet Shoemaker-Levy slammed into Jupiter, a comet or asteroid crashes into the giant planet's southern hemisphere.",
    "2011: Juno launches to examine Jupiter's chemistry, atmosphere, interior structure and magnetosphere.",
    "2016: NASA's Juno spacecraft arrives at Jupiter, conducting an in-depth investigation of the planet's atmosphere, deep structure and magnetosphere for clues to its origin and evolution."]
  }
    
    render(){
        return(
        <div className="Jupiter">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://www.kodkey.com/wp-content/uploads/2018/07/frlxfn0cnkmclgcw0oxn.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Jupiter
                <br></br>
                Twice as massive as all 
                <br></br>
                the other planets combined
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 4333 earth days
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

export default JupiterComponent