import React from 'react';

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <h3>Filter</h3>
            <div>
                <label class="container">
                    <input type="checkbox" />
                    <span class="checkmark" />
                    <p>Filter Option</p>
                </label>
                <label class="container">
                    <input type="checkbox" />
                    <span class="checkmark" />
                    <p>Filter Option</p>
                </label>
                <label class="container">
                    <input type="checkbox" />
                    <span class="checkmark" />
                    <p>Filter Option</p>
                </label>
                <label class="container">
                    <input type="checkbox" />
                    <span class="checkmark" />
                    <p>Filter Option</p>
                </label>
            </div>  
        </div>
    );
}

export default Sidebar;