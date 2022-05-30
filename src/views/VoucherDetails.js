import "./../components/css/Profile.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import { Link ,useLocation} from "react-router-dom";
import { apiUrl } from '../api'


const VoucherDetails = ({account}) => {
    const location = useLocation()
    const data = location.state
    console.log(data)
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="profile">
                    <div className="profile_tb">
                        <div className="prof_img">
                            <img src={`${apiUrl}/images/${data.image}`} />
                            <h2>{data.name}</h2>
                        </div>
                        <table className="tb">
                            <tr>
                                <td className="tb_header">
                                    Description
                                </td>
                                <td className="tb_body">{data.description}</td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    Start
                                </td>
                                <td className="tb_body">{data.start}</td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    End
                                </td>
                                <td className="tb_body">{data.end}
                                </td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    Type
                                </td>
                                <td className="tb_body">{data.type}
                                </td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    Code
                                </td>
                                <td className="tb_body">{data.code}
                                </td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    Limit
                                </td>
                                <td className="tb_body">{data.limit}
                                </td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    Value
                                </td>
                                <td className="tb_body">{data.value*100}%
                                </td>
                            </tr>
                        </table>
                        <Link to="/vouchers" className="tb_title">
                            Back to list
                        </Link>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default VoucherDetails