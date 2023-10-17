import React from "react";
import "./style.css";
import dollar from "./assets/money-bag.png";
import order from "./assets/checklist.png";
import wallet from "./assets/wallet.png";
import moneybag from "./assets/shopping-bag.png";
import profile from "./assets/profile.png";
import ChartView from "./ChartView";
import CircleChart from "./CircleChart";
import flower1 from "./assets/flowers-19830_1280.jpg"


function Dashboard() {
  return (
    <>
      <div className="main-container">
        <div className="left-sidebar">
          <p className="dashboard">Dashboard</p>
          <ul className="side-navbar">
            <li>
              <a href="Dashboard" className="anchor">
                <i className="fa-solid fa-display"></i> Dashboard
              </a>
              <i className="fa-solid fa-angle-right"></i>
            </li>
            <li>
              <a href="Products" className="anchor">
                <i className="fa-solid fa-box-open"></i> Products
              </a>
              <i className="fa-solid fa-angle-right"></i>
            </li>
            <li>
              <a href="Customers" className="anchor">
                <i className="fa-regular fa-address-card"></i> Customers
              </a>
              <i className="fa-solid fa-angle-right"></i>
            </li>
            <li>
              <a href="Income" className="anchor">
                <i className="fa-solid fa-money-check-dollar"></i> Income
              </a>
              <i className="fa-solid fa-angle-right"></i>
            </li>
            <li>
              <a href="Promote" className="anchor">
                <i className="fa-solid fa-percent"></i> Promote
              </a>
              <i className="fa-solid fa-angle-right"></i>
            </li>
            <li>
              <a href="Help" className="anchor">
                <i className="fa-regular fa-circle-question"></i> Help
              </a>
              <i className="fa-solid fa-angle-right"></i>
            </li>
          </ul>
          <div className="profile">
            <img src={profile} alt="profile-pic" />
            <p className="name">Evano</p>
            <p className="designation">
              Project Manager<i class="fa-solid fa-angle-down"></i>
            </p>
          </div>
        </div>
        <div className="right-sidebar">
          <div className="nav-container">
            <h2 className="h2">Hello Shahrukh 👋,</h2>
            <div className="search-div">
              <i className="fa-solid fa-magnifying-glass lens"></i>
              <input type="search" placeholder="Search" className="search" />
            </div>
          </div>
          <div className="tiles-wrapper">
            <div className="dashboard-tiles">
              <div className="icon">
                <img src={dollar} alt="img" />
              </div>
              <div className="description">
                <p className="earning">Earning</p>
                <p className="dollar">$176k</p>
                <p className="month">
                  <span className="span-tag">
                    <i className="fa-solid fa-arrow-up"></i>37.8%{" "}
                  </span>
                  this month
                </p>
              </div>
            </div>
            <div className="dashboard-tiles">
              <div className="icon">
                <img src={order} alt="img" />
              </div>
              <div className="description">
                <p className="earning">Orders</p>
                <p className="dollar">$2.4k</p>
                <p className="month">
                  <span className="span-tag-red">
                    <i className="fa-solid fa-arrow-down"></i>37.8%{" "}
                  </span>
                  this month
                </p>
              </div>
            </div>
            <div className="dashboard-tiles">
              <div className="icon">
                <img src={wallet} alt="img" />
              </div>
              <div className="description">
                <p className="earning">Balance</p>
                <p className="dollar">$2.4k</p>
                <p className="month">
                  <span className="span-tag-red">
                    <i className="fa-solid fa-arrow-down"></i>37.8%{" "}
                  </span>
                  this month
                </p>
              </div>
            </div>
            <div className="dashboard-tiles">
              <div className="icon">
                <img src={moneybag} alt="img" />
              </div>
              <div className="description">
                <p className="earning">Total Sales</p>
                <p className="dollar">$2.4k</p>
                <p className="month">
                  <span className="span-tag">
                    <i className="fa-solid fa-arrow-up"></i>11.1%{" "}
                  </span>
                  this month
                </p>
              </div>
            </div>
          </div>
          {/* Chart.js */}
          <div className="bar-charts">
            <div className="chart-label">
              <p className="p1">Overview</p>
              <p className="p2">Monthly Earning</p>
            </div>
            <div className="quarter">
              <p>
                Quarterly<i className="fa-solid fa-angle-down"></i>
              </p>
            </div>
            <div className="chartview">
              <ChartView />
            </div>
          </div>
          <div className="circle-chart">
            <div className="cicle-description">
              <p className="cp1">Customers</p>
              <p className="cp2">Customers that Buy Products</p>
            </div>
            <CircleChart />
          </div>
          <div className="bottom-bar">
            <div>
              <p className="product-sell">Product Sell</p>
              <div className="search-bottom">
              <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="search"
                  placeholder="Search"
                  className="search-box"
                />
                <select id="dropdown">
                  <option value="monthly">Last 30 Days</option>
                  <option value="quarterly">Last 90 Days</option>
                  <option value="yearly">Last 365 Days</option>
                </select>
              </div>
            </div>
            <div className="detailed">
              <p className="detail-pTag">Product Name</p>
              <div className="product-detail">
                <p>Stock</p>
                <p>Price</p>
                <p>Total Sales</p>
              </div>
            </div>
            <div className="details-des">
              <img src={flower1} alt="imagespic" className="flower1"/>
              <p className="d3">Abstract 3d</p>
              <p className="flower-p">this flower is very beautiful </p>
              <div className="flower-des">
                <p>32 in Stock</p>
                <p className="dollar-1">$45.99</p>
                <p className="dollar-2">20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
