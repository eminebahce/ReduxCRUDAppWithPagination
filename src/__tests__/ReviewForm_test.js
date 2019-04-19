import React from 'react';
import ReviewForm from '../../src/Components/ReviewForm/ReviewForm';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import store from '../store';
import ReviewStarRating from '../../src/Components/ReviewForm/ReviewStarRating'
import ReviewBody from '../../src/Components/ReviewForm/ReviewBody'
import { shallow } from 'enzyme';
import {Button, Form} from "react-bootstrap";
import checkPropTypes from "check-prop-types";

describe('<ReviewForm /> component', () => {
    beforeEach(() => {
        const props = {
            onSubmit: () => {},
            onChange: () => {},
            onNotification: () => {},
            calculatePage: () => {},
            resetForm: () => {}
        }
    });
    const checkProps = (component, expectedProps) => {
        const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
        return propsErr;
    };
    describe('Checking propTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                onSubmit: () => {},
                onChange: () => {},
                onNotification: () => {},
                calculatePage: () => {},
                resetForm: () => {}
            };
            const propsError = checkProps(ReviewForm, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
    it('should render without error', () => {
        const component = shallow(<ReviewForm />);
        expect(component.find(`[data-test='review-form']`)).toBeTruthy();
    });
    it('should return form body, star element and save button', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Form>
                    <ReviewBody/>
                    <ReviewStarRating />
                    <Button id="button" bsStyle="primary" bsSize="small" type="submit"></Button>
                </Form>
            </Provider>
        );
       let tree = component.toJSON();
       expect(tree).toMatchSnapshot();
    });
});

