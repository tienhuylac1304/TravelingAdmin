import "./../components/css/Vouchers.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import axios from "axios";
import { apiUrl } from '../api';
import React, { useState, useEffect } from 'react'

const Reports = ({ account }) => {
    const [productsData, setProductsData] = useState([])
    useEffect(() => {
        axios.get(`${apiUrl}/orders`)
            .then(data => {
                setProductsData(data["data"])
            })
    }, [productsData])
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
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="Laptop">
                    <div className="laptop_tb">
                        <h1 className="tb_title">Reports List</h1>
                        <div className="ctn_btnCre">
                            <form className="search">
                                <select className="selection">
                                    {["All", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
                                            <option value={item} onChange={()=>console.log(item)}>{item}</option>
                                    ))}
                                </select>
                                <input type="submit" value="Search" className="btn_search" />
                            </form>
                        </div>
                        <table className="tb">
                            <tr className="tb_header">
                                <td>ID</td>
                                <td>Customer</td>
                                <td>Payment method</td>
                                <td>Create time</td>
                                <td>State</td>
                                <td></td>
                            </tr>
                            {productsData.map(pro => (
                                <tr key={pro._id} className="tb_body">
                                    <td>{pro._id}</td>
                                    <td>{pro.DeliveryInfo.name}</td>
                                    <td>{pro.PaymentMethod}</td>
                                    <td>{pro.createdAt}</td>
                                    <td>{orderStatus(pro.Status)}</td>
                                    <td>
                                        <Button type="details" href="/OrderDetails" state={pro}></Button>
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
export default Reports