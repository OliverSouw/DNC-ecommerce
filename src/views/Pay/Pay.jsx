import "./index.scss";
import PayModal from "../../components/PayModal/PayModal";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Footer from "../../components/Footer/Footer";

const Pay = () => {
    return (
        <section className="register">
            <HeaderMenu />
            <PayModal />   
            <Footer />
        </section>
    )
};


export default Pay;