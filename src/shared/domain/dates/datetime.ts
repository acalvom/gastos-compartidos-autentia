import dayjs from 'dayjs'

export class Datetime {
  static toDate(dateString: string): Date {
    return dayjs(dateString).toDate()
  }

  static toString(date: Date): string {
    return dayjs(date).toISOString()
  }

  static getDateFormatted(date: Date): string {
    return dayjs(date).format('DD-MM-YYYY')
  }

  static toMilliseconds(date: Date): number {
    return dayjs(date).valueOf()
  }
}
