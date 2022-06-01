import React from 'react'
import './../Contact/Contact.css'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Contact1 from '../../image/contact/contact1.PNG'
import Contact2 from '../../image/contact/contact2.PNG'
import Contact3 from '../../image/contact/contact3.PNG'
const Contact = () => {
    return (
        <div>
            <Header/>
            <div className="main">
                <div className="container">
                    <div className="main-1">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.657185685294!2d105.7827275148837!3d21.046398585988733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb158a2305d%3A0x5c357d21c785ea3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyDEkGnhu4duIEzhu7Fj!5e0!3m2!1svi!2s!4v1653973722610!5m2!1svi!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="main-2">
                        <div className="main-2-item">
                            <div className="main-2-item-img">
                                <img src={Contact1} alt="" />
                            </div>
                            <div classNameName="main-2-item-text">
                                <h2>Địa chỉ</h2>
                                <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                            </div>
                        </div>


                        <div className="main-2-item">
                            <div className="main-2-item-img">
                                <img src={Contact2} alt="" />
                            </div>
                            <div className="main-2-item-text">
                                <h2>Điện thoại:</h2>
                                <p><a href="">1900 636 648</a></p>
                                <p>Bấm 109 – Phòng kinh doanh</p>
                                <p>Bấm 103 – Phòng kỹ thuật</p>
                            </div>
                        </div>



                        <div className="main-2-item">
                            <div className="main-2-item-img">
                                <img src={Contact3} alt="" />
                            </div>
                            <div className="main-2-item-text">
                                <h2>Email:</h2>
                                <p><a href="" className="main-2-item-text-link">demonhunterg@gmail.com</a></p>
                                <p><a href="" className="main-2-item-text-link">mon@mona.media</a></p>
                            </div>
                        </div>
                    </div>




                    <div className="main-3">
                        <form action="">
                            <div className="main-3-container">
                                <div className="main-3-item1">
                                    <div className="main-3-item1-item">
                                        <input className="main-3-item1-item-input" type="text" placeholder="Họ và tên" />
                                    </div>

                                    <div className="main-3-item1-item">
                                        <input className="main-3-item1-item-input" type="email" placeholder="Email" />
                                    </div>


                                    <div className="main-3-item1-item">
                                        <input className="main-3-item1-item-input" type="text" placeholder="Số điện thoại"/>
                                    </div>


                                    <div className="main-3-item1-item">
                                        <input className="main-3-item1-item-input" type="text" placeholder="Địa chỉ"/>
                                    </div>
                                </div>


                                <div className="main-3-item2">
                                    <textarea name="" id="" cols="30" rows="7" placeholder="Lời nhắn"></textarea>
                                </div>

                                <div className="main-3-item3">
                                    <input type="submit" value="Gửi"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>




                <div className="main-7">
                    <form action="">
                        <div className="container">
                            <div className="main-7-s">
                                <div className="main-7-tittle">
                                    <h2>ĐĂNG KÝ NHẬN THÔNG TIN</h2>
                                </div>
                                <div className="main-7-search">
                                    <input type="text" placeholder="Tìm kiếm..." id="main-7-search-input" />
                                    <button type="submit" id="main-7-search-btn">Đăng ký</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact