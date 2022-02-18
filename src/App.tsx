import React, { useEffect, useState } from 'react';

import '../src/assests/style.scss'
import NavBar from './components/navbar/navbar';
import FeedbackContainer from './components/feedbackContainer/feedbackContainer';
import axios from 'axios';
import Loading from './components/loading/loading';


function App() {
  const [feedbackList, setFeedbackList] = useState([])
  const feedbackSelectionUrl = 'https://azfa-selectionfeedback.azurewebsites.net/api/selectionFunction?'


  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios.get(feedbackSelectionUrl).then((response) => {
      const feedbacks = response.data
      setFeedbackList(feedbacks)
    })
      .catch(error => console.error(`Error: ${error}`))
  }
  // console.log(feedbackList)
  return feedbackList.length == 0 ? (<div className="App">
    <Loading></Loading>
  </div>) : (
    <div className="App">
      <NavBar></NavBar>
      <FeedbackContainer feedbackList={feedbackList}></FeedbackContainer>
    </div>
  );
}

export default App;
