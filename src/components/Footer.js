import React from 'react'
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {  Typography } from '@material-ui/core';
import './Footer.css';
function handleClick(event){
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
function Footer() {
    
    return (
        <div className="bread-body">
            <Breadcrumbs className="bread" aria-label="breadcrumb">
                <Link  to="/github" >
                    GITHUB
                </Link>
                <Link to="/aboutus" >
                    ABOUT US 
                </Link>
                <Typography color="textPrimary">IDEALL </Typography>
            </Breadcrumbs>
        </div>
    )
}

export default Footer
