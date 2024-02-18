import React from 'react'

export default function AnalyticCard(props) {
  return (
    <div className='flex justify-start p-8 mx-14 bg-green-200 rounded-lg shadow-2xl '>
      <div className=' justify-center'>
        <p className='font-bold text-3xl text-green-900'>{props.title}</p>
        {props.category1 && (
          <i className='fa fa-chart-line fa-3x icon-color ml-3' />
        )}
        {props.category2 && (
          <i className='fa fa-star fa-3x icon-color ml-3'></i>
        )}
        {props.category3 && (
          <i className='fa fa-angles-down fa-3x icon-color ml-1'></i>
        )}
      </div>
      <div className='flex flex-col justify-left m-3'>
        {props.products.map((item, key) => (
          <p className='font-bold text-2xl text-green-700'>{item}</p>
        ))}
      </div>
    </div>
  )
}
