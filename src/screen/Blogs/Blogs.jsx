import React from 'react'
import '../Blogs/Blogs.css'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import New5 from '../../image/new/new-5.jpg'
import New4 from '../../image/new/new-4.jpg'
import New3 from '../../image/new/new-3.jpg'
import New2 from '../../image/new/new-2.jpg'
import New1 from '../../image/new/new-1.jpg'
import News1 from '../../image/News/new1.jpg'
import News2 from '../../image/News/new2.jpg'
import News3 from '../../image/News/new3.jpg'
import News4 from '../../image/News/new4.jpg'
import News5 from '../../image/News/new5.jpg'
const Blogs = () => {
    return (
        <>
        <Header/>
        <div class="main">
            <div class="container">
                <h1 class="main-tittle">blogs</h1>
                <div class="main-s">
                    <div class="main-left">
                        <div class="main-left-search">
                            <form action="">
                                <div class="main-left-search-frame">
                                    <input type="text" placeholder="Tìm kiếm..."/>
                                        <button type="submit"><i class="fas fa-search"></i></button>
                                </div>
                            </form>
                        </div>


                        <div class="main-left-list">
                            <h2 class="main-left-list-tittle">Bài viết mới</h2>
                            <div class="main-left-list-frame">

                                <div class="main-left-list-frame-item">
                                    <div class="main-left-list-frame-item-img"><a href="./new-information1.html"><img src={New5} alt=""/></a></div>
                                    <div class="main-left-list-frame-item-text">
                                        <p><a href="./new-information1.html">Chiếc đồng hồ của những CEO quyền lực nhất thế giới</a></p>
                                    </div>
                                </div>


                                <div class="main-left-list-frame-item">
                                    <div class="main-left-list-frame-item-img"><a href="./new-information2.html"><img src={New4} alt=""/></a></div>
                                    <div class="main-left-list-frame-item-text">
                                        <p><a href="./new-information2.html">12 chiếc đồng hồ dành cho nữ giới đắt giá nhất mọi thời đại</a></p>
                                    </div>
                                </div>


                                <div class="main-left-list-frame-item">
                                    <div class="main-left-list-frame-item-img"><a href="./new-information3.html"><img src={New3} alt=""/></a></div>
                                    <div class="main-left-list-frame-item-text">
                                        <p><a href="./new-information3.html">10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng số 3</a></p>
                                    </div>
                                </div>


                                <div class="main-left-list-frame-item">
                                    <div class="main-left-list-frame-item-img"><a href="./new-information4.html"><img src={New2} alt=""/></a></div>
                                    <div class="main-left-list-frame-item-text">
                                        <p><a href="./new-information4.html">6 chiếc đồng hồ ấn tượng tại Oscar 2019: Từ những thương hiệu đình đám với cái giá “cắt cổ”</a></p>
                                    </div>
                                </div>

                                <div class="main-left-list-frame-item">
                                    <div class="main-left-list-frame-item-img"><a href="./new-information5.html"><img src={New1} alt=""/></a></div>
                                    <div class="main-left-list-frame-item-text">
                                        <p><a href="./new-information5.html">Casio sẽ ra mắt đồng hồ thông minh thương hiệu G-Shock để cạnh tranh với Apple Watch?</a></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="main-right">
                        <div class="main-right-item">
                            <a href="./new-information1.html"><img src={News1} alt=""/></a>
                            <div class="main-right-item-text">
                                <h2 class="main-right-item-text-tittle"><a href="./new-information1.html">Chiếc đồng hồ của những CEO quyền lực nhất thế giới</a></h2>
                                <p class="main-right-item-text-information"><a href="./new-information1.html">Đối với một số doanh nhân, một chiếc đồng hồ đeo tay không chỉ là...</a></p>
                            </div>

                            <div class="main-right-item-time">
                                <p><span>05</span>  <span>Th7</span></p>
                            </div>
                        </div>


                        <div class="main-right-item">
                            <a href="./new-information2.html"><img src={News2} alt=""/></a>
                            <div class="main-right-item-text">
                                <h2 class="main-right-item-text-tittle"><a href="./new-information2.html">12 chiếc đồng hồ dành cho nữ giới đắt giá nhất mọi thời đại</a></h2>
                                <p class="main-right-item-text-information"><a href="./new-information2.html">Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong hai...</a></p>
                            </div>
                            <div class="main-right-item-time">
                                <p><span>05</span>  <span>Th7</span></p>
                            </div>
                        </div>


                        <div class="main-right-item">
                            <a href="./new-information3.html"><img src={News3} alt=""/></a>
                            <div class="main-right-item-text">
                                <h2 class="main-right-item-text-tittle"><a href="./new-information3.html">10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều...</a></h2>
                                <p class="main-right-item-text-information"><a href="./new-information3.html">Audemars Piguet Được thành lập vào năm 1875 bởi Jules-Louis Audemars...</a></p>
                            </div>
                            <div class="main-right-item-time">
                                <p><span>05</span>  <span>Th7</span></p>
                            </div>
                        </div>



                        <div class="main-right-item">
                            <a href="./new-information4.html"><img src={News4} alt=""/></a>
                            <div class="main-right-item-text">
                                <h2 class="main-right-item-text-tittle"><a href="./new-information4.html">6 chiếc đồng hồ ấn tượng tại Oscar 2019: Từ những thương...</a></h2>
                                <p class="main-right-item-text-information"><a href="./new-information4.html">Bên cạnh những Cartier, IWC và Jaeger-LeCoultre, có nhiều chiếc...</a></p>
                            </div>
                            <div class="main-right-item-time">
                                <p><span>05</span>  <span>Th7</span></p>
                            </div>
                        </div>


                        <div class="main-right-item">
                            <a href="./new-information5.html"><img src={News5} alt=""/></a>
                            <div class="main-right-item-text">
                                <h2 class="main-right-item-text-tittle"><a href="./new-information5.html">Casio sẽ ra mắt đồng hồ thông minh thương hiệu G-Shock...</a></h2>
                                <p class="main-right-item-text-information"><a href="./new-information5.html">Có tin Casio dự định trình làng smartwatch G-Shock trong vòng...</a></p>
                            </div>
                            <div class="main-right-item-time">
                                <p><span>05</span>  <span>Th7</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="main-7">
                <form action="">
                    <div class="container">
                        <div class="main-7-s">
                            <div class="main-7-tittle">
                                <h2>ĐĂNG KÝ NHẬN THÔNG TIN</h2>
                            </div>
                            <div class="main-7-search">
                                <input type="text" placeholder="Tìm kiếm..." id="main-7-search-input" />
                                <button type="submit" id="main-7-search-btn">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Blogs