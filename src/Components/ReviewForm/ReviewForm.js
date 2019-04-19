import React, {Component} from 'react'
import {
    Grid,
    Paper,
    FormControl,
    Fab,
    FormLabel,
    Tooltip
} from '@material-ui/core'
import AddIcon from "@material-ui/icons/Add";
import ReviewStarRating from './ReviewStarRating'
import {createReview} from '../../Actions/ReviewActions';
import {connect} from "react-redux";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewBody from "./ReviewBody";
import PropTypes from 'prop-types';

class ReviewForm extends Component {

    state = {
        rate: 0
    };

    onChange = (rate) => {
        this.setState({rate})
    }

    onNotification = (alert) => {
        if (alert) {
            toast.success("New review has been added successfully!", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            toast.error("Something went wrong!", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        const review = {
            'body': event.target.formControlsTextarea.value,
            'rating': this.state.rate
        }
        if (review.body.length !== 0) {
            this.props.createReview(review, this.calculatePage(), this.onNotification);
            this.resetForm(event);
        }
    }

    calculatePage = () => {
        return Math.ceil((parseInt(this.props.totalCount) + 1) / 5);
    }

    resetForm = (event) => {
        event.target.formControlsTextarea.value = '';
        this.onChange(0);
    }

    render() {
        return (
            <div data-test="review-form">
                <Grid container justify="center" alignContent="center">
                    <Grid item xs={6}>
                        <Paper elevation={3}>
                            <form style={{width: "100%", height: "100%"}} onSubmit={this.onSubmit}>
                                <FormControl style={{marginLeft: '10px', width: "90%", marginTop: '25px'}}
                                             required={true}>
                                    <ReviewBody/>
                                </FormControl>
                                <FormControl style={{marginLeft: '10px', marginTop: '15px'}} required={true} fullWidth>
                                    <FormLabel>Rating</FormLabel>
                                </FormControl>
                                <FormControl style={{marginLeft: '10px', marginTop: '10px'}}>
                                        <ReviewStarRating rate={this.onChange} value={this.state.rate}/>
                                </FormControl>
                                <FormControl fullWidth>
                                    <Tooltip title="Click to add the review">
                                        <Fab type="submit" variant="round" color="primary" size="medium"
                                             style={{marginTop: '20px', marginBottom: '20px', marginLeft: '10px'}}>
                                            <AddIcon/>
                                        </Fab>
                                    </Tooltip>
                                </FormControl>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
                <ToastContainer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    reviewSize: state.reviewSize,
    totalCount: state.totalCount
});

ReviewForm.propTypes = {
    onSubmit : PropTypes.func,
    onChange: PropTypes.func,
    onNotification: PropTypes.func,
    calculatePage:PropTypes.func,
    resetForm:PropTypes.func
};

export default connect(mapStateToProps, {createReview})(ReviewForm);