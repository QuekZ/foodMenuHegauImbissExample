import React from 'react';
import './LeftContent.css'; // Import CSS file for styles

const LeftContent2 = ({ content }) => {
  return (
    <div className="left-content">
      {content}
      <h2>Pizza Gerichte 2<span className='spanStyle'>€</span></h2>
        <p className='pExtraStyle2'>26. Quattro Formaggi mit Weichkäse,<br></br> Edamerkäse, Mozzarella und Schimmelkäse<sup>1,2,a,g</sup><span className='spanStyle'>8,00</span></p>
        <p>27. Roma mit Salami, Oliven<br></br> und Peperoni<sup>1,2,3,5,7,a,g,j</sup><span className='spanStyle'>8,00</span></p>
        <p className='pExtraStyle2'>28. Frutti di Marre mit Meeresfrüchten<sup>1,2,a,b,d,n,g</sup><span className='spanStyle'>8,00</span></p>
        <p>29. Sardellen<sup>1,2,a,d,g</sup><span className='spanStyle'>8,00</span></p>
        <p className='pExtraStyle2'>30. Gemischt mit Schinken,<br></br> Salami, Pilzen, Paprika<sup>1,2,3,7,a,g,i,j</sup><span className='spanStyle'>9,00</span></p>
        <p>31. Cuattro Stagioni mit Schinken,<br></br> Salami, Pilzen, Peperoni und Artischocken<sup>1,2,3,7,a,g,i,j,l</sup><span className='spanStyle'>9,00</span></p>
        <p className='pExtraStyle2'>32. Can Pizza mit Schinken, Salami,<br></br> Pilzen, Peperoni, Oliven und Zwiebeln<sup>1,2,3,5,7,a,g,i,j,l</sup><span className='spanStyle'>9,00</span></p>
        <p>33. Familien Pizza Margherita<br></br>(60x40cm)<sup>1,2,a,g</sup><span className='spanStyle'>27,50</span></p>
        <p className='pExtraStyle2'>34. Drehspieß Familien Pizza<br></br>(Größe 60x40cm)<sup>1,2,4,6,a,c,f,g</sup><span className='spanStyle'>35,00</span></p>
        <br></br>
        <p className='pExtraStyle'>Auf jedes Extra 1,00€ Aufpreis. Zusätzlich mit Ei 0,50€ extra.<br></br>
        Sie können sich Ihre Pizza, Seele oder Pide auch selbst zusammenstellen.</p>
    </div>
  );
};

export default LeftContent2;
