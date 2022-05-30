/* eslint-disable jsx-a11y/alt-text */
import "./../components/css/Chats.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
// import { io } from "socket.io-client";
import React, { useState, useEffect, useRef } from "react";
import { apiUrl } from '../api'
import axios from "axios";

const UnChat = ({ navigation, account }) => {
    let CurrentUser = localStorage['CurrentUser']
    const [roomData, setRoomData] = useState([])
    //useEffect
    useEffect(() => {
        // console.log(localStorage['CurrentUser']);
        axios.get(`${apiUrl}/rooms/unmatch`)
            .then((rooms) => {
                // console.log(rooms["data"].room.user1.profilePicture);
                if (rooms["data"].hasValue) {
                    setRoomData([...roomData, ...rooms["data"].room])
                }
            })
    }, [])
    const handleClickAccept = (user1Id) => {
        // console.log(user1Id);
        axios.post(`${apiUrl}/rooms/match`, {user1: user1Id, user2: CurrentUser})
        // .then(d)
    }
    const RoomItem = ({ room }) => {
        const [lastMessages, setLastMessages] = useState({
            userId: "",
            message: "",
            time: "",
            roomId: ""
        });
        useEffect(() => {
            getAllMessageFromRoom()
        }, [])
        const getAllMessageFromRoom = () => {
            //get all message from room id
            axios.get(`${apiUrl}/rooms/messages/${room._id}`)
                .then((msg) => {
                    // get last message in room 
                    let length = msg["data"].length;
                    // console.log(msg["data"][length-1]);
                    setLastMessages(msg["data"][length - 1])
                })
        }
        return (
            <div className="tb_row" key={room._id}>
                <Link className="mess" to={"/UnChat"}
                    // state={room}
                >
                    <tr className="tb_body">
                        <td rowSpan="3">
                            <img src={`${apiUrl}/images/${room.user1.profilePicture}`} />
                        </td>
                        <td className="col_2">
                            {room.user1.fullName}
                        </td>
                        <td rowSpan="2" className="col_4">
                            {lastMessages.time}
                        </td>
                        <td rowSpan="2" className="col_4">
                            <div
                                onClick={() => handleClickAccept(room.user1._id)}
                            >
                                <Button
                                    type="accept"
                                    href="/Chats" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="chat_content col_2">
                            {lastMessages.userId === CurrentUser && (<span>You: </span>)}{lastMessages.message}
                        </td>
                    </tr>
                </Link>
            </div >
        )
    }
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="Chat">
                    <div className="chat_tb">
                        <div className="Chats_tb_titles">
                            <Link to="/Chats">
                                <h3 className="tb_title">Processing</h3>
                            </Link>
                            <h1 className="tb_title">|</h1>
                            <Link to="/UnChat">
                                <h2 className="tb_title">Waiting for processing</h2>
                            </Link>
                        </div>
                        <table className="tb">
                            {
                                roomData.map(room => (
                                    <RoomItem room={room} />
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UnChat