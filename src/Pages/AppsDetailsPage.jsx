import { Link, useParams } from "react-router";
import useLoader from "../Hooks/UseLoadData";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { toast } from "react-toastify";

const AppsDetailsPage = () => {

    const [clicked, setClicked] = useState(false);

    const { id } = useParams()
    const { apps, loading } = useLoader()

    // akbar button a click korele MB ta ar ferot asbe na
    useEffect(() => {
        const installingList = JSON.parse(localStorage.getItem("installation"));
        if (installingList) {
            const isAlreadyInstalled = installingList.some(a => String(a.id) === String(id));
            if (isAlreadyInstalled) {
                setClicked(true);
            }
        }
    }, [id]);

    if (loading) return <p>Loading...............</p>
    const app = apps.find(a => String(a.id) === id)

    const { title, image, downloads, ratingAvg, reviews, size, ratings, description } = app


    // K and M banano style for downloads
    const millionsData = downloads >= 1000000
        ? (downloads / 1000000).toFixed(0) + "M"
        : downloads >= 1000
            ? (downloads / 1000).toFixed(0) + "K"
            : downloads;

    // total reviews ke K and M banano
    const totalReviews = reviews >= 1000000
        ? (reviews / 1000000).toFixed(0) + "M"
        : reviews >= 1000
            ? (reviews / 1000).toFixed(0) + "K"
            : reviews;

    // Install a chap dile size hariye jabe


    const handleInstallClick = () => {
        setClicked(true);

        const installingList = JSON.parse(localStorage.getItem("installation"))
        let updatedList = []
        if (installingList) {
            const isListing = installingList.some(a => a.id === app.id)
            if (isListing) {
                return toast.success("This apps downloads is success")
            }
            updatedList = [...installingList, app]
        }
        else {
            updatedList.push(app)
        }
        localStorage.setItem("installation", JSON.stringify(updatedList));
        // toast success
        toast.success(`${app.name || "App"} download started successfully!`);
    };

    // const sortedRatings = [...ratings].sort((a, b) => {
    //     return b.name.localeCompare(a.name);
    // })

    // star gula upore  bro theke choto te nambe
    const bigRating = [...ratings].sort((a, b) => {
        return b.name.localeCompare(a.name);
    })
    return (
        <div className="bg-gray-100 space-y-5 pt-5">
            <div className=" w-11/12 mx-auto flex gap-10 p-4 pt-10">

                <div>
                    <img src={image} className="w-90 h-80 mb-6" alt="image" />
                </div>

                <div className="space-y-3">
                    <h2 className="text-3xl font-semibold">{title}</h2>
                    <h2 className="text-gray-500">Developed by <span className="bg-gradient-to-r from-[rgb(108,13,231)] to-[rgb(142,7,221)] bg-clip-text text-transparent">HERO.IO</span></h2>
                    <div className="border border-solid w-100 md:w-300 border-gray-300"></div>
                    <div className="flex gap-20 mt-5">
                        <div className="space-y-2">
                            <img src="/src/assets/icon-downloads.png" alt="" />
                            <h4 className="text-gray-500">Downloads</h4>
                            <h2 className="text-4xl font-bold">{millionsData}</h2>
                        </div>

                        <div className="space-y-2">
                            <img src="/src/assets/icon-ratings.png" alt="" />
                            <h4 className="text-gray-500">Average Ratings</h4>
                            <h2 className="text-4xl font-bold">{ratingAvg}</h2>
                        </div>

                        <div className="space-y-2">
                            <img src="/src/assets/icon-review.png" alt="" />
                            <h4 className="text-gray-500">Total Reviews</h4>
                            <h2 className="text-4xl font-bold">{totalReviews}</h2>
                        </div>
                    </div>
                    <Link to="" onClick={handleInstallClick} className="btn text-xl text-white bg-emerald-400 mt-8">{clicked ? 'Install Now' : `Install Now (${size}MB)`}</Link>
                </div>

            </div>

            <div className="w-11/12 mx-auto border-1 border-solid border-gray-400"></div>

            {/* bar Chart */}
            <div className="w-11/12 mx-auto">
                <h2 className="text-2xl font-bold">Rating</h2>
                <div className="space-y-4">
                    <BarChart
                        style={{ width: '1500px', maxWidth: '1500px', maxHeight: '700px', aspectRatio: 1.618 }}
                        responsive
                        layout="vertical"
                        width={700}
                        height={400}
                        data={bigRating}

                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#FF8811" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[0, 10, 10, 0]} />
                    </BarChart>
                </div>
            </div>

            {/* description */}
            <div className="w-11/12 mx-auto space-y-3 mt-5 p-5">
                <h2 className="text-xl font-bold">Description</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default AppsDetailsPage;