import React from 'react'

const Awards = (props) => {
  return (
    <div className='pt-15 w-[17vw]'>
        <div className='flex justify-center w-[12vw]'>
        <img className='' src={props.img} alt="" />
        </div>
        <h1 className='font-semibold w-[15vw] pt-5'>{props.text}</h1>
    </div>
  )
}

export default Awards