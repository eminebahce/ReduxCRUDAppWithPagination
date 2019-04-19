import React from 'react';
import Review from '../Components/ReviewsList/Review';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import store from '../store';
import { shallow } from 'enzyme';
import checkPropTypes from "check-prop-types";
import PropTypes from "prop-types";

describe('<Review /> component', () => {
    beforeEach(() => {
        const props = {
            onDelete: () => {},
            calculateCurrentPage: () => {},
            calculatePreviousPage: () => {},
            handleClick: () => {}
        };
    });
    const checkProps = (component, expectedProps) => {
        const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
        return propsErr;
    };
    describe('Checking propTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                onDelete: () => {},
                calculateCurrentPage: () => {},
                calculatePreviousPage: () => {},
                handleClick: () => {}
            };
            const propsError = checkProps(Review, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
    it('should render without error', () => {
        const component = shallow(<Review />);
        expect(component.find(`[data-test='review']`)).toBeTruthy();
    });
    it("should return reviews", () => {
        const component = renderer.create(
            <Provider store={store}>
            <Review/>
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});