import moment from 'moment';
import * as React from 'react';
import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { chartDataModel, feedbackModel } from '../model/feedbackModel';
import './chart.scss'
import DateRangePicker, { DateRange } from '@mui/lab';
import { ResponsiveAreaBump } from '@nivo/bump'


export default function Chart(_props: any) {
    

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }
    let chartData: chartDataModel[] = []
    for (let i = _props.dateDifference; i >= 0; i--) {

        let date = new Date()
        date.setDate(date.getDate() - i)
        if (_props.feedbackList.filter((elm: feedbackModel) => new Date(new Date(elm.created).setHours(0, 0, 0, 0)).toString() === new Date(new Date(date).setHours(0, 0, 0, 0)).toString()).length !== 0) {
            var positiveCount: number, negativeCount: number, neutralCount: number
            positiveCount = negativeCount = neutralCount = 0
            var dateCreated: Date = new Date()
            _props.feedbackList.filter((elm: feedbackModel) => new Date(new Date(elm.created).setHours(0, 0, 0, 0)).toString() === new Date(new Date(date).setHours(0, 0, 0, 0)).toString()).forEach((elem: feedbackModel) => {
                dateCreated = elem.created
                if (_props.positiveFeedbackList.includes(elem)) {
                    positiveCount = positiveCount + 1
                }
                else if (_props.negativeFeedbackList.includes(elem)) {
                    negativeCount = negativeCount + 1
                }
                else if (_props.neutralFeedbackList.includes(elem)) {
                    neutralCount = neutralCount + 1
                }

            })
            let data: chartDataModel = {
                name: moment(new Date(dateCreated)).format("MMM Do").toString(),
                positive: positiveCount,
                negative: negativeCount,
                neutral: neutralCount
            }
            chartData.push(data)
        }
        else {

            let data: chartDataModel = {
                name: moment(date).format("MMM Do").toString(),
                positive: 0,
                negative: 0,
                neutral: 0
            }
            chartData.push(data)
        }
    }

    return (

        <div className='barChart'>

            <div className='barChartContainer'>
                <ResponsiveContainer>
                    <BarChart data={chartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis hide />
                        <CartesianGrid strokeDasharray="1 1" />
                        <Tooltip />
                        <Tooltip />
                        <Bar dataKey="positive" fill="#1A1D7D" radius={[10, 10, 0, 0]} />
                        <Bar dataKey="negative" fill="#FF220C" radius={[10, 10, 0, 0]} />
                        <Bar dataKey="neutral" fill="#38B2F9" radius={[10, 10, 0, 0]} />
                    </BarChart>

                </ResponsiveContainer>
                

            </div>

        </div>




    );
}