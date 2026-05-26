import { Download, Star } from "lucide-react";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
    const { title, image, downloads, ratingAvg, id } = app

    // K and M bananor kousol
    let millionsDownloads = downloads;

    if (downloads >= 1000000) {
        millionsDownloads = (downloads / 1000000).toFixed(0) + "M";
    }
    else if (downloads >= 1000) {
        millionsDownloads = (downloads / 1000).toFixed(0) + "K";
    }


    return (

        <Link to={`/apps/${id}`}>
            <div className="bg-gray-50 shadow-sm rounded-2xl hover:scale-105 transition ease-in-out space-y-4 p-4">

                <figure className="p-4">
                    <img className="w-90 h-60 object-cover" src={image} alt="" />
                </figure>
                <h2 className="ml-4">{title}</h2>
                <div className="flex justify-between items-center">
                    <h2 className="btn flex items-center text-[#00D390] bg-[#F1F5E8] ml-4"><Download />{millionsDownloads}</h2>
                    <h2 className="btn bg-[#FFF0E1] flex items-center text-[#FF8811] mr-4"><Star />{ratingAvg}</h2>
                </div>

            </div>
        </Link>
    );
};

export default AppsCard;