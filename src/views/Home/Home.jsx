import './index.scss';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Footer from '../../components/Footer/Footer';
import Folder from '../../assets/images/menuFolder.svg';
import ProductsCard from '../../components/ProductsCard/ProductsCard';

const Home = ({ data }) => {
    return (
        <section className="home">
            <HeaderMenu />
            <div className="home__content">
                <img src={ Folder } alt="Folder" className='home__imgFolder'/>
                <div className="home__products-container">
                    <div className='home__products-card'>
                    {
                        data.map((products) => (
                            <ProductsCard key={products.id} data={ products } />
                        ))
                    }
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Home;