
import * as React from 'react';

import './ratingContainer.scss';
import thumbsUp from '../../assests/thumbsUp.png'
import thumbsDown from '../../assests/thumbsDown.png'
import { Divider } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function RatingContainer() {
    return (
        <div className='feedbackAnalysis'>
            <div className='container'>
                <div className='outerContainer'>
                    <div className='row'>
                        <p className='title'>Rating Details</p>
                        <div className='performanceContainer'>
                            <p className='performanceText'>Your performance review is </p>
                            <p className='performanceReviewText'>Good!</p>
                        </div>
                        <div className='emojiContainer'>
                            <div>
                                <div className='reviewContainer'>
                                    <img src={thumbsUp} className='emojiPic' />
                                    <p className='emojiTitle'>Positive Review</p>
                                </div>
                                <div>
                                    <p className='ratingCounter'>371</p>
                                    <div className='countContainer'>
                                        <ArrowUpwardIcon fontSize='small' className='postiveIcon'></ArrowUpwardIcon>
                                        <p className='countPositive'>12%</p>
                                        <p className='countSubtitle'>from last 7 days</p>
                                    </div>
                                </div>
                            </div>

                            <Divider orientation="vertical" light flexItem />
                            <div>
                                <div className='reviewContainer'>
                                    <img src={thumbsDown} className='emojiPic' />
                                    <p className='emojiTitle'>Negative Review</p>
                                </div>
                                <div>
                                    <p className='ratingCounter'>82</p>
                                    <div className='countContainer'>
                                        <ArrowDownwardIcon fontSize='small' className='negativeIcon'></ArrowDownwardIcon>
                                        <p className='countPositive negativeIcon'>8%</p>
                                        <p className='countSubtitle'>from last 7 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}