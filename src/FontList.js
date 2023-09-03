import { useState, useEffect } from 'react';
import React from 'react';

const FontList = (props) => {
    const fonts = props.fonts;

    console.log(fonts)

    return (
        <div className="fontList">
            {fonts.map((font) => (
                <div className="fontPreview" key={font.id}>
                    <p>Font Name: { font.name }</p>
                    <p> Created on: { font.date_created }</p>
                </div>
            ))}
        </div>
    );
}

export default FontList;