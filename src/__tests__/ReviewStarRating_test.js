import React from 'react';
import {shallow} from 'enzyme';
import checkPropTypes from 'check-prop-types';
import ReviewStarRating from '../../src/Components/ReviewForm/ReviewStarRating';
import {Provider} from "react-redux";
import store from "../store";
import renderer from 'react-test-renderer';


describe('<ReviewStarRating /> component', () => {
    beforeEach(() => {
        const props = {
            onStarClick: () => {}
        }
    });
    const checkProps = (component, expectedProps) => {
        const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
        return propsErr;
    };
    it('should render without error', () => {
        const component = shallow(<ReviewStarRating />);
        const wrapper = component.find(`[data-test='star-rating']`);
        expect(wrapper.length).toBe(1)
    });

    describe('Checking propTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                onStarClick: () => {}
            };
            const propsError = checkProps(ReviewStarRating, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('renders ReviewStarRating element', () => {
        it('should not return error', () => {
            const component = renderer.create(
                <ReviewStarRating />
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

});
