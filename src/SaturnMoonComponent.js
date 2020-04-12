import React from 'react'
import MenuBar from "./MenuBar"
import PlanetDetail from "./PlanetDetail"
import MoreDestination from './MoreDestination'

class SaturnMoonComponent extends React.Component {
    state = {
        name:"Jupiter's Moon",
        description1:"Saturn has 82 moons. ",
        description2:"Fifty-three moons are confirmed and named and another 29 moons are awaiting confirmation of discovery and official naming. Saturn's moons range in size from larger than the planet Mercury — the giant moon Titan — to as small as a sports arena. The moons shape, contribute and also collect material from Saturn's rings and magnetosphere.",
        image:["https://solarsystem.nasa.gov/internal_resources/433"],
        indepth_description:["The Voyager and Pioneer flybys of the 1970s and 1980s provided rough sketches of Saturn’s moons. But during its many years in Saturn orbit, NASA’s Cassini spacecraft discovered previously unknown moons, solved mysteries about known ones, studied their interactions with the rings and uncovered new mysteries—including the discovery on an ocean moon with potential ingredients for life—that will engage a whole new generation of space scientists.",
        "While the larger moons are spherical, others are shaped like a sweet potato (Prometheus), a regular potato (Pandora), a meatball (Janus), and even a sponge (Hyperion). Some have a gnarled, irregular shape and texture like a dirty ice-ball (Epimetheus). One object observed in the rings (and unofficially called Peggy) may be a moon forming or disintegrating, or it might not truly be a moon at all.",
        "Four spacecraft have visited the Saturn system, but Cassini alone actually orbited the ringed planet. Doing so bought Cassini time—more than a decade—to linger and watch Saturn’s exotic zoo of 60-plus moons like no spacecraft before. Cassini looked, listened, sniffed and even tasted Saturn’s moons, and what it learned about them is nothing less than extraordinary."],
        size_and_distance:[],
        orbit_and_rotation:[],
        structure:["The interiors of Io, Europa and Ganymede have a layered structure (as does Earth). Io has a core, and a mantle of at least partially molten rock, topped by a crust of solid rock coated with sulfur compounds. Europa and Ganymede both have a core; a rock envelope around the core; a thick, soft ice layer; and a thin crust of impure water ice. In the case of Europa, a global subsurface water layer probably lies just below the icy crust. Layering at Callisto is less well defined and appears to be mainly a mixture of ice and rock."],
        formation:["Cassini scientists were astonished when they found a plume spraying water vapor, icy particles and simple organic materials into space from the south polar region of Enceladus. Scientists determined that the jets are the source of material for Saturn’s E-Ring. The jets spew out of great fissures, or cracks, known as “tiger stripes,” which Cassini scientists found grow wider or narrower depending on where Enceladus is in its orbit around Saturn.",
        "Observations of its gravity and the contents of the plume suggested that Enceladus almost certainly contains a subsurface liquid water ocean near its southern polar region. Now more and more Cassini data indicates that Enceladus is home to a global (not just regional) ocean, and the jets near the south polar region are powered by hotspots, where heat from the interior ocean escapes.",
        "On Earth, hydrothermal vents at the ocean floor can produce habitats where organisms can flourish, completely cut off from sunlight. Many scientists suspect that life on Earth might have begun around these undersea environments. The evidence is beginning to pile up that Enceladus might have hydrothermal vents too.",
        "But vents or no vents, the Cassini mission showed that Enceladus appears to have all the components necessary for life. The food component is methane, which has been observed in surprising abundance in the plume, said Bonnie Buratti, a senior research scientist at NASA’s Jet Propulsion Laboratory. “Water, food, and heat—everything is there for life as we know it,” she said. “It’s all there.”"],
        indepth_description:[],
        kid_friendly:[],
        surface:[],
        Magnetosphere:[],
        moons:[],
        Potential_for_life:"",
        date_of_discovery:"",
        discovered_by:"",
        average_orbit_distance:"",
        mean_orbit_velocity:"",
        orbit_eccentricity:"",
        equatorial_inclination:"",
        equatorial_radius:"",
        equatorial_circumference:"1",
        volume:"",
        density:"",
        mass:"",
        surface_area:"",
        surface_gravity:"",
        escape_velocity:"",
        atomospheric_constituents:"",
        exploration:["Pioneers 10 and 11 (1973 to 1974) and Voyager 1 and Voyager 2 (1979) offered striking color views and global perspectives from their flybys of the Jupiter system. From 1995 to 2003, the Galileo spacecraft made observations from repeated elliptical orbits around Jupiter, passing as low as 162 miles (261 kilometers) over the surfaces of the Galilean moons. These close approaches resulted in images with unprecedented detail of selected portions of the surfaces.",
        "Close-up images taken by the Galileo spacecraft of portions of Europa's surface show places where ice has broken up and moved apart, and where liquid may have come from below and frozen smoothly on the surface. The low number of craters on Europa leads scientists to believe that a subsurface ocean has been present in recent geologic history and may still exist today. The heat needed to melt the ice in a place so far from the Sun is thought to come from inside Europa, resulting primarily from the same type of tidal forces that drive Io's volcanoes.",
        "The next major mission to explore Jupiter’s moons is NASA’s Europa Clipper. Clipper will conduct detailed reconnaissance of Jupiter's moon Europa to see whether the icy moon could harbor conditions suitable for life."],
        significant_events:[],
        galleries:[{image:"https://solarsystem.nasa.gov/system/content_pages/main_images/450_PIA11148.jpg",
        title:"Aegaeon"},
        {image:"https://i1.wp.com/headsup.scoutmag.wpengine.com/files/2013/01/16500feetmilkywaykc2_brunier.gif?resize=612%2C395&ssl=1",
        title:"Aegir"},
        {image:"https://i1.wp.com/headsup.scoutmag.wpengine.com/files/2013/01/16500feetmilkywaykc2_brunier.gif?resize=612%2C395&ssl=1",
        title:"Albiorix"},
        {image:"https://solarsystem.nasa.gov/system/content_pages/main_images/503_PIA11100.jpg",
        title:"Anthe"},
    ],
    }

    render(){
        return(
        <div className="SaturnMoon">
            <MenuBar></MenuBar>
            <div className="Planet-page-img-container">
              <img className="planet-page-img" style={{width:"relative", height:"100vh"}} 
              src="https://i2.wp.com/www.astronomylovers.com/wp-content/uploads/2019/02/DfA-MVwU0AEMFlm.jpg?fit=950%2C586&ssl=1">
              </img>
              <div className="planet-page-img-text-title">
                <p>Saturn's Moon
                <br></br>
                </p>
              </div>
            </div>
            <PlanetDetail detail={this.state}></PlanetDetail>
            <MoreDestination detail = {this.state}></MoreDestination>
        </div>
        )}
}

export default SaturnMoonComponent;