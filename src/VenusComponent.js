import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class VenusComponent extends React.Component {
    state = {name:"Venus",
    description1:"Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world.",
    description2:"Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system—with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/143_venus_carousel_5.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/144_venus_carousel_4.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/146_venus_carousel_3.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/147_venus_carousel_2.jpg"], 
    surface_image:"",
    indepth_description:["Venus is the second planet from the Sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction from most planets. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.", "Venus is named for the ancient Roman goddess of love and beauty, who was known as Aphrodite to the Ancient Greeks."],
    size_and_distance:["With a radius of 3,760 miles (6,052 kilometers), Venus is roughly the same size as Earth — just slightly smaller.", "From an average distance of 67 million miles (108 million kilometers), Venus is 0.7 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. It takes sunlight 6 minutes to travel from the Sun to Venus."],
    orbit_and_rotation:["Venus' rotation and orbit are unusual in several ways. Venus is one of just two planets that rotate from east to west. Only Venus and Uranus have this backwards rotation. It completes one rotation in 243 Earth days — the longest day of any planet in our solar system, even longer than a whole year on Venus. But the Sun doesn't rise and set each day on Venus like it does on most other planets. On Venus, one day-night cycle takes 117 Earth days because Venus rotates in the direction opposite of its orbital revolution around the Sun.", 
    "Venus makes a complete orbit around the Sun (a year in Venusian time) in 225 Earth days or slightly less than two Venusian day-night cycles. Its orbit around the Sun is the most circular of any planet — nearly a perfect circle. Other planet's orbits are more elliptical, or oval-shaped.", 
    "With an axial tilt of just 3 degrees, Venus spins nearly upright, and so does not experience noticeable seasons."],
    structure:["Venus is in many ways similar to Earth in its structure. It has an iron core that is approximately 2,000 miles (3,200 kilometers) in radius. Above that is a mantle made of hot rock slowly churning due to the planet's interior heat. The surface is a thin crust of rock that bulges and moves as Venus' mantle shifts and creates volcanoes."],
    formation:["When the solar system settled into its current layout about 4.5 billion years ago, Venus formed when gravity pulled swirling gas and dust together to form the second planet from the Sun. Like its fellow terrestrial planets, Venus has a central core, a rocky mantle and a solid crust."],
    kid_friendly:["Even though Venus isn't the closest planet to the Sun, it is still the hottest. It has a thick atmosphere full of the greenhouse gas carbon dioxide and clouds made of sulfuric acid. The atmosphere traps heat and keeps Venus toasty warm. It's so hot on Venus, metals like lead would be puddles of melted liquid.", 
    "Venus looks like a very active planet. It has mountains and volcanoes. Venus is similar in size to Earth. Earth is just a little bit bigger.", 
    "Venus is unusual because it spins the opposite direction of Earth and most other planets. And its rotation is very slow."
  ],
    surface:["From space, Venus is bright white because it is covered with clouds that reflect and scatter sunlight. At the surface, the rocks are different shades of grey, like rocks on Earth, but the thick atmosphere filters the sunlight so that everything would look orange if you were standing on Venus.",
   "Venus has mountains, valleys, and tens of thousands of volcanoes. The highest mountain on Venus, Maxwell Montes, is 20,000 feet high (8.8 kilometers), similar to the highest mountain on Earth, Mount Everest. The landscape is dusty, and surface temperatures reach a scalding 880 degrees Fahrenheit (471 degrees Celsius).", 
  "It is thought that Venus was completely resurfaced by volcanic activity 300 to 500 million years ago. Venus has two large highland areas: Ishtar Terra, about the size of Australia, in the north polar region; and Aphrodite Terra, about the size of South America, straddling the equator and extending for almost 6,000 miles (10,000 kilometers).", 
  "Venus is covered in craters, but none are smaller than 0.9 to 1.2 miles (1.5 to 2 kilometers) across. Small meteoroids burn up in the dense atmosphere, so only large meteoroids reach the surface and create impact craters.", 
  "Almost all the surface features of Venus are named for noteworthy Earth women — both mythological and real. A volcanic crater is named for Sacajawea, the Native American woman who guided Lewis and Clark's exploration. A deep canyon is named for Diana, Roman goddess of the hunt."
],
    atmosphere:["Venus' atmosphere consists mainly of carbon dioxide, with clouds of sulfuric acid droplets. The thick atmosphere traps the Sun's heat, resulting in surface temperatures higher than 880 degrees Fahrenheit (470 degrees Celsius). The atmosphere has many layers with different temperatures. At the level where the clouds are, about 30 miles up from the surface, it's about the same temperature as on the surface of the Earth. As Venus moves forward in its solar orbit while slowly rotating backwards on its axis, the top level of clouds zips around the planet every four Earth days, driven by hurricane-force winds traveling at about 224 miles (360 kilometers) per hour. Atmospheric lightning bursts light up these quick-moving clouds. Speeds within the clouds decrease with cloud height, and at the surface are estimated to be just a few miles per hour."],
    Magnetosphere:["Even though Venus is similar in size to the Earth and has a similarly-sized iron core, Venus' magnetic field is much weaker than the Earth's due to Venus' slow rotation. "],
    moons:["Venus has no moons."],
    Potential_for_life:"No human has visited Venus, but the spacecraft that have been sent to the surface of Venus do not last very long there. Venus' high surface temperatures overheat electronics in spacecraft in a short time, so it seems unlikely that a person could survive for long on the Venusian surface. There is speculation about life existing in Venus' distant past, as well as questions about the possibility of life in the top cloud layers of Venus' atmosphere, where the temperatures are less extreme.",
    date_of_discovery:"Unknown",
    discovered_by:"Known by Ancients",
    average_orbit_distance:"108,209,475 km",
    mean_orbit_velocity:"126,074 km/h",
    orbit_eccentricity:"0.00677672",
    equatorial_inclination:"177.3 degrees (retrograde rotation)",
    equatorial_radius:"6,051.8 km",
    equatorial_circumference:"38,024.6 km",
    volume:"928,415,345,893 km3",
    density:"5.243 g/cm3",
    mass:"4,867,320,000,000,000,000,000,000 kg",
    surface_area:"460,234,317 km2",
    surface_gravity:"8.87 m/s2",
    escape_velocity:"37,296 km/h",
    atomospheric_constituents:"Carbon Dioxide, Nitrogen",
    exploration:["The brightest object in the night sky on Earth (besides our moon), Venus has been observed for millennia. And as one of just two bodies between Earth and the Sun, Venus periodically passes across the face of the sun—a phenomenon called a transit. Observing transits of Venus has helped astronomers study the nearby planet and better understand the solar system and our place in it. Transits of Venus occur in pairs with more than a century separating each pair, occurring in 1631 and 1639; 1761, 1769; 1874, 1882; and 2004, 2012. The next transit isn't until December 2117. Such long gaps occur between transits because Earth's and Venus' orbits around the sun are inclined differently, so Venus much more often passes between Earth and the sun without crossing the face of the sun from our perspective.",
    "Spacecraft from several nations have visited Venus, including the Soviet Union’s successful Venera series made the first landings on the surface of Venus. NASA’s Magellan mission, which studied Venus from 1990 to 1994, used radar to map 98 percent of the planet’s surface. Currently, Japan’s Akatsuki is studying Venus from orbit.​"],
    significant_events:[],
    galleries:[{image:"https://solarsystem.nasa.gov/system/resources/detail_files/2267_PIA00148_1280.jpg",
    title:"Margaret Mead Crater on Venus"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2440_magellan_trajectory.png",
    title:"Magellan Trajectory Map"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2438_pioneer_venus_map_of_venus.jpg",
    title:"Pioneer Venus Orbiter Map of Venus"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2425_337_moon_venus_1200.jpg",
    title:"Bright Moon and Crescent Venus"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2276_venus_moon_jupiter_tree_1200.jpg",
    title:"Venus, Moon and Jupiter"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2275_venus_moon_mountain_1200.jpg",
    title:"Venus, Moon and a Bit of Earth"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/775_PIA00271_detail.jpg",
    title:"Venus - Computer Simulated Global View of the Northern Hemisphere"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/774_PIA00107_detail.jpg",
    title:"Venus - 3-D Perspective View of Sapas Mons"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/757_iss044e020824.jpg",
    title:"Moon, Venus, Jupiter, Earth Lineup"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/700_P36087_1280.jpg",
    title:"First-Ever Solar System Family Portrait (1990)"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/688_Venus.jpg",
    title:"Computer Simulated Global View of Venus"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/575_PIA00072.jpg",
    title:"Venus Cloud Patterns"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/574_PIA00486_1200w.jpg",
    title:"System of Lava Flows and Ridge Belt"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/547_PIA00479.jpg",
    title:"Dickinson Crater on Venus"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/546_PIA00480.jpg",
    title:"Isabella Crater on Venus"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/544_opo9516g.jpg",
    title:"Venus Cloud Tops Viewed by Hubble"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/533_PIA00072.jpg",
    title:"Venus Cloud Patterns (Colorized and Filtered)"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/486_PIA00159.jpg",
    title:"Hemispheric View of Venus"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/485_LaviniaRegion1200w.jpg",
    title:"Lavinia Region Impact Craters"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/480_VenusMaatMons1200w.jpg",
    title:"Venus - 3D Perspective View of Maat Mons"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/479_j_WheatleyCrater.jpg",
    title:"Wheatley Crater, Venus"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/478_i_VenusMagellan.jpg",
    title:"Venus - Magellan"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/477_CraterFarm1200w.jpg",
    title:"The Crater Farm"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/476_VenusTransitApproach1200w.jpg",
    title:"2012 Venus Transit"},
    ]}
    
    render(){
        return(
        <div className="Venus">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://www.nasa.gov/sites/default/files/thumbnails/image/venus20191211-16.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Venus
                <br></br>
                Planetary Hot Spot
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                {/* <h4 style={{color:"white"}}>Lenth of year:</h4> */}
                <p>Lenth of year: 225 earth days
                    <br></br>
                   Planet type: Terrestrial
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
            <MoreDestination></MoreDestination>
        </div>
        
        )
    }

    
}

export default VenusComponent