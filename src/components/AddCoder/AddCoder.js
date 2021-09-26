import React from 'react';
import './AddCoder.css'

const AddCoder = (props) => {
    const { addCoder } = props || {}

    // using reduce 
    
    const totalReducer = (previous, current) => previous + current.salary;
    const total = addCoder.reduce(totalReducer, 0);
  
    return (
        <div>
            <h6>Total Programmer Added: {addCoder.length}</h6>
            <h5>Total Expense : { total} </h5>
            {
                addCoder.map(coder => {
                    return (
                        <div className='sidebar_container my-3'>
                            <img src={coder.picture} alt="" />
                            <div>
                                <h5>{coder.name}</h5>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    );
};

export default AddCoder;