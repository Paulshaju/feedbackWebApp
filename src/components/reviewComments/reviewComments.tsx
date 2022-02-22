import * as React from 'react';
import './reviewComments.scss';
import { PostAddSharp, Star } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import thumbsUp from '../../assests/thumbsUp.png'
import thumbsDown from '../../assests/thumbsDown.png'
import neutral from '../../assests/neutral.png'
import { feedbackModel } from '../model/feedbackModel';
import moment from 'moment';
import { useState } from 'react';
import { Pagination } from '../pagination/pagination';



const ReviewComments = (_props: any) => {
    const [currentPage,setCurrentPage] = useState(1)
    const [postPerPage,setPostPerpage] = useState(5)

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts:feedbackModel[] = _props.feedbackList.slice(indexOfFirstPost,indexOfLastPost)
    console.log(postPerPage)
    console.log(currentPosts)
    return (

        <div className='reviewContainer'>
            <p className='title'>Reviews</p>
            <div>
                {
                    currentPosts.filter(elements => elements.comments && elements.comments !== ' ')
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
                                        return (<Star key={i} fontSize='small' className='ratingColor'></Star>)
                                    })
                                }
                                </div>)
                            }
                            let NoRatingStars = () => {
                                return (<div>{
                                    Array.from(Array(5 - +elements.score), (e, i) => {
                                        return (<Star key={i} fontSize='small' className='noRatingColor'></Star>)
                                    })
                                }
                                </div>)
                            }
                            let EmojiReaction = () => {

                                if (_props.positiveFeedbackList.filter((elm: feedbackModel) => elm === elements).length > 0) {
                                    return (
                                        <div className='emojiContianer'>
                                            <img src={thumbsUp} className='emojiPic' />
                                            <p className='emojiTitle'>Positive Review</p>
                                        </div>
                                    )
                                }
                                else if (_props.negativeFeedbackList.filter((elm: feedbackModel) => elm === elements).length > 0) {
                                    return (
                                        <div className='emojiContianer'>
                                            <img src={thumbsDown} className='emojiPic' />
                                            <p className='emojiTitle'>Negative Review</p>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className='emojiContianer'>
                                            <img src={neutral} className='emojiPic' />
                                            <p className='emojiTitle'>Neutral Review</p>
                                        </div>
                                    )
                                }
                            }
                            return (
                                <div className='reviewTextContainer' key={index} >
                                    <div className='emojiRatingContainer'>
                                        <div className='ratingRow'>
                                            <RatingStars />
                                            <NoRatingStars />
                                        </div>
                                        <EmojiReaction />
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
            {/* <div>
                <Pagination postPerPage={postPerPage} totalPosts={_props.feedbackList.length}></Pagination>
            </div> */}
        </div>
    )
}

export default ReviewComments