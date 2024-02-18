'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { CardBody, CardContainer, CardItem } from '@/components/3d-card'
import './Card.css'
import InfoCard from './InfoCard'

export function ThreeDCardDemo() {
  useEffect(() => {
    getData()
  }, [])
  const [products, setProducts] = useState([])
  const getData = async () => {
    let result = await fetch(`http://localhost:5000/getproduct`) //just because we are fething we dont need to write body etc
    result = await result.json()
    setProducts(result)
    console.warn(result)
  }

  const [toggleInfo, setToggleInfo] = useState(false)

  return (
    <div className='flex w-[100%] flex-wrap justify-center'>
      {products.map((item, index) => (
        <CardContainer className='inter-var'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border m-7 mb-0 card-item'>
            <div className='flex justify-between'>
              <div>
                <CardItem
                  translateZ='50'
                  className='text-xl font-bold text-neutral-600 dark:text-white'
                >
                  {item.name}
                </CardItem>
                <CardItem
                  as='p'
                  translateZ='60'
                  className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
                >
                  {item.description}
                </CardItem>
              </div>
              <div
                className='text-3xl cursor-pointer'
                onClick={() => {
                  toggleInfo ? setToggleInfo(false) : setToggleInfo(true)
                }}
              >
                i
              </div>
            </div>
            {toggleInfo && <InfoCard item={item} />}
            <CardItem
              translateZ='100'
              className='w-full mt-6 flex justify-center'
            >
              <img
                src={item.img}
                height='1000'
                width='1000'
                className='h-60 w-60 object-fit rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-between items-center mt-20'>
              <CardItem
                translateZ={20}
                as='button'
                className='px-4 py-2 rounded-xl text-xs font-normal dark:text-black'
              >
                {item.category}
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold text-2xl'
              >
                <img
                  src='https://icons8.com/icon/9671/shopping-cart'
                  alt=''
                  className='text-white'
                />
                {item.price}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  )
}
