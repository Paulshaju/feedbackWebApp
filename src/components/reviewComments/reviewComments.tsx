import * as React from 'react';
import './reviewComments.scss';
import { Star } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import thumbsUp from '../../assests/thumbsUp.png'
import thumbsDown from '../../assests/thumbsDown.png'



const ReviewComments = () => {
    return (
        <div className='reviewContainer'>
            <p className='title'>Reviews</p>
            <div>
                <div className='reviewTextContainer'>
                    <div className='emojiRatingContainer'>
                        <div>
                            <Star fontSize='small' className='ratingColor'></Star>
                            <Star fontSize='small' className='ratingColor'></Star>
                            <Star fontSize='small' className='ratingColor'></Star>
                            <Star fontSize='small' className='ratingColor'></Star>
                            <Star fontSize='small' className='noRatingColor'></Star>
                        </div>
                        <div className='emojiContianer'>
                            <img src={thumbsUp} className='emojiPic' />
                            <p className='emojiTitle'>Positive Review</p>
                        </div>
                    </div>

                    <p className='reviewText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className='replyContainer'>
                        <div className='userDetails'>
                            <p className='userText'>by paul shaju</p>
                            <span className='dot'></span>
                            <p className='userText'>2 hours ago</p>
                        </div>

                        <Button variant="outlined" startIcon={<ReplyAllIcon />} className='replyButton'>
                            Reply
                        </Button>
                    </div>
                </div>
                <div className='reviewTextContainer'>
                    <div className='emojiRatingContainer'>
                        <div>
                            <Star fontSize='small' className='ratingColor'></Star>
                            <Star fontSize='small' className='ratingColor'></Star>
                            <Star fontSize='small' className='ratingColor'></Star>
                            <Star fontSize='small' className='ratingColor'></Star>
                            <Star fontSize='small' className='noRatingColor'></Star>
                        </div>
                        <div className='emojiContianer'>
                            <img src={thumbsDown} className='emojiPic' />
                            <p className='emojiTitle'>Negative Review</p>
                        </div>
                    </div>

                    <p className='reviewText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className='replyContainer'>
                        <div className='userDetails'>
                            <p className='userText'>by paul shaju</p>
                            <span className='dot'></span>
                            <p className='userText'>2 hours ago</p>
                        </div>

                        <Button variant="outlined" startIcon={<ReplyAllIcon />} className='replyButton'>
                            Reply
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewComments