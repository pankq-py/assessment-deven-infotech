import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AboutUs } from './AllTabs/AboutUs';
import { ContactUs } from './AllTabs/ContactUs';
import { Table } from './AllTabs/Table';

export const AllTabs = () => {
    const isLoggedInValue = JSON.parse(sessionStorage.getItem('isLoggedIn'));
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/');
        sessionStorage.setItem('isLoggedIn', false);
    }

    return (
        <>
            {
                isLoggedInValue === true ?
                    <>
                        <Tabs
                            defaultActiveKey="home"
                            className="mb-3 "
                            style={{position: 'sticky'}}
                        >
                            <Tab eventKey="home" title="Home">
                                <Table />
                            </Tab>
                            <Tab eventKey="about" title="About">
                                <AboutUs />
                            </Tab>
                            <Tab eventKey="contact" title="Contact Us">
                                <ContactUs />
                            </Tab>
                            <Tab eventKey="logout" title="Logout">
                                <div className='pt-5'>
                                    <button className="btn btn-primary" onClick={redirectToHome}>Logout</button>
                                </div>
                            </Tab>
                        </Tabs>
                    </>

                    :
                    
                    <>This page isn't available, coz no user logged in
                        <Link to="/">click here to sign in</Link>
                    </>
            }
        </>
    )
}
