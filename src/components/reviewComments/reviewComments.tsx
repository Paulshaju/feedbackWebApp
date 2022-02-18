import * as React from 'react';
import './reviewComments.scss';
import { Star } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import thumbsUp from '../../assests/thumbsUp.png'
import thumbsDown from '../../assests/thumbsDown.png'
import { feedbackModel } from '../model/feedbackModel';
import moment from 'moment';



const ReviewComments = (_props: any) => {

    let feedbackList: feedbackModel[] = _props.feedbackList

    return (

        <div className='reviewContainer'>
            <p className='title'>Reviews</p>
            <div>
                {
                    feedbackList.filter(elements => elements.comments && elements.comments !== ' ')
                        .map((elements, index) => {
                            let momentStringFormat = ''
                            if (elements.created) {
                                let dateObj = new Date(elements.created)
                                let momentDateObj = moment(dateObj)
                                momentStringFormat = momentDateObj.format('YYYY-MM-DD')
                            }
                            let RatingStars = () => {
                                return (<div>{
                                    Array.from(Array(+elements.score), (e, i) => {
                                        return (<Star fontSize='small' className='ratingColor'></Star>)
                                    })
                                }
                                </div>)
                            }
                            let NoRatingStars = () => {
                                return (<div>{
                                    Array.from(Array(5 - +elements.score), (e, i) => {
                                        return (<Star fontSize='small' className='noRatingColor'></Star>)
                                    })
                                }
                                </div>)
                            }
                            return (
                                <div className='reviewTextContainer' key={index} >
                                    <div className='emojiRatingContainer'>
                                        <div className='ratingRow'>
                                            <RatingStars />
                                            <NoRatingStars />
                                        </div>
                                        <div className='emojiContianer'>
                                            <img src={thumbsUp} className='emojiPic' />
                                            <p className='emojiTitle'>Positive Review</p>
                                        </div>
                                    </div>

                                    <p className='reviewText'>{elements.comments}</p>
                                    <div className='replyContainer'>
                                        <div className='userDetails'>
                                            <p className='userText'>by {elements.firstName} {elements.surName}</p>
                                            {momentStringFormat.length ?
                                                <><span className='dot'></span><p className='userText'>{moment(momentStringFormat, "YYYY-MM-DD").fromNow()}</p></> :
                                                <span className='dot'></span>

                                            }



                                        </div>

                                        <Button variant="outlined" startIcon={<ReplyAllIcon />} className='replyButton'>
                                            Reply
                                        </Button>
                                    </div>
                                </div >
                            )
                        })
                }
            </div>
        </div>
    )
}

export default ReviewComments