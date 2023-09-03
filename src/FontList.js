import { useState, useEffect } from 'react';
import React from 'react';

const FontList = (props) => {
    const fonts = props.fonts;

    console.log(fonts)

    return (
        <div className="fontList">
            {fonts.map((font) => (
                <div className="fontPreview" key={font.id}>
                    <h2>{ font.name }</h2>
                    <p> Created on: { font.date_created }</p>
                </div>
            ))}
        </div>
    );
}

export default FontList;