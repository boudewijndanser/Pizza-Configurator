import React from 'react'
import AppBar from 'material-ui-next/AppBar'
import Toolbar from 'material-ui-next/Toolbar'
import Typography from 'material-ui-next/Typography'
import PropTypes from 'prop-types';

class TopBar extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
            
        }
    }

    static propTypes = {
        title: PropTypes.string.isRequired
      }
      
      
  render() {

    return (
        <AppBar position="absolute" style={{zIndex:10}}>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{flex: 1}}>
              {this.props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      )
  }
}


export default TopBar

