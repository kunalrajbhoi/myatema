const Content = () => {
    return(
        <>
       <div class="container">
        <div class="box_section">
          <div class="online_box">
            <div class="online_box_left">
              <div class="online_box_main">
                <div class="box_left">
                  <div class="right_arrow"><i class="fa fa-arrow-right"></i></div>
                </div>
                <div class="box_right">
                  <p class="book_text">Book At</p>
                  <h4 class="appoinment_text">Appoinment</h4>
                </div>
              </div>
            </div>
            <div class="online_box_left active">
              <div class="online_box_main">
                <div class="box_left">
                  <div class="right_arrow"><i class="fa fa-arrow-right"></i></div>
                </div>
                <div class="box_right">
                  <p class="book_text active">Get Free</p>
                  <h4 class="appoinment_text active"> Evalution</h4>
                </div>
              </div>
            </div>
            <div class="online_box_left">
              <div class="online_box_main">
                <div class="box_left">
                  <div class="right_arrow"><i class="fa fa-arrow-right"></i></div>
                </div>
                <div class="box_right">
                  <p class="book_text">Pay Invoice</p>
                  <h4 class="appoinment_text">Online</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}

export default Content;