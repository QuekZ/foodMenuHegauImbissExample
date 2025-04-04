import React from 'react';
import './LeftContent.css'; 

const LeftContent3 = ({ content }) => {
  return (
    <div className="left-content">
      {content}
      <h2>Currywurst<span className='spanStyle'>€</span></h2>
        <p className='pExtraStyle2'>49. Currywurst mit Brot<sup>a,j</sup><span className='spanStyle'>4,50</span></p>
        <p>50. Currywurst mit Pommes<sup>1,2,3,7,a,g,j</sup><span className='spanStyle'>6,00</span></p>
        <br></br>
        <h2>Salate etc.<span className='spanStyle'>€</span></h2>
        <p className='pExtraStyle2'>51. Gemischter Salat - grüner Salat, Kraut, Mais, Zwieb., Tom.<sup>a,j</sup><span className='spanStyle'>5,50</span></p>
        <p>52. Bauernsalat - Tomaten, Zwiebeln, Gurken,<br></br>Weichkäse, Oliven, Paprika, Petersilie Brot<sup>5,50</sup><span className='spanStyle'>7,00</span></p>
        <p className='pExtraStyle2'>53. Thunfischsalat - Thunfisch, Zwiebeln,<br></br>grüener Salat<sup>d</sup><span className='spanStyle'>6,50</span></p>
        <p>54. Chicken Nuggets mit Pommes<sup>a,c,d</sup><span className='spanStyle'>7,90</span></p>
        <p className='pExtraStyle2'>55. Portion Pommes klein<sup>a,j</sup><span className='spanStyle'>3,50</span></p>
        <p>56. Portion Pommes Groß<sup></sup><span className='spanStyle'>5,50</span></p>
    </div>
  );
};

export default LeftContent3;
