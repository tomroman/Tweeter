import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'

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


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        }
    }
    handleMenu = (event) => { this.setState({ anchorEl: event.target.currentTarget }) }

    handleColor = () => { this.setState({ anchorEl: null })}

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)
        const authLinks = (
            <div>
                <IconButton
                    aria-owns={open ? 'menu' : undefined}
                    aria-haspopup="true"
                    color="inherit"
                    onClick={this.handleMenu}

                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu"
                    open={open}
                    anchorEl={anchorEl}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>

                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        )
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: '#480882' }}>
                    <Toolbar>
                        <Link to="/" className={classes.logo}>Tweeter</Link>
                        { authLinks }

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