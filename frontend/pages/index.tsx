import { ReactElement } from 'react'
import { useVacanciesQuery, useVacancyQuery } from '@generated/frontend'

const Index = (): ReactElement => {
  const { data: dataVs } = useVacanciesQuery()
  const { data: dataV } = useVacancyQuery({ variables: { id: '4095490' } })

  console.log('vacancies', dataVs?.vacancies)
  console.log('vacancy', dataV?.vacancy)

  return <div className='index'>

  </div>
}

export default Index