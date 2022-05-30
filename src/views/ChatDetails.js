/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import '../components/css/ChatDetails.css';
import Navigation from "../components/layout/Navigation";
import Header from "../components/layout/Header";
import { Link, useLocation } from "react-router-dom";
import { apiUrl } from '../api';
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import io from "socket.io-client"

const socket = io.connect(apiUrl);
const ChatDetails = ({ account }) => {
    const location = useLocation()
    const data = location.state
    // console.log(data);
    // api data 
    // user1:
    // address: { province: '77', district: '751', ward: '26644', apartmentAddress: '2/3 Bàu Cát 2' }
    // dateOfBirth: "1/1/2000"
    // fullName: "Mạnh Thông"
    // myVouchers: (2)['61acd9ee397fa9f04e1cdee7', '61acdd42397fa9f04e1cdf29']
    // password: "$2b$10$UgYM4wgLb9MM16r4lIcwluMXbzUgXgnw1p4J4ZuHalcg.XJK01wMi"
    // phone: "1"
    // profilePicture: "defaultAvatar_male.png"
    // spinNum: 5
    // _id: "619723d385057261aee0b5a1"
    // [[Prototype]]: Object
    // user2: "61b218d8f8e8f13a3e620eb5"
    // __v: 0
    // _id: "61c1a545a3e568881af558c8"

    //useState
    const [messageData, setMessageData] = useState([

    ])
    const [message, setMessage] = useState("")
    //useEffect
    useEffect(() => {
        socket.emit("join-room", data._id)
    }, [])
    useEffect(() => {
        socket.on("onMessage", (data) => {
            setMessageData((msgs) => [...msgs, data])
        })
    }, [])
    useEffect(() => {
        getAllMessageFromRoom()
    }, [])
    const getAllMessageFromRoom = () => {
        //get all message from room id
        axios.get(`${apiUrl}/rooms/messages/${data._id}`)
            .then((msg) => {
                // console.log(msg["data"]);
                setMessageData(msg["data"])
            })
    }
    const onChangeInput = event => setMessage(
        event.target.value
    )
    const handleSendMessage = () => {

        //convert format date to "3:12 PM, 23/11"
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let ampm = today.getHours() >= 12 ? 'PM' : 'AM';

        if (hours > 12) {
            hours = hours - 12;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        let currentTime = hours + ":" + minutes + " " + ampm + ", " + today.getDate() + '/' + (today.getMonth() + 1)
        let currentMsg = {
            userId: localStorage["CurrentUser"],
            roomId: data._id,
            message: message,
            time: currentTime
        };
        // setMessageD(currentMsg)
        // setMessageData((msgs) => [...msgs, data])
        socket.emit("client-gui-tn", currentMsg)
        setMessage("");
    }
    const MessageItem = ({ message }) => {
        const [fullName, setFullName] = useState(null);

        useEffect(() => {
            getMessageInfo()
        }, [])
        const getMessageInfo = () => {
            //get message info
            axios.get(`${apiUrl}/users/${message.userId}`)
                .then((data) => {
                    // get name who send this message
                    if (data["data"].hasValue) {
                        // console.log(data["data"].user);
                        setFullName(data["data"].user.fullName)
                    }
                })
        }
        return (
            <div class="message">
                <p class="meta">
                    {fullName ? fullName : <span style={{ color: "red" }}>Me </span>}
                    <span> {message.time}</span>
                </p>
                <p class="text">{message.message}</p>
            </div>
        )
    }
    return (
        <>
            <Header />
            <Navigation account={account} />
            <div class="page_content">
                <div class="chat-header">
                    <Link to="/Chats">
                        <FaArrowLeft color='white' />
                    </Link>
                    <div style={{
                        marginRight: 700
                    }}>{data.user1.fullName}</div>
                </div>
                <div class="chat-messages">
                    {
                        messageData.map(msg => <MessageItem message={msg} />)
                    }
                </div>
                <div class="chat-form-container">
                    <form id="chat-form">
                        <input
                            // id="message"
                            type="text"
                            placeholder="Enter Message"
                            // required
                            class="message"
                            name='message'
                            onChange={(event) => {
                                setMessage(event.target.value);
                            }}
                            value={message}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    handleSendMessage();
                                }
                            }}

                        />
                        <div onClick={handleSendMessage} class="btn"><i class='bx bx-mail-send' ></i> Send</div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChatDetails
