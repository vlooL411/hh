import { Salary } from '@generated/frontend'

export const salaryProcess = (salary: Salary) => {
    let sal: string = ''
    if (salary?.from)
        sal = `от ${salary.from} ${salary?.currency} `
    if (salary?.to)
        sal += `до ${salary.to} ${salary?.currency}`
    if (sal == '') return 'з/п не указана'
    return sal
}