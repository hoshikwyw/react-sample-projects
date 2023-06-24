import React from 'react'

const Title = ({text,classes}) => {
  return (
    <div className=' text-center {!classes ? "text-black" : classes}'>
      {!text ? "Title" : text}
    </div>
  )
}

export default Title
