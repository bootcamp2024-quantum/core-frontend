import FormRegistration from './FormRegistration'

import Header from '../../components/Header/Header'

import css from './RegistrationPage.module.css'

const RegistrationPage = () => {
    return (
        <div className={css.register}>
            <Header/>
            <FormRegistration />
        </div>
    )
}

export default RegistrationPage;