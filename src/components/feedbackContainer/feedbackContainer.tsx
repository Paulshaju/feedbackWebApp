import { Card, CardContent, Divider } from '@mui/material';
import * as React from 'react';
import './feedbackContainer.scss';
import '../../assests/style.scss'
import totalUsers from '../../../src/assests/totalUsers.svg';
import totalReviews from '../../../src/assests/totalreviews.svg';
import newReviews from '../../../src/assests/newReviews.svg';
import RatingContainer from '../ratingContainer/ratingContainer';
import RatingDetails from '../ratingDetails/ratingDetails';
import Chart from '../feedbackchart/chart';
import ReviewComments from '../reviewComments/reviewComments';
import { feedbackModel } from '../model/feedbackModel'

export default function FeedbackContainer(_props: any) {

    let feedbackList: feedbackModel[] = _props.feedbackList
    let newFeedbackList: feedbackModel[] = []
    let positiveFeedbackList: feedbackModel[] = []
    let negativeFeedbackList: feedbackModel[] = []
    let neutralFeedbackList: feedbackModel[] = []

    feedbackList.forEach((element: feedbackModel) => {

        if (element.created) {
            const currentDate = new Date()
            const created = new Date(element.created)
            let timeInMilisec: number = currentDate.getTime() - created.getTime();
            let daysBetweenDates: number = Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24));
            if (daysBetweenDates <= 1) {
                newFeedbackList.push(element)
            }
        }
        let maxvalue = Math.max(element.cogPositive, element.cogNegative, element.cogNeutral)
        if (maxvalue === 0) {
            neutralFeedbackList.push(element)
        }
        else {
            if (maxvalue === element.cogPositive) {
                positiveFeedbackList.push(element)
            } else if (maxvalue === element.cogNegative) {
                negativeFeedbackList.push(element)
            } else if (maxvalue === element.cogNeutral) {
                neutralFeedbackList.push(element)
            }
        }

    })
    return (
        <div className='mainContainer fadeindownAnimation'>
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
                                    <p className='cardTitle'>{feedbackList.length}</p>
                                </div>

                            </div>
                            <Divider orientation="vertical" light flexItem />
                            <div className='cardContentDetails'>
                                <img src={totalReviews} className='cardIcon' />
                                <div className='marginLeftSmall'>
                                    <p className='cardSubtitle'>Total Reviews</p>
                                    <p className='cardTitle'>{feedbackList.length}</p>
                                </div>

                            </div>
                            <Divider orientation="vertical" light flexItem />
                            <div className='cardContentDetails'>
                                <img src={newReviews} className='cardIcon' />
                                <div className='marginLeftSmall'>
                                    <p className='cardSubtitle'>New Reviews</p>
                                    <p className='cardTitle'>{newFeedbackList.length}</p>
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
                    <ReviewComments
                        feedbackList={feedbackList}
                        positiveFeedbackList={positiveFeedbackList}
                        negativeFeedbackList={negativeFeedbackList}
                        neutralFeedbackList={neutralFeedbackList}
                    ></ReviewComments>
                </div>
                <div className='minWidth'>
                    <div>
                        <RatingContainer
                            feedbackList={feedbackList}
                            positiveFeedbackList={positiveFeedbackList}
                            negativeFeedbackList={negativeFeedbackList}
                            neutralFeedbackList={neutralFeedbackList}
                            ></RatingContainer>
                        <RatingDetails
                            feedbackList={feedbackList}
                            positiveFeedbackList={positiveFeedbackList}
                            negativeFeedbackList={negativeFeedbackList}
                            neutralFeedbackList={neutralFeedbackList}
                        ></RatingDetails>
                    </div>
                </div>

            </div>

        </div>
    );
}