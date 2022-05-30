import "./../components/css/Vouchers.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import axios from "axios";
import { apiUrl } from '../api';
import React, { useState, useEffect } from 'react'

const Vouchers = ({ account }) => {
    const [vouchersData, setVouchersData] = useState([])
    // api data 
    // const vouchers=[
    //     {
    //     _id: "1",
    //     name: "Voucher discount 10% price",
    //     code: "ELAP10PERCENT",
    //     image: "voucher.jpg",
    //     type: "percent",
    //     value: 0.1,
    //     limit: 10,
    //     start: "2-12-2021",
    //     end: "5-1-2022",
    //     description: "This voucher will discount your order 10%"
    //     }
    //     ]
    useEffect(() => {
        axios.get(`${apiUrl}/vouchers`)
            .then(data => {
                setVouchersData(data["data"])
            })
    }, [vouchersData])
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="Vouchers">
                    <div className="laptop_tb">
                        <h1 className="tb_title">Vouchers List</h1>
                        <div className="ctn_btnCre">
                            <Button className="btn_create" type="create" href="#" />
                        </div>
                        <table className="tb">
                            <tr className="tb_header">
                                <td>ID</td>
                                <td>Name</td>
                                <td>Type</td>
                                <td>Start</td>
                                <td>End</td>
                                <td>Quality</td>
                                <td></td>
                            </tr>
                            {vouchersData.map(voucher => (
                                <tr key={voucher._id} className="tb_body">
                                    <td>{voucher._id}</td>
                                    <td>{voucher.name}</td>
                                    <td>{voucher.type}</td>
                                    <td>{voucher.start}</td>
                                    <td>{voucher.end}</td>
                                    <td>{voucher.limit}</td>
                                    <td className="btn_ctn">
                                        <Button type="details" href="/VoucherDetails" state={voucher}></Button>
                                        <Button type="edit" href="#"></Button>
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

export default Vouchers