
import React from 'react';
import './logo_button.css';

export default function Logo(props) {

    function openURL(url) {
        window.open(url, '_blank');
    }

    return (
        <div onClick={() => { openURL(props.url) }}>
            <img className="logo" src={props.image} />
        </div>
    );
}
