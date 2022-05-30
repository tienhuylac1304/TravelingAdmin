import Header from "../components/layout/Header";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import "./../components/css/ProductDetails.css"
import { Link ,useLocation} from "react-router-dom";
import { apiUrl } from '../api'


const ProductDetails = ({account}) => {
    const location = useLocation()
    const data = location.state
    console.log(data)
    return (
        <>
            <Header />
            <div className="pro_img">
                <img src={`${apiUrl}/images/${data.image[0]}`} />
            </div>
            <table className="pro_container">
            <div className="row">
                            <h1>{data.name}</h1>
                            <div className="star">
                                <span className="title">Star:</span>
                                <span className="value">{data.star}</span>
                            </div>                       
                    </div>
                <td className="pro_content">
                    <div className="row">
                        <div className="col_1">
                            <div className="title">CPU:</div>
                        </div>
                        <div className="col_2">
                                <div className="value">{data.description.cpu}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Brand:</div>
                        </div>
                        <div className="col_2">
                                <div className="value">{data.description.brand}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">RAM:</div>
                        </div>
                        <div className="col_2">
                                <div className="value">{data.description.ram}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">ROM:</div>
                        </div>
                        <div className="col_2">
                                <div className="value">{data.description.rom}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Battery:</div>
                        </div>
                        <div className="col_2">
                                <div className="value">{data.description.pin}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Category:</div>
                        </div>
                        <div className="col_2">
                                <div className="value">{data.description.category}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Import price:</div>
                        </div>
                        <div className="col_2">
                                <div className="value">${data.giaNhap}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Date added:</div>
                        </div>
                        <div className="col_2">
                                <div className="value">{data.ngayNhap}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Remaining:</div>
                        </div>
                        <div className="col_2">
                                <div className="value">{data.remaining}</div>
                        </div>
                    </div>
                </td>
                <td className="Rating">
                    <h1>Rating</h1>
                    {data.rating.map(rating=>(
                        <div className="row">
                        <h3>{rating.user.name}</h3>
                        <div className="row">
                            <div className="col_1">
                                <div className="title">Star</div>
                            </div>
                            <div className="col_2">
                                <div className="value">{rating.star}</div>
                            </div>
                        </div>
                            <div className="row">
                                <div className="title">Comment</div>
                            </div>
                            <div className="row">
                                <div className="value">{rating.comment}</div>
                            </div>
                        <div className="row">
                            <div className="col_1">
                                <div className="title">{rating.time}</div>
                            </div>
                            <div className="col_2">
                                <div className="value">
                                    <Button href="#" type="hide"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </td>
                <div className="row">
                    <Link to="/laptop">Back to list</Link>
                </div>
            </table>

            <Footer/>
        </>
    )
}
const RatingItem=({rating})=>{
    <div className="row">
        <h3>{rating.user.name}</h3>
        <div className="row">
            <div className="col_1">Star</div>
            <div className="col_2">{rating.star}</div>
        </div>
        <div className="row">
            <div className="col_1">Comment</div>
            <div className="col_2">{rating.comment}</div>
        </div>
        <div className="row">
            <div className="col_1">{rating.time}</div>
            <div className="col_2">
                <Button href="#" type="hide"/>
            </div>
        </div>
    </div>
}

export default ProductDetails