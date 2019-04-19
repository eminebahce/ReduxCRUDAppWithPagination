import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';


/*
    react-star-rating-component
    https://github.com/voronianski/react-star-rating-component
*/

class ReviewStarRating extends React.Component {

  onStarClick = (nextValue, prevValue) => {
    this.props.rate(nextValue);
  };

  render() {
    return (
        <StarRatingComponent
            name="star-rating"
            onStarClick={this.onStarClick}
            value={this.props.value}
            data-test="star-rating"
        />
    );
  }
}
ReviewStarRating.propTypes = {
  onStarClick : PropTypes.func
}

export default ReviewStarRating