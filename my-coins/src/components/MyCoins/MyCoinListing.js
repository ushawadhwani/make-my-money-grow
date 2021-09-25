import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import CointItem from './CointItem';
import SearchBar from '../Common/SearchBar';
import SoringElement from '../Common/SortingElement';
import CoinModal from './CoinModal';
import { saveCoin } from '../../actions/CoinAction';
class MyCoinListing extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  saveDataInList = (data) => {
    this.props.saveCoin(data);
  };

  getSortedCoins = () => {
    const { sortBy } = this.props;
    let myCoinArray = [];
    myCoinArray = _.sortBy(this.props.coinList, sortBy, 'asc');
    return myCoinArray;
  };

  render() {
    return (
      <section id="services">
        <div class="container" data-aos="fade-up">
          <div class="section-header" style={{ display: 'flex' }}>
            <h2>
              Coins{' '}
              <i
                onClick={() => {
                  this.toggleModal();
                }}
                class="bi bi-plus-circle-fill"
              ></i>
            </h2>
            <div style={{ marginLeft: 'auto' }}>
              <SearchBar />
            </div>
          </div>
          <div class="row gy-4">
            <SoringElement />
          </div>
          <div class="row gy-4">
            {this.getSortedCoins().map((item, index) => {
              return <CointItem myCoin={item} index={index} />;
            })}
          </div>
        </div>
        <CoinModal
          collapseOne={this.state.isOpen}
          collapseOneOpen={() => {
            this.toggleModal();
          }}
          saveDataInList={(data) => this.saveDataInList(data)}
        />
      </section>
    );
  }
}

const mapStateToProps = (reducerObj) => {
  const sortBy = reducerObj.coinObject.sortBy;
  const coinList = reducerObj.coinObject.coinList;
  return {
    sortBy,
    coinList,
  };
};

export default connect(mapStateToProps, { saveCoin })(MyCoinListing);
