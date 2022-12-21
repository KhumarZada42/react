import React from 'react';
import './style.scss';

function Recent() {
  return (
    <div className='Stories'>
        <h1>Recent stories</h1>
        <div className='StoryCards'>
            <div className='cardNorm'>
                <img src='https://dlcdnrog.asus.com/rog/media/1670893994624.webp'></img>
            </div>
            <div className='cardNorm'>
                <img src='https://dlcdnrog.asus.com/rog/media/1669857154768.webp'></img>
            </div>
            <div className='cardNorm'>
                <img src='https://dlcdnrog.asus.com/rog/media/166864109730.webp'></img>
            </div>
            <div className='cardBig'>
                <img src='https://dlcdnrog.asus.com/rog/media/1667344658657.webp'></img>
            </div>
            <div className='cardBig'>
                <img src='https://dlcdnrog.asus.com/rog/media/1665200765593.webp'></img>
            </div>
        </div>
        <a href=''><h6>LEARN MORE</h6></a>
    </div>
  )
}

export default Recent