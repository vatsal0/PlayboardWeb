import React from 'react';

function Container(props) {
    return (
        <div className="container-fluid" style={{margin: 15}}>
            <div className="row">
                { props.children }
            </div>
        </div>
    )
}

export default Container;