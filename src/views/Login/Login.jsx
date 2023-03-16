import './index.scss';
import logoDnc from '../../assets/logo/logoDnc.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className="login">
            <div className="login__header">
                <img src={ logoDnc } alt="DNC Logo" />
            </div>
            <form className="login__access">
                <div className="login__title">
                    <h2>Acesse com seu login ou cadastre-se!</h2>
                    <p>você pode entrar com o seu CPF</p>
                </div>
                <div className="login__user">
                    <div className="login__username">
                        <label htmlFor="nome">Digite seu CPF:</label>
                        <input type="text" className='login__input' placeholder='Nome completo' id='nome'/>
                    </div>
                    <div className="login__password">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" className='login__input' placeholder='**********' id='senha'/>
                    </div>
                    <button type="submit" className="login__send">
                    <Link to={ '/home' }>Entrar</Link>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Login;