import { LinearProgress } from '@mui/material';
import * as React from 'react';
import './ratingDetails.scss';
import { Star } from '@mui/icons-material';
import { feedbackModel } from '../model/feedbackModel';

export default function RatingDetails(_props: any) {

    let totalUsers = _props.feedbackList.length
    let sum = 0
    _props.feedbackList.forEach((element: feedbackModel) => {
        sum = sum + +element.score
    });
    let averageRating = Math.round(sum / _props.feedbackList.length)
    let RatingStars = () => {
        return (<div className='flex'>{
            Array.from(Array(+averageRating), (e, i) => {
                return (<Star fontSize='small' className='ratingColor'></Star>)
            })
        }
        </div>)
    }
    let NoRatingStars = () => {
        return (<div className='flex'>{
            Array.from(Array(5 - averageRating), (e, i) => {
                return (<Star fontSize='small' className='noRatingColor'></Star>)
            })
        }
        </div>)
    }
    
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
                        <RatingStars />
                        <NoRatingStars />
                    </div>
                    <p className='noOfRatingsTitle'>{totalUsers} customer ratings</p>
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