import './index.scss';
import footerLogo from '../../assets/logo/footerLogoDnc.svg';

const Footer = () => {
    return (
        <section className="footer">
            <img src={ footerLogo } alt="DNC Logo" />
            <p>
                Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas. <br />
                <strong>Para mais informações</strong>, entre em contato: (011) 1111-2222
            </p>
        </section>
    );
};

export default Footer;