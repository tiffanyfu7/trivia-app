import React, { useState } from 'react'
import Category from './Category';
import Answers from './Answers';
import Question from './Question';

const QuestionCards = ({ data }) => {
    const prop = data;
    /*
    data is array of objects
    each objects contains six keys
      type
      difficulty
      category
      question
      incorrect
      corrent
    */
    
    return (
    <>            
        {prop.map((obj) => (
            <div>
              <Question q= {Object.values(obj)[3]} />
              <Category cat={Object.values(obj)[2]} />
              <Answers correct={Object.values(obj)[4]} />
            </div>
          )
        )}
    </>
  )
}

export default QuestionCards