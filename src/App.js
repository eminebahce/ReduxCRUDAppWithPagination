import React from 'react'
import ReviewForm from './Components/ReviewForm/ReviewForm'
import ReviewTopBar from './Components/ReviewForm/ReviewTopBar'
import ReviewsList from './Components/ReviewsList/ReviewsList'
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    }
};

class App extends React.Component {
  render() {
    return (
        <div style={styles.root}>
            <ReviewTopBar/>
            <ReviewForm/>
            <ReviewsList/>
        </div>
    );
  }
}

export default withStyles(styles)(App);