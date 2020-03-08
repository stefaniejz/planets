import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'


class MecuryComponent extends React.Component {
    state={name:"Mecury",
    description1:"The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.",
    description2:"From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/72_mercury_carousel_4.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/73_carousel_mercury_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/74_mercury_carousel_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/75_mercury_carousel_1.jpg"],
    surface_image:"https://solarsystem.nasa.gov/system/content_pages/main_images/123_Mercury_Battered_720.jpg",
    indepth_description:["The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
    "Mercury is appropriately named for the swiftest of the ancient Roman gods."],
    size_and_distance:["With a radius of 1,516 miles (2,440 kilometers), Mercury is a little more than 1/3 the width of Earth. If Earth were the size of a nickel, Mercury would be about as big as a blueberry.",
    "From an average distance of 36 million miles (58 million kilometers), Mercury is 0.4 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 3.2 minutes to travel from the Sun to Mercury.",
    "Mercury spins slowly on its axis and completes one rotation every 59 Earth days. But when Mercury is moving fastest in its elliptical orbit around the Sun (and it is closest to the Sun), each rotation is not accompanied by a sunrise and sunset like it is on most other planets. The morning Sun appears to rise briefly, set and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset for other parts of the surface. One Mercury solar day (one full day-night cycle) equals 176 Earth days—just over two years on Mercury.",
    "Mercury's axis of rotation is tilted just 2 degrees with respect to the plane of its orbit around the Sun. That means it spins nearly perfectly upright and so does not experience seasons like many other planets do."],
    orbit_and_rotation:["Mercury's highly eccentric, egg-shaped orbit takes the planet as close as 29 million miles (47 million kilometers) and as far as 43 million miles (70 million kilometers) from the Sun. It speeds around the Sun every 88 days, traveling through space at nearly 29 miles (47 kilometers) per second, faster than any other planet."],
    structure:["Mercury is the second densest planet, after Earth. It has a large metallic core with a radius of about 1,289 miles (2,074 kilometers), about 85 percent of the planet's radius. There is evidence that it is partly molten, or liquid. Mercury's outer shell, comparable to Earth's outer shell (called the mantle and crust), is only about 400 kilometers (250 miles) thick."],
    formation:["Mercury formed about 4.5 billion years ago when gravity pulled swirling gas and dust together to form this small planet nearest the Sun. Like its fellow terrestrial planets, Mercury has a central core, a rocky mantle and a solid crust.",
    "Along with Venus, Earth, and Mars, Mercury is one of the rocky planets. It has a solid surface that is covered with craters like our Moon. It has a thin atmosphere, and it doesn’t have any moons. Mercury likes to keep things simple.",
    "Mercury spins slowly compared to Earth, so one day lasts a long time. Mercury takes 59 Earth days to make one full rotation. But a year on Mercury goes fast. Because it’s the closest planet to the sun, it goes around the Sun in just 88 Earth days."],
    kid_friendly:["Mercury is the smallest planet in our solar system. It’s a little bigger than Earth’s Moon. It is the closest planet to the Sun, but it’s actually not the hottest. Venus is hotter.",
    "Very large impact basins, including Caloris (960 miles or 1,550 kilometers in diameter) and Rachmaninoff (190 miles, or 306 kilometers in diameter), were created by asteroid impacts on the planet's surface early in the solar system's history. While there are large areas of smooth terrain, there are also cliffs, some hundreds of miles long and soaring up to a mile high. They rose as the planet's interior cooled and contracted over the billions of years since Mercury formed."],
    surface:["Mercury's surface resembles that of Earth's moon, scarred by many impact craters resulting from collisions with meteoroids and comets. Craters and features on Mercury are named after famous deceased artists, musicians or authors, including children's author Dr. Seuss and dance pioneer Alvin Ailey.",
    "Temperatures on the surface of Mercury are extreme, both hot and cold. During the day, temperatures on Mercury's surface can reach 800 degrees Fahrenheit (430 degrees Celsius). Because the planet has no atmosphere to retain that heat, nighttime temperatures on the surface can drop to minus 290 degrees Fahrenheit (minus 180 degrees Celsius).",
    "Mercury may have water ice at its north and south poles inside deep craters, but only in regions of permanent shadow. There it could be cold enough to preserve water ice despite the high temperatures on sunlit parts of the planet."],
    atmosphere:["Instead of an atmosphere, Mercury possesses a thin exosphere made up of atoms blasted off the surface by the solar wind and striking meteoroids. Mercury's exosphere is composed mostly of oxygen, sodium, hydrogen, helium and potassium."],
    Magnetosphere:["Mercury's magnetic field is offset relative to the planet's equator. Though Mercury's magnetic field at the surface has just one percent the strength of Earth's, it interacts with the magnetic field of the solar wind to sometimes create intense magnetic tornadoes that funnel the fast, hot solar wind plasma down to the surface of the planet. When the ions strike the surface, they knock off neutrally charged atoms and send them on a loop high into the sky."],
    moons:["Mercury has no moon."],
    Potential_for_life:"Mercury's environment is not conducive to life as we know it. The temperatures and solar radiation that characterize this planet are most likely too extreme for organisms to adapt to.",
    date_of_discovery:"Unknown",
    discovered_by:"Known by Ancients",
    average_orbit_distance:"57,909,227 km",
    mean_orbit_velocity:"170,503 km/h",
    orbit_eccentricity:"0.20563593",
    equatorial_inclination:"0 degree",
    equatorial_radius:"2,439.7 km",
    equatorial_circumference:"15,329.1 km",
    volume:"60,827,208,742 km3",
    density:"5.427g/cm3",
    mass:"330,104,000,000,000,000,000,000 kg",
    surface_area:"74,797,000 km2",
    surface_gravity:"3.7 m/s2",
    escape_velocity:"15,300km/h",
    atomospheric_constituents:"",
    exploration:["Because Mercury is so close to the Sun, it is hard to directly observe from Earth except during dawn or twilight, when the Sun's brightness doesn't outshine little Mercury. However, 13 times each century, observers on Earth can watch Mercury pass across the face of the Sun, an event called a transit. These rare transits fall within several days of 8 May and 10 November. The first transits of Mercury in the 21st century occurred May 7, 2003, Nov. 8, 2006, and May 9, 2016. The next one will be Nov. 11, 2019.",
    "The first spacecraft to visit Mercury was Mariner 10, which imaged about 45 percent of the surface. And the MESSENGER spacecraft flew by Mercury three times and orbited the planet for four years before crashing on its surface. The European Space Agency launched their first mission to explore Mercury—BepiColombo—in 2018."],
    significant_evets:["1631: Thomas Harriott and Galileo Galilei observe Mercury with the newly invented telescope.",
    "​1631: Pierre Gassendi uses a telescope to watch from Earth as Mercury crosses the face of the Sun.",
    "1965: Incorrectly believing for centuries that the same side of Mercury always faces the Sun, astronomers using radar find that the planet rotates three times for every two orbits.",
    "1974-1975: Mariner 10 photographs roughly half of Mercury's surface during three flybys.",
    "1991: Scientists using Earth-based radar find signs of ice locked in permanently shadowed areas of craters in Mercury's polar regions.",
    "2008-2009: MESSENGER observes Mercury during three flybys.",
    "2011: MESSENGER begins its orbital mission at Mercury, yielding a treasure trove of images, compositional data and scientific discoveries.",
    "2015: MESSENGER is deliberately crashed into Mercury after expending all its propellant, ending its mission.",
    "2018: BepiColombo launches with a target date for Mercury orbit insertion of 2025."]
  }

    render(){
        return(
        <div className="Mecury">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://mustlovecrows.com/wp-content/uploads/2019/10/free-intuitive-readings-must-love-crows.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Mecury
                <br></br>
                The Swiftest Planet
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 88 earth days
                    <br></br>
                   Planet type: Terrestrial
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
            <MoreDestination detail = {this.state}></MoreDestination>
        </div>
        
        )
    }
}


export default MecuryComponent