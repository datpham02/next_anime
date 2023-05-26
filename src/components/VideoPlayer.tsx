import React, { useEffect, useRef, useState } from 'react'
import { GiPauseButton, GiPlayButton, GiNextButton } from 'react-icons/gi'
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi'
import {
    roundingDurationVideo,
    roundingCurrentTimeVideo,
} from '../utils/function'
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi'
import { IoMdVolumeLow, IoMdVolumeMute } from 'react-icons/io'
import { AiFillSetting, AiTwotoneSetting } from 'react-icons/ai'

const VideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const videoControlRef = useRef<HTMLDivElement>(null)
    const videoRangeRef = useRef<HTMLInputElement>(null)
    const videoVolumeRef = useRef<HTMLInputElement>(null)
    const wrapped = useRef<HTMLDivElement>(null)
    const [play, setPlay] = useState<Boolean>(false)
    const [videoCurrentTime, setVideoCurrentTime] = useState('00:00:00')
    const [videoDuration, setVideoDuration] = useState('00:00:00')
    const [videoRangeValue, setVideoRangeValue] = useState(0)
    const [bufferedTime, setBufferedTime] = useState(0)
    const [videoVolume, setVideoVolume] = useState(0)
    const [videoFullScreen, setVideoFullScreen] = useState<Boolean>(false)

    const [watchTiem, setWatchTime] = useState<number>(0)
    useEffect(() => {
        if (videoRef.current != null) {
            const video = document.createElement('video')
            video.setAttribute(
                'src',
                'https://rr4---sn-8pxuuxa-nbo6l.googlevideo.com/videoplayback?expire=1685090632&ei=6BxwZKWlMIaW2_gPk5eoKA&ip=181.41.206.195&id=o-AAuFxey-SgV6yhohg65HdDrai0uCDPZ4tlvqFAvg6p0e&itag=18&source=youtube&requiressl=yes&spc=qEK7B_cW25FpQnsPf1YSLX4zmbh6Rxp0cjFAIXM8MQ&vprv=1&svpuc=1&mime=video%2Fmp4&ns=bgkDOXzBi5BBY16G-cNDwiwN&gir=yes&clen=12335125&ratebypass=yes&dur=258.414&lmt=1683467381593161&fexp=24007246,24350018,24362687,51000011,51000022&beids=24350018&c=WEB&txp=5538434&n=OuRN8eK7_OnjqQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgBYvc8QmAuXSXq46HYGBe22q3FIksFz6Lcc6aICvqDKcCIDKZnc2Vs61OE6nNMxBJ8aEQ4s_ngiXXTOTZNoDccRaI&redirect_counter=1&rm=sn-q4feey76&req_id=f56f37c8241ea3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=EV&mip=171.252.155.125&mm=31&mn=sn-8pxuuxa-nbo6l&ms=au&mt=1685068608&mv=m&mvi=4&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgPrq3U4KtyzvtNiYzdDiidBRLgnzt6IIl3v2kYL8YdRwCIQDFdYW7p0V5A3KAxng8nG0Hz7u73_pof-b6Q6WpNzhM1Q%3D%3D',
            )

            document.body.appendChild(video)
            video.addEventListener('loadedmetadata', () => {
                if (videoRef && videoRef.current) {
                    setVideoCurrentTime(
                        roundingCurrentTimeVideo(video.currentTime),
                    )
                    setVideoDuration(roundingDurationVideo(video.duration))
                    setVideoVolume(video.volume * 100)
                }
                document.body.removeChild(video)
            })
            video.load()
        }
    }, [videoRef.current])

    useEffect(() => {})
    const handleProgress = () => {
        if (videoRef && videoRef.current) {
            if (videoRef.current.buffered.length > 0) {
                if (
                    Math.floor(
                        (Number(videoRef.current?.buffered.end(0)) /
                            Number(videoRef.current?.duration)) *
                            100,
                    ) <= 100
                ) {
                    setBufferedTime(
                        Math.floor(
                            (Number(videoRef.current?.buffered.end(0)) /
                                Number(videoRef.current?.duration)) *
                                100,
                        ),
                    )
                }
            }
        }
    }

    const handleSeeking = (e: any) => {
        document.body.style.userSelect = 'none'
        if (videoRangeRef && videoRangeRef.current) {
            const clientX = e.clientX
            const left = videoRangeRef.current?.getBoundingClientRect().left
            const width = videoRangeRef.current.getBoundingClientRect().width
            const min = left
            const max = width + left

            if (clientX >= min && clientX <= max) {
                const percent = (clientX - left) / width

                if (videoRef && videoRef.current) {
                    videoRef.current.currentTime =
                        (Number(videoRef.current.duration) * (percent * 100)) /
                        100

                    setVideoRangeValue(percent * 100)
                }
            }
        }
    }

    const handleCancelSeeking = () => {
        document.body.style.userSelect = 'auto'
        document.removeEventListener('mousemove', handleSeeking)
        document.removeEventListener('mouseup', handleCancelSeeking)
    }

    const handleVolumeVideo = (e: any) => {
        document.body.style.userSelect = 'none'
        if (videoVolumeRef && videoVolumeRef.current) {
            const clientX = e.clientX
            const left = videoVolumeRef.current?.getBoundingClientRect().left
            const width = videoVolumeRef.current.getBoundingClientRect().width
            const min = left
            const max = width + left

            if (clientX >= min && clientX <= max) {
                const percent = (clientX - left) / width

                if (videoRef && videoRef.current) {
                    if (Math.floor(percent * 100) <= 5) {
                        videoRef.current.volume = 0
                    } else videoRef.current.volume = percent

                    setVideoVolume(
                        Math.floor(percent * 100) >= 5
                            ? Math.floor(percent * 100)
                            : 0,
                    )
                }
            }
        }
    }

    const cancelHandleVolumeVideo = () => {
        document.body.style.userSelect = 'auto'
        document.removeEventListener('mousemove', handleVolumeVideo)
        document.removeEventListener('mouseup', cancelHandleVolumeVideo)
    }

    const handleFullScreen = () => {
        if (!wrapped?.current) return

        if (document.fullscreenElement) {
            document.exitFullscreen()
            setVideoFullScreen(false)
        } else {
            wrapped?.current?.requestFullscreen()
            setVideoFullScreen(true)
        }
    }

    const handleIncreaseVideoTime = () => {
        if (videoRef && videoRef.current) {
            videoRef.current.currentTime = videoRef.current.currentTime + 10
        }
    }
    const handleDecreaseVideoTime = () => {
        if (videoRef && videoRef.current) {
            videoRef.current.currentTime = videoRef.current.currentTime - 10
        }
    }

    return (
        <>
            <div
                className='relative'
                ref={wrapped}
                onMouseOver={(e) => {
                    e.preventDefault()
                    if (videoControlRef && videoControlRef.current) {
                        videoControlRef.current.classList.add('flex')
                        videoControlRef.current.classList.remove('hidden')
                    }
                }}
                onMouseOut={(e) => {
                    e.preventDefault()
                    if (videoControlRef && videoControlRef.current) {
                        videoControlRef.current.classList.remove('flex')
                        videoControlRef.current.classList.add('hidden')
                    }
                }}
            >
                <video
                    ref={videoRef}
                    className='w-full h-full'
                    onProgress={handleProgress}
                    controls={false}
                    onEnded={() => {
                        setPlay(false)
                    }}
                    onTimeUpdate={() => {
                        setWatchTime(watchTiem + 1)
                        setVideoCurrentTime(
                            roundingDurationVideo(
                                Number(videoRef.current?.currentTime),
                            ),
                        )

                        if (
                            Math.floor(
                                (Number(videoRef.current?.currentTime) /
                                    Number(videoRef.current?.duration)) *
                                    100,
                            ) <= 100
                        ) {
                            setVideoRangeValue(
                                Math.floor(
                                    (Number(videoRef.current?.currentTime) /
                                        Number(videoRef.current?.duration)) *
                                        100,
                                ),
                            )
                        }
                    }}
                    onPause={() => {
                        console.log(watchTiem)
                    }}
                    src='https://rr4---sn-8pxuuxa-nbo6l.googlevideo.com/videoplayback?expire=1685090632&ei=6BxwZKWlMIaW2_gPk5eoKA&ip=181.41.206.195&id=o-AAuFxey-SgV6yhohg65HdDrai0uCDPZ4tlvqFAvg6p0e&itag=18&source=youtube&requiressl=yes&spc=qEK7B_cW25FpQnsPf1YSLX4zmbh6Rxp0cjFAIXM8MQ&vprv=1&svpuc=1&mime=video%2Fmp4&ns=bgkDOXzBi5BBY16G-cNDwiwN&gir=yes&clen=12335125&ratebypass=yes&dur=258.414&lmt=1683467381593161&fexp=24007246,24350018,24362687,51000011,51000022&beids=24350018&c=WEB&txp=5538434&n=OuRN8eK7_OnjqQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgBYvc8QmAuXSXq46HYGBe22q3FIksFz6Lcc6aICvqDKcCIDKZnc2Vs61OE6nNMxBJ8aEQ4s_ngiXXTOTZNoDccRaI&redirect_counter=1&rm=sn-q4feey76&req_id=f56f37c8241ea3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=EV&mip=171.252.155.125&mm=31&mn=sn-8pxuuxa-nbo6l&ms=au&mt=1685068608&mv=m&mvi=4&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgPrq3U4KtyzvtNiYzdDiidBRLgnzt6IIl3v2kYL8YdRwCIQDFdYW7p0V5A3KAxng8nG0Hz7u73_pof-b6Q6WpNzhM1Q%3D%3D'
                />
                <div
                    ref={videoControlRef}
                    className='absolute bottom-0 w-full hidden flex-col gap-2 py-[10px] px-[25px]'
                >
                    <div
                        ref={videoRangeRef}
                        onMouseDown={() => {
                            document.addEventListener(
                                'mousemove',
                                handleSeeking,
                            )
                            document.addEventListener(
                                'mouseup',
                                handleCancelSeeking,
                            )
                        }}
                        className='w-full flex items-center h-[5px] relative group '
                    >
                        <div className='relative flex items-center h-[3px] group-hover:h-full w-full '>
                            <div className='absolute h-full w-full transition-all duration-200 ease-in-out bg-[rgba(182,182,182,0.4)] '></div>
                            <div
                                style={{
                                    width: `${bufferedTime}%`,
                                }}
                                className='absolute h-full  transition-all duration-200 ease-in-out bg-[#ccc] '
                            ></div>
                            <div
                                style={{
                                    width: `${videoRangeValue}%`,
                                }}
                                className='h-full bg-[red] flex justify-end items-center absolute top-0 left-0 '
                            >
                                <div className='absolute flex items-center justify-center w-[13px] h-[13px] right-[-6.5px]'>
                                    <div className='bg-[red] transition-all duration-200 ease-in-out rounded-full w-[0px] h-[0px] group-hover:w-full group-hover:h-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-4'>
                            <div className='flex items-center'>
                                {play ? (
                                    <GiPauseButton
                                        onClick={() => {
                                            videoRef.current?.pause()
                                            setPlay(false)
                                        }}
                                        className='text-[#fff] text-[30px] cursor-pointer'
                                    />
                                ) : (
                                    <GiPlayButton
                                        onClick={() => {
                                            videoRef.current?.play()
                                            setPlay(true)
                                        }}
                                        className='text-[#fff] text-[30px] cursor-pointer'
                                    />
                                )}
                            </div>
                            <div className='flex items-center'>
                                {/* <GiNextButton className='text-[#fff] text-[30px] cursor-pointer' /> */}
                                {videoVolume > 0 ? (
                                    <IoMdVolumeLow className='text-[#fff] text-[30px] cursor-pointer' />
                                ) : (
                                    <IoMdVolumeMute className='text-[#fff] text-[30px] cursor-pointer' />
                                )}
                                <div
                                    ref={videoVolumeRef}
                                    onMouseDown={() => {
                                        document.addEventListener(
                                            'mousemove',
                                            handleVolumeVideo,
                                        )
                                        document.addEventListener(
                                            'mouseup',
                                            cancelHandleVolumeVideo,
                                        )
                                    }}
                                    className='relative flex items-center h-[3px] w-[45px]'
                                >
                                    <div className='absolute h-full w-full bg-[rgba(182,182,182,0.4)]'></div>
                                    <div
                                        style={{
                                            width: `${videoVolume}%`,
                                        }}
                                        className='absolute h-full bg-[#fff] flex items-center justify-end'
                                    >
                                        <div className='absolute bg-[#fff] rounded-full w-[11px] h-[11px] right-[-5.5px]'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-[#fff]'>
                                {videoCurrentTime}/{videoDuration}
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <FiRotateCcw
                                onClick={() => {
                                    handleDecreaseVideoTime()
                                }}
                                className='text-[#fff] text-[30px] cursor-pointer'
                            />
                            <FiRotateCw
                                onClick={() => {
                                    handleIncreaseVideoTime()
                                }}
                                className='text-[#fff] text-[30px] cursor-pointer'
                            />
                            {videoFullScreen ? (
                                <BiExitFullscreen
                                    onClick={() => {
                                        handleFullScreen()
                                    }}
                                    className='text-[#fff] text-[30px] cursor-pointer'
                                />
                            ) : (
                                <BiFullscreen
                                    onClick={() => {
                                        handleFullScreen()
                                    }}
                                    className='text-[#fff] text-[30px] cursor-pointer'
                                />
                            )}
                            <AiTwotoneSetting className='text-[#fff] text-[30px] cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPlayer
