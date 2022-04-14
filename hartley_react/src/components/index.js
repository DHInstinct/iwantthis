
import { Link } from "react-router-dom";


export default function SingleProd(props) {
    return (
        <Link to={"/single-prod/" + props.obj.id} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src={"images/" + props.obj.image + ".jpg"} className="w-full h-full object-center object-cover group-hover:opacity-75"></img>
            </div>
            {/* <div className={`d-flex justify-content-center ${showArrows}`} style={{ minHeight: '210px' }}></div> */}
            <h3 className="mt-4 text-sm text-gray-700">{props.obj.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">${props.obj.price}</p>
        </Link >
    )
}