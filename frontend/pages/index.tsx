import { ReactElement } from 'react'
import { useLoginQuery, useVacanciesQuery, useVacancyQuery } from '@generated/frontend'

const Index = (): ReactElement => {
  const { data: dataVs } = useVacanciesQuery()
  const { data: dataV } = useVacancyQuery({ variables: { id: '4095490' } })
  const { data: dataAuth } = useLoginQuery({ variables: { username: 'admin', password: 'admin' } })

  console.log('vacancies', dataVs?.vacancies)
  console.log('vacancy', dataV?.vacancy)
  console.log('auth', dataAuth?.login)

  return <div className='index'>

  </div>
}

export default Index