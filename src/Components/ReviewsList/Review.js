import React from 'react'
import {
    Button,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Typography,
    IconButton,
    Grid,
    Tooltip
} from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import Delete from '@material-ui/icons/Delete'
import StarRatingComponent from 'react-star-rating-component';
import {deleteReview, loadReviews} from '../../Actions/ReviewActions';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

class Review extends React.Component {

    onDelete = (reviewId) => {
        if (this.props.reviewSize !== 1 || this.props.totalCount === 0) {
            this.props.deleteReview(reviewId, this.calculateCurrentPage());
        } else {
            this.props.deleteReview(reviewId, this.calculatePreviousPage());
        }
    }

    calculateCurrentPage = () => {
        const firstSplit = this.props.currentUrl.split("&");
        const secondSplit = firstSplit[0].split("=");
        return parseInt(secondSplit[1]);
    }

    calculatePreviousPage = () => {
        return this.calculateCurrentPage() - 1;
    }

    handleClick = (url) => {
        this.props.loadReviews(url);
    }

    render() {
        return (
            <div data-test="review">
                {!this.props.reviews && <p>Loading...</p>}
                <div>
                    {this.props.reviews && this.props.reviews.map((review, index) =>
                        <div key={index}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="avatar"
                                            src="/outline-account_circle-black-18/2x/outline_account_circle_black_18dp.png"/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <StarRatingComponent
                                                name="star-rating"
                                                value={review.rating}
                                                editing={false}
                                            />
                                        </React.Fragment>
                                    }
                                    secondary={
                                        <React.Fragment>
                                                <Typography component="span" style={{display: 'inline'}}
                                                            color="textPrimary">
                                                    {`Anonymous User`}
                                                </Typography>
                                            {` - ${review.body}`}
                                        </React.Fragment>
                                    }
                                />
                                <Tooltip title="Click to remove the review">
                                    <IconButton color='primary' onClick={() => this.onDelete(review.id)}>
                                        <Delete/>
                                    </IconButton>
                                </Tooltip>
                            </ListItem>
                            <Divider/>
                        </div>
                    )}
                </div>
                <div>
                    <Grid container
                          direction="row"
                          justify="center"
                          alignItems="center">
                        {this.props.links && Object.keys(this.props.links).map((link, index) =>
                            <Grid item key={index}
                                  role="group">
                                <Button type="button"
                                        color="primary"
                                        variant="outlined"
                                        size="small"
                                        style={{marginRight: '5px', marginTop: '10px'}}
                                        onClick={() => this.handleClick(this.props.links[link].url)}>
                                    {this.props.links[link].rel}
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reviewSize: state.reviewSize,
    totalCount: state.totalCount,
    currentUrl: state.currentUrl
})

Review.propTypes = {
    onDelete: PropTypes.func,
    calculateCurrentPage: PropTypes.func,
    calculatePreviousPage: PropTypes.func,
    handleClick: PropTypes.func
}

export default connect(mapStateToProps, {deleteReview, loadReviews})(Review);