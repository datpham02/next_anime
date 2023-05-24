import React, { useEffect, useRef, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'

import { Link } from 'react-router-dom'
const Header = () => {
    const wrappedDivRef = useRef<HTMLDivElement>(null)
    const wrappedMenuDivRef = useRef<HTMLDivElement>(null)
    const menuDivRef = useRef<HTMLDivElement>(null)
    const [showSearchInput, setShowSearchInput] = useState<Boolean>(false)

    const bsSearchIconRefOnClick = () => {
        setShowSearchInput(!showSearchInput)
    }

    const biMenuOnClick = () => {
        if (
            wrappedMenuDivRef.current?.classList.contains('bg-[rgba(0,0,0,0)]')
        ) {
            wrappedMenuDivRef.current?.classList.add('bg-[rgba(32,33,37,.8)]')
            wrappedMenuDivRef.current?.classList.remove('bg-[rgba(0,0,0,0)]')
            wrappedMenuDivRef.current.classList.remove('z-[-1]')
            wrappedMenuDivRef.current.classList.add('z-[2]')

            menuDivRef.current?.classList.add('translate-x-[0]')
            menuDivRef.current?.classList.remove('translate-x-[-100%]')
        }
    }
    const closeMenuOnClick = () => {
        if (
            wrappedMenuDivRef.current?.classList.contains(
                'bg-[rgba(32,33,37,.8)]',
            )
        ) {
            wrappedMenuDivRef.current?.classList.remove(
                'bg-[rgba(32,33,37,.8)]',
            )
            wrappedMenuDivRef.current?.classList.add('bg-[rgba(0,0,0,0)]')
            wrappedMenuDivRef.current.classList.remove('z-[2]')
            wrappedMenuDivRef.current.classList.add('z-[-1]')

            menuDivRef.current?.classList.add('translate-x-[-100%]')
            menuDivRef.current?.classList.remove('translate-x-[0]')
        }
    }

    const setHeaderBackGroundOnScroll = (isScroll: Boolean) => {
        if (isScroll) {
            wrappedDivRef.current?.classList.add('bg-[#090B0F]')
            wrappedDivRef.current?.classList.remove('bg-[rgba(0,0,0,0)]')
        } else {
            wrappedDivRef.current?.classList.remove('bg-[#090B0F]')
            wrappedDivRef.current?.classList.add('bg-[rgba(0,0,0,0)]')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', function () {
            var currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop

            if (currentScrollPosition > 0) {
                setHeaderBackGroundOnScroll(true)
            } else {
                setHeaderBackGroundOnScroll(false)
            }
        })
    }, [])

    return (
        <>
            <div>
                <div
                    ref={wrappedDivRef}
                    className='z-[1] fixed w-full bg-[rgba(0,0,0,0)]'
                >
                    <div className='flex items-center justify-between w-full  lg:h-[80px] md:h-[75px] sm:h-[70px] h-[65px]  md:px-[40px] px-[10px]'>
                        <div className='flex items-center space-x-3 text-[30px] font-bold text-[#fff] select-none'>
                            <BiMenu
                                onClick={() => {
                                    biMenuOnClick()
                                }}
                                className='md:w-[40px] md:h-[40px] w-[35px] h-[35px]'
                            />
                            <Link to='/home'>
                                React{' '}
                                <span className='text-[#2196F3]'>Anime</span>
                            </Link>
                        </div>
                        <div className='items-center space-x-10 select-none xl:text-[22px] md:text-[20px] xl:flex hidden'>
                            <Link to='/home'>
                                <span className='cursor-pointer text-[#2196F3]'>
                                    Home
                                </span>
                            </Link>
                            <Link to='/trending'>
                                <span className='cursor-pointer text-[#868688]'>
                                    Trending
                                </span>
                            </Link>
                            <Link to='/movies'>
                                <span className='cursor-pointer text-[#868688]'>
                                    Movies
                                </span>
                            </Link>
                            <Link to='/genres'>
                                <span className='cursor-pointer text-[#868688]'>
                                    Genres
                                </span>
                            </Link>
                        </div>
                        <div className='flex justify-end items-center space-x-4'>
                            <div className='relative w-[400px] xl:flex justify-end items-center hidden'>
                                <input
                                    type='search'
                                    placeholder='Search anime . . .'
                                    className='outline-none pl-[5px] py-[6px] w-full'
                                />
                                <BsSearch className='absolute cursor-pointer w-[20px] h-[20px] text-[#000] right-[10px]' />
                            </div>
                            <BsSearch
                                onClick={() => {
                                    bsSearchIconRefOnClick()
                                }}
                                className='cursor-pointer w-[25px] h-[25px] text-[#2196F3] right-[10px] block xl:hidden'
                            />
                            <Link to='/login'>
                                <button className='text-[#162032] outline-none hover:text-[#fff] select-none border-solid border-[1px] border-[#868688] rounded-md px-[15px] py-[6px] bg-[#2196F3] md:block hidden'>
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>

                    {showSearchInput && (
                        <div className='flex items-center px-[15px]'>
                            <div className='relative w-full flex items-center'>
                                <input
                                    type='search'
                                    placeholder='Search anime . . .'
                                    className='outline-none rounded-sm pl-[5px] py-[6px] w-full'
                                />
                                <BsSearch className='absolute cursor-pointer w-[20px] h-[20px] text-[#000] right-[10px]' />
                            </div>
                        </div>
                    )}
                </div>
                <div
                    ref={wrappedMenuDivRef}
                    onClick={() => {
                        closeMenuOnClick()
                    }}
                    className='z-[-1] fixed inset-0 bg-[rgba(0,0,0,0)] transition-all ease-linear flex justify-start'
                >
                    <div
                        ref={menuDivRef}
                        className='w-[260px] bg-[#162032] overflow-x-auto translate-x-[-100%] transition-all ease-linear'
                    >
                        <div className='flex justify-start py-[15px] px-[10px]'>
                            <button
                                onClick={() => {
                                    closeMenuOnClick()
                                }}
                                className='flex items-center space-x-2 px-[8px] py-[6px] bg-[#2196F3] rounded-full text-[13px] '
                            >
                                <IoIosArrowBack />
                                <span> Close menu</span>
                            </button>
                        </div>
                        <div className='flex flex-col mt-[10px]'>
                            <Link to='/login'>
                                <div className='cursor-pointer hover:text-[#2196F3] border-b-solid border-b-[1px] border-b-[#35373C] text-[16px] font-medium text-[#fff] p-[10px]'>
                                    Login
                                </div>
                            </Link>
                            <Link to='/home'>
                                <div className='cursor-pointer hover:text-[#2196F3] border-b-solid border-b-[1px] border-b-[#35373C] text-[16px] font-medium text-[#fff] p-[10px]'>
                                    Home
                                </div>
                            </Link>
                            <Link to='/trending'>
                                <div className='cursor-pointer hover:text-[#2196F3] border-b-solid border-b-[1px] border-b-[#35373C] text-[16px] font-medium text-[#fff] p-[10px]'>
                                    Trending
                                </div>
                            </Link>
                            <Link to='/movies'>
                                <div className='cursor-pointer hover:text-[#2196F3] border-b-solid border-b-[1px] border-b-[#35373C] text-[16px] font-medium text-[#fff] p-[10px]'>
                                    Movies
                                </div>
                            </Link>
                            <Link to='/genres'>
                                <div className='cursor-pointer hover:text-[#2196F3] border-b-solid border-b-[1px] border-b-[#35373C] text-[16px] font-medium text-[#fff] p-[10px]'>
                                    Genres
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
