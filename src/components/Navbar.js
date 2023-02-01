import { CategoryAdd, ChevronDown, ChevronRight, ShoppingCart, User, UserProfile } from '@carbon/icons-react'
import React from 'react'
import data from '../utils/data'


export default function Navbar(
    {searchCallback}
) {

    return (
        <header>
            <div className='flex items-center justify-between text-white bg-blue-400 px-4'>
                <div className='text-xl font-semibold'>Discover Product</div>
                <div>
                    <form className="group relative">
                        <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            />
                        </svg>
                        <input
                            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[400px] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-lg py-2 my-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                            type="text"
                            aria-label="Search products"
                            placeholder="Search products"
                            onChange={(e) => searchCallback(e.target.value)}
                        />
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <span><ShoppingCart size={"24"} /></span>
                    <span><User size={"24"} /></span>
                </div>
            </div>
            <div className=''>
                <ul className='flex items-center'>
                    {
                        data.map((item) => (
                            <li className='px-6 py-2 text-gray-500 hover:text-black hover:bg-gray-200 cursor-pointer'>
                                {
                                    item.subMenu ? (
                                        <div className='nav-menu relative flex flex-col space-y-1'>
                                            <div className='flex items-end space-x-1'>
                                                <span>{item.item}</span><div className='nav-icon pb-[1px]'><ChevronDown /></div>
                                            </div>
                                            <div className='nav-submenu absolute top-5 -left-6 whitespace-nowrap bg-white border'>
                                                <ul >
                                                    {
                                                        item.subMenu.map((subItem) => (
                                                            <li className=' text-gray-500 hover:text-black hover:bg-gray-200 cursor-pointer'>
                                                                {
                                                                    subItem.item && subItem.subCategory ? (
                                                                        <>
                                                                            <div className='nav-category relative flex px-6 py-2'>
                                                                                <div className='flex items-end space-x-1'>
                                                                                    <span>{subItem.item}</span><div className='nav-icon pb-[1px]'><ChevronRight /></div>
                                                                                </div>
                                                                                <div className='nav-subcategory absolute top-0 left-full whitespace-nowrap bg-white border'>
                                                                                    <ul >
                                                                                        {
                                                                                            subItem.subCategory.map((subCategory) => (
                                                                                                <li className='px-6 py-2 text-gray-500 hover:text-black hover:bg-gray-200 cursor-pointer'>
                                                                                                    {subCategory.item}
                                                                                                </li>
                                                                                            ))
                                                                                        }
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </>

                                                                    ) : (
                                                                        <div className='flex items-end space-x-1'>
                                                                            <span>{subItem.item}</span>
                                                                        </div>
                                                                    )
                                                                }
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            {item.item}
                                        </>
                                    )
                                }
                            </li>
                        ))
                    }
                    {/* <li className='px-6 py-2 text-gray-500 hover:text-black hover:bg-gray-200 cursor-pointer'>Grocery</li>
                    <li className='px-6 py-2 text-gray-500 hover:text-black hover:bg-gray-200 cursor-pointer'>Mobiles</li>
                    <li className='px-6 py-2 text-gray-500 hover:text-black hover:bg-gray-200 cursor-pointer'><div className='nav-menu relative flex flex-col space-y-1'>
                        <div className='flex items-end space-x-1'>
                            <span>Fashion</span><div className='nav-icon pb-[1px]'><ChevronDown /></div>
                        </div>
                        <div className='nav-submenu absolute top-5 whitespace-nowrap bg-white p-2 border'>
                            <ul >
                                <li>Men's Top Wear</li>
                                <li>Men's Bottom Wear</li>
                                <li>Women Ethnic</li>
                                <li>Women Western</li>
                            </ul>
                        </div>
                    </div>
                    </li>
                    <li className='px-6 py-2 text-gray-500 hover:text-black hover:bg-gray-200 cursor-pointer'><div className='nav-menu relative flex flex-col space-y-1'>
                        <div className='flex items-end space-x-1'>
                            <span>Electronics</span><div className='nav-icon pb-[1px]'><ChevronDown /></div>
                        </div>
                        <div className='nav-submenu absolute top-5 whitespace-nowrap bg-white p-2 border'>
                            <ul >
                                <li>Audio</li>
                                <li>Electronics GST Store</li>
                                <li>Cameras & Accessories</li>
                                <li>Computer Peripherals</li>
                                <li>Gaming</li>
                            </ul>
                        </div>
                    </div>
                    </li>
                    <li className='px-6 py-2 text-gray-500 hover:text-black hover:bg-gray-200 cursor-pointer'><div className='nav-menu relative flex flex-col space-y-1'>
                        <div className='flex items-end space-x-1'>
                            <span>Home</span><div className='nav-icon pb-[1px]'><ChevronDown /></div>
                        </div>
                        <div className='nav-submenu absolute top-5 whitespace-nowrap bg-white p-2 border'>
                            <ul >
                                <li>Home Furnishings</li>
                                <li>Furniture Studio</li>
                                <li>Living Room Furniture</li>
                                <li>Kitchen & Dining</li>
                            </ul>
                        </div>
                    </div>
                    </li>
                    <li className='px-6 py-2 text-gray-500 hover:text-black hover:bg-gray-200 cursor-pointer'>Appliances</li>
                    <li className='px-6 py-2 text-gray-500 hover:text-black hover:bg-gray-200 cursor-pointer'>Travel</li>
                    <li className='px-6 py-2 text-gray-500 hover:text-black hover:bg-gray-200 cursor-pointer'>Top Offers</li> */}
                </ul>
            </div>
        </header>
    )
}
