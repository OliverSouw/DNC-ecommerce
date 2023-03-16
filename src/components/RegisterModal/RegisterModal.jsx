import { Link } from 'react-router-dom';
import './index.scss';

const RegisterModal = ({ data }) => {
    return (
        <div className="register-modal">
            <div className="register-modal__card-modal">
                <img src={ data.imgPathDetail } alt={ data.title } />
                <div className="register-modal__product">
                    <div className="register-modal__product-info">
                        <h1>Meu Carrinho</h1>
                        <h2>{ data.title }</h2>
                        <span className="register-modal__price">{ data.price }</span>
                        <p className='register-modal__color-name'>
                            Cor:{" "}
                            {
                                data.colors.length === 1
                                ? data.colors.map((color, index) => (
                                    <span key={index}>{color}</span>
                                ))
                                : data.colors.map((color, index) => 
                                    index + 1 === data.colors.length ? (
                                        <span key={index}>{color}</span>
                                    ) : (
                                        <span key={index}>{color}, </span>
                                    )
                                ) 
                            }
                        </p>
                        <div className='register-modal__color'>
                            {
                                data.colors.map((color) => (
                                    <div style={{
                                        width: "40px",
                                        height: "40px",
                                        border: "1px solid #000",
                                        borderRadius: "10px",
                                        backgroundColor: color,
                                    }}
                                    ></div>
                                ))
                            }
                        </div>
                        <Link to={`/home`}>
                            <button className="register-modal__button-continue">Continuar Comprando</button>
                        </Link>
                        <Link to={`/pay`}>
                            <button className="register-modal__button-finished">Finalizar Compra</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default RegisterModal;