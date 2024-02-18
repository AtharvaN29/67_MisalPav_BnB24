import { useNavigate } from 'react-router'

export default function Navbar(props) {
  const Usertype = props.usertype
  const navigate = useNavigate()
  return (
<>
      <div className="navbar bg-white py-2"> {/* Adjusted the padding */}
        <div className="flex-1">
        <svg width="100" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <a className="btn btn-ghost text-lg">ApnaBazaar</a> {/* Adjusted the font size */}
        </div>
        <div className="flex-space-x-8 right-bar mr-5">
        <div className='navbar bg-white py-2'>
        {' '}
        {/* Adjusted the padding */}
        <div className='flex-1'>
          <a className='btn btn-ghost text-lg'>Emart</a>{' '}
          {/* Adjusted the font size */}
          <div className='flex-1 mx-2'>
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
          {Usertype && (
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
          )}

          {/* Cart button */}
          {Usertype && (
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
          )}

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
      </div>
      </div>
    </>
  )
    
}
