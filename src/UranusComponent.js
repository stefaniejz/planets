import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class UranusComponent extends React.Component {
    state = {name:"Uranus",
    description1:"The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.",
    description2:"April 24, 2018: The jokes, they write themselves. The science is pretty interesting, too. What do the clouds of Uranus have in common with rotten eggs? The composition of Uranus' clouds had long been a mystery. In April 2017, a global research team found hydrogen sulfide, the odiferous gas that most people avoid, in Uranus’ cloud tops—a striking difference from the gas giant planets located closer to the Sun.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/88_carousel_uranus.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/89_uranus_carousel_1.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/90_uranus_carousel_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/92_uranus_carousel_4.jpg"],
    indepth_description:["The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball.",
    "The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball.",
    "William Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode."],
    size_and_distance:["With a radius of 15,759.2 miles (25,362 kilometers), Uranus is 4 times wider than Earth. If Earth was the size of a nickel, Uranus would be about as big as a softball.",
    "From an average distance of 1.8 billion miles (2.9 billion kilometers), Uranus is 19.8 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 2 hours and 40 minutes to travel from the Sun to Uranus."],
    orbit_and_rotation:["One day on Uranus takes about 17 hours (the time it takes for Uranus to rotate or spin once). And Uranus makes a complete orbit around the Sun (a year in Uranian time) in about 84 Earth years (30,687 Earth days).",
    "Uranus is the only planet whose equator is nearly at a right angle to its orbit, with a tilt of 97.77 degrees—possibly the result of a collision with an Earth-sized object long ago. This unique tilt causes the most extreme seasons in the solar system. For nearly a quarter of each Uranian year, the Sun shines directly over each pole, plunging the other half of the planet into a 21-year-long, dark winter.",
    "Uranus is also one of just two planets that rotate in the opposite direction than most of the planets (Venus is the other one), from east to west."],
    structure:["Uranus is one of two ice giants in the outer solar system (the other is Neptune). Most (80 percent or more) of the planet's mass is made up of a hot dense fluid of , icy materials—water, methane and ammonia—above a small rocky core. Near the core, it heats up to 9,000 degrees Fahrenheit (4,982 degrees Celsius).",
    "Uranus is slightly larger in diameter than its neighbor Neptune, yet smaller in mass. It is the second least dense planet; Saturn is the least dense of all.",
    "Uranus gets its blue-green color from methane gas in the atmosphere. Sunlight passes through the atmosphere and is reflected back out by Uranus' cloud tops. Methane gas absorbs the red portion of the light, resulting in a blue-green color."],
    formation:["Uranus took shape when the rest of the solar system formed about 4.5 billion years ago, when gravity pulled swirling gas and dust in to become this ice giant. Like its neighbor Neptune, Uranus likely formed closer to the Sun and moved to the outer solar system about 4 billion years ago, where it is the seventh planet from the Sun."],
    kid_friendly:["Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. The methane makes Uranus blue.",
    "Uranus also has faint rings. The inner rings are narrow and dark. The outer rings are brightly colored and easier to see.",
    "Like Venus, Uranus rotates in the opposite direction as most other planets. And unlike any other planet, Uranus rotates on its side."],
    surface:["As an ice giant, Uranus doesn’t have a true surface. The planet is mostly swirling fluids. While a spacecraft would have nowhere to land on Uranus, it wouldn’t be able to fly through its atmosphere unscathed either. The extreme pressures and temperatures would destroy a metal spacecraft."],
    atmosphere:["Uranus' atmosphere is mostly hydrogen and helium, with a small amount of methane and traces of water and ammonia. The methane gives Uranus its signature blue color.",
    "While Voyager 2 saw only a few discrete clouds, a Great Dark Spot and a small dark spot during its flyby in 1986, more recent observations reveal that Uranus exhibits dynamic clouds as it approaches equinox, including rapidly changing bright features.",
    "Uranus' planetary atmosphere, with a minimum temperature of 49K (-224.2 degrees Celsius) makes it even colder than Neptune in some places.",
    "Wind speeds can reach up to 560 miles per hour (900 kilometers per hour) on Uranus. Winds are retrograde at the equator, blowing in the reverse direction of the planet’s rotation. But closer to the poles, winds shift to a prograde direction, flowing with Uranus' rotation."],
    Magnetosphere:["Uranus has an unusual, irregularly shaped magnetosphere. Magnetic fields are typically in alignment with a planet's rotation, but Uranus' magnetic field is tipped over: the magnetic axis is tilted nearly 60 degrees from the planet's axis of rotation, and is also offset from the center of the planet by one-third of the planet's radius.",
    "Auroras on Uranus are not in line with the poles (like they are on Earth, Jupiter and Saturn) due to the lopsided magnetic field.",
    "The magnetosphere tail behind Uranus opposite the Sun extends into space for millions of miles. Its magnetic field lines are twisted by Uranus’ sideways rotation into a long corkscrew shape."],
    moons:["Uranus has 27 known moons. While most of the satellites orbiting other planets take their names from Greek or Roman mythology, Uranus' moons are unique in being named for characters from the works of William Shakespeare and Alexander Pope.",
    "All of Uranus' inner moons appear to be roughly half water ice and half rock. The composition of the outer moons remains unknown, but they are likely captured asteroids."],
    Potential_for_life:"Uranus' environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.",
    date_of_discovery:"13 March 1781",
    discovered_by:"William Herschel",
    average_orbit_distance:"2,870,658,186 km",
    mean_orbit_velocity:"24,477 km/h",
    orbit_eccentricity:"0.047257449",
    equatorial_inclination:"97.8 degrees (retrograde rotation)",
    equatorial_radius:"25,362 km",
    equatorial_circumference:"159,354.1 km",
    volume:"68,334,355,695,584 km3",
    density:"1.270 g/cm3",
    mass:"86,810,300,000,000,000,000,000,000 kg",
    surface_area:"8,083,079,690 km2",
    surface_gravity:"8.87 m/s2",
    escape_velocity:"76,968 km/h",
    atomospheric_constituents:"Hydrogen, Helium, Methane"
    }
    
    render(){
        return(
        <div className="Uranus">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"105vh"}} 
              src="https://www.jpl.nasa.gov/images/voyager/20160121/PIA18182-16.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Uranus
                <br></br>
                The Sideways Planet
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 30687 earth days
                    <br></br>
                   Planet type: Ice Giant
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
            <MoreDestination></MoreDestination>
        </div>
        
        )
    }

    
}

export default UranusComponent