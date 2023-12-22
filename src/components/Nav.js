import './Nav.scss'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='topnav'>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/nhanviens"> Dm nhân viên </NavLink>  
            <NavLink to="/nhomqds"> Nhóm quyết định </NavLink>            
            <NavLink to="/todos"> Todos App </NavLink>
            <NavLink to="/timer"> Timer App </NavLink>
            <NavLink to="/secret"> Secret </NavLink>
        </div>
    )
}

export default Nav