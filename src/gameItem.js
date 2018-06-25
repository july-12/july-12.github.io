import React from 'react'

class GameItem extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef();
  }

  handleClick = () => {
    this.props.onClick().then(args => {
      let { direct, callBack } = args;
      if(direct) {
        this.ref.current.className=`game-box-item move-${direct}`;
        setTimeout(() => {
          callBack()
        }, 200)
      }
    })
  }
  render() {
    let { title, imgSrc } = this.props;
    return (
      <div
        className={`game-box-item ${!imgSrc ? 'game-box-item-text' : ''}`}
        onClick={this.handleClick}
        ref={this.ref}
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
