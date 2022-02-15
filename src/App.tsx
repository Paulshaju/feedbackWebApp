import React from 'react';

import '../src/assests/style.scss'
import NavBar from './components/navbar/navbar';
import FeedbackContainer from './components/feedbackContainer/feedbackContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <FeedbackContainer></FeedbackContainer>
    </div>
  );
}

export default App;
