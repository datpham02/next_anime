import React, { ChangeEvent, memo, useState } from 'react'
import { BiLike, BiDislike } from 'react-icons/bi'
import { BsFillReplyFill } from 'react-icons/bs'
import { FaSort } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoChatboxOutline } from 'react-icons/io5'

const Comment = () => {
    const [comment, setComment] = useState<string>('')

    const onChangeCommentInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
    }

    return (
        <div className='bg-[#202125] rounded-sm flex flex-col space-y-4'>
            <span className='text-[#2196F3] text-[20px] font-semibold'>
                Comments
            </span>
            <div className='flex flex-col space-y-6 bg-[#2A2C31] sm:px-[50px] px-[20px] py-[20px]'>
                <div className='h-full w-full flex flex-col space-y-4'>
                    <div className='flex items-center justify-between py-[15px]'>
                        <div className='flex items-center space-x-2 text-[#fff]'>
                            <IoChatboxOutline />
                            <span>Comments</span>
                        </div>
                        <div className='flex items-center space-x-2 text-[#fff] cursor-pointer'>
                            <span>Sort by</span>
                            <FaSort />
                        </div>
                    </div>
                    <div className='w-full flex justify-start space-x-3'>
                        <div className='flex justify-start pt-[5px]'>
                            <img
                                className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                                src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                            />
                        </div>
                        <div className='w-full flex flex-1 flex-col space-y-3'>
                            <div className='flex items-center space-x-1 text-[13px]'>
                                <span className='text-[#fff]'>Comments as</span>
                                <span className='text-[#2196F3]'>
                                    Phạm Trọng Đạt
                                </span>
                            </div>
                            <div className='relative flex items-center'>
                                <textarea
                                    rows={2}
                                    placeholder='Leave a comment'
                                    value={comment}
                                    onChange={(e) => {
                                        onChangeCommentInput(e)
                                    }}
                                    className='w-full outline-none text-[#fff] text-[14px] bg-[#4C4F57] rounded-md resize-none px-[8px] py-[10px] placeholder:text-[13px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div className='w-full flex justify-start space-x-3'>
                        <div className='flex justify-start'>
                            <img
                                className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                                src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                            />
                        </div>
                        <div className='w-full flex flex-1 flex-col space-y-2'>
                            <div className='flex items-center space-x-3'>
                                <span className='text-[#fff] text-[14px]'>
                                    Phạm Trọng Đạt
                                </span>
                                <span className='text-[#515356] text-[12px]'>
                                    4 hours ago
                                </span>
                            </div>
                            <p className='text-[14px] text-[#7E888B]'>
                                Bro is hella weird
                            </p>
                            <div className='flex flex-col space-y-3'>
                                <div className='flex items-center text-[#fff] space-x-4 text-[15px]'>
                                    <div className='flex items-center space-x-1 cursor-pointer hover:text-[#2196F3]'>
                                        <BsFillReplyFill />
                                        <span className='text-[13px]'>
                                            Reply
                                        </span>
                                    </div>
                                    <BiLike className='cursor-pointer hover:text-[#2196F3]' />
                                    <BiDislike className='cursor-pointer hover:text-[#2196F3]' />
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <div className='text-[#2196F3] text-[14px] flex items-center space-x-1 cursor-pointer'>
                                        <IoMdArrowDropdown className='w-[18px] h-[18px]' />
                                        <span>View 2 replies</span>
                                    </div>

                                    <div className='flex flex-col space-y-4'>
                                        <div className='w-full flex justify-start space-x-3'>
                                            <div className='flex justify-start'>
                                                <img
                                                    className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                                                    src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                                />
                                            </div>
                                            <div className='w-full flex flex-1 flex-col space-y-2'>
                                                <div className='flex items-center space-x-3'>
                                                    <span className='text-[#fff] text-[14px]'>
                                                        Phạm Trọng Đạt
                                                    </span>
                                                    <span className='text-[#515356] text-[12px]'>
                                                        4 hours ago
                                                    </span>
                                                </div>
                                                <p className='text-[14px] text-[#7E888B]'>
                                                    Bro is hella weird
                                                </p>
                                                <div className='flex items-center text-[#fff] space-x-4 text-[15px]'>
                                                    <div className='flex items-center space-x-1 cursor-pointer hover:text-[#2196F3]'>
                                                        <BsFillReplyFill />
                                                        <span className='text-[13px]'>
                                                            Reply
                                                        </span>
                                                    </div>
                                                    <BiLike className='cursor-pointer hover:text-[#2196F3]' />
                                                    <BiDislike className='cursor-pointer hover:text-[#2196F3]' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-start space-x-3'>
                                            <div className='flex justify-start'>
                                                <img
                                                    className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                                                    src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                                                />
                                            </div>
                                            <div className='w-full flex flex-1 flex-col space-y-2'>
                                                <div className='flex items-center space-x-3'>
                                                    <span className='text-[#fff] text-[14px]'>
                                                        Phạm Trọng Đạt
                                                    </span>
                                                    <span className='text-[#515356] text-[12px]'>
                                                        4 hours ago
                                                    </span>
                                                </div>
                                                <p className='text-[14px] text-[#7E888B]'>
                                                    Bro is hella weird
                                                </p>
                                                <div className='flex items-center text-[#fff] space-x-4 text-[15px]'>
                                                    <div className='flex items-center space-x-1 cursor-pointer hover:text-[#2196F3]'>
                                                        <BsFillReplyFill />
                                                        <span className='text-[13px]'>
                                                            Reply
                                                        </span>
                                                    </div>
                                                    <BiLike className='cursor-pointer hover:text-[#2196F3]' />
                                                    <BiDislike className='cursor-pointer hover:text-[#2196F3]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-start space-x-3'>
                        <div className='flex justify-start'>
                            <img
                                className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                                src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                            />
                        </div>
                        <div className='w-full flex flex-1 flex-col space-y-2'>
                            <div className='flex items-center space-x-3'>
                                <span className='text-[#fff] text-[14px]'>
                                    Phạm Trọng Đạt
                                </span>
                                <span className='text-[#515356] text-[12px]'>
                                    4 hours ago
                                </span>
                            </div>
                            <p className='text-[14px] text-[#7E888B]'>
                                Bro is hella weird
                            </p>
                            <div className='flex items-center text-[#fff] space-x-4 text-[15px]'>
                                <div className='flex items-center space-x-1 cursor-pointer hover:text-[#2196F3]'>
                                    <BsFillReplyFill />
                                    <span className='text-[13px]'>Reply</span>
                                </div>
                                <BiLike className='cursor-pointer hover:text-[#2196F3]' />
                                <BiDislike className='cursor-pointer hover:text-[#2196F3]' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-start space-x-3'>
                        <div className='flex justify-start'>
                            <img
                                className='rounded-full sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]'
                                src='https://img.zorores.com/_r/100x100/100/avatar/one_piece/File6.png'
                            />
                        </div>
                        <div className='w-full flex flex-1 flex-col space-y-2'>
                            <div className='flex items-center space-x-3'>
                                <span className='text-[#fff] text-[14px]'>
                                    Phạm Trọng Đạt
                                </span>
                                <span className='text-[#515356] text-[12px]'>
                                    4 hours ago
                                </span>
                            </div>
                            <p className='text-[14px] text-[#7E888B]'>
                                Bro is hella weird
                            </p>
                            <div className='flex items-center text-[#fff] space-x-4 text-[15px]'>
                                <div className='flex items-center space-x-1 cursor-pointer hover:text-[#2196F3]'>
                                    <BsFillReplyFill />
                                    <span className='text-[13px]'>Reply</span>
                                </div>
                                <BiLike className='cursor-pointer hover:text-[#2196F3]' />
                                <BiDislike className='cursor-pointer hover:text-[#2196F3]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Comment)
