import { useState } from "react";

export const Restuarant = ({restaurant}) => {
    const [pizzaz, setPizzaz ] = useState(false);

    const onMouseEnter = () => {
        setPizzaz(true);
      };
    
      const onMouseLeave = () => {
        setPizzaz(false);
      };


    return(
        <div className="p-10 m-2 border-2 border-orange-700 rounded-full">
            <div className="font-black text-orange-800" >{restaurant.name}</div>
            <div>{restaurant.description}</div>
            <div 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} 
            >Have I been there yet? {restaurant.visited? `yes!` : `not yet`}</div>

        </div>
    )
};