import * as React from 'react';
import './reviewComments.scss';
import { ContentCut, PostAddSharp, Star } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import thumbsUp from '../../assests/thumbsUp.png'
import thumbsDown from '../../assests/thumbsDown.png'
import neutral from '../../assests/neutral.png'
import { feedbackModel } from '../model/feedbackModel';
import moment from 'moment';
import { useState } from 'react';
import { Pagination } from '../pagination/pagination';
import SortIcon from '@mui/icons-material/Sort';
import { Chip, IconButton, ListItemText, Menu, MenuItem, MenuList } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltIcon from '@mui/icons-material/FilterAlt';



const ReviewComments = (_props: any) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [sortText, setSortText] = useState('Sort By')
    const [postPerPage] = useState(5)
    let editorOpened = false
    let [filters, setFilters] = useState<string[]>([])

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    let currentPosts: feedbackModel[] = _props.feedbackList.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pagenumber: React.SetStateAction<number>) => setCurrentPage(pagenumber)

    //sort menu
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const filterFucntion = (type: string) => {
        switch (type) {
            case 'Responded':
                if (filters.indexOf('Responded') === -1) {
                    setFilters([...filters, 'Responded'])
                }
                setCurrentPage(1)
                currentPosts = _props.feedbackList.filter((elem: feedbackModel) => elem.response.length !== 0)
                handleClose()
                break
            case 'Not Responded':
                if (filters.indexOf('Not Responded') === -1) {
                    setFilters([...filters, 'Not Responded'])
                }
                setCurrentPage(1)
                currentPosts = _props.feedbackList.filter((elem: feedbackModel) => elem.response.length === 0)
                handleClose()
                break
            case 'Postive Reviews':
                if (filters.indexOf('Postive Reviews') === -1) {
                    setFilters([...filters, 'Postive Reviews'])
                }
                setCurrentPage(1)
                currentPosts = _props.feedbackList.filter((elem: feedbackModel) => elem.response.length !== 0)
                handleClose()
                break
            case 'Negative Reviews':
                if (filters.indexOf('Negative Reviews') === -1) {
                    setFilters([...filters, 'Negative Reviews'])
                }
                setCurrentPage(1)
                currentPosts = _props.feedbackList.filter((elem: feedbackModel) => elem.response.length !== 0)
                handleClose()
                break
            case 'Neutral Reviews':
                if (filters.indexOf('Neutral Reviews') === -1) {
                    setFilters([...filters, 'Neutral Reviews'])
                }
                setCurrentPage(1)
                currentPosts = _props.feedbackList.filter((elem: feedbackModel) => elem.response.length !== 0)
                handleClose()
                break
        }
    }
    const sortFunction = (type: string) => {
        switch (type) {
            case 'oldest':
                setSortText('Oldest')
                setCurrentPage(1)
                currentPosts = _props.feedbackList.sort((x: feedbackModel, y: feedbackModel) => Date.parse(new Date(x.created).toString()) - Date.parse(new Date(y.created).toString()))
                handleClose()
                break
            case 'newest':
                setSortText('Newest')
                setCurrentPage(1)
                currentPosts = _props.feedbackList.sort((x: feedbackModel, y: feedbackModel) => Date.parse(new Date(y.created).toString()) - Date.parse(new Date(x.created).toString()))
                handleClose()
                break
            case 'most votes':
                setSortText('most votes')
                setCurrentPage(1)
                currentPosts = _props.feedbackList.sort((x: feedbackModel, y: feedbackModel) => +y.score - +x.score)
                handleClose()
                break
            case 'least votes':
                setSortText('least votes')
                setCurrentPage(1)
                currentPosts = _props.feedbackList.sort((x: feedbackModel, y: feedbackModel) => +x.score - +y.score)
                handleClose()
                break
        }
    }

    //filterButton
    const [filterAnchorEl, setfilterAnchorEl] = React.useState<null | HTMLElement>(null)
    const filterButtonopen = Boolean(filterAnchorEl)
    const FIlterHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setfilterAnchorEl(event.currentTarget);
    };
    const FilterhandleClose = () => {
        setfilterAnchorEl(null);
    };


    //filterChips

    const handleDelete = (name: string) => {
        switch (name) {
            case 'Responded':
                setCurrentPage(1)
                let respondedPosts = currentPosts.filter((elem: feedbackModel) => elem.response.length !== 0)
        }
        setFilters(filters.filter(elem => elem !== name))
    };
    return (

        <div className='reviewContainer'>
            <div className='titleContainer'>
                <p className='title'>Reviews</p>
                <div>
                    <IconButton aria-label="filter" onClick={FIlterHandleClick} className='sortIcon'>
                        <FilterAltIcon fontSize='small' />
                    </IconButton>
                    <Menu
                        id="filter-menu"
                        anchorEl={filterAnchorEl}
                        open={filterButtonopen}
                        onClose={FilterhandleClose}
                        MenuListProps={{
                            'aria-labelledby': 'filter-button',
                        }}
                    >
                        <MenuList>
                            <MenuItem onClick={() => { filterFucntion('Responded') }}>
                                <ListItemText>Responsed</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => { filterFucntion('Not Responded') }}>
                                <ListItemText>Not responsed</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => { filterFucntion('Postive Reviews') }}>
                                <ListItemText>Positive reviews</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => { filterFucntion('Negative Reviews') }}>
                                <ListItemText>Negative reviews</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => { filterFucntion('Neutral Reviews') }}>
                                <ListItemText>Neutral reviews</ListItemText>
                            </MenuItem>
                        </MenuList>

                    </Menu>
                    <Button variant="outlined" onClick={handleClick} className='sortIcon' startIcon={<SortIcon fontSize='small' />} endIcon={<KeyboardArrowDownIcon fontSize='small' />}>
                        {sortText}
                    </Button>
                    <Menu
                        id="sort-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'sort-button',
                        }}
                    >
                        <MenuList>
                            <MenuItem onClick={() => { sortFunction('oldest') }}>
                                <ListItemText>Oldest first</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => { sortFunction('newest') }}>
                                <ListItemText>Newest first</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => { sortFunction('most votes') }}>
                                <ListItemText>Most votes</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => { sortFunction('least votes') }}>
                                <ListItemText>Least votes</ListItemText>
                            </MenuItem>
                        </MenuList>

                    </Menu>

                </div>


            </div>
            <div className='chipsContainer'>
                {
                    filters.map((elem, index) => {
                        return (
                            <Chip key={index} className='filterChips'
                                label={elem}
                                variant="outlined"
                                onDelete={() => {
                                    handleDelete(elem)
                                }}
                            />
                        )
                    })
                }

            </div>

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
                                            <p className='emojiTitle '>Positive Review</p>
                                        </div>
                                    )
                                }
                                else if (_props.negativeFeedbackList.filter((elm: feedbackModel) => elm === elements).length > 0) {
                                    return (
                                        <div className='emojiContianer'>
                                            <img src={thumbsDown} className='emojiPic' />
                                            <p className='emojiTitle '>Negative Review</p>
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
                                    <div className='userDetails'>
                                        <div>
                                            
                                        </div>
                                        <p className='userText'>{elements.firstName} {elements.surName}</p>
                                        {momentStringFormat.length ?
                                            <><span className='dot'></span><p className='userText'>{moment(momentStringFormat, "YYYY-MM-DD").fromNow()}</p></> :
                                            <span className='dot'></span>

                                        }

                                    </div>
                                    <p className='reviewText'>{elements.comments}</p>
                                    <div className='replyContainer'>


                                        <Button variant="outlined" startIcon={<ReplyAllIcon />} className='replyButton'>
                                            Reply
                                        </Button>
                                        {/* <div>
                                            <input type="textarea"
                                                name="textValue"
                                                onChange={this.handleChange}
                                            />
                                        </div> */}
                                    </div>
                                </div >
                            )
                        })
                }
            </div>
            <div>
                <Pagination postPerPage={postPerPage} currentPage={currentPage} totalPosts={_props.feedbackList.length} paginate={paginate}></Pagination>
            </div>
        </div>
    )
}

export default ReviewComments