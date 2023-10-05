import { useState } from "react";

const ContactComponent = () => {

  const [name, setName] = useState('');

    return(
        <>
        <div class="contact_section layout_padding">
                          <div class="container">
                            <div class="row">
                              <div class="col-sm-12">
                                <h2 class="contact_taital">Hello MY Name Is {name} </h2>
                              </div>
                            </div>
                            <div class="contact_section_2">
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="mail_section map_form_container">
                                    <form action="">
                                      <input type="text" class="mail_text" placeholder="Name" name="Name" onChange={(e) => setName(e.target.value)} /> 
                                        <input type="text" class="mail_text" placeholder="Phone Number" name="Phone Number"/>
                                          <input type="text" class="mail_text" placeholder="Your Email" name="Your Email"/>
                                            <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                                            <div class="send_bt active"><a href="#">Send Now</a></div>
                                          </form>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>
        </>
    );
}

export default ContactComponent;