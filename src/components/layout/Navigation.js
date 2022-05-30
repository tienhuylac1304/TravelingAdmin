import "./../css/Navigation.css"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Navigation = ({account}) => {
    return (
        <>
            <div className="navigation">
                <ul>
                    <li className="list">
                        <NavLink exact to="/Profile" className="link" activeClassName="active_link">
                            <span className="icon">
                                <img src={account.proImg}></img>
                            </span>
                            <span className="title">
                                { account.name}
                            </span>
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="list">
                        <NavLink exact to="/Dashboard" className="link" activeClassName="active_link">
                            <span class="icon">
                                <i class='bx bxs-dashboard'></i>
                            </span>
                            <span class="title">Dashboard</span>
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="list">
                        <NavLink exact to="/Laptop" className="link" activeClassName="active_link">
                            <span class="icon">
                                <i class='bx bx-laptop'></i>
                            </span>
                            <span class="title">Laptops</span>
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="list">
                        <NavLink exact to="/Customer" className="link" activeClassName="active_link">
                            <span class="icon">
                                <i class='bx bxs-user-account' ></i>
                            </span>
                            <span class="title">Customers</span>
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="list">
                        <NavLink exact to="/Vouchers" className="link" activeClassName="active_link">
                            <span class="icon">
                                <i class='bx bxs-discount' ></i>
                            </span>
                            <span class="title">Vouchers</span>
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="list">
                        <NavLink exact to="/Chats" className="link" activeClassName="active_link">
                            <span class="icon">
                                <i class='bx bxs-chat' ></i>
                            </span>
                            <span class="title">Chat</span>
                        </NavLink>
                    </li>
                    
                </ul>
                <ul>
                    <li className="list">
                        <NavLink exact to="/Orders" className="link" activeClassName="active_link">
                            <span class="icon">
                                <i class='bx bx-food-menu'></i>
                            </span>
                            <span class="title">Orders</span>
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="list">
                        <NavLink exact to="/Reports" className="link" activeClassName="active_link">
                            <span class="icon">
                                <i class='bx bxs-report' ></i>
                            </span>
                            <span class="title">Reports</span>
                        </NavLink>
                    </li>
                </ul>
                <ul className="logout">
                    <li class="list">
                        <NavLink exact to="/Login" className="link" activeClassName="active_link">
                            <span class="icon"><i class='bx bx-log-out' ></i></span>
                            <span class="title">Sign Out</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation