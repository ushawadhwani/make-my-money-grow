import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleCoin } from "../../actions/CoinAction";

class MyCoinDetail extends Component {
  componentDidMount = ()=>{
    const { name } = this.props.match.params;
    this.props.getSingleCoin(name, this.props.coinList);
  }
  
  render() {
    const {selectedCoin} = this.props;
    return (
           <>
           <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Coin details</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>Coin details</li>
          </ol>
        </div>

      </div>
    </section>

    <section class="inner-page pt-4">
      <div class="container">
        {selectedCoin &&  <div class="col-lg-4">
            <div class="portfolio-info">
              <h3> {selectedCoin.Name} ({selectedCoin.Ticker})</h3>
              <ul>
                <li><strong>Name</strong>: {selectedCoin.Name}</li>
                <li><strong>Ticker</strong>:{selectedCoin.Ticker}</li>
                <li><strong>Price</strong>: {selectedCoin.Price}</li>
                <li><strong>Price Change</strong>: {selectedCoin.PriceChange}</li>
                <li><strong>MentionsChange</strong>: {selectedCoin.MentionsChange}</li>
                <li><strong>Mentions</strong>: {selectedCoin.Mentions}</li>
                <li><strong>PositiveSentimentPrec</strong>: {selectedCoin.PositiveSentimentPrec}</li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                The portfolio details will be there.
                Like why there is increase or decrease in price of the coin.
                Popularity about the coin!
                Countries people using the coin or birth of coin.
              </p>
            </div>
          </div>
     }
     {!selectedCoin && <div> 
       No record with this detail
       </div>}
      </div>
    </section>


     </>
    );
  }
}

const mapStateToProps = (reducerObj) => {
const coinList = reducerObj.coinObject.coinList;
  const selectedCoin = reducerObj.coinObject.selectedCoin;
  return {
   selectedCoin,
   coinList
  };
};

export default connect(mapStateToProps, {
  getSingleCoin
})(MyCoinDetail);
