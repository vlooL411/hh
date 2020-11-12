import Signin from 'components/Signin'
import { ReactElement } from 'react'


const signin = (): ReactElement => {
    const backImg = 'images/back-form__min_.jpg'

    return <div className='index'
        style={{
            display: 'flex', justifyContent: 'center', paddingTop: '2em',
            background: `url(${backImg}) center`, backgroundSize: 'cover'
        }}>
        <Signin />
    </div>
}

export default signin