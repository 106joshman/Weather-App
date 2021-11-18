import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="head-logo">
                <span>D</span>ev-<span>G</span>uy
            </div>
            <div className="search-box">
                <form action="to get location" method="get">
                    <input type="search" className="Search" name="search-box" placeholder="Enter city or location..." id=""/>
                </form>
            </div>
        </div>
    );
}
 
export default Header;