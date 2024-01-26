import BestInClass from "../components/bestInClass/BestInClass";
import DriveWithMyRide from "../components/driveWithMyRide/DriveWithMyRide";
import Header from "../components/header/Header";
import NeedARide from "../components/needARide/NeedARide";

const Home = () => {
    return (
        <>
            <Header/>
            <NeedARide/>
            <BestInClass/>
            <DriveWithMyRide/>
        </>
    );
}

export default Home;