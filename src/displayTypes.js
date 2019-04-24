import React from 'react';
import restaurants from "./restaurants";
//import react



// display all the restaurant types


function Displaytypes(list) {
return(
    <ul>
        {
            this.state.restaurants.map((restaurant) => (
            <li>{restaurant}</li>
            ))
        }
    </ul>
    )
}




// export thing

export default  Displaytypes