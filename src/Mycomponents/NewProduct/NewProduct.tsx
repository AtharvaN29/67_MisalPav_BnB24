import { useState } from 'react'

export default function NewProduct() {
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [rawMaterial, setRawMaterial] = useState('')
  const [manufacturing, setManufacturinig] = useState('')
  const [usp, setUsp] = useState('')

  return (
    <div className='mt-5'>
      <form className='max-w-sm mx-auto'>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Name
          </label>
          <input
            type='text'
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
            id='email'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Product Name'
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Company Name
          </label>
          <input
            type='text'
            onChange={(e) => {
              setCompanyName(e.target.value)
            }}
            value={companyName}
            id='email'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Company Name'
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            category
          </label>
          <input
            type='text'
            onChange={(e) => {
              setCategory(e.target.value)
            }}
            value={category}
            id='email'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Category Name'
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Description
          </label>
          <input
            type='text'
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            value={description}
            id='email'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Product Name'
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Raw Materials
          </label>
          <input
            type='text'
            onChange={(e) => {
              setRawMaterial(e.target.value)
            }}
            value={rawMaterial}
            id='email'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Product Name'
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Manufacturing Processes
          </label>
          <input
            type='text'
            onChange={(e) => {
              setManufacturinig(e.target.value)
            }}
            value={manufacturing}
            id='email'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Product Name'
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            USP
          </label>
          <input
            type='text'
            onChange={(e) => {
              setUsp(e.target.value)
            }}
            value={usp}
            id='email'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Product Name'
            required
          />
        </div>

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center'
        >
          Register new account
        </button>
      </form>
    </div>
  )
}
