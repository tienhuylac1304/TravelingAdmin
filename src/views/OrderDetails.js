import Header from "../components/layout/Header";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import "./../components/css/ProductDetails.css"
import { Link, useLocation } from "react-router-dom";
import { apiUrl } from '../api'
import axios from "axios";

const OrderDetails = ({ account }) => {
    const location = useLocation()
    const data = location.state
    console.log(data)
    const handleClickAccept = (idOrder) => {
        // console.log(user1Id);
        axios.post(`${apiUrl}/admins/orders/${idOrder}/1`)
        // .then(d)
    }
    const orderStatus = (state) => {
        switch (state) {
            case "0":
                return "Waiting Confirm"
                break;
            case "1":
                return "Preparing"
                break;
            case "2":
                return "Delivering"
                break;
            case "3":
                return "Completed"
                break;
            case "4":
                return "Cancelled"
                break;
            case "5":
                return "Return Refund"
                break;
            default:
                return;
                break;
        }
    }
    return (
        <>
            <Header />
            <table className="order_container">
                <td className="pro_content">
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Customer:</div>
                        </div>
                        <div className="col_2">
                            <div className="value">{data.DeliveryInfo.name}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Phone:</div>
                        </div>
                        <div className="col_2">
                            <div className="value">{data.DeliveryInfo.phone}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Address:</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="value">{data.DeliveryInfo.address}</div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Message:</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="value">{data.Message}</div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Voucher:</div>
                        </div>
                        <div className="col_2">
                            <div className="value">{data.Voucher[0].code}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Delivery Fee:</div>
                        </div>
                        <div className="col_2">
                            <div className="value">${data.DeliveryFee}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">PaymentMethod:</div>
                        </div>
                        <div className="col_2">
                            <div className="value">{data.PaymentMethod}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col_1">
                            <div className="title">Update time:</div>
                        </div>
                        <div className="col_2">
                            <div className="value">{data.updatedAt}</div>
                        </div>
                    </div>
                </td>
                <td className="Rating">
                    <h1>Order item</h1>
                    {data.OrderItems.map(item => (
                        <div className="orderItem">
                            <div className="row">
                                <div className="col_1">
                                    <img className="order_img" src={`${apiUrl}/images/${item.idProduct.image[0]}`} />
                                </div>
                                <div className="col_1">
                                    <div className="row">
                                        <div className="title">{item.idProduct.name}</div>
                                    </div>
                                    <div className="row">
                                        <div className="title">${item.idProduct.price}</div>
                                    </div>
                                </div>
                                <div className="col_3">
                                    <div className="value">x{item.itemNum}</div>
                                </div>
                                <div className="row">
                                    <div className="value">Total: ${item.itemNum * item.idProduct.price}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="row">
                        <div className="final_total">
                            Total: ${data.Total}
                        </div>
                    </div>
                    <div className="row">
                        <div className="status">Status: {orderStatus(data.Status)}</div>
                    </div>
                    {
                        data.Status == "0" && (

                            <div
                                onClick={() => handleClickAccept(data._id)}
                            >
                                <Button
                                    type="confirm"
                                    href="/Orders" />
                            </div>
                        )
                    }
                </td>
                <div className="row">
                    <Link to="/Orders">Back to list</Link>
                </div>
            </table>

            <Footer />
        </>
    )
}
const RatingItem = ({ rating }) => {
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
                <Button href="#" type="hide" />
            </div>
        </div>
    </div>
}

export default OrderDetails