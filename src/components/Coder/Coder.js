import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import './Coder.css'

const Coder = (props) => {
    
    const { name, picture, age, Expert, salary, address } = props.coder || {};
    
    // console.log(props.handleAddCoder);
    const element = <FontAwesomeIcon icon={faPlusSquare} />

    
    return (
        <div className='col-md-4'>
            <div className="card h-100">
                <img src={picture} className="card_img" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">Age : {age}</p>
                    <p><small>Salary : {salary}</small></p>
                    <p><small>Address : {address}</small></p>
                    <h6>Expert In : {Expert}</h6>
                    <button onClick={() => props.handleAddCoder(props.coder)}
                    className='btn btn-primary'>{element} Got Hire </button>
                </div>    
            </div> 
        </div>
    );
};

export default Coder;



           
            
            