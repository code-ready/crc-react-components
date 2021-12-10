import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
} from '@patternfly/react-core';

import "./Actions.scss";

export default class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="crc-actions">
                <Button onClick={this.props.onStartClicked}
                    variant="primary">Start</Button>{' '}
                <Button onClick={this.props.onStopClicked}
                    variant="secondary">Stop</Button>{' '}
                <Button onClick={this.props.onDeleteClicked}
                    variant="danger">Delete</Button>
            </div>
        );
    }
}

Actions.propTypes = {
    onStartClicked: PropTypes.func,
    onStopClicked: PropTypes.func,
    onDeleteClicked: PropTypes.func
};
