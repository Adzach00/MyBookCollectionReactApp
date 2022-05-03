import React from 'react';
import logo from '../images/logo.png'

export default function Header() {

    return (
        <div className="header">
            <div className="lefthead">
                <img src={logo} alt="" className="logo"/>
                <h1 className="title">My book collection</h1>
            </div>
            <h1 className="aiatitle">Advanced Internet Applications - React</h1>
        </div>
  );
}
