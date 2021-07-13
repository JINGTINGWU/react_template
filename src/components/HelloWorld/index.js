import React from 'react';

import mainImage from '../../images/a.jpg';
console.log(mainImage);
const HelloWorld = () => {
    <>
        <div>Hello World!</div>
        <img src={mainImage}/>
        <br/>
        {mainImage}
    </>
}

export default HelloWorld;