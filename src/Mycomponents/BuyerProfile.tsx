import React from 'react'
import { Link } from 'react-router-dom';


export default function BuyerProfile() {
  return (
    <div>
    
 <div className="mx-auto right-0 mt-2 w-60">
                <div className="bg-white rounded overflow-hidden shadow-lg rounded-3xl">
                    <div className="text-center p-6 border-b bg-gradient-to-br from-teal-400 to-emerald-500">
                    <svg aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path></svg>
                    <p className="pt-3 text-lg font-semibold text-gray-50">Buyer Name</p>
                    <p className="text-sm text-gray-100">John@Doe.com</p>
                    <div className="mt-5">
                        <a
                        className="border rounded-full py-3 px-4 text-xs font-semibold text-gray-100"
                        >
                        Manage your Account
                        </a>
                    </div>
                    </div>
                    <div className="border-b">
                        <Link to="/" >
                            <a className="px-4 py-4 hover:bg-gray-100 flex">
                                <div className="text-green-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                </div>
                                <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Your Orders
                                </p>
                                {/* <p className="text-xs text-gray-500">For Sale</p> */}
                                </div>
                            </a>
                        </Link>
                        <Link to="/">
                            <a className="px-4 py-2 hover:bg-gray-100 flex">
                                <div className="text-gray-800">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                </div>
                                <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">Purchase History</p>
                                {/* <p className="text-xs text-gray-500">Sales HIstory</p> */}
                                </div>
                                </a>
                                <div className="balancebutton flex items-center justify-center mb-10">
                                <button className="bg-gradient-to-br from-teal-300 to-emerald-300 px-8 py-2 mt-5 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Balance</button>
                                </div>
                            
                        </Link>
                    </div>

                   
                </div>
            </div>
    </div>
  )
}
