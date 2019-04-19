import React, {Component} from 'react'
import {TextField} from "@material-ui/core";

class ReviewBody extends Component {

    render() {
        return (
            <TextField id="formControlsTextarea"
                       rowsMax="4"
                       label="Review:"
                       placeholder="Enter your review here"
                       required={true}
                       multiline
                       data-test="formTextArea"
            />
        );
    }
}

export default ReviewBody;
