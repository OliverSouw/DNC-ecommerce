import './index.scss';
import carIcon from '../../assets/icons/carIcon.svg';
import { Link } from 'react-router-dom';

const ProductDetail = ({ data }) => {
    return (
        <section className='product-detail'>
            <div className="product-detail__left-side">
                <div className="product-detail__card">
                    <img src={ data.imgPathDetail } alt={ data.title } />
                    <p className='product-detail__card-title'>{ data.title }</p>
                </div>
                <div className="product-detail__description">
                    <h1>Descrição</h1>
                    <p>{ data.title }</p>
                </div>
            </div>
            <div className="product-detail__right-side">
                <h1 className='product-detail__title'>{ data.title }</h1>
                <h2 className='product-detail__price'>{ data.price }</h2>
                <p className='product-detail__color-name'>
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
                <div className="product-detail__cube-colors">
                    {
                        data.colors.map((color) => (
                            <div style={{
                                width: "48px",
                                height: "48px",
                                border: "1px solid #000",
                                borderRadius: "10px",
                                backgroundColor: color,
                            }}
                            ></div>
                        ))
                    }
                </div>
                <div className='product-detail__section-button'>
                    <button>
                        <Link className='product-detail__link' to={ `/register/${data.id}` }>
                            <img className='product-detail__car-icon' src={ carIcon } alt="Icone carrinho" />
                            <p>Adicionar ao carrinho</p>
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;