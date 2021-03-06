import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class NeptuneComponent extends React.Component {
    state = {name:"Neptune",
    description1:"Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.",
    description2:"More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.",
    image:["https://solarsystem.nasa.gov/system/feature_items/images/82_carousel_neptune_1.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/84_neptune_carousel_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/85_neptune_carousel_4.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/86_carousel_neptune_5.jpg"],
    indepth_description:["Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.",
    "Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune.",
    "The ice giant Neptune was the first planet located through mathematical calculations. Using predictions made by Urbain Le Verrier, Johann Galle discovered the planet in 1846. The planet is named after the Roman god of the sea, as suggested by Le Verrier"],
    size_and_distance:["With a radius of 15,299.4 miles (24,622 kilometers), Neptune is about four times wider than Earth. If Earth were the size of a nickel, Neptune would be about as big as a baseball.",
    "From an average distance of 2.8 billion miles (4.5 billion kilometers), Neptune is 30 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 4 hours to travel from the Sun to Neptune."],
    orbit_and_rotation:["One day on Neptune takes about 16 hours (the time it takes for Neptune to rotate or spin once). And Neptune makes a complete orbit around the Sun (a year in Neptunian time) in about 165 Earth years (60,190 Earth days).",
    "Sometimes Neptune is even farther from the Sun than dwarf planet Pluto. Pluto's highly eccentric, oval-shaped orbit brings it inside Neptune's orbit for a 20-year period every 248 Earth years. This switch, in which Pluto is closer to the Sun than Neptune, happened most recently from 1979 to 1999. Pluto can never crash into Neptune, though, because for every three laps Neptune takes around the Sun, Pluto makes two. This repeating pattern prevents close approaches of the two bodies.",
    "Neptune’s axis of rotation is tilted 28 degrees with respect to the plane of its orbit around the Sun, which is similar to the axial tilts of Mars and Earth. This means that Neptune experiences seasons just like we do on Earth; however, since its year is so long, each of the four seasons lasts for over 40 years."],
    structure:["Neptune is one of two ice giants in the outer solar system (the other is Uranus). Most (80 percent or more) of the planet's mass is made up of a hot dense fluid of icy materials—water, methane and ammonia—above a small, rocky core. Of the giant planets, Neptune is the densest.Neptune is one of two ice giants in the outer solar system (the other is Uranus). Most (80 percent or more) of the planet's mass is made up of a hot dense fluid of icy materials—water, methane and ammonia—above a small, rocky core. Of the giant planets, Neptune is the densest.",
    "Scientists think there might be an ocean of super hot water under Neptune's cold clouds. It does not boil away because incredibly high pressure keeps it locked inside."],
    formation:["Neptune took shape when the rest of the solar system formed about 4.5 billion years ago, when gravity pulled swirling gas and dust in to become this ice giant. Like its neighbor Uranus, Neptune likely formed closer to the Sun and moved to the outer solar system about 4 billion years ago."],
    kid_friendly:[""],
    surface:["Neptune does not have a solid surface. Its atmosphere (made up mostly of hydrogen, helium and methane) extends to great depths, gradually merging into water and other melted ices over a heavier, solid core with about the same mass as Earth."],
    atmosphere:["Neptune's atmosphere is made up mostly of hydrogen and helium with just a little bit of methane. Neptune's neighbor Uranus is a blue-green color due to such atmospheric methane, but Neptune is a more vivid, brighter blue, so there must be an unknown component that causes the more intense color.",  
    "Neptune is our solar system's windiest world. Despite its great distance and low energy input from the Sun, Neptune's winds can be three times stronger than Jupiter's and nine times stronger than Earth's. These winds whip clouds of frozen methane across the planet at speeds of more than 1,200 miles per hour (2,000 kilometers per hour). Even Earth's most powerful winds hit only about 250 miles per hour (400 kilometers per hour).",
    "In 1989 a large, oval-shaped storm in Neptune's southern hemisphere dubbed the Great Dark Spot was large enough to contain the entire Earth. That storm has since disappeared, but new ones have appeared on different parts of the planet."],
    Magnetosphere:["The main axis of Neptune's magnetic field is tipped over by about 47 degrees compared with the planet's rotation axis. Like Uranus, whose magnetic axis is tilted about 60 degrees from the axis of rotation, Neptune's magnetosphere undergoes wild variations during each rotation because of this misalignment. The magnetic field of Neptune is about 27 times more powerful than that of Earth.​"],
    moons:["Neptune has 14 known moons. Neptune's largest moon Triton was discovered on October 10, 1846, by William Lassell, just 17 days after Johann Gottfried Galle discovered the planet. Since Neptune was named for the Roman god of the sea, its moons are named for various lesser sea gods and nymphs in Greek mythology.",
    "Triton is the only large moon in the solar system that circles its planet in a direction opposite to the planet's rotation (a retrograde orbit), which suggests that it may once have been an independent object that Neptune captured. Triton is extremely cold, with surface temperatures around minus 391 degrees Fahrenheit (minus 235 degrees Celsius). And yet, despite this deep freeze at Triton, Voyager 2 discovered geysers spewing icy material upward more than 5 miles (8 kilometers). Triton's thin atmosphere, also discovered by Voyager, has been detected from Earth several times since, and is growing warmer, but scientists do not yet know why."],
    Potential_for_life:"Neptune's environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.",
    date_of_discovery:"23 September 1846",
    discovered_by:"Urbain Le Verrier, John Couch Adams, Johann Galle",
    average_orbit_distance:"4,498,396,441km",
    mean_orbit_velocity:"19,566km/h",
    orbit_eccentricity:"0.00859048",
    equatorial_inclination:"28.3 degrees",
    equatorial_radius:"24,622 km",
    equatorial_circumference:"154,704.6 km",
    volume:"62,525,703,987,421 km3",
    density:"1.638 g/cm3",
    mass:"102,410,000,000,000,000,000,000,000 kg",
    surface_area:"7,618,272,763 km2",
    surface_gravity:"11.15 m/s2",
    escape_velocity:"84,816 km/h",
    atomospheric_constituents:"Hydrogen, Helium, Methane",
    exploration:["Galileo recorded Neptune as a fixed star during observations with his small telescope in 1612 and 1613. More than 200 years later, the ice giant Neptune became the first planet located through mathematical predictions rather than through regular observations of the sky. Because Uranus didn't travel exactly as astronomers expected it to, French mathematician Urbain Joseph Le Verrier proposed the position and mass of a then-unknown planet that could cause the observed changes to Uranus' orbit. Le Verrier sent his predictions to Johann Gottfried Galle at the Berlin Observatory, who found Neptune on his first night of searching in 1846. Seventeen days later, Neptune's largest moon Triton was discovered as well.",
    "More than 140 years later, in 1989, NASA's Voyager 2 became the first-and only-spacecraft to study Neptune up close. Voyager returned a wealth of information about Neptune and its moons-and confirmed evidence the giant world had faint rings like the other gas planets. Scientists also use the Hubble Space Telescope and powerful ground-based telescopes to gather more information about this distant planet."],
    significant_events:["1612: Galileo incorrectly records Neptune as a fixed star during observations with his small telescope.",
    "1846: Using mathematical calculations, astronomers discover Neptune, increasing the number of known planets to eight. Neptune's largest moon, Triton, is found the same year.",
    "1983: Pioneer 10 crosses the orbit of Neptune and becomes the first human-made object to travel beyond the orbits of the planets of our solar system. The spacecraft remains on a trajectory heading towards the red star Aldebaran (in the constellation Taurus) and is expected to pass by it in about 2,000,000 years.",
    "1984: Astronomers find evidence for the existence of a ring system around Neptune.",
    "1989: Voyager 2 becomes the first and only spacecraft to visit Neptune, passing about 4,800 kilometers (2,983 miles) above the planet's north pole.",
    "2002: Using improved observing techniques, astronomers discover four new moons orbiting Neptune: Laomedia, Neso, Sao and Halimede.",
    "2003: Another moon, Psamathe, is discovered using ground-based telescopes.",
    "2005: Scientists using the Keck Observatory take images of the outer rings and find that some of the ring arcs have deteriorated.",
    "2011: Neptune completes its first 165-year orbit of the sun since its discovery in 1846.",
    "2013: A scientist studying Neptune's ring arcs in archival Hubble Space Telescope images finds a previously unknown 14th moon of Neptune, provisionally designated S/2004 N 1.",
    "2016: Scientists using the Hubble Space Telescope discover a new dark spot on Neptune, the first new atmospheric vortex seen in the 21st century."],
    galleries:[{image:"https://solarsystem.nasa.gov/system/resources/detail_files/2289_Hippocamp.jpg",
    title:"Neptune's Moon Hippocamp"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/936_eso1824a.jpg",
    title:"Neptune from the Very Large Telescope (VLT)"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/842_31101484000_02c1a70913_o.jpg",
    title:"Neptune - August 31, 1989"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/700_P36087_1280.jpg",
    title:"First-Ever Solar System Family Portrait (1990)"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/616_PIA02215.jpg",
    title:"Crescents of Neptune and Triton"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/614_PIA01997.jpg",
    title:"Rings of Neptune"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/612_PIA01539.jpg",
    title:"Post-encounter View of Neptune's South Pole"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/611_PIA01492.jpg",
    title:"Neptune Full Disk View"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/609_PIA01285.jpg",
    title:"Hubble's View of Neptune"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/607_PIA00058.jpg",
    title:"Neptune Clouds Showing Vertical Relief"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/540_PIA00054.jpg",
    title:"Nereid"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/539_PIA00055.jpg",
    title:"1989N1"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/252_PIA02256.jpg",
    title:"Neptune: Ring Arcs"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/250_PIA02202.jpg",
    title:"Neptune - Full Ring System"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/249_PIA02207.jpg",
    title:"Neptune's Rings"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/239_PIA02215.jpg",
    title:"Crescents of Neptune and Triton"},

  ]
}
    
    render(){
        return(
        <div className="Neptune">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://naked-science.ru/wp-content/uploads/2019/03/field_image_neptune0.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Neptune
                <br></br>
                The Windiest Planet
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 60190 earth days
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

export default NeptuneComponent