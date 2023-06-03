export const convertMonthNumberToMonthString = (monthNumber: number) => {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]

    if (monthNumber >= 1 && monthNumber <= 12) {
        return months[monthNumber - 1]
    } else {
        return null
    }
}

export const roundingDurationVideo = (seconds: Number | String) => {
    const Hours = Math.floor(Number(seconds) / 3600)
    const Minutes = Math.floor((Number(seconds) % 3600) / 60)
    const Seconds = Math.floor(Number(seconds) % 60)
    if (Number(seconds) == 0) {
        if (Hours < 1) {
            return '0:00'
        } else return '00:00:00'
    }
    if (Number.isNaN(Hours) || Number.isNaN(Minutes) || Number.isNaN(Seconds)) {
        return '00:00:00'
    }
    if (Hours < 1 && Minutes < 1 && !Number.isNaN(Seconds)) {
        return `00:${Seconds > 9 ? Seconds : `0${Seconds}`}`
    } else if (Hours < 1 && !Number.isNaN(Minutes)) {
        return `${Minutes}:${Seconds > 9 ? Seconds : `0${Seconds}`}`
    } else if (Hours >= 1 && !Number.isNaN(Hours)) {
        return `${Hours}:${Minutes > 9 ? Minutes : `0${Minutes}`}:${
            Seconds > 10 ? Seconds : `0${Seconds}`
        }`
    }
    return '00:00:00'
}

export const roundingCurrentTimeVideo = (seconds: Number | String) => {
    const Hours = Math.floor(Number(seconds) / 3600)
    const Minutes = Math.floor((Number(seconds) % 3600) / 60)
    const Seconds = Math.floor(Number(seconds) % 60)
    if (Number(seconds) == 0) {
        if (Hours < 1) {
            return '0:00'
        } else return '00:00:00'
    }
    if (Number.isNaN(Hours) || Number.isNaN(Minutes) || Number.isNaN(Seconds)) {
        return '00:00:00'
    }
    if (Hours < 1 && Minutes < 1 && !Number.isNaN(Seconds)) {
        return `00:${Seconds > 9 ? Seconds : `0${Seconds}`}`
    } else if (Hours < 1 && !Number.isNaN(Minutes)) {
        return `${Minutes}:${Seconds > 9 ? Seconds : `0${Seconds}`}`
    } else if (Hours >= 1 && !Number.isNaN(Hours)) {
        return `${Hours}:${Minutes > 9 ? Minutes : `0${Minutes}`}:${
            Seconds > 10 ? Seconds : `0${Seconds}`
        }`
    }

    return '00:00:00'
}

export const convertTimeStamp = (time_stamp: number) => {
    let date = new Date(time_stamp * 1000)

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    // let second = date.getSeconds()

    return { year, month, day, hour, minute }
}

export const formatTime = (time: {
    year: number
    month: number
    day: number
    hour: number
    minute: number
}) => {
    let year = time.year > 9 ? time.year : `0${time.year}`
    let month = time.month > 9 ? time.month : `0${time.month}`
    let day = time.day > 9 ? time.day : `0${time.day}`
    let hour = time.hour > 9 ? time.hour : `0${time.hour}`
    let minute = time.minute > 9 ? time.minute : `0${time.minute}`
    return `${hour} : ${minute} - ${day}/${month}/${year}`
}
