import { Link } from "react-router-dom";


export default function DisplayWishList(props) {
    return (
        <div className="flex justify-between items-center mt-6 pt-6">
            <div className="flex items-center"> <img src={"images/" + props.obj.Image + ".jpg"} width="60" className="rounded-full " />
                <div className="flex flex-col ml-3"> 
                    <span className="md:text-md font-medium">{props.obj.ProductName}</span>
                </div>
            </div>
            <div className="flex justify-center items-center">
            <div className="pr-2 ">
                <h2 className="text-xs font-medium">$ {props.obj.Price}</h2>
            </div>
            <div>
                <i className="fa fa-close text-xs font-medium"></i>
            </div>
        </div>
      </div>
    )
}