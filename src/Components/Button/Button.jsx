import React from 'react'

const Button = (props) => {

  const radiusMap = {
  '3xl': 'rounded-3xl',
  '4xl': 'rounded-4xl',
};

  return (
    <div><button className={`text-white border border-black ${radiusMap[props.radius]} p-4 bg-amber-600  hover:cursor-pointer hover:bg-white hover:text-black`}>{props.text}</button></div>
  )
}

export default Button