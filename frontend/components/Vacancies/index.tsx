import Pagination from 'components/Pagination'
import { useVacanciesQuery } from '@generated/frontend'
import { ReactElement, useMemo, useState } from 'react'

import style from './styles/vacancies.module.sass'
import Vacancy from './Vacancy'
import VacancyLoader from './VacancyLoader'

type Props = { page: number }

const Vacancies = ({ page }: Props): ReactElement => {
    const { vacancies } = style
    const { data, loading, error } = useVacanciesQuery({ variables: { page } })

    const VacanciesLoader = useMemo(() =>
        Array.from({ length: 20 }, (_, key) => <VacancyLoader key={key} />),
        [])

    return <div className={vacancies}>
        {loading || error ?
            VacanciesLoader :
            data?.vacancies.items.
                map(vacancy =>
                    <Vacancy {...vacancy} key={vacancy.id} />)}
        <Pagination current={page} length={40} maxLength={8} />
    </div>
}

export default Vacancies
