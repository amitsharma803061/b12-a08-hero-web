
const AppsCard = ({ app }) => {
    const { title, image } = app
    return (

        <div className="bg-gray-50 shadow-sm rounded-2xl hover:scale-105 transition ease-in-out space-y-4 p-4">

            <figure className="p-4">
                <img className="w-90 h-60 object-cover" src={image} alt="" />
            </figure>
            <div>
                <h2>{title}</h2>
            </div>

        </div>
        // <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out space-y-4 p-4">
        //     <figure className="p-4">
        //         <img className="w-130 h-80"
        //             src={image}
        //             alt="Shoes" />
        //     </figure>
        //     <div className="space-y-3">
        //         <div className="text-gray-500 space-y-2">
        //             <h2 className="text-">{title}</h2>
        //             <h2 className="text"><span className="font-semibold">Category:</span> {}</h2>
        //         </div>
        //         <div className="border-t-1 border-solid border-gray-300"></div>
        //         <div className="flex justify-between items-center text-gray-500 space-y-2">
        //             <h2 className="text-"><span className="font-semibold">Price:</span> {} USD</h2>
        //             <h2 className="text">{}</h2>
        //         </div>
        //     </div>
        // </div>
    );
};

export default AppsCard;