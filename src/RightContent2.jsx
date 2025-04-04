import React from 'react';
import './RightContent.css'; 

const RightContent2 = ({ content }) => {
  return (
    <div className="right-content">
      {content}
      <h2>Lahmacun / Pide / Seele<span className='spanStyle'>€</span></h2>
        <p className='pExtraStyle2'>35. Lahmacun mit gewürtzem Hackfleisch<br></br> und Salat<sup>a,g</sup><span className='spanStyle'>7,00</span></p>
        <p>36. Lahmacun mit gewürtzem Hackfleisch,Salat und Drehspieß<sup>1,2,4,6,a,c,f,g</sup><span className='spanStyle'>9,00</span></p>
        <p className='pExtraStyle2'>37. Pide mit Edamerkäse<sup>1,2,a,g</sup><span className='spanStyle'>7,00</span></p>
        <p>38. Pide mit Weichkäse<sup>a,g</sup><span className='spanStyle'>7,00</span></p>
        <p className='pExtraStyle2'>39. Pide mit Hackfleisch<sup>a,g</sup><span className='spanStyle'>7,00</span></p>
        <p>40. Pide mit Hackfleisch und Weichkäse<sup>a,g</sup><span className='spanStyle'>8,00</span></p>
        <p className='pExtraStyle2'>41. Pide mit Spinat und Weichkäse<sup>a,g,</sup><span className='spanStyle'>7,00</span></p>
        <p>42. Pide mit Drehspieß<sup>1,2,4,6,a,c,f,g</sup><span className='spanStyle'>8,00</span></p>
        <p className='pExtraStyle2'>43. Seele mit Weichkäse<sup>a,g,</sup><span className='spanStyle'>6,50</span></p>
        <p>44. Seele mit Käse, Salami oder Schinken<sup>1,2,3,7,11</sup><span className='spanStyle'>7,50</span></p>
        <p className='pExtraStyle2'>45. Seele Hawaii mit Käse, Schinken und Ananas<sup>1,2,3,7,10,11</sup><span className='spanStyle'>7,50</span></p>
        <p>46. Seele mit Drehspieß<sup>1,2,3,7,9,10,11</sup><span className='spanStyle'>7,50</span></p>
        <p className='pExtraStyle2'>47. Seele vegetarisch mit Tomaten, Zwiebeln, Paprika und Pilzen<sup>1,2,3,5,7,a,g,i,j</sup><span className='spanStyle'>7,50</span></p>
        <p>48. Seele mit Kartoffeln, Zwiebeln und Tomaten<sup>1,2,a,g</sup><span className='spanStyle'>6,50</span></p>
     </div>
  );
};

export default RightContent2;
