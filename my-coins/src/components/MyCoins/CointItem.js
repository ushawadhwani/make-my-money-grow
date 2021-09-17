import React, { Component } from "react";
import { withRouter } from "react-router";

class CointItem extends Component {
  redirectToDetail = ()=>{
const {myCoin} = this.props;
    this.props.history.push({
      pathname:
        "/detail/" +
        myCoin.Name+
        "/" +
        myCoin.Ticker ,
    });
  }
  render() {
    const {myCoin} = this.props;
    return (
        
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100" onClick={this.redirectToDetail}>
              <div class="box">
                <div class="icon"><i class="bi bi-currency-bitcoin"></i></div>
                <h4 class="title"><a href="">{myCoin.Name} [{myCoin.Ticker}]</a></h4>
                <p class="description">
                  <li><strong>Price</strong>: {myCoin.Price}</li>
                <li><strong>Price Change</strong>: {myCoin.PriceChange}</li>
                <li><strong>MentionsChange</strong>: {myCoin.MentionsChange}</li>
                <li><strong>Mentions</strong>: {myCoin.Mentions}</li>
                <li><strong>PositiveSentimentPrec</strong>: {myCoin.PositiveSentimentPrec}</li>
                </p>

              </div>
            </div>


    );
  }
}

export default withRouter(CointItem);
