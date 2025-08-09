import React from 'react';
import './Projects.css';


const Projects = () => {
  return (
    <>
      <div className='container project' id="projects">
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>TOP RECENT PROJECTS</h2>
        <hr />
        <p className='pb-3 text-center'>
  Here are my 3 recent projects (Wanderlust, TradeSwift, MeetSwift-VideoCall) with live links and source code.  
  Wanderlust simplifies travel planning with seamless bookings, TradeSwift features a sleek frontend for real-time stock trading,  
  and MeetSwift enables smooth, high-quality video calls to connect people effortlessly.
</p>
        <div className='row' id='ads'>
            
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Full Stack</span>
                        <img src='photo1.png' alt='project1' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>HTML • CSS • JS</span>
                        <span className='card-detail-badge'>Mongodb</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>Wanderlust Rental Website</h5>
                        </div>
                        <a className='ad-btn' href='https://majorproject-1-t4uy.onrender.com'>
                            View
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Frontend</span>
                        <img src='photo2.png' alt='project1' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>react</span>
                        <span className='card-detail-badge'>Mongodb</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>TradeSwift Trading Website</h5>
                        </div>
                        <a className='ad-btn' href='https://tradeswift-frontend-1-abmv.onrender.com'>
                            View
                        </a>
                    </div>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Full Stack</span>
                        <img src='video.png' alt='project1' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>react</span>
                        <span className='card-detail-badge'>Mongodb</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>MeetSwift-VideoCall</h5>
                        </div>
                        <a className='ad-btn' href='https://videocall-mern-project-frontend2.onrender.com'>
                            View
                        </a>
                    </div>
                </div>
            </div>
      
        </div>
      </div>
    </>
  );
}

export default Projects;
