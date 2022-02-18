import { LinearProgress } from '@mui/material';
import * as React from 'react';
import './ratingDetails.scss';
import { Star } from '@mui/icons-material';
import { feedbackModel } from '../model/feedbackModel';

export default function RatingDetails(_props: any) {

  let totalUsers = _props.feedbackList.length
  let progress: { [key: number]: number } = {}
  let sum = 0
  _props.feedbackList.forEach((element: feedbackModel) => {
    sum = sum + +element.score
  });
  let averageRating = Math.round(sum / _props.feedbackList.length)
  let RatingStars = () => {
    return (<div className='flex'>{
      Array.from(Array(+averageRating), (e, i) => {
        return (<Star key={i} fontSize='small' className='ratingColor'></Star>)
      })
    }
    </div>)
  }
  let NoRatingStars = () => {
    return (<div className='flex'>{
      Array.from(Array(5 - averageRating), (e, i) => {
        return (<Star key={i} fontSize='small' className='noRatingColor'></Star>)
      })
    }
    </div>)
  }
  for (let i = 1; i <= 5; i++) {
    progress[i] =
      Math.round((_props.feedbackList.filter((elm: feedbackModel) => +elm.score === i).length / _props.feedbackList.length) * 100)
  }
  return (
    <div className='feedbackAnalysis'>
      <div className='container'>
        <div className='outerContainer'>
          <div className='row'>
            <p className='title'>Customer reviews</p>
          </div>
          <div className='ratingContainer'>
            <RatingStars />
            <NoRatingStars />
          </div>
          <p className='noOfRatingsTitle'>{totalUsers} customer ratings</p>
          <div className='progressContainer'>
            <div>
              {
                Object.entries(progress).map(([key, value]) => {
                  return (
                    <div className='progressbarContainer' key={key}>
                      <p className='progressBarText'>{key} Star</p>
                      <LinearProgress variant="determinate" value={value} className='progressBar' />
                      <p className='progressBarText'>{value}%</p>
                    </div>
                  )
                })
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}