import BestInClass from "../components/bestInClass/BestInClass";
import DriveWithMyRide from "../components/driveWithMyRide/DriveWithMyRide";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NeedARide from "../components/needARide/NeedARide";

const Home = () => {
    return (
        <>
            <Header/>
            <NeedARide/>
            <BestInClass/>
            <DriveWithMyRide/>
            <Footer/>
        </>
    );
}

export default Home;