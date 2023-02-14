import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {incrementNumber, decrementNumber} from './actions/index';


const Main = () => {
  const getcurrent  = useSelector((anynamewrite)=> anynamewrite.changethenumber);

  const triggersdis = useDispatch();


  return <>
    <div className="Main shadow-sm border py-5">
        <div className="container">
            <div className="title">
                <h1>I am Main Components</h1>
                <p></p>
                <div className="row">
                    <button className="rounded border col-1 mx-2 p-3" onClick={()=> triggersdis(decrementNumber())}>-</button>
                    <div className="rounded-pill border col-2 text-center mx-2 p-3">{getcurrent}</div>
                    <button className="rounded border col-1 mx-2 p-3" onClick={()=> triggersdis(incrementNumber())}>+</button>
                </div>
            </div>
        </div>
    </div>
  </>;
};

export default Main;
