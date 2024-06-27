import { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import axios from "axios";
import { useAuth } from '../login/AuthContext';
import ProfileModal from './ProfileModal';
import './navbar.css';

const CustomNavbar: FC = () => {
    const [expanded, setExpanded] = useState(false);
    const [employee, setEmployee] = useState<any>({});
    const [showProfileModal, setShowProfileModal] = useState(false);

    const { isLoggedIn, roleName, token, employeeID } = useAuth();

    useEffect(() => {
        const fetchEmployeeData = async () => {
            const baseUrl = "https://thay-backend.vercel.app";
            try {
                const response = await axios.get(`${baseUrl}/api/employee/${employeeID}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const employeeData = response.data[0];
                setEmployee(employeeData);
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        };

        if (isLoggedIn) {
            fetchEmployeeData();
        }
    }, [isLoggedIn, token, employeeID]);

    const handleNavClick = () => {
        setExpanded(false);
    };

    const renderTooltip = (props: any) => (
        <Tooltip id="employee-name-tooltip" {...props}>
            {employee.employeeName} <br />
            {employee.email}
        </Tooltip>
    );

    const handleProfileIconClick = () => {
        setShowProfileModal(true);
    };

    return (
        <Navbar expand="lg" expanded={expanded} className="custom-navbar" style={{ backgroundColor: 'lightSkyBlue' }}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
            <Navbar.Brand as={NavLink} to="/" onClick={handleNavClick} className="p-2">
                <img src="/thayblacklogo.png" alt="Company Logo" className="img-fluid logo" />
            </Navbar.Brand>

            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav style={{ fontSize: 15 }}>
                    {isLoggedIn && (roleName === 'admin' || roleName === 'superuser') && (
                        <>
                            <NavLink to="/AttendanceSheet" className="nav-link p-3" onClick={handleNavClick}>Attendance Sheet</NavLink>
                            <NavLink to="/DisplayEmployees" className="nav-link p-3" onClick={handleNavClick}>Employees List</NavLink>
                            <NavLink to="/PaySlip" className="nav-link p-3" onClick={handleNavClick}>PaySlip</NavLink>
                            <NavLink to="/ReadRole" className="nav-link p-3" onClick={handleNavClick}>Role Details</NavLink>
                            <NavLink to="/DisplayHolidays" className="nav-link p-3" onClick={handleNavClick}>Holiday List</NavLink>
                            <NavLink to="/DisplayTime" className="nav-link p-3" onClick={handleNavClick}>Attendance</NavLink>
                        </>
                    )}
                    {isLoggedIn && roleName === 'employee' && (
                        <>
                            <NavLink to="/AttendanceSheet" className="nav-link p-3" onClick={handleNavClick}>Attendance Sheet</NavLink>
                            <NavLink to="/DisplayHolidays" className="nav-link p-3" onClick={handleNavClick}>Holiday List</NavLink>
                        </>
                    )}
                    {!isLoggedIn && (
                        <NavLink to="/login" className="nav-link p-3" onClick={handleNavClick}>Login</NavLink>
                    )}
                </Nav>
            </Navbar.Collapse>

            {isLoggedIn && (
                <div onClick={handleProfileIconClick} style={{ cursor: 'pointer', marginRight: '15px' }}>
                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                        <div className="ms-2">
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: '#1b5954',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '15px',
                                fontWeight: 'normal',
                            }}>
                                {employee.employeeName &&
                                    `${employee.employeeName.charAt(0).toUpperCase()}${employee.employeeName.includes(' ') ? employee.employeeName.split(' ')[1].charAt(0).toUpperCase() : ''}`}
                            </div>
                        </div>
                    </OverlayTrigger>
                </div>
            )}

            <ProfileModal show={showProfileModal} onHide={() => setShowProfileModal(false)} profileDetails={employee} />
        </Navbar>
    );
};

export default CustomNavbar;
