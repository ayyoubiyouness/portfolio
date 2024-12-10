import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

import './demo.scss';

const DemoComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, techno, github, video, site } = location.state || {};
  const goBack = () => {
    navigate(-1);
  }
  const redirectPage = (url) => {
    window.open(url, '_blank');
  }
  return (
    <>
      <Navbar />
      <button onClick={goBack} className='button-demo'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>

      </button>
      <div className='demo-title'>
        <span> Hello in the project demo : {title}</span>
      </div>
      <div className='app-container'>
        <div className='technology-section'>
          <p>Technologies used :</p>
          <ul>
            {
              techno && techno.map((techno, index) => (
                <li key={index}> {techno}</li>

              ))
            }
          </ul>
          <div className='git-button'>
            <button className='git-button1' onClick={() => redirectPage(github)}>Github Code</button>
            {
              site &&
              <button className='git-button2' onClick={() => redirectPage(site)}>Live Preview</button>

            }



          </div>
        </div>
        <div className="video">

        {
          video && (
            <iframe className='video-section'
            width="950"
            height="315"
            src={`https://www.youtube.com/embed/${video}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
            </iframe>
          )
        }
        </div>
      </div>
    </>
  )
}

export default DemoComponent
