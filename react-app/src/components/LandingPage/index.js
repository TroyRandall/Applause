import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import welcomeVideo  from './welcomeVideo.mp4'
import djImage from './dj-women-wallpaper.png'
import './landingPage.css';

function LandingPage () {
    const history= useHistory();
    const currentUser = useSelector((state) => state.session.user);

    if (currentUser) return history.push('/centerstage')

    return (
        <div id='landing-page-container'>
            <video controlsList="nodownload nofullscreen noremoteplayback" muted autoPlay loop id='landing-page-video' poster="http://dummyimage.com/320x240/ffffff/fff">
                <source src={welcomeVideo} type = 'video/mp4'/>
            </video>
        <div className='landing-page-flex-item' id='landing-page-row-1'>
            <img src={djImage} alt='woman holding a record in her hand wearing headphones, preparing to start djing.' id='landing-page-image-1'>
            </img>
            <div id='landing-page-textbox-1'>
                <h3 id='landing-page-subtitle-1'>Artist? Engineer? #1 Fan?</h3>
                <p id='landing-page-subinfo-1'>If You Are Any Part Of The Music Industry Then This Is The Place For You! Welcome To The Revolution!</p>
            </div>
        </div>
        </div>
    )
}

export default LandingPage;
