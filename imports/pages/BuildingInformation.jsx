import React from 'react';
import FloorBuilding from '../ui/components/building/FloorBuilding.jsx';
import FloorBuildingDetail from '../ui/components/building/FloorBuildingDetail.jsx';
import BuildingDescription from '../ui/components/building/BuildingDescription.jsx';
import { createContainer } from 'meteor/react-meteor-data';

// Collections
import { Floors } from '../api/collections/floors.jsx';
import { Rooms } from '../api/collections/rooms.jsx';

export default class BuildingInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $(document).ready(function () {
      //initialize swiper when document ready
      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
      })
    });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
            <div className="swiper-slide slide-page-1">
              <BuildingDescription />
            </div>
            <div className="swiper-slide slide-page-1">
              <FloorBuilding floors={this.props.floors} />
            </div>
            <div className="swiper-slide slide-page-1">
              <FloorBuildingDetail rooms={this.props.rooms}/>
            </div>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  const bid = FlowRouter.current().params.id;
  const rooms = Rooms.find({building_id: bid}).fetch();
  const floors = Floors.find({building_id: bid}).fetch();
  return {
    rooms,
    floors
  };
}, BuildingInformation);
