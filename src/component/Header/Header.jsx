import React from 'react'
import './../Header/Header.css'
import LogoMona from '../../image/logo/logo-mona-2.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header>
        <div className="header-1">
            <div className="container">
                <div className="header-1-s">
                    <div className="header-1-item-1">
                        <p className="header-1-item-text-1"><i className="fas fa-map-marker-alt icon"></i> 319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM</p>
                        <p className="header-1-item-text-1"><i className="fas fa-phone-alt icon"></i> <a href="" className="header-1-item-text-link">076 922 0162</a></p>
                    </div>
                    <div className="header-1-item-1">
                        <p className="header-1-item-text-2"><a href="" className="header-1-item-text-link"><i className="fab fa-facebook-f"></i></a></p>
                        <p className="header-1-item-text-2"><a href="" className="header-1-item-text-link"><i className="fab fa-instagram"></i></a></p>
                        <p className="header-1-item-text-2"><a href="" className="header-1-item-text-link"><i className="fab fa-twitter"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="header-2">
            <div className="container">
                <div className="header-2-s">

                    <div className="header-2-logo">
                        <img src={LogoMona} alt=""/>
                    </div>

                    <div className="header-2-search">
                        <input type="text" placeholder="Tìm kiếm"/>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>


                    <div className="header-2-right">
                        <p className="header-2-right-text"><a href=""><i className="fas fa-heart"></i></a></p>
                        <p className="header-2-right-cart"><span className="header-2-right-number">0</span></p>
                    </div>
                </div>
            </div>
        </div>
        
        <input type="checkbox" className="toggle-menu"/>
        <label for="toggle-menu" className="header-icon-responsive">
            <i className="fas fa-bars header-icon1"></i>
            <i className="fas fa-times header-icon2" ></i>
        </label>
        <div className="header-3">
                <div className="header-3-s">
                    <ul className="header-3-list">
                        <li className="header-3-list-item active"><Link to={'/'} className="header-3-list-item-link">Trang chủ</Link></li>
                        <li className="header-3-list-item"><a href="" className="header-3-list-item-link">Giới thiệu</a></li>
                        <li className="header-3-list-item"><a href="./product-boy.html" className="header-3-list-item-link">đồng hồ nam</a></li>
                        <li className="header-3-list-item"><a href="./product-girl.html" className="header-3-list-item-link">đồng hồ nữ</a></li>
                        <li className="header-3-list-item"><a href="./news.html" className="header-3-list-item-link">blogs</a></li>
                        <li className="header-3-list-item"><Link to={'/Contact'} className="header-3-list-item-link">liên hệ</Link></li>
                        <li className="header-3-list-item header-3-list-item-mobile">
                            <div className="header-3-list-item-search">
                                <input type="text" name="" className="header-3-list-item-search-input" placeholder="Tìm kiếm"/>
                                <button className="header-3-list-item-search-btn" type="submit"><i className="fas fa-search"></i></button>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    </header>
    </div>
  )
}

export default Header