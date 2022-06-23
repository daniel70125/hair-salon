import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.scss';
import Pic1 from '../../Pictures/slideshow-hair-tools.jpg';
import Pic2 from '../../Pictures/Slideshow-home-location.jpg';
import Pic3 from '../../Pictures/slideshow-black-joy.jpg';

const slideImages = [Pic1, Pic2, Pic3];

class Slideshow extends Component {
    state = {  

    }

    render() { 
    const properties = {
        autoplay: true,
        arrows: false,
        onChange: (previous, next) => {
            console.log(previous, next);
        }
    };
  
        return ( 
            <>
                <Slide {...properties} id='slideshow-container' easing="ease">
                <div  className="each-slide">
                    <div style={{'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slideImages[1]})`, 'height':'100vh', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
                        <div className='slideshow-text-container'>
                            <span>Feel safe!</span>
                             <p> <span className="dot"></span> LOCATION! <span className="dot"></span></p>
                            <span>Convenient Locations!</span>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slideImages[0]})`, 'height':'100vh', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
                    <div className='slideshow-text-container'>
                            <span>Feel safe!</span>
                             <p> <span className="dot"></span> LOCATION! <span className="dot"></span></p>
                            <span>Convenient Locations!</span>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slideImages[2]})`, 'height':'100vh', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
                    <div className='slideshow-text-container'>
                            <span>Feel safe!</span>
                             <p> <span className="dot"></span> LOCATION! <span className="dot"></span></p>
                            <span>Convenient Locations!</span>
                        </div>
                    </div>
                </div>
                </Slide>
            </>
         );
    }
}
 
export default Slideshow;