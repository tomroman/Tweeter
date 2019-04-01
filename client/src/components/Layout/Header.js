import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

const styles = {
    root: {
        flexGrow: 1
    },
    logo: {
        color: '#fff',
        fontSize: 30,
        TextTransform: 'uppercase'
    }
}
handleMenu = (event) => {this.setState({ anchorEl: event.target.currentTarget })} 

handleColor = () => {this.setState({ anchorEl: null })}

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            anchorEl: null 
        }
    }
    render() {
        const { classes } =this.props;

        const authLinks = (
            <div>

            </div> 
        )
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: '#480882' }}>
                    <Toolbar>
                        <Link to="/" className={classes.logo}>Tweeter</Link>
                        
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth
})

export default connect(mapStateToProps)(withStyles(styles)(Header))