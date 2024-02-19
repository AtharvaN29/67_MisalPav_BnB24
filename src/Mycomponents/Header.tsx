import {Link, useNavigate } from 'react-router-dom'

export default function Navbar(props) {
  const Usertype = props.usertype
  const navigate = useNavigate()
  const logout=async ()=>{
    localStorage.removeItem('user');
    let result=await fetch('http://localhost:5000/deletecart',{
      method:'Delete'
    });
  }
  const cart=()=>{
    navigate('/cart');
  }
  return (
<>
      <div className="navbar bg-white py-2"> {/* Adjusted the padding */}
        <div className="flex-1">
         <svg width="100" height="50" viewBox="0 0 24 24" xmlns="https://th.bing.com/th/id/OIP.RglnjhC2ui4mJAVJAFIYRwHaF7?w=205&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" fillRule="evenodd" clipRule="evenodd" className="fill-current">
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
            {!Usertype && <a
              className='btn btn-ghost text-lg'
              onClick={() => {
                navigate('/newProduct')
              }}
            >
              Add Product
            </a>}{' '}
            {/* Adjusted the font size */}
          </div>
          <div className='flex-1'>
          <a className='btn btn-ghost text-lg'><button onClick={logout} >Logout</button></a>{' '}
          </div>
          
        </div>
        <div className='flex-space-x-8 right-bar'>
          {/* Search bar */}
          {/* <div className='form-control'>
            <input
              type='text'
              placeholder='Search'
              className='input input-bordered w-24 md:w-auto text-black bg-white'
            />
          </div> */}


          {/* Cart button */}
          {Usertype &&
            <button  className='btn btn-ghost text-lg' onClick={cart}> Cart</button>
          }

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
