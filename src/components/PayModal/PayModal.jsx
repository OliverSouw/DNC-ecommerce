import { Link } from 'react-router-dom';
import './index.scss';

const PayModal = () => {
    return (
        <div className="pay-modal">
            <div className="pay-modal__card-modal">
                <div className="pay-modal__product">
                    <div className="pay-modal__info">
                        <h1>Finalizar Compra:</h1>
                        <form className="pay-modal__confirmation">
                            <div>
                                <div className="pay-modal__confirmation-inputs">
                                    <label htmlFor="nome">Digite seu nome:</label>
                                    <input type="text" className='pay-modal__confirmation-input' placeholder='Nome completo' id='nome'/>
                                </div>
                                <div className="pay-modal__confirmation-inputs">
                                    <label htmlFor="cpf">Digite seu CPF:</label>
                                    <input type="text" className='pay-modal__confirmation-input' placeholder='CPF' id='cpf'/>
                                </div>
                                <div className="pay-modal__confirmation-inputs">
                                    <label htmlFor="localization">Digite seu Endereço:</label>
                                    <input type="text" className='pay-modal__confirmation-input' placeholder='Endereço' id='localization'/>
                                </div>
                                <div className="pay-modal__confirmation-inputs">
                                    <label htmlFor="pay">Forma de Pagamento:</label>
                                    <input type="text" className='pay-modal__confirmation-input' placeholder='Digite a forma de pagamento' id='pay'/>
                                </div>
                                <div className='pay-modal__container-btn'>
                                    <button type="submit" className="pay-modal__confirmation-send">
                                        <Link to={ '/home' }>Confirmar Pedido</Link>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default PayModal;