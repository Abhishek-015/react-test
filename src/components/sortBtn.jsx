import React from "react";

const SortBtn = ({handleClick,sortByValue}) => {
    return(
        <button className="btn btn-primary btn-sm mb-2" onClick={()=>handleClick(sortByValue)}>Sort</button>
    )
}
export default SortBtn