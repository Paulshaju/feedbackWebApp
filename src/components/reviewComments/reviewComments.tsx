import * as React from 'react';
import './reviewComments.scss';
import { ConstructionOutlined, ContentCut, PostAddSharp, Star } from '@mui/icons-material';
import Button from '@mui/material/Button';
import thumbsUp from '../../assests/thumbsUp.png'
import thumbsDown from '../../assests/thumbsDown.png'
import profile1 from '../../assests/admin.svg'
import profilePic from '../../../src/assests/profilePic.svg';
import neutral from '../../assests/neutral.png'
import { feedbackModel } from '../model/feedbackModel';
import Tooltip from '@mui/material/Tooltip';
import moment from 'moment';
import { useState } from 'react';
import { Pagination } from '../pagination/pagination';
import SortIcon from '@mui/icons-material/Sort';
import { Chip, Divider, IconButton, ListItemText, Menu, MenuItem, MenuList } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ResponseTextArea } from '../responseTextArea/responseArea';
import RefreshIcon from '@mui/icons-material/Refresh';
import FilterAltIcon from '@mui/icons-material/FilterAlt';



const ReviewComments = (_props: any) => {
    let totalPosts = _props.feedbackList
    const [currentPage, setCurrentPage] = useState(1)
    const [sortText, setSortText] = useState('Sort By')
    const [postPerPage] = useState(5)
    const [editorOpened, setEditorOpened] = useState(false)


    let [filters, setFilters] = useState<string[]>([])
    let currentpageNumber = 1
    let indexOfLastPost = currentpageNumber * postPerPage
    let indexOfFirstPost = indexOfLastPost - postPerPage
    let reload = true

    const setElementValue = (body: any) => {
        reload = !reload
        _props.setResponseValue(reload)

    }
    React.useEffect(() => {
        currentpageNumber = 1
        setCurrentPage(1)
        indexOfLastPost = currentpageNumber * postPerPage
        indexOfFirstPost = indexOfLastPost - postPerPage
        totalPosts = _props.feedbackList
        setCurrentPosts(totalPosts.slice(indexOfFirstPost, indexOfLastPost))
    }, [_props.feedbackList])
    const [currentPosts, setCurrentPosts] = useState(totalPosts.slice(indexOfFirstPost, indexOfLastPost))
    const paginate = (pagenumber: number) => {
        setCurrentPage(pagenumber)
        currentpageNumber = pagenumber
        indexOfLastPost = currentpageNumber * postPerPage
        indexOfFirstPost = indexOfLastPost - postPerPage
        setCurrentPosts(totalPosts.slice(indexOfFirstPost, indexOfLastPost))
    }

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
                paginate(1)
                setCurrentPosts(totalPosts.filter((elem: feedbackModel) => elem.response.length !== 0))
                let filteredPost: feedbackModel[] = []
                totalPosts.filter((elem: feedbackModel) => elem.response.length !== 0).forEach((_element: feedbackModel) => {


                });
                FilterhandleClose()
                break
            case 'Not Responded':
                if (filters.indexOf('Not Responded') === -1) {
                    setFilters([...filters, 'Not Responded'])
                }
                paginate(1)

                FilterhandleClose()
                break
            case 'Postive Reviews':
                if (filters.indexOf('Postive Reviews') === -1) {
                    setFilters([...filters, 'Postive Reviews'])
                }
                setCurrentPage(1)
                // setCurrentPosts(_props.feedbackList.filter((elem: feedbackModel) => elem.response.length === 0))
                FilterhandleClose()
                break
            case 'Negative Reviews':
                if (filters.indexOf('Negative Reviews') === -1) {
                    setFilters([...filters, 'Negative Reviews'])
                }
                setCurrentPage(1)
                // currentPosts = _props.feedbackList.filter((elem: feedbackModel) => elem.response.length !== 0)
                FilterhandleClose()
                break
            case 'Neutral Reviews':
                if (filters.indexOf('Neutral Reviews') === -1) {
                    setFilters([...filters, 'Neutral Reviews'])
                }
                setCurrentPage(1)
                // currentPosts = _props.feedbackList.filter((elem: feedbackModel) => elem.response.length !== 0)
                FilterhandleClose()
                break
        }
    }
    const sortFunction = (type: string) => {
        switch (type) {
            case 'oldest':
                setSortText('Oldest')
                setCurrentPosts(totalPosts.sort((x: feedbackModel, y: feedbackModel) => Date.parse(new Date(x.created).toString()) - Date.parse(new Date(y.created).toString())))
                paginate(1)
                handleClose()
                break
            case 'newest':
                setSortText('Latest')

                setCurrentPosts(totalPosts.sort((x: feedbackModel, y: feedbackModel) => Date.parse(new Date(y.created).toString()) - Date.parse(new Date(x.created).toString())))
                paginate(1)
                handleClose()
                break
            case 'most votes':
                setSortText('most votes')

                setCurrentPosts(totalPosts.sort((x: feedbackModel, y: feedbackModel) => +y.score - +x.score))
                paginate(1)
                handleClose()
                break
            case 'least votes':
                setSortText('least votes')
                setCurrentPosts(totalPosts.sort((x: feedbackModel, y: feedbackModel) => +x.score - +y.score))
                paginate(1)
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
        let responsedArray: feedbackModel[] = []
        switch (name) {
            case 'Responded':
                setCurrentPage(1)
                responsedArray = currentPosts.filter((elem: feedbackModel) => elem.response.length !== 0)
                // setCurrentPosts(currentPosts.filter((item:feedbackModel) => {
                //     return !responsedArray.includes(item)
                // }))
                break
            case 'Not Responded':
                setCurrentPage(1)
                responsedArray = currentPosts.filter((elem: feedbackModel) => elem.response.length === 0)
            // setCurrentPosts(currentPosts.filter((item:feedbackModel) => {
            //     return !responsedArray.includes(item)
            // }))
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
                                <ListItemText>Latest first</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => { sortFunction('most votes') }}>
                                <ListItemText>Most votes</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => { sortFunction('least votes') }}>
                                <ListItemText>Least votes</ListItemText>
                            </MenuItem>
                        </MenuList>

                    </Menu>
                    <IconButton aria-label="filter" onClick={setElementValue} className='sortIcon'>
                        <RefreshIcon fontSize='small' />
                    </IconButton>


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
                    currentPosts.filter((elements: feedbackModel) => elements.comments && elements.comments !== ' ')
                        .map((elements: feedbackModel, index: any) => {
                            let momentStringFormat = ''
                            if (elements.created) {
                                let dateObj = new Date(elements.created)
                                let momentDateObj = moment(dateObj)
                                momentStringFormat = momentDateObj.format('YYYY-MM-DD')
                            }
                            let RatingStars = () => {
                                return (<div>{
                                    Array.from(Array(+elements.score), (_e, i) => {
                                        return (<Star key={i} fontSize='small' className='ratingColor'></Star>)
                                    })
                                }
                                </div>)
                            }
                            let NoRatingStars = () => {
                                return (<div>{
                                    Array.from(Array(5 - +elements.score), (_e, i) => {
                                        return (<Star key={i} fontSize='small' className='noRatingColor'></Star>)
                                    })
                                }
                                </div>)
                            }
                            let EmojiReaction = () => {

                                if (_props.positiveFeedbackList.filter((elm: feedbackModel) => elm === elements).length > 0) {
                                    return (
                                        <Tooltip title="Positive Review">
                                            <div className='emojiContianer'>
                                                <img src={thumbsUp} className='emojiPic' />

                                            </div>
                                        </Tooltip>

                                    )
                                }
                                else if (_props.negativeFeedbackList.filter((elm: feedbackModel) => elm === elements).length > 0) {
                                    return (
                                        <Tooltip title="Negative Review">
                                            <div className='emojiContianer'>
                                                <img src={thumbsDown} className='emojiPic' />

                                            </div>

                                        </Tooltip>

                                    )
                                }
                                else {
                                    return (
                                        <Tooltip title="Neutral Review">
                                            <div className='emojiContianer'>
                                                <img src={neutral} className='emojiPic' />

                                            </div>

                                        </Tooltip>

                                    )
                                }
                            }
                            return (
                                <div className='reviewTextContainer' key={index} >
                                    <img src={profilePic} className='profilePic' />
                                    <div className='commentContainer'>
                                        <div className='emojiRatingContainer'>

                                            <div>

                                                <div className='userDetails'>
                                                    <p className='userText'>{elements.firstName} {elements.surName}</p>
                                                    <EmojiReaction />

                                                </div>
                                                {momentStringFormat.length ?
                                                    <><p className='timeText'>{moment(elements.created).fromNow()}</p></> :
                                                    <p></p>

                                                }
                                            </div>
                                            <div className='ratingRow'>
                                                <RatingStars />
                                                <NoRatingStars />
                                            </div>

                                        </div>


                                        <div className='replyContainer'>
                                            <p className='reviewText'>{elements.comments}</p>
                                        </div>
                                        <div className='phrasesContainer'>
                                            <p className='cardSubtitle'>Key Phrases:</p>
                                            {
                                                elements.keyPhrases.map((elem: string, index: any) => {
                                                   
                                                    if (elem.length !== 0) {
                                                        return (
                                                            <Chip key={index} className='keyPhrasesChips'
                                                                label={elem}
                                                                size='small'
                                                                
                                                            />

                                                        )

                                                    }


                                                })

                                            }

                                        </div>
                                        <ResponseTextArea setElementValue={setElementValue} feedback={elements}></ResponseTextArea>
                                        {
                                            (elements.response) && <>
                                                <Divider />
                                                <div className='responseContainer'>
                                                    <img src={profile1} className='profilePic' />
                                                    <div className=''>
                                                        <div className='emojiRatingContainer'>

                                                            <div>

                                                                <div className='userDetails'>
                                                                    <p className='userText'>PDD Admin</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <p className='reviewText'>{elements.response}</p>
                                                    </div>
                                                </div>
                                            </>


                                        }


                                    </div>

                                </div >
                            )
                        })
                }
            </div>
            <div>
                <Pagination postPerPage={postPerPage} currentPage={currentPage} totalPosts={totalPosts.length} paginate={paginate}></Pagination>
            </div>
        </div>
    )
}

export default ReviewComments