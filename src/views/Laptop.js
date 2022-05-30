import "./../components/css/Laptop.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import axios from "axios";
import { apiUrl } from '../api';
import React, { useState, useEffect } from 'react'

const Laptop = ({ account}) => {
    const [productsData, setProductsData] = useState([])
    // api data 
    //     {
    //     description: {
    //     category: 1,
    //     brand: "Lenovo",
    //     cpu: "Intel core I5, 1135G7, 2.4GHz",
    //     pin: "4000mah",
    //     ram: "8GB",
    //     rom: "128GB"
    //     },
    //     rating: [ ],
    //     _id: "1",
    //     name: "Lenovo Yoga 7",
    //     price: 1420,
    //     promotion: 0,
    //     image: [
    //     "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/5/637717449036171573_lenovo-yoga-7-14acn6-r7-5800u-xam-5.jpg",
    //     "1635353672481lenovo-yoga-7-14itl5-i7-82bh00ckvn-120821-0324000.jpg",
    //     "1635353672484vi-vn-lenovo-yoga-7-14itl5-i7-82bh00ckvn-11.jpg"
    //     ],
    //     star: 4,
    //     remaining: 5
    //     }
    useEffect(() => {
        axios.get(`${apiUrl}/products`)
        .then(data=>{
            setProductsData(data["data"])
        })
    }, [productsData])
    const proCate = (category) => {
        switch (category) {
            case 1:
                return "Business"
                break;
            case 2:
                return "Gaming"
                break;
            case 3:
                return "Graphic"
                break;
            case 4:
                return "Student"
                break;
            case 5:
                return "Like new 95%"
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
                        <h1 className="tb_title">Laptop List</h1>
                        <div className="ctn_btnCre">
                            <Button type="create" href="#"/>
                        </div>
                        <table className="tb">
                            <tr className="tb_header">
                                <td>ID</td>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Brand</td>
                                <td>Price</td>
                                <td></td>
                            </tr>
                            {productsData.map(pro=>(
                                <tr key={pro._id} className="tb_body">
                                <td>{pro._id}</td>
                                <td>
                                    <img src={`${apiUrl}/images/${pro.image[0]}`} />
                                </td>
                                <td>{pro.name}</td>
                                <td>{proCate(pro.description.category)}</td>
                                <td>{pro.description.brand}</td>
                                <td>${pro.price}</td>
                                <td>
                                    <Button type="details" href="/ProductDetails" state={pro}></Button>
                                    <Button type="edit" href="#"></Button>
                                    <Button type="delete" href="#"></Button>
                                </td>
                            </tr>
                            ))}
                            
                        </table>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Laptop