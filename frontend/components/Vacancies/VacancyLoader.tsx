import LoaderText from 'components/Loader/LoaderText'
import { ReactElement } from 'react'

import style from './styles/vacancyloader.module.sass'

const VacancyLoader = (): ReactElement => {
    const { vacancyloader, vacancyloader_header } = style
    const { vacancyloader_info, vacancyloader_info_p } = style
    const { vacancyloader_logo, vacancyloader_description } = style
    const { vacancyloader_footer } = style

    return <div className={vacancyloader}>
        <div>
            <LoaderText className={vacancyloader_header} />
            <div className={vacancyloader_info}>
                <LoaderText className={vacancyloader_info_p} />
                <LoaderText className={vacancyloader_info_p} />
                <LoaderText className={vacancyloader_info_p} />
            </div>
        </div>
        <LoaderText className={vacancyloader_logo} />
        <LoaderText className={vacancyloader_description} />
        <div className={vacancyloader_footer}>
            <LoaderText />
            <LoaderText />
        </div>
    </div >
}

export default VacancyLoader