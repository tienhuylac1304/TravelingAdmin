import "./../components/css/Customer.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import axios from "axios";
import { apiUrl } from '../api';
import React, { useState, useEffect } from 'react'

const Customer = ({ account }) => {
    const [customersData, setCustomersData] = useState([])
    // api data 
    //{
    //     address: {
    //       province: "77",
    //       district: "751",
    //       ward: "26644",
    //       apartmentAddress: "2/3 Bàu Cát 2"
    //       },
    //       _id: 1,
    //       fullName: "Mạnh Thông",
    //       password: "$2b$10$UgYM4wgLb9MM16r4lIcwluMXbzUgXgnw1p4J4ZuHalcg.XJK01wMi",
    //       phone: "1",
    //       dateOfBirth: "1/1/2000",
    //       profilePicture: "https://taihinhanh.vn/wp-content/uploads/2021/06/Anh-avatar-cho-con-trai-Taihinhanh-vn-5.jpg",
    //       myVouchers: [
    //       "61acd9ee397fa9f04e1cdee7",
    //       "61acdd42397fa9f04e1cdf29"
    //       ],
    //       spinNum: "5"
    //       }
    useEffect(() => {
        axios.get(`${apiUrl}/users`)
            .then(data => {
                setCustomersData(data["data"])
            })
    }, [customersData])
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="Customer">
                    <div className="customer_tb">
                        <h1 className="tb_title">Customers List</h1>
                        <table className="tb">
                            <tr className="tb_header">
                                <td>ID</td>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Phone</td>
                                <td></td>
                            </tr>
                            {customersData.map(cus => (
                                <tr key={cus._id} className="tb_body">
                                    <td>{cus._id}</td>
                                    <td>
                                        <img src={`${apiUrl}/images/${cus.profilePicture}`} />
                                    </td>
                                    <td>{cus.fullName}</td>
                                    <td>{cus.phone}</td>
                                    <td>
                                        <Button type="details" href="/CustomerDetails" state={cus}></Button>
                                    </td>
                                </tr>
                            ))}

                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Customer