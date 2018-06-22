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
      blankPic: 8,
      picList: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
  canMove = (index) => {
    let { blankPic } = this.state
    let [top, right, bottom, left] = [blankPic - 3, blankPic + 1, blankPic + 3, blankPic - 1]
    let crossCornor = [top, right, bottom, left]

    return _.includes(crossCornor, index)
  }
  exchangePos = (index) => {
    let { blankPic, picList } = this.state;
    let temp = picList[index]
    picList[index] = picList[blankPic]
    picList[blankPic] = temp
    blankPic = index
    this.setState({ blankPic, picList })
  }
  handleCardMove = (index) => {
    return this.canMove(index) && this.exchangePos(index)
  }
  checkShowImg = (index) => {
    let { blankPic, picList } = this.state;
    if(index === blankPic) {
      return null
    }
    return `${baseImgPath}/${picList[index]}.gif`;
  }
  render() {
    return (
      <div className="avatar-wrap">
        <div className="game-box center">
          { _.map(picBgColumns, (item, i) => (
              <GameItem
                key={i}
                title={item.title}
                imgSrc={this.checkShowImg(i)}
                onClick={() => this.handleCardMove(i)}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
export default AvatarGame;
