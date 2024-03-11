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

export function formatDateTime(date: Date | string, dateTimeFormat: string) {
  return dayjs(date).format(dateTimeFormat)
}

export function humanizeDate(date: Date | string) {
  const pastDate = dayjs(date)
  const timeAgo = pastDate.fromNow()
  console.log('Time ago:', timeAgo)
  return timeAgo
}
