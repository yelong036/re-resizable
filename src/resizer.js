import React, { Component, PropTypes } from 'react';

const styles = {
  base: {
    position: 'absolute',
  },
  x: {
    width: '10px',
    height: '100%',
    top: '0',
    right: '-5px',
    cursor: 'col-resize',
  },
  y: {
    width: '100%',
    height: '10px',
    bottom: '-5px',
    cursor: 'row-resize',
  },
  xy: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    bottom: '-10px',
    cursor: 'nw-resize',
  },
};

export default class Resizer extends Component {
  static propTypes = {
    onResizeStart: PropTypes.func,
    type: PropTypes.oneOf(['x', 'y', 'xy']).isRequired,
  }

  onTouchStart(event) {
    this.props.onResizeStart(event.touches[0]);
  }

  render() {
    const onTouchStart = this.onTouchStart.bind(this);
    return (
      <div
        style={{ ...styles.base, ...styles[this.props.type] }}
        onMouseDown={this.props.onResizeStart}
        onTouchStart={onTouchStart}
      />
    );
  }
}
