import './App.css';
import Banner1 from './image/banner/banner1.jpg'
import Banner2 from './image/banner/banner2.jpg'
import Anh1 from './image/anh/anh1.jpg'
import Anh2 from './image/anh/anh2.jpg'
import Anh6 from './image/anh/anh6.jpg'
import Anh7 from './image/anh/anh7.jpg'
import SP9 from './image/sanpham/sp9.png'
import SP10 from './image/sanpham/sp10.png'
import SP11 from './image/sanpham/sp11.png'
import SP12 from './image/sanpham/sp12.png'
import SP13 from './image/sanpham/sp13.png'
import SP14 from './image/sanpham/sp14.png'
import SP15 from './image/sanpham/sp15.png'
import SP16 from './image/sanpham/sp16.png'
import SP17 from './image/sanpham/sp17.png'
import SP18 from './image/sanpham/sp18.png'
import SP19 from './image/sanpham/sp19.png'
import SP20 from './image/sanpham/sp20.png'
import SP21 from './image/sanpham/sp21.png'
import SP22 from './image/sanpham/sp22.png'
import SP23 from './image/sanpham/sp23.png'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';


function App() {
    return (
        <div className="App" >
            <Header />
            <div className="main">
                <div className="main-banner animate__animated animate__zoomIn animate__slow">
                    <div className="main-header-slclassNameer single-item">
                        <div className="main-banner-item">
                            <img src={Banner1} alt="" />
                            <div className="container">
                                <div className="main-banner-item-text">
                                    <h4 className="main-banner-item-text-tittle ">mona watch</h4>
                                    <h1 className="main-banner-item-text-tittle1">đồng hồ classNameico</h1>
                                    <p className="main-banner-item-text-info">
                                        Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…
                                    </p>
                                    <a href="" className="main-banner-item-text-btn"><p>xem sản phẩm</p></a>
                                </div>
                            </div>
                        </div>

                        <div className="main-banner-item">
                            <img src={Banner2} alt="" />
                            <div className="container">
                                <div className="main-banner-item-text">
                                    <h4 className="main-banner-item-text-tittle ">mona watch</h4>
                                    <h1 className="main-banner-item-text-tittle1">đồng hồ classNameico</h1>
                                    <p className="main-banner-item-text-info">
                                        Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…
                                    </p>
                                    <a href="" className="main-banner-item-text-btn"><p>xem sản phẩm</p></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-banner-arrow main-banner-arrow-left">
                        <p><i className="fas fa-arrow-left"></i></p>
                    </div>
                    <div className="main-banner-arrow main-banner-arrow-right">
                        <p><i className="fas fa-arrow-right"></i></p>
                    </div>
                </div>



                <div className="main-2">
                    <div className="container">
                        <div className="main-2-s">
                            <div className="main-2-item animate__animated animate__backInDown animate__slow">
                                <div className="main-2-item-img"><a href=""><img className="main-2-item-img-image" src={Anh1} alt="" /></a></div>
                                <div className="main-2-item-text">
                                    <h3>Xu hướng 2019</h3>
                                    <h1>Đồng hồ nam</h1>
                                </div>
                            </div>

                            <div className="main-2-item animate__animated animate__backInDown animate__slow">
                                <div className="main-2-item-img"><a href=""><img className="main-2-item-img-image" src={Anh2} alt="" /></a></div>
                                <div className="main-2-item-text">
                                    <h3>Xu hướng 2019</h3>
                                    <h1>Đồng hồ nữ</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="main-4" data-aos="fade-left">
                    <div className="container">
                        <div className="main-4-s">
                            <div className="row1">
                                <div className="main-4-item">
                                    <a href=""><img className="main-4-item-image" src={Anh6} alt="" /></a>
                                    <div className="main-4-text">
                                        <h2>cổ điển</h2>
                                        <p>Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…</p>
                                    </div>
                                </div>

                                <div className="main-4-item" >
                                    <a href=""><img className="main-4-item-image" src={Anh7} alt="" /></a>
                                    <div className="main-4-text main-4-text-1">
                                        <h2>SMART WATCH</h2>
                                        <p>Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-5">
                    <div className="container">
                        <div className="main-5-s">
                            <div className="main-5-tittle" data-aos="fade-left" >
                                <ul className="main-5-tittle-list">
                                    <li className="main-5-tittle-list-item main-5-tittle-list-item-active"><a href="">Sản phẩm phổ biến</a></li>
                                    <li className="main-5-tittle-list-item"><a href="">Sản phẩm khuyến mãi</a></li>
                                    <li className="main-5-tittle-list-item"><a href="">Sản phẩm mới</a></li>
                                </ul>
                            </div>
                            <div className="row1" data-aos="fade-right" >
                                <div className="main-5-item" >
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP9} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>

                                <div className="main-5-item" >
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP10} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>


                                <div className="main-5-item" >
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP11} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>


                                <div className="main-5-item" >
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP12} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>


                                <div className="main-5-item">
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP13} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>

                                <div className="main-5-item">
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP14} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>


                                <div className="main-5-item">
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP15} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>


                                <div className="main-5-item">
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP16} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>



                                <div className="main-5-item">
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP17} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>


                                <div className="main-5-item">
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP18} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>


                                <div className="main-5-item">
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP19} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>



                                <div className="main-5-item">
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP20} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>



                                <div className="main-5-item">
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP21} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>



                                <div className="main-5-item">
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP22} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>


                                <div className="main-5-item">
                                    <a href="./product-information.html"><img className="main-5-item-image" src={SP23} alt="" /></a>
                                    <div className="main-3-item-text">
                                        <h3 className="main-3-item-text-name">classNameico 3</h3>
                                        <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                                        <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                                    </div>
                                    <div className="love-card">
                                        <p><i className="fas fa-heart"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-7" data-aos="fade-left" >
                    <div className="container">
                        <div className="main-7-s">
                            <div className="main-7-tittle">
                                <h2>ĐĂNG KÝ NHẬN THÔNG TIN</h2>
                            </div>
                            <div className="main-7-search">
                                <input type="text" placeholder="Tìm kiếm..." className="main-7-search-input" />
                                <button type="submit" className="main-7-search-btn">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;