import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class EarthComponent extends React.Component {
    state = {name:"Earth",
    description1:"Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.",
    description2:'The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”',
    image:["https://solarsystem.nasa.gov/system/feature_items/images/69_earth_carousel_3.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/70_earth_carousel_2.jpg",
    "https://solarsystem.nasa.gov/system/feature_items/images/68_epicearthmoonstill_800.png",
    "https://solarsystem.nasa.gov/system/feature_items/images/71_earth_carousel_1.jpg"],
    indepth_description:["Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.", 
    "The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”"],
    size_and_distance:["With a radius of 3,959 miles (6,371 kilometers), Earth is the biggest of the terrestrial planets, and the fifth largest planet overall.", "From an average distance of 93 million miles (150 million kilometers), Earth is exactly one astronomical unit away from the Sun because one astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. This unit provides an easy way to quickly compare planets' distances from the Sun.", 
    "It takes about eight minutes for light from the Sun to reach our planet."],
    orbit_and_rotation:["As Earth orbits the Sun, it completes one rotation every 23.9 hours. It takes 365.25 days to complete one trip around the Sun. That extra quarter of a day presents a challenge to our calendar system, which counts one year as 365 days. To keep our yearly calendars consistent with our orbit around the Sun, every four years we add one day. That day is called a leap day, and the year it's added to is called a leap year.", 
    "Earth's axis of rotation is tilted 23.4 degrees with respect to the plane of Earth's orbit around the Sun. This tilt causes our yearly cycle of seasons. During part of the year, the northern hemisphere is tilted toward the Sun and the southern hemisphere is tilted away. With the Sun higher in the sky, solar heating is greater in the north producing summer there. Less direct solar heating produces winter in the south. Six months later, the situation is reversed. When spring and fall begin, both hemispheres receive roughly equal amounts of heat from the Sun."],
    structure:["Earth is composed of four main layers, starting with an inner core at the planet's center, enveloped by the outer core, mantle and crust.",
    "The inner core is a solid sphere made of iron and nickel metals about 759 miles (1,221 kilometers) in radius. There the temperature is as high as 9,800 degrees Fahrenheit (5,400 degrees Celsius). Surrounding the inner core is the outer core. This layer is about 1,400 miles (2,300 kilometers) thick, made of iron and nickel fluids.",
    "In between the outer core and crust is the mantle, the thickest layer. This hot, viscous mixture of molten rock is about 1,800 miles (2,900 kilometers) thick and has the consistency of caramel. The outermost layer, Earth's crust, goes about 19 miles (30 kilometers) deep on average on land. At the bottom of the ocean, the crust is thinner and extends about 3 miles (5 kilometers) from the sea floor to the top of the mantle."], 
    formation:["When the solar system settled into its current layout about 4.5 billion years ago, Earth formed when gravity pulled swirling gas and dust in to become the third planet from the Sun. Like its fellow terrestrial planets, Earth has a central core, a rocky mantle and a solid crust."],
    kid_friendly:["Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70 percent of Earth's surface.", 
    "Earth's atmosphere is made mostly of nitrogen and has plenty of oxygen for us to breathe. The atmosphere also protects us from incoming meteoroids, most of which break up before they can hit the surface."],
    surface:["Like Mars and Venus, Earth has volcanoes, mountains and valleys. Earth's lithosphere, which includes the crust (both continental and oceanic) and the upper mantle, is divided into huge plates that are constantly moving. For example, the North American plate moves west over the Pacific Ocean basin, roughly at a rate equal to the growth of our fingernails. Earthquakes result when plates grind past one another, ride up over one another, collide to make mountains, or split and separate.", 
    "Earth's global ocean, which covers nearly 70 percent of the planet's surface, has an average depth of about 2.5 miles (4 kilometers) and contains 97 percent of Earth's water. Almost all of Earth's volcanoes are hidden under these oceans. Hawaii's Mauna Kea volcano is taller from base to summit than Mount Everest, but most of it is underwater. Earth's longest mountain range is also underwater, at the bottom of the Arctic and Atlantic oceans. It is four times longer than the Andes, Rockies and Himalayas combined."], 
    atmosphere:"Near the surface, Earth has an atmosphere that consists of 78 percent nitrogen, 21 percent oxygen, and 1 percent other gases such as argon, carbon dioxide and neon. The atmosphere affects Earth's long-term climate and short-term local weather and shields us from much of the harmful radiation coming from the Sun. It also protects us from meteoroids, most of which burn up in the atmosphere, seen as meteors in the night sky, before they can strike the surface as meteorites.",
    Magnetosphere:["Our planet's rapid rotation and molten nickel-iron core give rise to a magnetic field, which the solar wind distorts into a teardrop shape in space. (The solar wind is a stream of charged particles continuously ejected from the Sun.) When charged particles from the solar wind become trapped in Earth's magnetic field, they collide with air molecules above our planet's magnetic poles. These air molecules then begin to glow and cause aurorae, or the northern and southern lights.", 
    "The magnetic field is what causes compass needles to point to the North Pole regardless of which way you turn. But the magnetic polarity of Earth can change, flipping the direction of the magnetic field. The geologic record tells scientists that a magnetic reversal takes place about every 400,000 years on average, but the timing is very irregular. As far as we know, such a magnetic reversal doesn't cause any harm to life on Earth, and a reversal is very unlikely to happen for at least another thousand years. But when it does happen, compass needles are likely to point in many different directions for a few centuries while the switch is being made. And after the switch is completed, they will all point south instead of north.​"],
    moons:["Earth is the only planet that has a single moon. Our Moon is the brightest and most familiar object in the night sky. In many ways, the Moon is responsible for making Earth such a great home. It stabilizes our planet's wobble, which has made the climate less variable over thousands of years.", 
    "Earth sometimes temporarily hosts orbiting asteroids or large rocks. They are typically trapped by Earth's gravity for a a few months or years before returning to an orbit around the Sun. Some asteroids will be in a long “dance” with Earth as both orbit the Sun.", 
    "Some moons are bits of rock that were captured by a planet's gravity, but our Moon is likely the result of a collision billions of years ago. When Earth was a young planet, a large chunk of rock smashed into it, displacing a portion of Earth's interior. The resulting chunks clumped together and formed our Moon. With a radius of 1,080 miles (1,738 kilometers), the Moon is the fifth largest moon in our solar system (after Ganymede, Titan, Callisto and Io).",
    "The Moon is farther away from Earth than most people realize. The Moon is an average of 238,855 miles (384,400 kilometers) away. That means 30 Earth-sized planets could fit in between Earth and the Moon."], 
    Potential_for_life:"Earth has a very hospitable temperature and mix of chemicals that have made life possible here. Most notably, Earth is unique in that most of our planet is covered in water, since the temperature allows liquid water to exist for extended periods of time. Earth's vast oceans provided a convenient place for life to begin about 3.8 billion years ago. Some of the features of our planet that make it great for sustaining life are changing due to the ongoing effects of climate change.",
    date_of_discovery:"Unknown",
    discovered_by:"Known by Ancients",
    average_orbit_distance:"149,598,262 km",
    mean_orbit_velocity:"107,218 km/h",
    orbit_eccentricity:"0.01671123",
    equatorial_inclination:"23.4393 degrees",
    equatorial_radius:"6,371.00 km",
    equatorial_circumference:"40,030.2 km",
    volume:"1,083,206,916,846 km3",
    density:"5.513 g/cm3",
    mass:"5,972,190,000,000,000,000,000,000 kg",
    surface_area:"510,064,472 km2",
    surface_gravity:"9.80665 m/s2",
    escape_velocity:"40,284 km/h",
    atomospheric_constituents:"Nitrogen, Oxygen",
    exploration:["Earth is made up of complex, interactive systems that create a constantly changing world that we are striving to understand. From the vantage point of space, we are able to observe our planet globally, using sensitive instruments to understand the delicate balance among its oceans, air, land and life. NASA satellite observations help study and predict weather, drought, pollution, climate change, and many other phenomena that affect the environment, economy and society."],
    significant_events:[],
    galleries:[{image:"https://solarsystem.nasa.gov/system/resources/detail_files/2498_Milky_Way_Doll_House_1280.jpg",
    title:"Milky Way Galaxy Over Canyonlands National Park"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2448_Blue_Moon_Airplane_1280.jpg",
    title:"Blue Moon and Jet Over Virginia"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2417_moon_arch_1280.jpg",
    title:"Moon in Utah's Turret Arch"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2408_iss059e019043_med.jpg",
    title:"Manicouagan Crater"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2337_as11-44-6549_med.jpg",
    title:"Apollo 11 View of Moon Limb With Earth on the Horizon"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2336_S80-37406_orig.jpg",
    title:"Eclipse - Apollo 12"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2334_as10-27-3890_med.jpg",
    title:"Apollo 10 View of the Earth"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2333_PIA14447_med.jpg",
    title:"Earth Triptych from NASA's Juno Spacecraft"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2332_earth_dscovr_apr19_med.jpg",
    title:"As the World Turns"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2330_IMG_5704_med.jpg",
    title:"A Layered Moonrise"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2292_as08-14-2383.jpg",
    title:"Apollo 8's Iconic Earthrise"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2257_meteorcrater_aer_2007158_1280.jpg",
    title:"Meteor Crater, Arizona, USA"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2255_morg_and_alex_1280.jpg",
    title:"Antarctic Meteorite"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/2242_full_%282758x2100%29.jpeg",
    title:"Earth, Moon and Asteroid Bennu"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/1040_klyuchevskaya_oli_enlarge.jpg",
    title:"Plumes Over the Kamchatka Peninsula"},
    {image:"https://solarsystem.nasa.gov/system/resources/detail_files/851_JSC2016E096363_detail.jpg",
    title:"Florida, the Bahamas, and Cuba"},
  ]
  }
    
    render(){
        return(
        <div className="Earth">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://live.staticflickr.com/5545/9558683212_43cb5b35cc_b.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Earth
                <br></br>
                Our Home Planet
                </p>
              </div>
              <div className="planet-page-img-text-stats">
                <p>Lenth of year: 365 earth days
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

export default EarthComponent