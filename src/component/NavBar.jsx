import React from 'react'
import "../style/Navbar.css"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import Badge from '@mui/material/Badge';

const NavBar = () => {
    const items = useSelector((state) => state.cart.value)

    return (
        <>
            <div className="navbar">
                <div className="navbar_logo">
                    <h1>logo</h1>
                </div>
                <div className="navbar_manuItem">
                    <NavLink to="/" style={{ marginRight: '10px', textDecoration: 'none', color: "white" }}>Home</NavLink>
                    <NavLink to="/cart" style={{ marginRight: '10px', textDecoration: 'none', color: "white" }}>Cart</NavLink>
                    <NavLink to="/counter" style={{ marginRight: '10px', textDecoration: 'none', color: "white" }}>counter</NavLink>
                    <NavLink to="/todolist" style={{ marginRight: '10px', textDecoration: 'none', color: "white" }}>TodoList</NavLink>


                    <span style={{ marginRight: '10px', textDecoration: 'none', color: "white" }}>Cart Items:{items.length}</span>
                    {/* <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge> */}

                </div>

            </div>
        </>
    )
}

export default NavBar
