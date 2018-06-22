import React from 'react'
import _ from 'lodash';
import GameItem from './gameItem.js';

const baseImgPath = '/static/img';
const picBgColumns = [
  { title: 'Front-End'},
  { title: 'HTML' },
  { title: 'CSS' },
  { title: 'Javascript' },
  { title: 'React' },
  { title: 'Redux/Mobx' },
  { title: 'Antd' },
  { title: 'Node.js/Meteor' },
  { title: 'Tools' },
]
class AvatarGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blankPic: 9,
    }
  }
  checkShowImg = (index) => {
    let { blankPic } = this.state;
    if(index === blankPic) {
      return null
    }
    return `${baseImgPath}/${index}.gif`;
  }
  render() {
    return (
      <div className="avatar-wrap">
        <div className="game-box center">
          { _.map(picBgColumns, (item, i) => (
            <GameItem key={i} imgSrc={this.checkShowImg(i+1)} title={item.title} />
          ))
          }
        </div>
      </div>
    );
  }
}
export default AvatarGame;
