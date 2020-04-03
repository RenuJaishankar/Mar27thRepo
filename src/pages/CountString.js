import React, { useState } from 'react';

function CountString() {
    // Declare a new state variable, which we'll call "count"
    const [str, setString] = useState("Hello");
   
    return (
        <div>
            <form>
                 
                <label>
                    Name:
                       <input onChange={event => setString(event.target.value)} type="text" name="name"/>
                </label>
                       
                 </form>
            <span>{str}</span>
        </div>
    );
}

export default CountString