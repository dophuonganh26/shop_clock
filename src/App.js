import './App.css';

function App() {
    return ( 
    <div className = "App" >
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
                        <img src="./logo/logo-mona-2.png" alt=""/>
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
        
        // lam phan icon de dropmenu khi responsive
        <input type="checkbox" className="toggle-menu"/>
        <label for="toggle-menu" className="header-icon-responsive">
            <i className="fas fa-bars" className="header-icon1" ></i>
            <i className="fas fa-times" className="header-icon2"></i>
        </label>
        <div className="header-3">
                <div className="header-3-s">
                    <ul className="header-3-list">
                        <li className="header-3-list-item active"><a href="./index.html" className="header-3-list-item-link">Trang chủ</a></li>
                        <li className="header-3-list-item"><a href="" className="header-3-list-item-link">Giới thiệu</a></li>
                        <li className="header-3-list-item"><a href="./product-boy.html" className="header-3-list-item-link">đồng hồ nam</a></li>
                        <li className="header-3-list-item"><a href="./product-girl.html" className="header-3-list-item-link">đồng hồ nữ</a></li>
                        <li className="header-3-list-item"><a href="./news.html" className="header-3-list-item-link">blogs</a></li>
                        <li className="header-3-list-item"><a href="./contact.html" className="header-3-list-item-link">liên hệ</a></li>
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
// hết phần header

// sang làm phần main
<div className="main" style="overflow-x: hclassNameden;">
 <div className="main-banner animate__animated animate__zoomIn animate__slow">
        <div className="main-header-slclassNameer single-item">
            <div className="main-banner-item">
                <img src="./banner/banner1.jpg" alt=""/>
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
                <img src="./banner/banner2.jpg" alt=""/>
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

    // làm phần mũi tên chuyển slclassNamee 
    <div className="main-banner-arrow main-banner-arrow-left">
        <p><i className="fas fa-arrow-left"></i></p>
    </div>
    <div className="main-banner-arrow main-banner-arrow-right">
        <p><i className="fas fa-arrow-right"></i></p>
    </div>
 </div>


// sang phần tiếp theo sau banner 
 <div className="main-2">
     <div className="container">
         <div className="main-2-s">
             <div className="main-2-item animate__animated animate__backInDown animate__slow">
                 <div className="main-2-item-img"><a href=""><img className="main-2-item-img-image" src="./anh/anh1.jpg" alt=""/></a></div>
                 <div className="main-2-item-text">
                    <h3>Xu hướng 2019</h3>
                    <h1>Đồng hồ nam</h1>
                </div>
             </div>

             <div className="main-2-item animate__animated animate__backInDown animate__slow">
                <div className="main-2-item-img"><a href=""><img className="main-2-item-img-image" src="./anh/anh2.jpg" alt=""/></a></div>
                <div className="main-2-item-text">
                   <h3>Xu hướng 2019</h3>
                   <h1>Đồng hồ nữ</h1>
               </div>
            </div>
         </div>
     </div>
 </div>

//  làm phần main show sản phẩm
 <div className="main-3 " data-aos="fade-right" style="overflow-x: hclassNameden;">
     <div className="container">
         <div className="main-3-tittle">
             <h2>Sản phẩm bán chạy</h2>
             <div className="main-3-tittle-arrow">
                 <div className="main-3-tittle-arrow-left  main-3-tittle-arrow-size">
                    <i className="fas fa-chevron-left"></i>
                 </div>
                 <div className="main-3-tittle-arrow-right main-3-tittle-arrow-size ">
                    <i className="fas fa-chevron-right"></i>
                 </div>
             </div>
         </div>
         <div className="main-3-s row responsive">
             <div className="main-3-item">
                 <div className="main-3-item-img"><a href="./product-information.html"><img src="./sanpham/sp1.png" alt=""/></a></div>
                 <div className="main-3-item-text">
                     <h3 className="main-3-item-text-name">classNameico 3</h3>
                     <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                     <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                 </div>
                 <div className="love-card">
                    <p><i className="fas fa-heart"></i></p>
                   </div>
             </div>

             <div className="main-3-item">
                <div className="main-3-item-img"><a href="./product-information.html"><img src="./sanpham/sp2.png" alt=""/></a></div>
                <div className="main-3-item-text">
                    <h3 className="main-3-item-text-name">classNameico 3</h3>
                    <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                    <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                </div>
                <div className="love-card">
                    <p><i className="fas fa-heart"></i></p>
                   </div>
            </div>


            <div className="main-3-item">
                <div className="main-3-item-img"><a href="./product-information.html"><img src="./sanpham/sp3.png" alt=""/></a></div>
                <div className="main-3-item-text">
                    <h3 className="main-3-item-text-name">classNameico 3</h3>
                    <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                    <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                </div>
                <div className="love-card">
                    <p><i className="fas fa-heart"></i></p>
                </div>
            </div>


            <div className="main-3-item">
                <div className="main-3-item-img"><a href="./product-information.html"><img src="./sanpham/sp4.png" alt=""/></a></div>
                <div className="main-3-item-text">
                    <h3 className="main-3-item-text-name">classNameico 3</h3>
                    <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                    <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                </div>
                <div className="love-card">
                    <p><i className="fas fa-heart"></i></p>
                   </div>
            </div>
            
            <div className="main-3-item">
                <div className="main-3-item-img"><a href="./product-information.html"><img src="./sanpham/sp5.png" alt=""/></a></div>
                <div className="main-3-item-text">
                    <h3 className="main-3-item-text-name">classNameico 3</h3>
                    <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                    <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                </div>
                <div className="love-card">
                    <p><i className="fas fa-heart"></i></p>
                   </div>
            </div>



            <div className="main-3-item">
                <div className="main-3-item-img"><a href="./product-information.html"><img src="./sanpham/sp6.png" alt=""/></a></div>
                <div className="main-3-item-text">
                    <h3 className="main-3-item-text-name">classNameico 3</h3>
                    <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                    <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                </div>
                <div className="love-card">
                    <p><i className="fas fa-heart"></i></p>
                   </div>
            </div>



            <div className="main-3-item">
                <div className="main-3-item-img"><a href="./product-information.html"><img src="./sanpham/sp7.jpg" alt=""/></a></div>
                <div className="main-3-item-text">
                    <h3 className="main-3-item-text-name">classNameico 3</h3>
                    <p className="main-3-item-text-price"><del className="old-price">700.000đ</del> 500.000đ</p>
                    <button className="main-3-item-text-btn">Thêm vào giỏ</button>
                </div>
                <div className="love-card">
                    <p><i className="fas fa-heart"></i></p>
                   </div>
            </div>


            <div className="main-3-item">
                <div className="main-3-item-img"><a href="./product-information.html"><img src="./sanpham/sp8.png" alt=""/></a></div>
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


 <div className="main-4" data-aos="fade-left" style="overflow-x: hclassNameden;">
     <div className="container">
         <div className="main-4-s">
             <div className="row1">
                 <div className="main-4-item">
                        <a href=""><img className="main-4-item-image" src="./anh/anh6.jpg" alt=""/></a>
                     <div className="main-4-text">
                         <h2>cổ điển</h2>
                         <p>Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…</p>
                     </div>
                 </div>

                 <div className="main-4-item" >
                    <a href=""><img className="main-4-item-image" src="./anh/anh7.jpg" alt=""/></a>
                 <div className="main-4-text main-4-text-1">
                     <h2>SMART WATCH</h2>
                     <p>Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…</p>
                 </div>
             </div>

             </div>
         </div>
     </div>
 </div>

//  làm phần main-5
 <div className="main-5">
     <div className="container">
         <div className="main-5-s">
             <div className="main-5-tittle" data-aos="fade-left" style="overflow-x: hclassNameden;">
                 <ul className="main-5-tittle-list">
                     <li className="main-5-tittle-list-item main-5-tittle-list-item-active"><a href="">Sản phẩm phổ biến</a></li>
                     <li className="main-5-tittle-list-item"><a href="">Sản phẩm khuyến mãi</a></li>
                     <li className="main-5-tittle-list-item"><a href="">Sản phẩm mới</a></li>
                 </ul>
             </div>
             <div className="row1"data-aos="fade-right" style="overflow-x: hclassNameden;">
                 <div className="main-5-item" >
                     <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp9.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp10.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp11.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp12.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp13.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp14.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp15.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp16.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp17.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp18.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp19.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp20.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp21.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp22.png" alt=""/></a>
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
                    <a href="./product-information.html"><img className="main-5-item-image" src="./sanpham/sp23.png" alt=""/></a>
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

//làm phần main-6 
 <div className="main-6" data-aos="fade-down">
     <div className="container">
         <div className="main-6-s">
             <div className="row1">
                 <div className="main-6-item">
                     <div className="main-6-item-image">
                         <a href="./new-information1.html"><img src="./anh/anh3.jpg" alt=""/></a>
                     </div>
                     <div className="main-6-item-text">
                         <h5 className="main-6-item-text-tittle">
                           <a href="./new-information1.html"> Chiếc đồng hồ của những CEO quyền lực nhất thế...</a>
                         </h5>
                         <p className="main-6-item-text-info">
                            Đối với một số doanh nhân, một chiếc đồng hồ đeo tay không chỉ là...
                         </p>
                     </div>
                 </div>

                 <div className="main-6-item">
                    <div className="main-6-item-image">
                        <a href="./new-information2.html"><img src="./anh/anh4.jpg" alt=""/></a>
                    </div>
                    <div className="main-6-item-text">
                        <h5 className="main-6-item-text-tittle">
                          <a href="./new-information2.html"> 12 chiếc đồng hồ dành cho nữ giới đắt giá nhất...</a>
                        </h5>
                        <p className="main-6-item-text-info">
                            Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong hai...
                        </p>
                    </div>
                </div>



                <div className="main-6-item">
                    <div className="main-6-item-image">
                        <a href="./new-information3.html"><img src="./anh/anh5.jpg" alt=""/></a>
                    </div>
                    <div className="main-6-item-text">
                        <h5 className="main-6-item-text-tittle">
                          <a href="./new-information3.html"> 10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex...</a>
                        </h5>
                        <p className="main-6-item-text-info">
                            Audemars Piguet được thành lập vào năm 1875 bởi Jules-Louis Audemars và Edward-Auguste Piguet, Audemars Piguet sản xuất...
                        </p>
                    </div>
                </div>

             </div>
         </div>
     </div>
 </div>
//làm phần main-7
 <div className="main-7" data-aos="fade-left" style="overflow-x: hclassNameden;">
     <div className="container">
         <div className="main-7-s">
                <div className="main-7-tittle">
                    <h2>ĐĂNG KÝ NHẬN THÔNG TIN</h2>
                </div>
                <div className="main-7-search">
                    <input type="text" placeholder="Tìm kiếm..." className="main-7-search-input"/>
                    <button type="submit" className="main-7-search-btn">Đăng ký</button>
                </div>
         </div>
     </div>
 </div>
 </div>
//hết phần làm main
<footer>
   <div className="container">
       <div className="footer-s">
        <div className="row2">


            <div className="footer-item footer-item-1">
                <h2 className="footer-item-tittle">THÔNG TIN LIÊN HỆ</h2>
                <div className="footer-item-list">


                    <div className="footer-item-list-item">
                        <div className="footer-item-list-item-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="footer-item-list-item-text">
                            <p><a href="">319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</a></p>
                        </div>
                    </div>

                    <div className="footer-item-list-item">
                        <div className="footer-item-list-item-icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="footer-item-list-item-text">
                            <p><a href="">076 922 0162</a></p>
                        </div>
                    </div>

                    <div className="footer-item-list-item">
                        <div className="footer-item-list-item-icon">
                            <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <div className="footer-item-list-item-text">
                            <p><a href="">demonhunterg@gmail.com
                                mon@mona.media</a></p>
                        </div>
                    </div>

                    <div className="footer-item-list-item">
                        <div className="footer-item-list-item-icon">
                            <i className="fab fa-skype"></i>
                        </div>
                        <div className="footer-item-list-item-text">
                            <p><a href="">demonhunterp</a></p>
                        </div>
                    </div>


                </div>
                <div className="footer-item-icon">
                    <div className="footer-item-icon-item footer-item-icon-item-face">
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                    </div>
                    <div className="footer-item-icon-item footer-item-icon-item-insta">
                        <a href=""><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="footer-item-icon-item footer-item-icon-item-twitter">
                        <a href=""><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="footer-item-icon-item footer-item-icon-item-wifi">
                        <a href=""><i className="fas fa-wifi"></i></a>
                    </div>
                    <div className="footer-item-icon-item footer-item-icon-item-linked">
                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>


               <div className="footer-item footer-item-1">
                <h2 className="footer-item-tittle">LIÊN KẾT</h2>
                <div className="footer-item-list">


                    <div className="footer-item-list-item">
                       
                        <div className="footer-item-list-item-text">
                            <p><a href="./introduce.html">Giới thiệu</a></p>
                        </div>
                    </div>

                    <div className="footer-item-list-item">
                       
                        <div className="footer-item-list-item-text">
                            <p><a href="./product-boy.html">Đồng hồ nam</a></p>
                        </div>
                    </div>

                    <div className="footer-item-list-item">
                        
                        <div className="footer-item-list-item-text">
                            <p><a href="./product-girl.html">Đồng hồ nữ</a></p>
                        </div>
                    </div>

                    <div className="footer-item-list-item">
                       
                        <div className="footer-item-list-item-text">
                            <p><a href="./news.html">Blogs</a></p>
                        </div>
                    </div>

                    <div className="footer-item-list-item">
                       
                        <div className="footer-item-list-item-text">
                            <p><a href="./contact.html">Liên hệ</a></p>
                        </div>
                    </div>

                </div>
            </div>



            <div className="footer-item footer-item-1">
                <h2 className="footer-item-tittle">HỖ TRỢ</h2>
                <div className="footer-item-list">


                    <div className="footer-item-list-item">
                        
                        <div className="footer-item-list-item-text">
                            <p><a href="./introduce.html">Hướng dẫn mua hàng</a></p>
                        </div>
                    </div>

                    <div className="footer-item-list-item">
                        
                        <div className="footer-item-list-item-text">
                            <p><a href="./introduce.html">Hướng dẫn thanh toán</a></p>
                        </div>
                    </div>

                    <div className="footer-item-list-item">
                       
                        <div className="footer-item-list-item-text">
                            <p><a href="./introduce.html">Chính sách bảo hành</a></p>
                        </div>
                    </div>

                    <div className="footer-item-list-item">
                      
                        <div className="footer-item-list-item-text">
                            <p><a href="./introduce.html">Chính sách đổi trả</a></p>
                        </div>
                    </div>

                    <div className="footer-item-list-item">
                    
                        <div className="footer-item-list-item-text">
                            <p><a href="./contact.html">Tư vấn khách hàng</a></p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="footer-item footer-item-4">
                <h2 className="footer-item-tittle">TẢI ỨNG DỤNG TRÊN</h2>
                <div className="footer-item-list">


                    <div className="footer-item-list-item">
                       
                        <div className="footer-item-list-item-text">
                            <p><a href="">Ứng dụng Mona Watch hiện có sẵn trên Google Play & App Store. Tải nó ngay.</a></p>
                        </div>
                    </div>

                    <div className="footer-item-list-item">
                        <img className="footer-item-list-item-img" src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-googleplay.jpg" alt=""/>
                    </div>

                    <div className="footer-item-list-item">
                        <img className="footer-item-list-item-img" src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-appstore.jpg" alt=""/>
                    </div>
                </div>
            </div>



        </div>
       </div>
   </div>
   <h3 className="footer-banquyen">@Bản quyền thuộc về  </h3>
</footer>
        </div>
    );
}

export default App;