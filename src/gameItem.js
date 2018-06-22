import React from 'react'

class GameItem extends React.Component {
  render() {
    let { title, imgSrc } = this.props;
    return (
      <div
        className={`game-box-item ${!imgSrc ? 'game-box-item-text' : ''}`}
        onClick={this.props.onClick}
      >
        { imgSrc ?  (
          <img src={imgSrc} alt="worl" />
          ) : title
        }
      </div>
    );
  }
}

export default GameItem;
