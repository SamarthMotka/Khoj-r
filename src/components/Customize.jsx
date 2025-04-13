import React from 'react'
import PathCard from './PathCard'
import CustomizationForm from './CustomizationForm'

const Customize = () => {
  return (
      <>
        <PathCard linkName={'Customization'} heading={'Customization'} link={'dupatta'} img={'https://res.cloudinary.com/da5crwlqh/image/upload/v1718291883/Khoj/ouo12kekciplgaecuqn5.jpg'}></PathCard>
        <CustomizationForm></CustomizationForm>
      </>
  )
}

export default Customize