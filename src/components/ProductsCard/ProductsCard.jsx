import { Link } from 'react-router-dom';
import './index.scss';

const ProductsCard = ({ data }) => {
    return (
        <section className='products-card'>
            <img src={ data.imgPath } alt="Imagem Produto" />
            <div className='products-card__descripition'>
                <p>{ data.title }</p>
                <button>
                    <Link to={ `/products/${data.id }` }>Ver mais</Link>
                </button>
            </div>
        </section>
    );
};

export default ProductsCard;