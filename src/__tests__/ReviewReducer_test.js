import reducer from '../../src/Reducers/ReviewReducers';
import {REVIEWS_FETCHED} from '../../src/Actions/ReviewActions';
import React from 'react';
import parse from "parse-link-header";

describe('review reducer', () => {
    it('should return initialState state', () => {
        const expectedState = {
            "currentUrl": "http://localhost:3001/reviews?_page=1&_limit=5",
            "links": {},
            "reviewSize": 0,
            "reviews": [],
            "totalCount": 0
        };
        expect(reducer(undefined, {})).toEqual(expectedState);
    });
    it('should return updated state with specific action type', () => {
        const initialState = {
            "currentUrl": "http://localhost:3001/reviews?_page=1&_limit=5",
            "links": {},
            "reviewSize": 0,
            "reviews": [],
            "totalCount": 0
        };
        const reviews = {
            "body": [{
                "body": "test1",
                "rating": 2,
                "id": 3
            },
                {
                    "body": "test2",
                    "rating": 4,
                    "id": 4
                }],
            "headers": {
                "x-total-count": 2,
                "link": 'http://localhost:3001/reviews?_page=0&_limit=5>; rel="first'
            },
            currentUrl: 'http://localhost:3001/reviews?_page=1&_limit=5'
        };
        const action = {
            type: REVIEWS_FETCHED,
            payload: {
                reviews: reviews
            }
        }
        const expectedState = {
            "currentUrl": undefined,
            "links": {
                "first": {
                    "_limit": "5", "_page": "0", "rel": "first", "url": "http://localhost:3001/reviews?_page=0&_limit=5"
                }
            },
            "reviewSize": 2,
            "reviews": [
                {"body": "test1", "id": 3, "rating": 2},
                {"body": "test2", "id": 4, "rating": 4}
            ],
            "totalCount": 2
        };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });
});
