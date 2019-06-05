/* eslint-disable */
import React from 'react'

export default class SpriteLayer extends React.Component {

  renderItems(positions) {
    if(!Array.isArray(positions)) return null;
    console.log('sss', positions);
    return positions.map(({i, left:x, top:y, width:w, height:h }) => (
      <div className="sprite" key={i} style={{
        transform: `translate(${x}px, ${y}px)`
      }}></div>
    ));
  }

  render() {
    const { children, positions } = this.props;
    return <div className="overlay-layer">{ this.renderItems(positions) }</div>;
  }
}