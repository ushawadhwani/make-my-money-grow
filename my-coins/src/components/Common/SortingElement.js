import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSortValue } from '../../actions/CoinAction';

class SortingElement extends Component {
  render() {
    const { sortBy } = this.props;
    return (
      <nav id="navbar" class="navbar" style={{ flexDirection: 'row-reverse' }}>
        <ul>
          <li class="dropdown">
            <a>
              <span>Sort by : {sortBy}</span> <i class="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li onClick={() => this.props.updateSortValue('Name')}>
                <a>Name</a>
              </li>
              <li onClick={() => this.props.updateSortValue('Ticker')}>
                <a>Ticker</a>
              </li>
              <li onClick={() => this.props.updateSortValue('Price')}>
                <a>Price</a>
              </li>
              <li onClick={() => this.props.updateSortValue('PriceChange')}>
                <a>Price Change</a>
              </li>
              <li onClick={() => this.props.updateSortValue('Mentions')}>
                <a>Mentions</a>
              </li>
              <li onClick={() => this.props.updateSortValue('MentionsChange')}>
                <a>Mentions Change</a>
              </li>
              <li onClick={() => this.props.updateSortValue('PositiveSentimentPrec')}>
                <a>Positive Sentiment Prec</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (reducerObj) => {
  const sortBy = reducerObj.coinObject.sortBy;
  return {
    sortBy,
  };
};

export default connect(mapStateToProps, {
  updateSortValue,
})(SortingElement);
