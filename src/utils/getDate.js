


export function getDate(timeStamp) {
    let milli = new Date(timeStamp * 1000)
    let date = milli.toLocaleString("en-US", {weekday: "long", hour: "numeric", minute: "numeric", timeZoneName: "short" })
    return date
}