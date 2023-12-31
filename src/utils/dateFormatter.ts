export const dateFormatter = (inputDate: string) => {
  const date = new Date(inputDate)

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `
  ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} el 
  ${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}
  `
}
