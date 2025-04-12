import React from 'react'
import ProcessCard from './ProcessCard'
import PathCard from './PathCard'

const Process = () => {
  return (
    <>
          <PathCard heading={'The Process'} img={"https://res.cloudinary.com/da5crwlqh/image/upload/v1718356468/b59301f8f34e50f92919bf07a6f6fe6a_jd2rkd.png"} link={"process"} linkName={'Process'}></PathCard>
          <ProcessCard></ProcessCard>
    
    </>
  )
}

export default Process