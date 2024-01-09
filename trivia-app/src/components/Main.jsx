import React from 'react'
import QuestionCards from './QuestionCards'
import Timer from './Timer'

const Main = ({data, time}) => {
  return (
    <>
      <Timer time={time} />
      <QuestionCards data={data} />
    </>
  )
}

export default Main