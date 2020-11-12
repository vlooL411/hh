import { ReactElement } from 'react'

import style from './styles/loadertext.module.sass'

type Props = {
    loading?: boolean
    className?: string
}

const LoaderText = ({ loading = true, className = '' }: Props): ReactElement => {
    const { loadertext } = style
    return loading ?
        <div className={`${loadertext} ${className}`} />
        : null
}

export default LoaderText
