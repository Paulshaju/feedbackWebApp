import { IconButton, LinearProgress } from '@mui/material';
import * as React from 'react';
import './ratingDetails.scss';
import { Star } from '@mui/icons-material';
import { feedbackModel, funnelDataModel } from '../model/feedbackModel';
import { ResponsiveFunnel } from '@nivo/funnel'
import EqualizerIcon from '@mui/icons-material/Equalizer';

export default function RatingDetails(this: any, _props: any) {

  let funnelData: funnelDataModel[] = []
  let totalUsers = _props.feedbackList.length
  let progress: { [key: number]: number } = {}
  const [graphOpened, setgraphOpened] = React.useState(false)
  let sum = 0
  _props.feedbackList.forEach((element: feedbackModel) => {
    sum = sum + +element.score
  });
  let averageRating = Math.round(sum / _props.feedbackList.length)
  let RatingStars = () => {
    return (<div className='flex'>{
      Array.from(Array(+averageRating), (e, i) => {
        return (<Star key={i} fontSize='small' className='ratingColor'></Star>)
      })
    }
    </div>)
  }
  let NoRatingStars = () => {
    return (<div className='flex'>{
      Array.from(Array(5 - averageRating), (e, i) => {
        return (<Star key={i} fontSize='small' className='noRatingColor'></Star>)
      })
    }
    </div>)
  }
  for (let i = 5; i > 0; i--) {
    let count = _props.feedbackList.filter((elm: feedbackModel) => +elm.score === i).length
    let eachFunnelData: funnelDataModel = {
      "id": `${i.toString()} Rating`,
      "value": count,
      "label": `${i.toString()} Rating`
    }
    funnelData.push(eachFunnelData)
  }
  for (let i = 1; i <= 5; i++) {
    progress[i] =
      Math.round((_props.feedbackList.filter((elm: feedbackModel) => +elm.score === i).length / _props.feedbackList.length) * 100)
  }
  return (
    <div className='feedbackAnalysis'>
      <div className='container'>
        <div className='outerContainer'>
          <div className='ratingRow'>
            <p className='title'>Customer reviews</p>
            <IconButton aria-label="changeview" onClick={() => {
              setgraphOpened(!graphOpened)
            }}>
              <EqualizerIcon />
            </IconButton>
          </div>
          <div className='ratingContainer'>
            <RatingStars />
            <NoRatingStars />
          </div>

          <p className='noOfRatingsTitle'>{totalUsers} customer ratings</p>
          {
            graphOpened ? <>
              <div className='funnelChart'>
                <div className='funnelChartContainer'>
                  <ResponsiveFunnel
                    data={funnelData}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    valueFormat=">-.4s"
                    colors={{ scheme: 'spectral' }}
                    borderWidth={20}
                    labelColor={{
                      from: 'color',
                      modifiers: [
                        [
                          'darker',
                          3
                        ]
                      ]
                    }}
                    enableBeforeSeparators={false}
                    beforeSeparatorLength={100}
                    beforeSeparatorOffset={20}
                    enableAfterSeparators={false}
                    afterSeparatorLength={100}
                    afterSeparatorOffset={20}
                    currentPartSizeExtension={10}
                    currentBorderWidth={40}
                    motionConfig="wobbly"
                  />
                </div>
              </div>
            </> :
              <>
                <div className='outerContainer'>


                  <div className='progressContainer'>
                    <div>
                      {
                        Object.entries(progress).map(([key, value]) => {
                          return (
                            <div className='progressbarContainer' key={key}>
                              <p className='progressBarText'>{key} Star</p>
                              <LinearProgress variant="determinate" value={value} className='progressBar' />
                              <p className='progressBarText'>{value}%</p>
                            </div>
                          )
                        })
                      }
                    </div>

                  </div>

                </div>
              </>
          }



        </div>
      </div>
    </div>
  );
}

