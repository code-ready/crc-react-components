import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@patternfly/react-core';

import "./PresetSelection.scss";

export default class PresetSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            presetSelected: this.props.value  // from config
        };
        this.description = "";

        this.handlePresetSelectClick = this.handlePresetSelectClick.bind(this);
    }
  
    handlePresetSelectClick = (event, value) => {
        this.setState({ presetSelected: value });

        if(value === "podman") {
            this.description = this.props.podmanDescription;
        }
        if(value === "openshift") {
            this.description = this.props.openshiftDescription;
        }

        if(this.props.onChanged !== null) {
            this.props.onChange(value);
        }
    };

    render() {
        var descriptionStyle= {
            fontSize: "var(--pf-global--FontSize--sm)",
            color: "var(--pf-global--Color--200)",
            display: "block",
            paddingTop: "5px"
        }

        var compactTemplate = (
            <>
                <div role="group">
                    <Button className="preset-selection-button-compact"
                        variant={ (this.state.presetSelected === "openshift") ? "primary" : "secondary" }
                        onClick={ event => this.handlePresetSelectClick(event, 'openshift') }>OpenShift</Button>

                    <Button className="preset-selection-button-compact"
                        variant={ (this.state.presetSelected === "podman") ? "primary" : "secondary" }
                        onClick={ event => this.handlePresetSelectClick(event, 'podman') }>Podman</Button>
                </div>
                <span className="preset-description">{this.description}</span>
            </>
        )

        var regularTemplate = (
            <>
                <div role="group">
                    <Button isLarge className="preset-selection-button"
                        variant={ (this.state.presetSelected === "openshift") ? "primary" : "secondary" }
                        onClick={ event => this.handlePresetSelectClick(event, 'openshift') }>OpenShift</Button>
                    <span className="preset-description">{this.props.openshiftDescription}</span>
                    <Button isLarge className="preset-selection-button"
                        variant={ (this.state.presetSelected === "podman") ? "primary" : "secondary" }
                        onClick={ event => this.handlePresetSelectClick(event, 'podman') }>Podman</Button>
                    <span className="preset-description">{this.props.podmanDescription}</span>
                </div>
            </>
        )

        return (this.props.isCompact ? compactTemplate : regularTemplate);
    }
}


PresetSelection.propTypes = {
    value: PropTypes.string,
    podmanDescription: PropTypes.string,
    openshiftDescription: PropTypes.string,
    onChange: PropTypes.func
}

PresetSelection.defaultProps = {
    value: "unknown",
    podmanDescription: "",
    openshiftDescription: ""
}; 