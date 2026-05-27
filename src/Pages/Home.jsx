import { Link } from "react-router";
import useLoader from "../Hooks/UseLoadData";
import AppsCard from "./AppsCard";

const Home = () => {

    const { apps } = useLoader()
    // data ke fetch kore load korar jonne
    const appsCard = apps.slice(0, 8)


    // click the button and go to google play store
    // url = https://play.google.com/store/games?hl=en
    const playStoreUrl = `https://play.google.com/store/games?hl=en`;

    const handleClickGooglePlayStore = () => {
        window.open(playStoreUrl, "_bank", "noopener,noreferrer")
    };

 
    return (
        <nav className="bg-gray-200">

            <div className=" text-center px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1">
                <h2 className="text-6xl font-bold">We Build</h2>
                <h3 className="text-6xl font-bold"><span className="bg-gradient-to-r from-[rgb(108,13,231)] to-[rgb(142,7,221)] bg-clip-text text-transparent">Productive</span> Apps</h3>
                <p className="text-xl  mx-auto text-gray-500 p-2">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="space-x-4 p-2">
                    <button onClick={handleClickGooglePlayStore} className="btn h-15 border-gray-400 text-xl">
                        <img src="/src/assets/P.png" alt="" />
                        <span>Google Play</span>
                    </button>
                    <Link to="/apps" className="btn h-15 border-gray-400 text-xl">
                        <img src="/src/assets/L.png" alt="" />
                        <span>App Store</span>
                    </Link>
                </div>
            </div>

            {/* 2 img tag */}
            <div className="flex justify-center items-center">
                <img src="/src/assets/hero.png" alt="" />
            </div>


            {/* banar dekhanor jonne */}
            <div className="bg-gradient-to-r from-[rgb(82,2,187)] to-[rgb(158,76,235)] text-center px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1">
                <h2 className="text-5xl font-bold text-white mt-8">Trusted by Millions, Built for You</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-15 mt-8">
                    <div className="space-y-3 text-white">
                        <h4 className="text-xl text-gray-300">Total Downloads</h4>
                        <h2 className="text-8xl font-bold">29.6M</h2>
                        <h4 className="text-xl text-gray-300">21% More Then Last Month</h4>
                    </div>

                    <div className="space-y-3 text-white">
                        <h4 className="text-xl text-gray-300">Total Reviews</h4>
                        <h2 className="text-8xl font-bold">936K</h2>
                        <h4 className="text-xl text-gray-300">46% More Then Last Month</h4>
                    </div>

                    <div className="space-y-3 text-white">
                        <h4 className="text-xl text-gray-300">Actives Apps</h4>
                        <h2 className="text-8xl font-bold">132+</h2>
                        <h4 className="text-xl text-gray-300">31 More Then Last Month</h4>
                    </div>
                </div>
            </div>


            {/* data load gulake map koarar jonne */}


            <div className="w-11/12 mx-auto mt-10">
                <div className="text-center space-y-2">
                    <h2 className="text-6xl font-bold">Trending Apps</h2>
                    <p className="text-xl text-gray-500">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

                    {
                        appsCard.map((app) => (<AppsCard key={app.id} app={app}></AppsCard>))
                    }

                </div>
                <div className="text-center mt-5">
                    <Link to="/apps" className="btn text-xl bg-gradient-to-r from-[rgb(108,13,231)] to-[rgb(142,7,221)] text-white mb-5">Show All</Link>
                </div>
            </div>


        </nav>

    );
};

export default Home;