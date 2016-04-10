import React, { PropTypes } from 'react';

// Collection
import { Building } from '../../../../api/collections/building.jsx';
import { Floors } from '../../../../api/collections/floors.jsx';
import { Rooms } from '../../../../api/collections/rooms.jsx';
import { Teachers } from '../../../../api/collections/teachers.jsx';

const styleIcon = {
  display: 'flex',
  justifyContent: 'space-around',
}
const icon = {
  cursor: 'pointer'
}
export default class IconItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete() {
    const id = this.props.id;
    const collection = this.props.collection;
    let isConfirm = confirm("Do you want to delete this item?");
    if(isConfirm) {
      switch(collection) {
        case 'building':
              Building.remove({_id:id});
              break;
        case 'floors':
              Floors.remove({_id:id});
              break;
        case 'rooms':
              Rooms.remove({_id:id});
              break;
        case 'teachers':
              Teachers.remove({_id:id});
              break;
      }
    }    
  }

  render() {
    return (
      <td>
        <div style={styleIcon}>
          <i style={icon} className="material-icons">mode_edit</i>
              <i
                style={icon}
                className="material-icons"
                onClick={ this.onClickDelete }
              >delete</i>
        </div>
      </td>
    );
  }
}

IconItem.PropTypes = {
  id: PropTypes.object.isRequire,
  collection: PropTypes.string.isRequire,
}
