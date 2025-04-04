import React from 'react';
import './RightContent.css'; 

const RightContent = ({ content }) => {

  return (
    <div className="right-content">
      {content}
      <h2>Pizza Gerichte 1<span className='spanStyle'>€</span></h2>
        <p className='pExtraStyle2'>12. Margherita<sup>1,2,a,g</sup><span className='spanStyle'>6,00</span></p>
        <p>13. Salami<sup>1,2,3,7,a,g,j</sup><span className='spanStyle'>7,50</span></p>
        <p className='pExtraStyle2'>14. Schinken<sup>1,2,3,7,a,g,i,j</sup><span className='spanStyle'>7,50</span></p>
        <p>15. Funghi mit Pilzen<sup>1,2,a,g</sup><span className='spanStyle'>7,50</span></p>
        <p className='pExtraStyle2'>16. Drehspieß Pizza<sup>1,2,4,6,a,c,f,g</sup><span className='spanStyle'>9,00</span></p>
        <p>17. Artischocken<sup>1,2,a,g</sup><span className='spanStyle'>7,50</span></p>
        <p className='pExtraStyle2'>18. Mozzarella mit frischen Tomaten<sup>1,2,a,g</sup><span className='spanStyle'>8,00</span></p>
        <p>19. Sucuk türkische Knoblauchwurst<sup>1,2,3,4,a,g</sup><span className='spanStyle'>8,50</span></p>
        <p className='pExtraStyle2'>20. Thunfisch<sup>1,2,a,d,g</sup><span className='spanStyle'>7,50</span></p>
        <p>21. Hawaii mit Schinken und Ananas<sup>1,2,3,7,a,g,i,j</sup><span className='spanStyle'>8,00</span></p>
        <p className='pExtraStyle2'>22. Romana mit Schinken und Pilzen<sup>1,2,3,7,a,g,i,j</sup><span className='spanStyle'>8,00</span></p>
        <p>23. Schinken und Salami<sup>1,2,3,7,a,g,i,j</sup><span className='spanStyle'>7,50</span></p>
        <p className='pExtraStyle2'>24. Spezial mit Schinken, Salami, Paprika Oliven<sup>1,2,3,5,7,a,g,i,j</sup><span className='spanStyle'>9,00</span></p>
        <p>25. Vegetarisch mit Artischocken, Pilzen, Paprika, Tomaten und Zwiebeln<sup>1,2,a,g</sup><span className='spanStyle'>8,50</span></p>
    </div>
  );
};

export default RightContent;
