import { Vacancy as TVacancy } from '@generated/frontend'
import { salaryProcess } from 'components/Common/salary'
import { ReactElement } from 'react'

import style from './styles/vacancy.module.sass'
import VacancyLoader from './VacancyLoader'

const Vacancy = ({ name, salary, employer, area, description }: TVacancy): ReactElement => {
    const { vacancy, vacancy_logo, vacancy_description } = style
    const { vacancy_title, vacancy_salary, vacancy_employer, vacancy_area } = style

    return <div className={vacancy}>
        <img className={vacancy_logo} src={employer?.logo_urls?.original} />
        <p className={vacancy_title}>{name}</p>
        <p className={vacancy_salary}>{salaryProcess(salary)}</p>
        <p className={vacancy_employer}>{employer?.name}</p>
        <p className={vacancy_area}>{area?.name}</p>
        <p className={vacancy_description}
            dangerouslySetInnerHTML={{ __html: description }} />
    </div>
}

export { VacancyLoader }
export default Vacancy