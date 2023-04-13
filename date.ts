import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

export function dayOfMonth() {
  return dayjs().date()
}
