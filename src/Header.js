import React from "react";
import { useSelector } from "react-redux";



const Header = () => {
  const getcurrent  = useSelector((anynamewrite)=> anynamewrite.changethenumber);
  return <>
    <div className="Header bg-primary text-white py-3">
        <div className="container">
            <div className="title d-flex justify-content-between">
                <h1 className="m-0">I am Header Components</h1>
                <button className="btn btn-light">Current Number : {getcurrent}</button>
            </div>
        </div>
    </div>
  </>;
};

export default Header;
