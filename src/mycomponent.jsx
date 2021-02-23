import React from 'react';

const MyComponent = (props) => {
    return( 
        <>
            {props.information === 'Jihad' && 
            <div>
                <h1>Home</h1>
                <p>{props.information}</p>
            </div>}
            {props.information === 'Student' &&
            <div>
                <h1>Contact</h1>
                {props.information}
            </div>}
        </>
    )
}

export default MyComponent;