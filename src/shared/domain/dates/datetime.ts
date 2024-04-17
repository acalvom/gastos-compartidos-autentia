import dayjs from 'dayjs'

export class Datetime {
  static toDate(dateString: string): Date {
    return dayjs(dateString).toDate()
  }

  static getDateFormatted(date: Date): string {
    return dayjs(date).format('DD-MM-YYYY')
  }
}
