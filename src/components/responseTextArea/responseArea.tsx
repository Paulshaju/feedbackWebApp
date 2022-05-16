import { Button } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import profile2 from '../../assests/profile2.jpg';
import './responseArea.scss';
import axios from 'axios';
import profile1 from '../../assests/admin.svg'
import App from '../../App';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import PublishIcon from '@mui/icons-material/Publish';


export const ResponseTextArea = (_props: any) => {

    const [editorOpened, setEditorOpened] = useState(false)
    const submitResponseUrl = 'https://prod-02.uksouth.logic.azure.com:443/workflows/7bf9f9cd37784cdb95066bfcc60a618b/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=LxlRhuAcm1xIkBbpGRaT8OQuLlV1Gr3CV9-fneLB5Kk'
    const [responseValue, setResponseValue] = useState('')
    const [loading, setLoading] = React.useState(false);
    //submitResponse
    const submitResponse = () => {
        setLoading(true)
        const body = {
            "id": _props.feedback.id,
            "itAccount": _props.feedback.itAccount,
            "response": responseValue
        }

        axios.post(submitResponseUrl, body).then((response) => {
            _props.setElementValue(body)
            setResponseValue('')
            setLoading(false)
            setEditorOpened(!editorOpened)
        })
            .catch(error => console.error(`Error: ${error}`))
    }
    //textArea

    const handleChange = (event: { target: { value: any; }; }) => {
        setResponseValue(event.target.value)
    }
    return (
        <div>
            {
                editorOpened ? <>
                    <div className=''>
                        <div className='textareaContainer'>
                            <img src={profile1} className='profilePic' />
                            <textarea className='textarea'
                                placeholder='Add your response here'
                                value={responseValue}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='responseButton'>
                            <Button variant="outlined" size='small' className='cancelButton' onClick={() => {
                                setEditorOpened(!editorOpened)
                            }}>
                                Cancel
                            </Button>
                            <LoadingButton
                                onClick={() => {
                                    submitResponse()
                                }}
                                endIcon={<PublishIcon fontSize='small' />}
                                loading={loading}
                                loadingPosition="end"
                                variant="contained"
                                size='small' className='submitButton'
                            >
                                submit
                            </LoadingButton>
                        </div>
                    </div>
                </> : <div>{
                    (_props.feedback.response.length === 0 && responseValue.length === 0) &&
                    <div className='replyButtonContainer'>
                        <Button variant="outlined" startIcon={<ReplyAllIcon />} size='small' onClick={() => {
                            setEditorOpened(!editorOpened)
                        }} className='replyButton'>
                            Reply
                        </Button>
                    </div>

                }


                </div>
            }
        </div>
    )

}