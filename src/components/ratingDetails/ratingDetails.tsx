import { LinearProgress } from '@mui/material';
import * as React from 'react';
import './ratingDetails.scss';
import { Star } from '@mui/icons-material';

export default function RatingDetails() {
    const fiveStarprogress = 85;
    let fourStarprogress = 65;
    let threeStarprogress = 75;
    let secStarprogress = 25;
    let OneStarprogress = 10;
    return (
        <div className='feedbackAnalysis'>
        <div className='container'>
          <div className='outerContainer'>
            <div className='row'>
              <p className='title'>Customer reviews</p>
            </div>
            <div className='ratingContainer'>
              <Star fontSize='small' className='ratingColor'></Star>
              <Star fontSize='small' className='ratingColor'></Star>
              <Star fontSize='small' className='ratingColor'></Star>
              <Star fontSize='small' className='ratingColor'></Star>
              <Star fontSize='small' className='noRatingColor'></Star>
            </div>
            <p className='noOfRatingsTitle'>40 customer ratings</p>
            <div className='progressContainer'>
              <div>
                <div className='progressbarContainer'>
                  <p className='progressBarText'>5 Star</p>
                  <LinearProgress variant="determinate" value={fiveStarprogress} className='progressBar' />
                  <p className='progressBarText'>84%</p>
                </div>
                <div className='progressbarContainer'>
                  <p className='progressBarText'>4 Star</p>
                  <LinearProgress variant="determinate" value={fourStarprogress} className='progressBar' />
                  <p className='progressBarText'>40%</p>
                </div>
                <div className='progressbarContainer'>
                  <p className='progressBarText'>3 Star</p>
                  <LinearProgress variant="determinate" value={threeStarprogress} className='progressBar' />
                  <p className='progressBarText'>30%</p>
                </div>
                <div className='progressbarContainer'>
                  <p className='progressBarText'>2 Star</p>
                  <LinearProgress variant="determinate" value={secStarprogress} className='progressBar' />
                  <p className='progressBarText'>10%</p>
                </div>
                <div className='progressbarContainer'>
                  <p className='progressBarText'>1 Star</p>
                  <LinearProgress variant="determinate" value={OneStarprogress} className='progressBar' />
                  <p className='progressBarText'>5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}