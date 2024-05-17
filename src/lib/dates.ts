import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/en'

dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.locale('en')

export function formatDate(date: Date | string) {
  return dayjs(date).format('MMMM D, YYYY')
}

export function formatDateTime(date: Date | string, dateTimeFormat?: string) {
  return dayjs(date).format(dateTimeFormat)
}

export function humanizeDate(date: Date | string | undefined | null): string {
  if (!date) {
    return ''
  }
  const pastDate = dayjs(date)
  let elapsedTime: any  = ''
  elapsedTime =  pastDate.fromNow()
  return elapsedTime
}

export function humanAndFormattedDateHelper(date: Date | string | undefined | null, dateFormat: string = 'MM-DD-YYYY'): string {
  if (!date) {
    return ''
  }
  const formattedDate = date ? formatDateTime(date, dateFormat) : ''
  const humanizedDate = formattedDate ? humanizeDate(formattedDate) : ''
  return `${humanizedDate} (${formattedDate})`
}
