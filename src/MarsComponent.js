import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class MarsComponent extends React.Component {
    state = {name:"Mars",
    description1:"The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volacanoes, evidence of an even more active past.",
    description2:"Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA currently has three spacecraft in orbit, one rover and one lander on the surface and another rover under construction here on Earth. India and ESA also have spacecraft in orbit above Mars. These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/78_mars_carousel_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/79_mars_carousel_3.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/80_mars_carousel_5.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/81_mars_carousel_4.jpg"],
    indepth_description:['Mars was named by the ancient Romans for their god of war because its reddish color was reminiscent of blood. Other civilizations also named the planet for this attribute; for example, the Egyptians called it "Her Desher," meaning "the red one." Even today, it is frequently called the "Red Planet" because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.'],
    size_and_distance:["With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth. If Earth were the size of a nickel, Mars would be about as big as a raspberry.",
    "From an average distance of 142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 13 minutes to travel from the Sun to Mars."],
    orbit_and_rotation:['As Mars orbits the Sun, it completes one rotation every 24.6 hours, which is very similar to one day on Earth (23.9 hours). Martian days are called sols—short for "solar day." A year on Mars lasts 669.6 sols, which is the same as 687 Earth days.',
    "Mars' axis of rotation is tilted 25 degrees with respect to the plane of its orbit around the Sun. This is another similarity with Earth, which has an axial tilt of 23.4 degrees. Like Earth, Mars has distinct seasons, but they last longer than seasons here on Earth since Mars takes longer to orbit the Sun (because it's farther away). And while here on Earth the seasons are evenly spread over the year, lasting 3 months (or one quarter of a year), on Mars the seasons vary in length because of Mars' elliptical, egg-shaped orbit around the Sun.",
    "Spring in the northern hemisphere (autumn in the southern) is the longest season at 194 sols. Autumn in the northern hemisphere (spring in the southern) is the shortest at 142 days. Northern winter/southern summer is 154 sols, and northern summer/southern winter is 178 sols."],
    structure:["Mars has a dense core at its center between 930 and 1,300 miles (1,500 to 2,100 kilometers) in radius. It's made of iron, nickel and sulfur. Surrounding the core is a rocky mantle between 770 and 1,170 miles (1,240 to 1,880 kilometers) thick, and above that, a crust made of iron, magnesium, aluminum, calcium and potassium. This crust is between 6 and 30 miles (10 to 50 kilometers) deep."],
    formation:["When the solar system settled into its current layout about 4.5 billion years ago, Mars formed when gravity pulled swirling gas and dust in to become the fourth planet from the Sun. Mars is about half the size of Earth, and like its fellow terrestrial planets, it has a central core, a rocky mantle and a solid crust."],
    kid_friendly:[""],
    surface:["The Red Planet is actually many colors. At the surface we see colors such as brown, gold and tan. The reason Mars looks reddish is due to oxidization—or rusting—of iron in the rocks, regolith (Martian “soil”), and dust of Mars. This dust gets kicked up into the atmosphere and from a distance makes the planet appear mostly red.",
    "Interestingly, while Mars is about half the diameter of Earth, its surface has nearly the same area as Earth’s dry land. Its volcanoes, impact craters, crustal movement, and atmospheric conditions such as dust storms have altered the landscape of Mars over many years, creating some of the solar system's most interesting topographical features.",
    "A large canyon system called Valles Marineris is long enough to stretch from California to New York—more than 3,000 miles (4,800 kilometers). This Martian canyon is 200 miles (320 kilometers) at its widest and 4.3 miles (7 kilometers) at its deepest. That's about 10 times the size of Earth's Grand Canyon.",
    "Mars is home to the largest volcano in the solar system, Olympus Mons. It's three times taller than Earth's Mt. Everest with a base the size of the state of New Mexico.",
    "Mars appears to have had a watery past, with ancient river valley networks, deltas and lakebeds, as well as rocks and minerals on the surface that could only have formed in liquid water. Some features suggest that Mars experienced huge floods about 3.5 billion years ago.",
    "There is water on Mars today, but the Martian atmosphere is too thin for liquid water to exist for long on the surface. Today, water on Mars is found in the form of water-ice just under the surface in the polar regions as well as in briny (salty) water, which seasonally flows down some hillsides and crater walls."],
    atmosphere:["Mars has a thin atmosphere made up mostly of carbon dioxide, nitrogen and argon gases. To our eyes, the sky would be hazy and red because of suspended dust instead of the familiar blue tint we see on Earth. Mars' sparse atmosphere doesn't offer much protection from impacts by such objects as meteorites, asteroids and comets.",
    "The temperature on Mars can be as high as 70 degrees Fahrenheit (20 degrees Celsius) or as low as about -225 degrees Fahrenheit (-153 degrees Celsius). And because the atmosphere is so thin, heat from the Sun easily escapes this planet. If you were to stand on the surface of Mars on the equator at noon, it would feel like spring at your feet (75 degrees Fahrenheit or 24 degrees Celsius) and winter at your head (32 degrees Fahrenheit or 0 degrees Celsius).",
    "Occasionally, winds on Mars are strong enough to create dust storms that cover much of the planet. After such storms, it can be months before all of the dust settles."],
    Magnetosphere:["Mars has no global magnetic field today, but areas of the Martian crust in the southern hemisphere are highly magnetized, indicating traces of a magnetic field from 4 billion years ago.​"],
    moons:["Mars has two small moons, Phobos and Deimos, that may be captured asteroids. They're potato-shaped because they have too little mass for gravity to make them spherical.",
    'The moons get their names from the horses that pulled the chariot of the Greek god of war, Ares. In ancient Greek, Phobos means "flight," and Deimos means "fear."',
    "Phobos, the innermost and larger moon, is heavily cratered, with deep grooves on its surface. It is slowly moving towards Mars and will crash into the planet or break apart in about 50 million years.",
    "Deimos is about half as big as Phobos and orbits two and a half times farther away from Mars. Oddly-shaped Deimos is covered in loose dirt that often fills the craters on its surface, making it appear smoother than pockilometersarked Phobos."],
    Potential_for_life:"Scientists don't expect to find living things currently thriving on Mars. Instead, they're looking for signs of life that existed long ago, when Mars was warmer and covered with water.",
    date_of_discovery:"Unknown",
    discovered_by:"Known by Ancients",
    average_orbit_distance:"227,943,824 km",
    mean_orbit_velocity:"86,677 km/h",
    orbit_eccentricity:"0.0933941",
    equatorial_inclination:"25.2",
    equatorial_radius:"3,389.5 km",
    equatorial_circumference:"21,296.9 km",
    volume:"163,115,609,799 km3",
    density:"3.934 g/cm3",
    mass:"641,693,000,000,000,000,000,000 kg",
    surface_area:"144,371,391 km2",
    surface_gravity:"3.71 m/s2",
    escape_velocity:"18,108 km/h",
    atomospheric_constituents:"Carbon Dioxide, Nitrogen, Argon",
    exploration:[""],
    significant_events:["Mars Cube One(MarCO) May 15,2018: The twin MarCO spacecraft demonstrated the ability of CubeSats to operate far beyond Earth.",
    "phoenix August 4,2007: Phoenix was sent to Mars to search for evidence of past or present microbial life and to study geology and climate on the icy arctic plains of the Martian north pole.",
    "Opportunity July 6,2003: Opportunity vastly surpassed all expectations in its endurance, scientific value and longevity.",
    "Spirit June 10,2003: NASA's Mars Exploration Rovers—Opportunity and its twin Spirit—were designed to study the history of climate and water at sites on Mars where conditions may once have been favorable to life.",
    "Mars Polar Lander and Deep Space 2 January 3,1999: Mars Polar Lander and Deep Space 2 were to explore the Martian ice cap.",
    "Mars Climate Orbiter December 11,1998:Mars Climate Orbiter was to study the Martian atmosphere, climate and surface, but contact was lost on arrival at Mars.",
    "Mars Pathfinder December 4,1996:Mars Pathfinder was the first rover to successfully land on another planet and the first rover on Mars.",
    "Mars Global Surveyor Nobember 7, 1996:Mars Global Surveyor overhauled our understanding of Mars, including finding evidence water still flows in short bursts down hillside gullies",
    "Mars Observer September 25,1992: Mars Observer was to be a high-resolution photography mission, but contact was lost shortly before it arrived at Mars.",
    "Viking 1 August 20,1975: Viking 1 was the first successful mission to land on Mars (the Soviet Mars 3 lander survived for a few seconds after landing in 1971, but sent back no science data).",
    "Viking 2 August 20,1975: The Viking 2 lander set down on Utopia Planitia and operated until April 1980.",
    "Mariner 09 May 30,1971: Mariner 9 was the second in a pair of identical spacecraft launched in 1971 to orbit Mars. The first spacecraft, Mariner 8, failed to reach Earth orbit.",
    "Mariner 08 May 09,1971: Mariner 8 (also called Mariner-71H and Mariner-H) was the first of a pair of American spacecraft intended to explore the physical and dynamic characteristics of Mars from Martian orbit.",
    "Mariner 07 March 27,1969:Identical to Mariner 6, Mariner 7 had a similar mission of flying by Mars.",
    "Mariner 06 Feburary 25,1969: Mariners 6 and 7, identical spacecraft intended to fly by Mars, were the first Mariner spacecraft launched by the Atlas-Centaur, permitting a heavier instrument suite.",
    "Mariner 04 November 28,1964: The Mariner 4 mission, the second of two Mars flyby attempts in 1964 by NASA, was one of the great early successes of the Agency, returning the very first photos of another planet from deep space.",
    "Mariner 03 November 5,1964: NASA approved two probes for the Mariner-Mars 1964 project in November 1962."],
    galleries:[{image:"https://solarsystem.nasa.gov/system/resources/detail_files/2511_ESP_062839_1740_1200.jpg",
    title:"Sandstone in West Candor Chasma"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2510_marspolarcrater_1600.jpg",
    title:"Ice-Filled Crater"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2503_ESP_055438_1200.jpg",
    title:"Stair-Stepped Hills"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2491_pia23454_1200.jpg",
    title:"Layers in Mars' Danielson Crater"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2489_ESP_060176_2640_1200.jpg",
    title:"Avalanche Season"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2445_ESP_057930_med.jpg",
    title:"Wind Flow on Mars"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2443_PIA23208_med.jpg",
    title:"Odyssey's Three Views of Phobos in Visible Light"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2442_PIA23205_med.jpg",
    title:"Odyssey's Three Views of Phobos"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2436_PIA23203_med.jpg",
    title:"InSight's Dusty Selfie"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2435_PIA22876_med.jpg",
    title:"InSight's First Selfie"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2431_PIA07997_1280.jpg",
    title:"Sunset at Mars' Gusev Crater (Spirit)"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2430_PIA00576.jpg",
    title:"Sunrise on Mars (Viking 2)"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2429_PIA00567.jpg",
    title:"Sunset on Mars (Viking 1)"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2428_Victoria_clouds_br.gif",
    title:"Watching Martian Clouds Go By"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2427_06-OSS-01-Clouds-ani_med.jpg",
    title:"Cloudy Skies on Mars"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2426_PIA23201_1024.jpg",
    title:"Sunrise and Sunset on Mars (2019)"},
  ]
  }
    
    render(){
        return(
        <div className="Mars">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://www.jpl.nasa.gov/images/mars/20160421/PIA00407-16.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Earth
                <br></br>
                The Red Planet
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 687 earth days
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

export default MarsComponent