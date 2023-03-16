import "./index.scss";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";


const Register = ({ data }) => {
    const { registerId } = useParams();
    const selectedProduct = data.find(product => product.id == registerId);

    return (
        <section className="register">
            <HeaderMenu />
            <RegisterModal data={ selectedProduct }/>   
            <Footer />
        </section>
    )
};


export default Register;