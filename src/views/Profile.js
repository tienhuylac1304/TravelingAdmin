import "./../components/css/Profile.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";

const Profile = ({account}) => {
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="profile">
                    <div className="profile_tb">
                        <h1 className="tb_title">Profile</h1>
                        <div className="prof_img">
                                <img src={account.proImg}/>
                            </div>
                            <div className="ctn_btnCre">
                                <Button type="edit" href="#"/>
                            </div>
                        <table className="tb">
                            <tr>
                                <td className="tb_header">
                                    Name
                                </td>
                                <td className="tb_body">{account.name}</td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    Date of birth
                                </td>
                                <td className="tb_body">{account.dob}</td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    Regency
                                </td>
                                <td className="tb_body">{account.role}</td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    Phone
                                </td>
                                <td className="tb_body">{account.phone}
                                </td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    Email
                                </td>
                                <td className="tb_body"></td>
                            </tr>
                            <tr>
                                <td className="tb_header">
                                    Address
                                </td>
                                <td className="tb_body"></td>
                            </tr>
                        </table>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Profile