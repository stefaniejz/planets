import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class EarthMoonComponent extends React.Component {
    state = {
        name:"Earth's Moon",
        description1:"Earth's Moon is the only place beyond Earth where humans have set foot. The brightest and largest object in our night sky, the Moon makes Earth a more livable planet by moderating our home planet's wobble on its axis, leading to a relatively stable climate. It also causes tides, creating a rhythm that has guided humans for thousands of years. The Moon was likely formed after a Mars-sized body collided with Earth.",
        description2:"Our moon is the fifth largest of the 190+ moons orbiting planets in our solar system. Earth's only natural satellite is simply called the Moon because people didn't know other moons existed until Galileo Galilei discovered four moons orbiting Jupiter in 1610.",
        image:["https://solarsystem.nasa.gov/system/feature_items/images/58_earthsmoon_carousel_1.jpg",
        "https://solarsystem.nasa.gov/system/feature_items/images/59_earthsmoon_carousel_2.jpg",
        "https://solarsystem.nasa.gov/system/feature_items/images/60_earthsmoon_carousel_4.jpg",
        "https://solarsystem.nasa.gov/system/feature_items/images/61_earthsmoon_carousel_5.jpg",
        "https://solarsystem.nasa.gov/system/feature_items/images/62_earthsmoon_carousel_3.jpg"],
        indepth_description:["The brightest and largest object in our night sky, the Moon makes Earth a more livable planet by moderating our home planet's wobble on its axis, leading to a relatively stable climate. It also causes tides, creating a rhythm that has guided humans for thousands of years.",
        "The Moon was likely formed after a Mars-sized body collided with Earth several billion years ago.",
        "Earth's Moon is the only place beyond Earth where humans have set foot, so far.",
        "Earth's only natural satellite is simply called the Moon because people didn't know other moons existed until Galileo Galilei discovered four moons orbiting Jupiter in 1610. In Latin, the Moon was called Luna, which is the main adjective for all things Moon-related: lunar"],
        size_and_distance:["With a radius of 1,079.6 miles (1,737.5 kilometers), the Moon is less than a third the width of Earth. If Earth were the size of a nickel, the Moon would be about as big as a coffee bean.",
        "The Moon is farther away from Earth than most people realize. The Moon is an average of 238,855 miles (384,400 kilometers) away. That means 30 Earth-sized planets could fit in between Earth and the Moon.",
        "The Moon is slowly moving away from Earth, getting about an inch farther away each year."],
        orbit_and_rotation:["The Moon is rotating at the same rate that it revolves around Earth (called synchronous rotation), so the same hemisphere faces Earth all the time. Some people call the far side &mdash; the hemisphere we never see from Earth &mdash; the dark side, but that's misleading. As the Moon orbits Earth, different parts are in sunlight or darkness at different times. The changing illumination is why, from our perspective, the Moon goes through phases. During a full moon, the hemisphere of the Moon we can see from Earth is fully illuminated by the sun. And a new moon occurs when the far side of the Moon has full sunlight, and the side facing us is having its night.",
        "The Moon makes a complete orbit around Earth in 27 Earth days and rotates or spins at that same rate, or in that same amount of time. Because Earth is moving as well &mdash; rotating on its axis as it orbits the sun &mdash; from our perspective, the Moon appears to orbit us every 29 days."],
        structure:["Earth's Moon has a core, mantle and crust.",
        "The Moon’s core is proportionally smaller than other terrestrial bodies' cores. The solid, iron-rich inner core is 149 miles (240 kilometers) in radius. It is surrounded by a liquid iron shell 56 miles (90 kilometers) thick. A partially molten layer with a thickness of 93 miles (150 kilometers) surrounds the iron core.",
        "The mantle extends from the top of the partially molten layer to the bottom of the Moon's crust. It is most likely made of minerals like olivine and pyroxene, which are made up of magnesium, iron, silicon and oxygen atoms.",
        "The crust has a thickness of about 43 miles (70 kilometers) on the Moon’s near-side hemisphere and 93 miles (150 kilometers) on the far-side. It is made of oxygen, silicon, magnesium, iron, calcium and aluminum, with small amounts of titanium, uranium, thorium, potassium and hydrogen.",
        "Long ago the Moon had active volcanoes, but today they are all dormant and have not erupted for millions of years."],
        formation:["The leading theory of the Moon's origin is that a Mars-sized body collided with Earth about 4.5 billion years ago. The resulting debris from both Earth and the impactor accumulated to form our natural satellite 239,000 miles (384,000 kilometers) away. The newly formed Moon was in a molten state, but within about 100 million years, most of the global magma ocean had crystallized, with less-dense rocks floating upward and eventually forming the lunar crust."],
        indepth_description:[],
        kid_friendly:['Most of the planets in our solar system—and some asteroids—have moons. Earth has one moon. We call it "the Moon" because for a long time it was the only one we knew about. Many languages have beautiful words for Moon. It is "Luna" in Italian, Latin and Spanish, "Lune" in French, "Mond" in German, and "Selene" in Greek.',
        'Our Moon is like a desert with plains, mountains, and valleys. It also has many craters, holes created when space rocks hit the surface at a high speed. There is no air to breathe on the Moon.',
        'The Moon travels around the Earth in an oval shaped orbit. Scientists think the Moon was formed long, long ago when Earth crashed into a Mars-sized object.',
        'We always see the same side of the Moon from Earth. You have to go into space to see the other side.'],
        surface:["With too sparse an atmosphere to impede impacts, a steady rain of asteroids, meteoroids and comets strikes the surface of the Moon, leaving numerous craters behind. Tycho Crater is more than 52 miles (85 kilometers) wide.",
        "Over billions of years, these impacts have ground up the surface of the Moon into fragments ranging from huge boulders to powder. Nearly the entire Moon is covered by a rubble pile of charcoal-gray, powdery dust and rocky debris called the lunar regolith. Beneath is a region of fractured bedrock referred to as the megaregolith.",
        "The light areas of the Moon are known as the highlands. The dark features, called maria (Latin for seas), are impact basins that were filled with lava between 4.2 and 1.2 billion years ago. These light and dark areas represent rocks of different composition and ages, which provide evidence for how the early crust may have crystallized from a lunar magma ocean. The craters themselves, which have been preserved for billions of years, provide an impact history for the moon and other bodies in the inner solar system.",
        "If you looked in the right places on the Moon, you would find pieces of equipment, American flags, and even a camera left behind by astronauts. While you were there, you'd notice that the gravity on the surface of the Moon is one-sixth of Earth's, which is why in footage of moonwalks, astronauts appear to almost bounce across the surface.",
        "The temperature reaches about 260 degrees Fahrenheit (127 degrees Celsius) when in full sun, but in darkness, the temperatures plummets to about -280 degrees Fahrenheit (-173 degrees Celsius)."],
        Magnetosphere:["The early Moon may have developed an internal dynamo, the mechanism for generating global magnetic fields for terrestrial planets, but today, the Moon has a very weak magnetic field. The magnetic field here on Earth is many thousands of times stronger than the Moon's magnetic field."],
        moons:["Earth's Moon has no moons of its own."],
        Potential_for_life:"The many missions that have explored the Moon have found no evidence to suggest it has its own living things. However, the Moon could be the site of future colonization by humans. The discovery the Moon harbors water ice, and that the highest concentrations occur within darkened craters at the poles, makes the Moon a little more hospitable for future human colonists.",
    }

    render(){
        return(
        <div className="Mecury">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://media.architecturaldigest.com/photos/57a25e17b6c434ab487bc2c0/16:9/w_2560%2Cc_limit/moon-express.jpg">
              </img>
              <div className="planet-page-img-text-title">
                <p>Earth's Moon
                <br></br>
                Our Natural Satellite
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
            <MoreDestination detail = {this.state}></MoreDestination>
        </div>
        )}
}

export default EarthMoonComponent;