import personDesktop from '../../../../assets/images/personDesktop.svg';
import personMobile from '../../../../assets/images/personMobile.svg';
import './index.scss';

export const BannerLogin = () => {
    return(
    <div className='banner-login'>
        <img src={personDesktop} alt="backgroundDesktop" className="banner-login__image banner-login__image--desktop" />
        <img src={personMobile} alt="backgroundMobile" className="banner-login__image banner-login__image--mobile" />
        <div className="banner-login__content">
            <h2 className="banner-login__subtitle">¡NUEVO!</h2>
            <h1 className="banner-login__title">
             <span className="banner-login__title--primary">Seguro Vehicular </span>
             <span className="banner-login__title--secondary">Tracking</span>
            </h1>
            <p className="banner-login__description">Cuentanos donde le haras seguimiento a tu seguro.</p>
        </div>
        <p className="banner-login__footer">© 2021 RIMAC Seguros y Reaseguros.</p>
    </div>)
};