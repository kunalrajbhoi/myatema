const Banner = () => {
    return(
        <>
        <div class="banner_section layout_padding">
          <div class="container-fluid">
            <div id="banner_slider" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="banner_taital_main">
                        <h1 class="banner_taital">We Provide Law Practice</h1>
                        <p class="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                        <div class="readmore_btn active"><a href="#">Read More</a></div>
                        <div class="started_bt"><a href="#">Contact Us</a></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="banner_img"><img src="assest/images/banner-img.png" /></div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="banner_taital_main">
                        <h1 class="banner_taital">We Provide Law Practice</h1>
                        <p class="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                        <div class="readmore_btn active"><a href="#">Read More</a></div>
                        <div class="started_bt"><a href="#">Contact Us</a></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="banner_img"><img src="assest/images/banner-img.png" /></div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="banner_taital_main">
                        <h1 class="banner_taital">We Provide Law Practice</h1>
                        <p class="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                        <div class="readmore_btn active"><a href="#">Read More</a></div>
                        <div class="started_bt"><a href="#">Contact Us</a></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="banner_img"><img src="assest/images/banner-img.png" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
                <i class="fa fa-arrow-left"></i>
              </a>
              <a class="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
                <i class="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        </>
    );
}

export default Banner;