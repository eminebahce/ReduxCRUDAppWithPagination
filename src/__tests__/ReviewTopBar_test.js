import React from 'react';
import {shallow} from 'enzyme';
import ReviewTopBar from '../../src/Components/ReviewForm/ReviewTopBar';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import store from "../store";
import {Grid, AppBar} from '@material-ui/core';

describe('<ReviewTopBar /> component', () => {
   it('should render without errors', () => {
        const component = shallow(<ReviewTopBar />);
        expect(component.find(`[data-test='top-bar']`)).toBeTruthy();
    });
    it('should render without errors', () => {
        const component = shallow(<ReviewTopBar />);
        expect(component.find(`[data-test='app-bar']`)).toBeTruthy();
    });

    describe('renders ReviewTopBar element with AppBar', () => {
        it('should not return error', () => {
            const component = renderer.create(
                <Provider store={store}>
                    <div>
                        <Grid>
                        <AppBar />
                        </Grid>
                    </div>
                </Provider>
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

});