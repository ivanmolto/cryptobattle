import PropTypes from "prop-types";
import React from "react";

class Delayed extends React.Component {
  state = {
    show: false,
  };
  componentDidMount() {
    this.timeout = window.setTimeout(() => {
      this.setState({ show: true });
    }, this.props.wait);
  }
  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }
  render() {
    return this.state.show === true ? this.props.children : null;
  }
}

Delayed.defaultProps = {
  wait: 300,
};

Delayed.propTypes = {
  children: PropTypes.node.isRequired,
  wait: PropTypes.number,
};

export default class Loading extends React.Component {
  state = { content: this.props.text };

  componentDidMount() {
    const { speed, text } = this.props;

    this.interval = window.setInterval(() => {
      this.state.content === text + "..."
        ? this.setState({ content: text })
        : this.setState(({ content }) => ({ content: content + "." }));
    }, speed);
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return (
      <Delayed>
        <div className="flex flex-col justify-center">
          <p className="mt-32 mb-80 text-md text-center font-montserrat">
            {this.state.content}
          </p>
        </div>
      </Delayed>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300,
};
