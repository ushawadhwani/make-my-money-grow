import React from "react";
import { withRouter } from "react-router";
import Popper from "@material-ui/core/Popper";
import {coinsData} from "../../data/myCoinsData";

class Searchbar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
      anchorEl: null,
    };
  }

  onChange = (event) => {
    var query = event.target.value;
    var newArray = coinsData.filter((item) => {
      const suggestionText = `${item.Name} (${item.Ticker})`;
      if (suggestionText.toLowerCase().includes(query.toLowerCase())) {
        return item;
      }
    });
    this.setState({
      value: event.target.value,
      suggestions: newArray,
      anchorEl: event.currentTarget,
    });
  };

  listItemClicked = (event) => {
    const data = this.state.suggestions[event.currentTarget.id];
    this.setState({
      value: `${data.Name} (${data.Ticker})`,
      suggestions: [],
    });
    this.props.history.push({
      pathname:
        "/detail/" +
        data.Name+
        "/" +
        data.Ticker ,
    });
  };

  render() {
    const { value, suggestions } = this.state;

    return (
      <>
        <input
          name="address"
          type="text"
          value={value}
          onChange={this.onChange}
          placeholder="Enter Coin Here"
          class="inputBox"
        />
        <Popper
          id={"simple-popper"}
          open={value !== "" && suggestions.length > 0}
          anchorEl={this.state.anchorEl}
          class="paper"
        >
          <div class="list">
            <b>Did you mean this coin?</b>
            <hr class="hr1" style={{ margin: "10px" }} />
            {suggestions.map((data, index) => {
              return (
                <>
                  <li onClick={this.listItemClicked} id={index}>
                    {`${data.Name} (${data.Ticker})`} <br />
                  </li>
                  <hr class="hr" />
                </>
              );
            })}
          </div>
        </Popper>
      </>
    );
  }
}

export default withRouter(Searchbar);