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
  componentDidMount() {
    this.resetState();
  }
  resetState = () => {
    let { picList } = this.state;
    let blankPic = Math.floor(Math.random() * 8) + 1
    picList = _.shuffle(picList)
    this.setState({ blankPic, picList })
  }
  canMove = (index) => {
    let { blankPic } = this.state
    let crossCornor = [
      { direct: 'top', idx: blankPic - 3 },
      { direct: 'right', idx: blankPic + 1 },
      { direct: 'bottom', idx: blankPic + 3 },
      { direct: 'left', idx: blankPic - 1 }
    ]

    return _.find(crossCornor, cornor => cornor.idx === index) || {}
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
    return new Promise(resolve => {
      let result = this.canMove(index)
      console.log(result);
      resolve({ direct: result.direct, callBack: () => this.exchangePos(index) })
    })
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
          <div className="btn-group">
            <button style={{marginTop: 20}} className="btn btn-reset" onClick={this.resetState}> reset </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AvatarGame;
