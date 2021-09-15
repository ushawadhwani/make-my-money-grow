import React, { Component } from "react";

export default class CointItem extends Component {
  
  render() {
    const {myCoin} = this.props;
    return (
        
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="box">
                <div class="icon"><i class="bi bi-briefcase"></i></div>
                <h4 class="title"><a href="">{myCoin.Name}</a></h4>
                <p class="description">{myCoin.Price}</p>
              </div>
            </div>
    );
  }
}
