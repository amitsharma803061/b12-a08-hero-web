import { Link } from "react-router";
import Footer from "../Components/Navbar/Footer";
import Navbar from "../Components/Navbar/Navbar";

const ErrorPages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="p-10 mt-10 text-center space-y-5">
                <img className="block mx-auto  h-auto" src="/src/assets/error-404.png" alt="" />
                <h2 className="text-5xl font-semibold">Oops, page not found!</h2>
                <p className="text-gray-400 text-xl">The page you are looking for is not available.</p>
                <Link to="/" className="btn w-30 bg-gradient-to-r from-[rgb(108,13,231)] to-[rgb(142,7,221)] text-white">Go Back</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPages;