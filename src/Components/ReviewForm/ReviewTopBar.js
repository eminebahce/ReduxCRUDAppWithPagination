import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, IconButton, Grid} from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    grow: {
        flexGrow: 1,
        marginLeft: 10,
        marginRight: 10
    },
    menuButton: {
        marginLeft: -12,
    }
};

class ReviewTopBar extends Component {
    render() {
        return (
            <div data-test='top-bar'>
                <Grid container justify="center" alignContent="center">
                    <Grid item xs={6}>
                        <AppBar color="primary" position="static" data-test='app-bar'>
                            <Toolbar>
                                <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
                                    <MenuIcon/>
                                </IconButton>
                                <Icon>star</Icon>
                                <span><Typography variant="h6" style={styles.grow}
                                                  color="inherit">Reviews</Typography></span>
                                <Icon>star</Icon>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ReviewTopBar);
