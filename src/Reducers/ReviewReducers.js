import {REVIEWS_FETCHED} from '../Actions/ReviewActions';
import parse from 'parse-link-header';

export const initialStates = {
    reviews: [],
    reviewSize: 0,
    totalCount: 0,
    links: {},
    currentUrl: 'http://localhost:3001/reviews?_page=1&_limit=5'
};

const reviewReducer = (state= initialStates, action={}) => {
    switch (action.type) {
        case REVIEWS_FETCHED:
            return {
                reviews: action.payload.reviews.body,
                reviewSize: action.payload.reviews.body.length,
                totalCount: action.payload.reviews.headers['x-total-count'],
                links: parse(action.payload.reviews.headers['link']),
                currentUrl: action.payload.pageUrl
            };
        default:
            return state;
    }
};

export default reviewReducer;