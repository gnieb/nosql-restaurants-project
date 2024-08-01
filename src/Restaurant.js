import { useState } from "react";

export const Restuarant = ({restaurant}) => {
    return(
        <div>
            <div>{restaurant.name}</div>
            <div>{restaurant.description}</div>
            <div>Have I been there yet? {restaurant.visited}</div>

        </div>
    )
};