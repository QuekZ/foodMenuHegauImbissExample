import React from 'react';
import './LeftContent.css'; // Import CSS file for styles
import doener from './assets/doener.png';

const LeftContent = ({ content }) => {
  return (
    <div className="left-content">
      {content}
      <h2>Puten Drehspieß oder<br></br> Rind-Kalb Drehspieß nach Döner Art Gewürzt<span className='spanStyle'>€</span></h2>
        <p className='pExtraStyle2'>1. im Fladenbrot mit Salat und Soße<sup>2,4,6,a,c,f,g,j</sup><span className='spanStyle'>7,00</span></p>
        <p>3. im Fladenbrot klein<sup>2,4,6,a,c,f,g,j</sup><span className='spanStyle'>5,50</span></p>
        <p className='pExtraStyle2'>4. auf dem Teller mit Salat und Soße<sup>2,4,6,a,c,f,g,j</sup><span className='spanStyle'>9,50</span></p>
        <p>5. auf dem Teller mit Salat,<br></br> Pommes und Soße<sup>2,4,6,a,c,f,g,j</sup><span className='spanStyle'>11,50</span></p>
        <p className='pExtraStyle2'>6. Fladenbrot vegeratisch groß<sup>2,4,a,g</sup><span className='spanStyle'>7,00</span></p>
        <p>7. Fladenbrot vegetarisch klein<sup>2,4,a,g</sup><span className='spanStyle'>5,50</span></p>
        <p className='pExtraStyle2'>8. in der Box<sup>2,4,6,a,c,f,g,j</sup><span className='spanStyle'>7,50</span></p>
        <p>9. im Dürum/Yufka mit Salat und Soße<sup>2,4,6,a,c,f,g,j</sup><span className='spanStyle'>8,00</span></p>
        <p className='pExtraStyle2'>10. Dürum/Yufka vegetarisch<sup>2,4,a,g</sup><span className='spanStyle'>8,00</span></p>
        <p>11. Falafel im Brot oder Yufka<sup>2,4,a,f,h,k</sup><span className='spanStyle'>8,00</span></p>
        <br></br>
        <p className='pExtraStyle'>Extra Beilagen wie z.B. Käse 1,00 € Extra</p>
    </div>
  );
};

export default LeftContent;
