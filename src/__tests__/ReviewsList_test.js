import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from "react-redux";
import store from "../store";
import renderer from 'react-test-renderer';
import ReviewsList from '../../src/Components/ReviewsList/ReviewsList';

describe('<ReviewsList /> component', () => {
    it('should render without errors', () => {
        const component = shallow(<ReviewsList />);
        expect(component.find(`[data-test='formTextArea']`)).toBeTruthy();
    });

    describe('renders ReviewsList element', () => {
        it('should not return error', () => {
            const component = renderer.create(
                <Provider store={store}>
                    <ReviewsList />
                </Provider>
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});