import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import { Link } from 'react-router-dom'
import { withStyles} from '@material-ui/core/styles'
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

const Header = ({ classes }) => {
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#480882'}}>
                <Toolbar>
                    <Link to="/" className={classes.logo}>Tweeter</Link> 
                </Toolbar>
            </AppBar>
        </div>
    )
} 

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth
})

export default connect(mapStateToProps)(withStyles(styles)(Header))