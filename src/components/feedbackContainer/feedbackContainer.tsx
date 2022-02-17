import { Card, CardContent, Divider } from '@mui/material';
import * as React from 'react';
import './feedbackContainer.scss';
import totalUsers from '../../../src/assests/totalUsers.svg';
import totalReviews from '../../../src/assests/totalreviews.svg';
import newReviews from '../../../src/assests/newReviews.svg';
import RatingContainer from '../ratingContainer/ratingContainer';
import RatingDetails from '../ratingDetails/ratingDetails';
import Chart from '../feedbackchart/chart';
import ReviewComments from '../reviewComments/reviewComments';

export default function FeedbackContainer() {
    return (
        <div className='mainContainer'>
            <p className='title'>Dashboard</p>
            <p className='subtitle'>Here you can view the feedback recieved for the PDD portal</p>
            <div className='ratingContainer'>
                <div className='cardContainer'>
                    <Card className='card'>
                        <CardContent className='cardContent'>
                            <div className='cardContentDetails'>
                                <img src={totalUsers} className='cardIcon' />
                                <div className='marginLeftSmall'>
                                    <p className='cardSubtitle'>Total Users</p>
                                    <p className='cardTitle'>2090</p>
                                </div>

                            </div>
                            <Divider orientation="vertical" light flexItem />
                            <div className='cardContentDetails'>
                                <img src={totalReviews} className='cardIcon' />
                                <div className='marginLeftSmall'>
                                    <p className='cardSubtitle'>Total Reviews</p>
                                    <p className='cardTitle'>2090</p>
                                </div>

                            </div>
                            <Divider orientation="vertical" light flexItem />
                            <div className='cardContentDetails'>
                                <img src={newReviews} className='cardIcon' />
                                <div className='marginLeftSmall'>
                                    <p className='cardSubtitle'>New Reviews</p>
                                    <p className='cardTitle'>2090</p>
                                </div>

                            </div>


                        </CardContent>
                    </Card>
                    <div className='chartContainer'>
                        <div className='chartTitle'>
                            <p className='title'>Performance</p>
                            <p className='subtitle marginBottom'>January 1 2020 - January 7 2021</p>
                        </div>
                        <div className='chartContainerBox'>
                            <Chart></Chart>
                        </div>
                        
                    </div>
                    <ReviewComments></ReviewComments>

                </div>
                <div className='minWidth'>
                    <div>
                        <RatingContainer></RatingContainer>
                        <RatingDetails></RatingDetails>
                    </div>
                </div>
                
            </div>

        </div>
    );
}