import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong>Techitree</strong>. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://techitree.com/">Techitree</a>
          </div>
        </div>
      </footer>
    );
  }
}
