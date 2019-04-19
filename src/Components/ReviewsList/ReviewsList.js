import React, {Component} from 'react'
import {
    Grid,
    List,
    ListItem,
    Typography
} from '@material-ui/core';
import Review from './Review';
import {loadReviews} from '../../Actions/ReviewActions';
import {connect} from "react-redux";
import ReactLoading from 'react-loading';

class ReviewsList extends Component {

    state = {
        isLoading: true
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
            this.props.loadReviews();
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout();
    }

    render() {
        return (
            <div data-test="reviews-list">
                <Grid container justify="center" alignContent="center">
                    <Grid item xs={6}>
                        <List>
                            {this.state.isLoading &&
                            <ListItem>
                                <Grid container
                                      direction="column"
                                      justify="center"
                                      alignItems="center">
                                    <Grid item><ReactLoading type='spokes' color="#276190"/></Grid>
                                    <Grid item><i><Typography variant="subtitle1" color="inherit">Loading...</Typography></i></Grid>
                                </Grid>
                            </ListItem>
                            }
                            <Review reviews={this.props.reviews} links={this.props.links}/>
                        </List>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    reviews: state.reviews,
    links: state.links
})
export default connect(mapStateToProps, {loadReviews})(ReviewsList);