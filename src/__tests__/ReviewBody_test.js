import React from 'react';
import {shallow} from 'enzyme';
import ReviewBody from '../../src/Components/ReviewForm/ReviewBody';
import {Provider} from "react-redux";
import store from "../store";
import {TextField} from "@material-ui/core";
import renderer from 'react-test-renderer';

describe('<ReviewBody /> component', () => {
    it('should render without errors', () => {
        const component = shallow(<ReviewBody />);
        console.log(component.debug());
        const wrapper = component.find(`[data-test='formTextArea']`);
        expect(wrapper.length).toBe(1);
    });

    describe('renders ReviewBody element with TextField', () => {
        it('should not return error', () => {
            const component = renderer.create(
                <Provider store={store}>
                    <TextField />
                </Provider>
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});

