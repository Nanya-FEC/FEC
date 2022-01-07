import React, {useState, useContext} from 'react';
import Carousel from './Carousel.jsx';
import OverviewContext from '../OverviewContext.jsx';
import { FaTimes, FaArrowRight, FaArrowLeft, FaAngleUp, FaAngleDown } from 'react-icons/fa';

// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { InnerImageZoom } from 'react-inner-image-zoom';

const MainImg = () => {
  const { currentStyle, currentPic, setCurrentPic, zoom, setZoom} = useContext(OverviewContext)
  const { popup, setPopup} = useContext(OverviewContext);
  const expandedView = document.querySelector("#popupBackground");

  function handleClick (event) {
    setPopup(!popup);
  }

  function handleRightClick (event) {
    let currentIndex = currentStyle.photos.map((photo) => photo.url).indexOf(currentPic);
      setCurrentPic(currentStyle.photos[currentIndex + 1].url);

      // $('.carousel').animate({
      //   scrollTop: $(e.currentTarget).position().top + $('.carousel').scrollTop()
      //   }, 'slow')
  }

  function handleLeftClick (event) {
    let currentIndex = currentStyle.photos.map((photo) => photo.url).indexOf(currentPic);
      setCurrentPic(currentStyle.photos[currentIndex - 1].url);
  }

  return (
    <div className='overviewBox1'>

        <img src={currentPic} id='mainImage' onClick={event => handleClick(event)}/>

        {currentStyle.photos[0].url !== currentPic &&
          <FaAngleUp className='carArrows up' onClick={(event) => handleLeftClick(event)}/>
        }
        <span className='carousel'>
          {currentStyle.photos.map(pic => <Carousel pic={pic} key={pic.url.slice(33, 40)} />)}
        </span>

        {currentStyle.photos[currentStyle.photos.length - 1].url !== currentPic &&
          <FaAngleDown className='carArrows down' onClick={(event) => handleRightClick(event)} />
        }

        <div style={{position: 'absolute', height: '100%', width: '100%', display: 'flex', alignItems: 'center'}}>
          {currentStyle.photos[0].url !== currentPic &&
            <FaArrowLeft className='mainArrows left' onClick={(event) => handleLeftClick(event)} />
          }
          {currentStyle.photos[currentStyle.photos.length - 1].url !== currentPic &&
            <FaArrowRight className='mainArrows right'onClick={(event) => handleRightClick(event)} />
          }
        </div>

        <div className='popup' style={{display: popup ? 'flex' : 'none'}}>

         <InnerImageZoom
           className='popupImg' src={currentPic}
           zoomScale={2.5}
           movetype='hover'
         />
         <FaTimes className='exit' onClick={event => handleClick(event)}/>

         {currentStyle.photos[0].url !== currentPic &&
            <FaArrowLeft className='mainArrows leftEx' onClick={(event) => handleLeftClick(event)} />
          }
          {currentStyle.photos[currentStyle.photos.length - 1].url !== currentPic &&
            <FaArrowRight className='mainArrows rightEx'onClick={(event) => handleRightClick(event)} />
          }
</div>

    </div>

  )
}

export default MainImg;