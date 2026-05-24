
const Home = () => {
    return (
        <nav className="w-full ">

            <div className="w-full border-2 border-amber-500 text-center space-y-4">
                <h2 className="text-6xl font-bold">We Build</h2>
                <h3 className="text-6xl font-bold"><span className="bg-gradient-to-r from-[rgb(108,13,231)] to-[rgb(142,7,221)] bg-clip-text text-transparent">Productive</span> Apps</h3>
                <p className="text-xl md:w-300 w-150 mx-auto text-gray-400 p-2">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="space-x-4 p-2">
                    <button className="btn h-15 border-gray-400 text-xl">
                        <img src="/src/assets/P.png" alt="" />
                        <span>Google Play</span>
                    </button>
                    <button className="btn h-15 border-gray-400 text-xl">
                        <img src="/src/assets/L.png" alt="" />
                        <span>App Store</span>
                    </button>
                </div>
                <img className="block mx-auto  h-auto" src="/src/assets/hero.png" alt="" />
            </div>


            {/* data load kore map korte hobe */}
        </nav>

    );
};

export default Home;