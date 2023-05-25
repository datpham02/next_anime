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
