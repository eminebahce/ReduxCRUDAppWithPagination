import mockAxios from '../../src/__mocks__/axios';
import thunk from 'redux-thunk';
import reducer from '../Reducers/ReviewReducers';
import store from '../store';
import configureMockStore from 'redux-mock-store';
import {REVIEWS_FETCHED} from '../../src/Actions/ReviewActions';

test('testing actions fetching', async () => {
    const middelware = [thunk];
    const mockStore = configureMockStore(middelware);
    const store = mockStore();

    const mockData = {
        "reviews": [
            {
                "body": "test1",
                "rating": 2,
                "id": 3
            },
            {
                "body": "test2",
                "rating": 4,
                "id": 4
            },
        ]
    };
    mockAxios.get.mockImplementationOnce(() => {
        Promise.resolve({data: mockData})
    });

    const expectedActions = {
        type: REVIEWS_FETCHED
    };

    await store.dispatch(expectedActions);

    expect(store.getActions()).toEqual([expectedActions]);
});