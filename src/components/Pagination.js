import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './pagination.cssmodule.css';

@cssmodules(styles)
class Pagination extends React.Component {
  static propTypes = {
    updateList: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = { start: 0 };
    this.nextPage = this.nextPage.bind(this);
    this.backPage = this.backPage.bind(this);
  }

  nextPage() {
    const start = this.state.start + 5;
    this.props.updateList(start);
    this.setState({ start });
  }

  backPage() {
    const start = this.state.start - 5;
    this.props.updateList(start);
    this.setState({ start });
  }

  render() {
    return (
      <div>
        {this.state.start > 0 &&
          <button id="backPage" onClick={this.backPage}>Back</button>}
        <button id="nextPage" onClick={this.nextPage}>Next</button>
      </div>
    );
  }
}

export default Pagination;
