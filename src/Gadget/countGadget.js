import React from 'react'
import * as BIIcons from 'react-icons/bi';
import * as AIIcons from 'react-icons/ai';
import './countGadget.css'

let Counter = (props) => {
    return(
        
        <div className = 'gadget' style={{background: props.bgColor}}>
            <center>
            <div className = 'display'>{props.count}</div>
            <div className = 'Buttons'>
                <button className="b1" onClick = {() => {props.pluse()}}><AIIcons.AiOutlinePlus /></button>
                <button className="b2" onClick = {() => {props.reset()}}><BIIcons.BiRefresh /></button>
                <button className="b3" onClick = {() => {props.minus()}}><AIIcons.AiOutlineMinus /></button>
            </div>
            </center>
        </div>
    )
}

export default Counter;