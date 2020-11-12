import Link from 'next/link'
import { ReactElement } from 'react'

import style from './pagination.module.sass'

type Props = {
    current: number
    length: number
    maxLength: number
}

const Pagination = ({ current, length, maxLength }: Props): ReactElement => {
    const { pagination, pagination_empty, pagination_current, pagination_number } = style

    const Numbers = (): ReactElement[] => {
        if (length == 0) return null

        const numbers: ReactElement[] = []
        const Number = (key) =>
            numbers.push(
                <Link key={key} href={`${key}`}>
                    <a className={key == current ? pagination_current : pagination_number}>
                        {key}
                    </a>
                </Link>)

        const Empty = (key = -1) =>
            numbers.push(<p key={key} className={pagination_empty}>...</p>)

        const maxLengthHalf = maxLength / 2
        const countOthers = maxLength / 4
        const countCurrent = countOthers * 3

        const fillNumber = (begin: number, end: number) => {
            for (let i = begin; i <= end; i++)
                Number(i)
        }
        const fillNumbers =
            (startLength: number, endBegin: number) => {
                fillNumber(0, startLength)
                Empty()
                fillNumber(endBegin, length)
            }

        if (length <= maxLength)
            fillNumber(0, length)
        else if (current < maxLengthHalf)
            fillNumbers(countCurrent - 1, length - countOthers + 1)
        else if (current > length - maxLengthHalf - 1)
            fillNumbers(countOthers - 1, length - countCurrent + 1)
        else {
            fillNumber(0, 0)
            Empty()
            fillNumber(current - countOthers, current + countOthers)
            Empty(-2)
            fillNumber(length, length)
        }

        return numbers
    }

    return <div className={pagination}>
        {Numbers()}
    </div>
}

export default Pagination
