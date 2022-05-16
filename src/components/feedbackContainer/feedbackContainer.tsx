import { Box, Card, CardContent, Divider, IconButton, TextField } from '@mui/material';
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
import moment from 'moment';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DateRange, DateRangePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


export default function FeedbackContainer(_props: any) {

    let feedbackList: feedbackModel[] = _props.feedbackList
    let newFeedbackList: feedbackModel[] = []
    let positiveFeedbackList: feedbackModel[] = []
    let negativeFeedbackList: feedbackModel[] = []
    let neutralFeedbackList: feedbackModel[] = []
    let date = new Date()
    let start = new Date()
    let end = new Date()
    const [dateDifference, setDifference] = React.useState(18)
    const [currentDate, setCurrentDate] = React.useState(moment().format("MMMM Do YY"))
    const [startDate, setStartDate] = React.useState(moment(new Date().setDate(date.getDate() - 18)).format("MMMM Do YY"))
    const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
    const [calenderOpen, setCalenderOpen] = React.useState(false)
    const [response,setResponse] = React.useState(false)

    const setResponseValue = (response: any) => {
        _props.setResponseValue(response)
        // setResponse(true)
    }
 
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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                                <Divider className='divider' orientation="vertical" light flexItem />
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
                                <DateRangePicker
                                    value={value}
                                    open={calenderOpen}
                                    onClose={() => {
                                        var Difference_In_Time = new Date(end).getTime() - new Date(start).getTime();
                                        setDifference(Difference_In_Time / (1000 * 3600 * 24))
                                        setCalenderOpen(false)
                                    }}
                                    onChange={(newValue) => {
                                        start = newValue[0] as any
                                        end = newValue[1] as any
                                        setStartDate(moment(newValue[0]).format("MMMM Do YY"))
                                        setCurrentDate(moment(newValue[1]).format("MMMM Do YY"))

                                    }}
                                    renderInput={(startProps, endProps) => (
                                        <React.Fragment>
                                            <div className='calenderPicker'>
                                                <p className='subtitle marginBottom'>{startDate} - {currentDate}</p>
                                                <IconButton aria-label="dateranger" onClick={(e) => setCalenderOpen(true)}>
                                                    <DateRangeIcon fontSize='small' className='calenderIcon' />
                                                </IconButton>

                                            </div>

                                        </React.Fragment>
                                    )} />

                            </div>
                            <div className='chartContainerBox'>
                                <Chart
                                    feedbackList={feedbackList}
                                    positiveFeedbackList={positiveFeedbackList}
                                    negativeFeedbackList={negativeFeedbackList}
                                    neutralFeedbackList={neutralFeedbackList}
                                    dateDifference={dateDifference}
                                ></Chart>
                            </div>

                        </div>
                        <ReviewComments
                            feedbackList={feedbackList}
                            positiveFeedbackList={positiveFeedbackList}
                            negativeFeedbackList={negativeFeedbackList}
                            neutralFeedbackList={neutralFeedbackList}
                            setResponseValue={setResponseValue}
                        ></ReviewComments>
                    </div>
                    <div className='analysisContainer'>
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

        </LocalizationProvider>

    );
}