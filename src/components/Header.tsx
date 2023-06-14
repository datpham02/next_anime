import Link from 'next/link'
import Login from './Login'
import Loading from './Loading'
import UseDebounce from './UseDebounce'
import UseBreakPoint from './UseBreakPoint'
import Tippy from '@tippyjs/react/headless'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { RxCounterClockwiseClock } from 'react-icons/rx'
import { BsArrowRightShort, BsFillBellFill, BsSearch } from 'react-icons/bs'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { searchAnime } from '~/utils/API'
import { useMutation } from '@tanstack/react-query'
import { AnimeSearch } from '~/utils/interface'
import { signOut, useSession } from 'next-auth/react'
import { AiTwotoneHeart } from 'react-icons/ai'

const Header = () => {
    const wrappedDivRef = useRef<HTMLDivElement>(null)
    const wrappedMenuDivRef = useRef<HTMLDivElement>(null)
    const menuDivRef = useRef<HTMLDivElement>(null)
    const breakPoint = UseBreakPoint()
    const [showSearchInput, setShowSearchInput] = useState<Boolean>(false)
    const [loginFormVisible, setLoginFormVisible] = useState<Boolean>(false)
    const [userFeatureFormVisible, setUserFeatureFormVisible] = useState<
        boolean | undefined
    >(false)
    const [search, setSearch] = useState<string>('')
    const debounceSearch = UseDebounce({ value: search, delay: 500 })

    const { data, isSuccess, mutate } = useMutation({
        mutationFn: async (searchData: { query: string }) => {
            const data = await searchAnime(searchData.query)
            return data
        },
    })

    const { data: sessionData } = useSession()

    const handleOnchangeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const handleLoginOnclick = () => {
        setLoginFormVisible(!loginFormVisible)
    }
    const handleCloseLoginForm = () => {
        setLoginFormVisible(false)
    }
    const avtUserOnClick = () => {
        setUserFeatureFormVisible(!userFeatureFormVisible)
    }

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
            wrappedMenuDivRef.current.classList.add('z-[11]')

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
            wrappedMenuDivRef.current.classList.remove('z-[11]')
            wrappedMenuDivRef.current.classList.add('z-[-1]')

            menuDivRef.current?.classList.add('translate-x-[-100%]')
            menuDivRef.current?.classList.remove('translate-x-[0]')
        }
    }

    useEffect(() => {
        if (breakPoint == '2xl' || breakPoint == 'xl') {
            setShowSearchInput(false)
        }
    }, [breakPoint])
    useEffect(() => {
        if (debounceSearch) {
            mutate({ query: search })
        }
    }, [debounceSearch])

    return (
        <>
            <div>
                <div
                    ref={wrappedDivRef}
                    className='z-[10] top-0 fixed w-full bg-[#090B0F]'
                >
                    <div className='flex items-center justify-between w-full  lg:h-[80px] md:h-[75px] sm:h-[70px] h-[65px]  md:px-[40px] px-[10px]'>
                        <div className='flex items-center space-x-3 text-[30px] font-bold text-[#fff] select-none'>
                            <BiMenu
                                onClick={() => {
                                    biMenuOnClick()
                                }}
                                className='md:w-[40px] md:h-[40px] w-[35px] h-[35px]'
                            />
                            <Link href='/home'>
                                Next{' '}
                                <span className='text-[#2196F3]'>Anime</span>
                            </Link>
                        </div>
                        <div className='flex justify-end items-center space-x-4'>
                            <div className='relative w-[400px] xl:flex justify-end items-center hidden'>
                                <input
                                    onChange={(e) => {
                                        handleOnchangeInputSearch(e)
                                    }}
                                    type='search'
                                    value={search}
                                    placeholder='Search anime . . .'
                                    className='outline-none px-[5px] py-[6px] w-full'
                                />
                                {search ? null : (
                                    <BsSearch className='absolute cursor-pointer w-[20px] h-[20px] text-[#000] right-[10px]' />
                                )}
                                {search && data ? (
                                    isSuccess ? (
                                        <div className='absolute w-full top-[50px] bg-[#414248]'>
                                            {data.results.lenght > 0 ? (
                                                <>
                                                    {data.results.map(
                                                        (
                                                            anime_search: AnimeSearch,
                                                            index: number,
                                                        ) => {
                                                            return (
                                                                <Link
                                                                    href={`/detail?id=${anime_search.id}`}
                                                                >
                                                                    <div
                                                                        key={
                                                                            anime_search.id
                                                                        }
                                                                        className='flex flex-col'
                                                                    >
                                                                        <div className='group flex space-x-2 p-[8px] cursor-pointer'>
                                                                            <img
                                                                                className='w-[50px] h-[70px]'
                                                                                src={
                                                                                    anime_search.image
                                                                                }
                                                                            />
                                                                            <div className='flex flex-col space-y-1'>
                                                                                <span
                                                                                    style={{
                                                                                        color: anime_search.color,
                                                                                    }}
                                                                                    className='font-semibold text-[#fff] line-clamp-1 group-hover:text-[#2196F3]'
                                                                                >
                                                                                    {
                                                                                        anime_search
                                                                                            .title
                                                                                            .english
                                                                                    }
                                                                                </span>
                                                                                <span className='text-[#929293] text-[13px]'>
                                                                                    {
                                                                                        anime_search
                                                                                            .title
                                                                                            .romaji
                                                                                    }
                                                                                </span>
                                                                                <div className='flex items-center space-x-2 text-[#929293] text-[13px]'>
                                                                                    <span className='group-hover:text-[#2196F3] text-[#fff]'>
                                                                                        {
                                                                                            anime_search.type
                                                                                        }
                                                                                    </span>
                                                                                    <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                                                                    <span>
                                                                                        {
                                                                                            anime_search.releaseDate
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {index +
                                                                            1 <
                                                                        5 ? (
                                                                            <div className='border-dashed border border-gray-500'></div>
                                                                        ) : null}
                                                                    </div>
                                                                </Link>
                                                            )
                                                        },
                                                    )}
                                                    <div className='bg-[#2196F3] flex items-center justify-center py-[10px] cursor-pointer space-x-2'>
                                                        <span>
                                                            View all results
                                                        </span>
                                                        <IoIosArrowForward />
                                                    </div>
                                                </>
                                            ) : (
                                                <div className='flex justify-center items-center w-full h-[50px] text-[#Fff]'>
                                                    No result found
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className='absolute w-full flex items-center h-[100px] justify-center top-[50px] bg-[#414248]'>
                                            <Loading />
                                        </div>
                                    )
                                ) : null}
                            </div>
                            <BsSearch
                                onClick={() => {
                                    bsSearchIconRefOnClick()
                                }}
                                className='cursor-pointer w-[25px] h-[25px] text-[#2196F3] right-[10px] block xl:hidden'
                            />
                            {sessionData?.user ? (
                                <Tippy
                                    interactive
                                    visible={userFeatureFormVisible}
                                    onClickOutside={() => {
                                        avtUserOnClick()
                                    }}
                                    placement='bottom-start'
                                    render={(attrs) => (
                                        <div
                                            {...attrs}
                                            className='w-[300px] flex flex-col py-[8px] px-[10px] rounded-md bg-[#3F4148]'
                                        >
                                            <div className='flex flex-col px-[10px] py-[8px]'>
                                                <span className='font-medium text-[#2196F3] text-[15px]'>
                                                    {sessionData.user?.name}
                                                </span>
                                                <span className='text-[#fff] text-[13px]'>
                                                    {sessionData.user?.email}
                                                </span>
                                            </div>
                                            <div className='flex flex-col space-y-2 pt-[15px] px-[15px]'>
                                                <div className='flex items-center space-x-2 cursor-pointer text-[#fff] hover:text-[#2196f3] text-[14px] bg-[#4F515B] rounded-full px-[12px] py-[10px]'>
                                                    <RxCounterClockwiseClock />
                                                    <span>
                                                        Continue Watching
                                                    </span>
                                                </div>
                                                <div className='flex items-center space-x-2 cursor-pointer text-[#fff] hover:text-[#2196f3] text-[14px] bg-[#4F515B] rounded-full px-[12px] py-[10px]'>
                                                    <AiTwotoneHeart />
                                                    <span>Watch List</span>
                                                </div>
                                                <div className='flex items-center space-x-2 cursor-pointer text-[#fff] hover:text-[#2196f3] text-[14px] bg-[#4F515B] rounded-full px-[12px] py-[10px]'>
                                                    <BsFillBellFill />
                                                    <span>Notification</span>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-end'>
                                                <div
                                                    onClick={() => {
                                                        signOut()
                                                    }}
                                                    className='flex items-center py-[15px] px-[15px] text-[#Fff] hover:text-[#2196f3] text-[13px] cursor-pointer'
                                                >
                                                    <span>Login out</span>
                                                    <BsArrowRightShort className='w-[20px] h-[20px]' />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                >
                                    <img
                                        onClick={() => {
                                            avtUserOnClick()
                                        }}
                                        src={sessionData.user.image as string}
                                        className='rounded-full w-[45px] h-[45px]'
                                    />
                                </Tippy>
                            ) : (
                                <button
                                    onClick={() => {
                                        handleLoginOnclick()
                                    }}
                                    className='text-[#162032] outline-none hover:text-[#fff] select-none border-solid border-[1px] border-[#868688] rounded-md px-[15px] py-[6px] bg-[#2196F3] md:block hidden'
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </div>

                    {showSearchInput && (
                        <div className='flex items-center px-[15px]'>
                            <div className='relative w-full flex items-center'>
                                <input
                                    type='search'
                                    value={search}
                                    onChange={(e) => {
                                        handleOnchangeInputSearch(e)
                                    }}
                                    placeholder='Search anime . . .'
                                    className='outline-none rounded-sm px-[5px] py-[6px] w-full'
                                />
                                {search ? null : (
                                    <BsSearch className='absolute cursor-pointer w-[20px] h-[20px] text-[#000] right-[10px]' />
                                )}
                                {search && data ? (
                                    isSuccess ? (
                                        <div className='absolute w-full top-[45px] bg-[#414248]'>
                                            {data.results.map(
                                                (
                                                    anime_search: AnimeSearch,
                                                    index: number,
                                                ) => {
                                                    return (
                                                        <div
                                                            key={
                                                                anime_search.id
                                                            }
                                                            className='flex flex-col'
                                                        >
                                                            <div className='group flex space-x-2 p-[8px] cursor-pointer'>
                                                                <img
                                                                    className='w-[50px] h-[70px]'
                                                                    src={
                                                                        anime_search.image
                                                                    }
                                                                />
                                                                <div className='flex flex-col space-y-1'>
                                                                    <span className='font-semibold text-[#fff] line-clamp-1 group-hover:text-[#2196F3]'>
                                                                        {
                                                                            anime_search
                                                                                .title
                                                                                .english
                                                                        }
                                                                    </span>
                                                                    <span className='text-[#929293] text-[13px]'>
                                                                        {
                                                                            anime_search
                                                                                .title
                                                                                .romaji
                                                                        }
                                                                    </span>
                                                                    <div className='flex items-center space-x-2 text-[#929293] text-[13px]'>
                                                                        <span className='group-hover:text-[#2196F3] text-[#fff]'>
                                                                            {
                                                                                anime_search.type
                                                                            }
                                                                        </span>
                                                                        <span className='w-[4px] h-[4px] rounded-[50%] bg-[rgba(255,255,255,.3)] inline-block my-[3px] mx-[6px]'></span>
                                                                        <span>
                                                                            {
                                                                                anime_search.releaseDate
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {index + 1 < 5 ? (
                                                                <div className='border-dashed border border-gray-500'></div>
                                                            ) : null}
                                                        </div>
                                                    )
                                                },
                                            )}
                                            <div className='bg-[#2196F3] flex items-center justify-center py-[10px] cursor-pointer space-x-2'>
                                                <span>View all results</span>
                                                <IoIosArrowForward />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='absolute w-full flex items-center h-[100px] justify-center top-[50px] bg-[#414248]'>
                                            <Loading />
                                        </div>
                                    )
                                ) : null}
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
                            <div
                                onClick={() => {
                                    handleLoginOnclick()
                                }}
                                className='cursor-pointer hover:text-[#2196F3] border-b-solid border-b-[1px] border-b-[#35373C] text-[16px] font-medium text-[#fff] p-[10px]'
                            >
                                Login
                            </div>
                            <Link href='/home'>
                                <div className='cursor-pointer hover:text-[#2196F3] border-b-solid border-b-[1px] border-b-[#35373C] text-[16px] font-medium text-[#fff] p-[10px]'>
                                    Home
                                </div>
                            </Link>
                            <Link href='/trending'>
                                <div className='cursor-pointer hover:text-[#2196F3] border-b-solid border-b-[1px] border-b-[#35373C] text-[16px] font-medium text-[#fff] p-[10px]'>
                                    Trending
                                </div>
                            </Link>
                            <Link href='/movies'>
                                <div className='cursor-pointer hover:text-[#2196F3] border-b-solid border-b-[1px] border-b-[#35373C] text-[16px] font-medium text-[#fff] p-[10px]'>
                                    Movies
                                </div>
                            </Link>
                            <Link href='/genres'>
                                <div className='cursor-pointer hover:text-[#2196F3] border-b-solid border-b-[1px] border-b-[#35373C] text-[16px] font-medium text-[#fff] p-[10px]'>
                                    Genres
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {loginFormVisible ? (
                    <div className='z-[11] fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#000] to-[rgba(0,0,0,0.05)]  '>
                        <Login close={handleCloseLoginForm} />
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default Header
