import { useNavigate } from 'react-router'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <div className='navbar bg-white py-2'>
        {' '}
        {/* Adjusted the padding */}
        <div className='flex-1'>
          <a className='btn btn-ghost text-lg'>Emart</a>{' '}
          {/* Adjusted the font size */}
        </div>
        <div className='flex-1'>
          <a
            className='btn btn-ghost text-lg'
            onClick={() => {
              navigate('/newProduct')
            }}
          >
            Add Product
          </a>{' '}
          {/* Adjusted the font size */}
        </div>
        <div className='flex-space-x-8 right-bar'>
          {/* Search bar */}
          <div className='form-control'>
            <input
              type='text'
              placeholder='Search'
              className='input input-bordered w-24 md:w-auto text-black bg-white'
            />
          </div>

          {/* Notification button */}
          <button className='btn btn-ghost btn-circle ml-6'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
              <span className='badge badge-xs badge-primary indicator-item'></span>
            </div>
          </button>

          {/* Cart button */}
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle ml-6'
          >
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-sm indicator-item'>8</span>
            </div>
          </div>

          {/* Profile button */}
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar ml-6'
            >
              <div className='w-10 rounded-full'>
                <img
                  alt='Tailwind CSS Navbar component'
                  src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white'
            >
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
