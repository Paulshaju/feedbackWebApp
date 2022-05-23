import React, { useEffect, useState } from 'react';

import '../src/assests/style.scss'
import NavBar from './components/navbar/navbar';
import FeedbackContainer from './components/feedbackContainer/feedbackContainer';
import axios from 'axios';
import Loading from './components/loading/loading';
import { feedbackModel } from './components/model/feedbackModel';


function App() {
  const [feedbackList, setFeedbackList] = useState([])
  const feedbackSelectionUrl = 'https://azfa-selectionfeedback.azurewebsites.net/api/selectionFunction?'
  const [reload,setReload] = useState(false)
  const setResponseValue = (response:any) => {
    setReload(!reload)
  }

  useEffect(() => {
    getFeedback();
  }, [reload]);

  const getFeedback = () => {
    setReload(reload)
    axios.get(feedbackSelectionUrl).then((response) => {
      let feedbacks = response.data
      setFeedbackList(feedbacks)
    })
      .catch(error => console.error(`Error: ${error}`))
  }
  return feedbackList.length == 0 ? (<div className="App">
    <Loading></Loading>
  </div>) : (
    <div className="App">
      <NavBar></NavBar>
      <FeedbackContainer setResponseValue={setResponseValue} feedbackList={feedbackList}></FeedbackContainer>
    </div>
  );
}

export default App;
