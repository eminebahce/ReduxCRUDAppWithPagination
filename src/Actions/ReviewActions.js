import request from 'superagent';

export const REVIEWS_FETCHED = 'REVIEWS_FETCHED';

const baseURL = 'http://localhost:3001/reviews';
const baseURLWithDefaultPaging = 'http://localhost:3001/reviews?_page=1&_limit=5';

export const loadReviews = (pageUrl = baseURLWithDefaultPaging) => {
    return (dispatch) => {
            request(pageUrl)
                .then(response => {
                    dispatch(reviewsFetched(response, pageUrl));
                })
                .catch(error => console.log(error))
    }
}

export const createReview = (review, page, notification) => {
    const pageUrl = createURLWithPaging(page);
    return (dispatch) => {
        request
            .post(baseURL)
            .send(review)
            .then(response => {
                request(pageUrl)
                    .then(response => {
                        dispatch(reviewsFetched(response, pageUrl));
                        notification(true);
                    }).catch(error => console.log(error))
            })
            .catch(error => {
                notification(false);
                console.log(error);
            });
    }
}

export const deleteReview = (reviewId, page) => {
    const pageUrl = createURLWithPaging(page);
    return (dispatch) => {
        request
            .delete(`${baseURL}/${reviewId}`)
            .then(response => {
                request(pageUrl)
                    .then(response => {
                        dispatch(reviewsFetched(response, pageUrl));
                    }).catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }
}

const reviewsFetched = (reviews, pageUrl) => ({
    type:REVIEWS_FETCHED,
    payload: {
        reviews,
        pageUrl
    }
});

const createURLWithPaging = (page) => {
    return `${baseURL}?_page=${page}&_limit=5`;
};