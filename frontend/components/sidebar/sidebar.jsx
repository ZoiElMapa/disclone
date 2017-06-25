import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ServerIndexItem from './server_name'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

  }


//currently mapping over each server vice the users subscribed servers
  render() {
    let servers = this.props.servers;
      return (
        <div className='sidebar-wrapper'>

          <div className='direct-message-button'>
            direct message placeholder
          </div>

          <div className='sidebar-control'></div>

          <ul className="index-item-wrapper">
            {Object.keys(servers).map((key)=>
              <li className='server-index-item' key={key}>
              
                <ServerIndexItem server={servers[key]}/>

                {/*<Link id="temp-link" to={`/app/channels/${key}/${servers[key].defaultId}`}>
                <img className='server-avatar' src={servers[key].avatarUrl} alt=""/>
                </Link>*/}

             </li> )}
          </ul>

          <div className="add-server-button">
            add server button
          </div>
          {/*TODO: Route for add server form*/}
        </div>
    );
  }
}


///////////////////////////////////////////////////////////////////////////////////////
// container // 
const mapStateToProps = (state) => {
  return {
    servers: state.servers,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
   
//   }
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Sidebar)