import './index.scss';
import logoDnc from '../../assets/logo/logoDnc.svg';
import searchIcon from '../../assets/icons/searchIcon.svg';
import carIcon from '../../assets/icons/carIcon.svg';

const HeaderMenu = () => {
    return (
        <section className="menu">
            <div className="menu__header">
                <img src={ logoDnc } alt="DNC logo" />
                <div className="menu__search">
                    <img src={ searchIcon } className="menu__search-icon" alt="Icone de Pesquisa" />
                    <input type="text" placeholder='O que você está procurando?' />
                </div>
                <img src={ carIcon } alt="Icone de Compra" />
            </div>
            <div className="menu__categories">
                <ul>
                    <li className='menu__categories-active'>Novidades</li>
                    <li>Jogos</li>
                    <li>Video Games</li>
                    <li>Mesas Gamer</li>
                    <li>Promoção</li>
                    <li>Atendimento</li>
                </ul>
            </div>
        </section>
    );
};

export default HeaderMenu;