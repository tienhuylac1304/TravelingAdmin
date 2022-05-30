import "./../components/css/Profile.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import { Link ,useLocation} from "react-router-dom";
import { apiUrl } from '../api'


const CustomerDetails = ({account}) => {
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
                            <img src={`${apiUrl}/images/${data.profilePicture}`} />
                        </div>
                        <table className="tb">
                            <tr>
                                <td className="tb_header">
                                    Name
                                </td>
                                <td className="tb_body">{data.fullName}</td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    Date of birth
                                </td>
                                <td className="tb_body">{data.dateOfBirth}</td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    Phone
                                </td>
                                <td className="tb_body">{data.phone}
                                </td>
                            </tr>
                        </table>
                        <Link to="/Customer" className="tb_title">
                            Back to list
                        </Link>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CustomerDetails