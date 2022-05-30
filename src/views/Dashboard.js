import "./../components/css/Dashboard.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import React, { useState, useEffect, useRef } from "react";
import { apiUrl } from '../api'
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = ({ account }) => {
    const [staffsData, setStaffsData] = useState([])
    const [productNum, setProductNum] = useState(0)
    const [cusNum, setCustNum] = useState(0)
    const [views, setViews] = useState(2348)
    const [ordersNum, setOrdersNum] = useState(0)
    //api data 
    // var staffs=[{
    //     _id: "1",
    //     img:"https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg",
    //     name: "Huy",
    //     role: "BE",
    //     phone: "0123456789"
    //   },
    //   ]
    useEffect(() => {
        axios.get(`${apiUrl}/admins`)
            .then(data => {
                setStaffsData(data["data"].users)
            })
    }, [staffsData])
    useEffect(() => {
        //get productsNum
        axios.get(`${apiUrl}/products`)
            .then(data => {
                setProductNum(data["data"].length)
            })
        //getcusNum
        axios.get(`${apiUrl}/users`)
            .then(data => {
                setCustNum(data["data"].length)
            })
        //getordernum
        axios.get(`${apiUrl}/orders`)
        .then(data => {
            setOrdersNum(data["data"].length)
        })
    }, [])
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="Dashboard">
                    <div className="cards">
                        <div className="card">
                            <h1 className="detail">{productNum}</h1>
                            <h3 className="title">Products</h3>
                            <i className='bx bx-desktop'></i>
                        </div>
                        <div className="card">
                            <h1 className="detail">{cusNum}</h1>
                            <h3 className="title">Customers</h3>
                            <i className='bx bx-user'></i>
                        </div>
                        <div className="card">
                            <h1 className="detail">{views}</h1>
                            <h3 className="title">View</h3>
                            <i className='bx bx-show'></i>
                        </div>
                        <div className="card">
                            <h1 className="detail">{ordersNum}</h1>
                            <h3 className="title">Orders</h3>
                            <i class='bx bx-cart-alt' ></i>
                        </div>
                    </div>
                    <div className="staff_tb">
                        <h1 className="tb_title">Staff List</h1>
                        <div className="ctn_btnCre">
                            <Button type="create" href="#" />
                        </div>
                        <table className="tb">
                            <tr className="tb_header">
                                <td>ID</td>
                                <td>Profile Image</td>
                                <td>Name</td>
                                <td>Role</td>
                                <td>Phone</td>
                                <td></td>
                            </tr>
                            {staffsData.map(staff => (
                                <tr key={staff._id} className="tb_body">
                                    <td>{staff._id}</td>
                                    <td>
                                        <img src={`${apiUrl}/images/${staff.profilePicture}`} />
                                    </td>
                                    <td>{staff.fullName}</td>
                                    <td>{staff.role}</td>
                                    <td>{staff.phone}</td>
                                    <td>
                                        <Button type="details" href="/StaffDetails" state={staff}></Button>
                                        <Button type="delete" href="#"></Button>
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

export default Dashboard