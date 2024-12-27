import React from "react";
import Logo from "../../public/Logo.webp";
import SearchIcon from "../assets/icons/SearchIcon";
import ShoppingChart from "../assets/icons/ShoppingChart";

const Header: React.FC = () => {
  return (
    <header>
      <div className="additional">
        <div className="container">
          <div className="header">
            <div className="header-logo">
              <img className="header-logo-item" src={Logo} alt="Logo" />
              <h1 className="header-logo-title">
                <span className="header-logo-title-adnl">B</span>yte
                <span className="header-logo-title-adnl">E</span>at
              </h1>
            </div>
            <div className="header-search">
              <input
                className="header-search-item"
                type="search"
                placeholder="search"
              />{" "}
              <span className="header-search-icon">
                <SearchIcon />
              </span>{" "}
            </div>
            <div className="header-context">
              <div className="header-context-item">MENU</div>
              <div className="header-context-item">CONTACTS</div>
              <div className="header-context-item">LOCATION</div>
              <div className="header-context-chart"> <p className="header-context-chart-title">chart</p><ShoppingChart/></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
