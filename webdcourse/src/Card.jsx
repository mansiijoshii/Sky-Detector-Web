import React from "react";

function card(prop){
    return(
      <>
      <div className='cards'>
        <div className='card'>
          <img src={prop.imgsrc}  alt='logo'className='card_img'/>
          <div className='card_info'>
              <span className='card_cat'> Web Development Course</span>
             <h1 className='card_title'>{prop.title} </h1>
             <a href={prop.link} target='_blank'>
              <button>Learn</button>
             </a>
          </div>
        </div>
      </div>
     </>
    );
  } 
  export default card;