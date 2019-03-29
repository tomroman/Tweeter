import React from 'react'
import MadeWithLove from 'react-made-with-love'
import { withStyles } from '@material-ui/core'

const styles = {
    root: {
        textAlign: 'center'
    }

}

const Footer = ({ classes }) => (
    <div className ={classes.root}>
        <MadeWithLove 
            by="Tom R"
            emoji
            link= "https://github.com/tomroman"

        />
    </div>
)
export default withStyles(styles)(Footer)