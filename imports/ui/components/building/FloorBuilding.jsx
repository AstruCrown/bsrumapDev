import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const justifyCard ={
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '4em',
  paddingRight: '3em',
}
const setTextCard = {
  fontSize: '46px',
  lineHeight: '1.8em',
}
const setColorIcon = {
  color: '#fff',
}

export default class FloorBuilding extends React.Component {

  onClickCard(){
    FlowRouter.go('floorBuildingDetail');
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div onClick={this.clickCard} style={justifyCard} className="card-panel teal z-depth-1">
            <span style={setTextCard} className="white-text">Floor 1 ชั้นโรงอาหาร</span>
            <i onClick={this.onClickCard} style={setColorIcon} className="large material-icons">send</i>
          </div>
        </div>
      </div>
    );
  }
}
