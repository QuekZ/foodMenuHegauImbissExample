import React from 'react';
import './RightContent.css'; // Import CSS file for styles

const RightContent3 = ({ content }) => {
  return (
    <div className="right-content">
      {content}
      <h2>Getränke<span className='spanStyle'>€</span></h2>
      <p className='pExtraStyle2'>Cola<sup>1,8</sup>/Fanta<sup>1,3,6</sup>/Sprite/Mezzo Mix<sup>1,6,8</sup><span className='spanStyle'>1,50</span><span className='spanStyle'>0,33l&nbsp; </span></p>
      <p>Cola<sup>1,8</sup>/Fanta<sup>1,3,6</sup>/Sprite/Mezzo Mix<sup>1,6,8</sup><span className='spanStyle'>2,00</span><span className='spanStyle'>0,5l&nbsp; </span></p>
      <p className='pExtraStyle2'>Uludag<sup>2</sup><span className='spanStyle'>1,50</span><span className='spanStyle'>0,33l&nbsp; </span></p>
      <p>Ayran türk. Joghurtgetränk<sup>g</sup><span className='spanStyle'>1,00</span><span className='spanStyle'>0,33l&nbsp; </span></p>
      <p className='pExtraStyle2'>Mineralwasser<sup></sup><span className='spanStyle'>1,50</span><span className='spanStyle'>0,33l&nbsp; </span></p>
      <p>Tetra Pak verschiedene Sorten<sup></sup><span className='spanStyle'>1,50</span><span className='spanStyle'>0,5l&nbsp; </span></p>
      <p className='pExtraStyle2'>Red Bull verschiedene Sorten<sup></sup><span className='spanStyle'>2,50</span><span className='spanStyle'>0,25l&nbsp; </span></p>
      <p>Tasse Kaffee<sup>8</sup><span className='spanStyle'>2,00</span><span className='spanStyle'>&nbsp; </span></p>
      <p className='pExtraStyle2'>Bier alle Sorten<sup>g</sup><span className='spanStyle'>3,00</span><span className='spanStyle'>0,5l&nbsp; </span></p>
      <p>Bier alle Sorten<sup>g</sup><span className='spanStyle'>2,70</span><span className='spanStyle'>0,33l&nbsp; </span></p>
   
    </div>
  );
};

export default RightContent3;
