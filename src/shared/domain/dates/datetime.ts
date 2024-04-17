import dayjs from 'dayjs'

export class Datetime {
  static getDateFormatted(date: Date): string {
    return dayjs(date).format('DD-MM-YYYY')
  }
}
