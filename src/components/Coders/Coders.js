import React, { useEffect, useState } from 'react';
import AddCoder from '../AddCoder/AddCoder';
import Coder from '../Coder/Coder';
import './Coders.css';

const Coders = () => {
    // coders to be rendered on the UI     
    const [coders, setCoders] = useState([]);
    // Added Total programer 
    const [addCoder, setAddCoder] = useState([]);
    
    // Add Event Handler declare 
    const handleAddCoder = (coder) => {
        
        const newAdded = [...addCoder, coder]
        setAddCoder(newAdded)
        // console.log(newAdded);
    }
    useEffect(() => {
        fetch('/info.JSON')
            .then(res => res.json())
            .then(data => setCoders(data));
        
    }, []);
    
    return (
        <div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-8">
                        <div className="row g-2">
                            {
                            coders.map(coder => <Coder
                                key={coder.index}
                                coder={coder}
                                handleAddCoder={handleAddCoder}
                            />)
                            }
                        </div>
                    </div>
                <div className="col-md-3">
                    <AddCoder
                    addCoder={addCoder}
                    />
                </div>
            </div>
        </div>
    );
};
export default Coders;
