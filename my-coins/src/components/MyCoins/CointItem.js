import React, { Component } from "react";

export default class CointItem extends Component {
  
  render() {
    const {myCoin} = this.props;
    return (
        
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="box">
                <div class="icon"><i class="bi bi-currency-bitcoin"></i></div>
                <h4 class="title"><a href="">{myCoin.Name}</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
              </div>
            </div>


    );
  }
}
