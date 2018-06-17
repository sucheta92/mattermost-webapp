// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import store from 'stores/redux_store.jsx';
import {ActionTypes} from 'utils/constants.jsx';
import {generateId} from 'utils/utils.jsx';

function dispatchPluginComponentAction(name, pluginId, component, id = generateId()) {
    store.dispatch({
        type: ActionTypes.RECEIVED_PLUGIN_COMPONENT,
        name,
        data: {
            id,
            pluginId,
            component,
        },
    });

    return id;
}

function dispatchChannelHeaderAction(pluginId, name, buttonManifest) {
    const id = generateId();

    if (buttonManifest.hasOwnProperty('buttonComponent') && buttonManifest.hasOwnProperty('dropdownComponent')) {
        store.dispatch({
            type: ActionTypes.RECEIVED_PLUGIN_COMPONENT,
            name,
            data: {
                id,
                pluginId,
                buttonComponent: buttonManifest.buttonComponent,
                dropdownComponent: buttonManifest.dropdownComponent,
            },
        });

        return id;
    }

    if (buttonManifest.hasOwnProperty('icon') && buttonManifest.hasOwnProperty('action')) {
        store.dispatch({
            type: ActionTypes.RECEIVED_PLUGIN_COMPONENT,
            name,
            data: {
                id,
                pluginId,
                icon: buttonManifest.icon,
                action: buttonManifest.action,
                dropdownText: buttonManifest.dropdown_text,
            },
        });

        return id;
    }

    throw new PluginRegistryException('InvalidArguments');
}

function PluginRegistryException(message) {
    this.message = message;
    this.name = 'PluginRegistryException';
}

export default class PluginRegistry {
    constructor(id) {
        this.id = id;
    }

    // Register a component at the root of the channel view of the app.
    // Accepts a React component. Returns a unique identifier.
    registerRootComponent = (component) => {
        return dispatchPluginComponentAction('Root', this.id, component);
    }

    // Register a component in the first section of the profile popover (hovercard), below the user's name.
    // Accepts a React component. Returns a unique identifier.
    registerPopoverSection1Component = (component) => {
        return dispatchPluginComponentAction('PopoverSection1', this.id, component);
    }

    // Register a component in the second section of the profile popover (hovercard), below the user's email.
    // Accepts a React component. Returns a unique identifier.
    registerPopoverSection2Component = (component) => {
        return dispatchPluginComponentAction('PopoverSection2', this.id, component);
    }

    // Register a component in the third section of the profile popover (hovercard), below the send message button.
    // Accepts a React component. Returns a unique identifier.
    registerPopoverSection3Component = (component) => {
        return dispatchPluginComponentAction('PopoverSection3', this.id, component);
    }

    // Add a button to the channel header. If there are more than one buttons registered by any
    // plugin, a dropdown menu is created to contain all the plugin buttons.
    // buttonManifest is an object containing either:
    // - icon - JSX element to use as the button's icon
    // - action - a function called when the button is clicked
    // - dropdown_text - string or JSX element shown for the dropdown button description
    // OR
    // - button_component - custom button component when displayed when in the channel header
    // - dropdown_component - custom dropdown item component displayed when in the dropdown menu
    // Returns a unique indentifier.
    registerChannelHeaderButtonComponent = (buttonManifest) => {
        return dispatchChannelHeaderAction(this.id, 'ChannelHeaderButton', buttonManifest);
    }

    // Add a button to the channel header in mobile view. If there are more than one buttons
    // registered by any plugins, buttons will instead be added to the channel header
    // dropdown.
    // buttonManifest is the same as for registerChannelHeaderButtonComponent.
    // Returns a unique identifer.
    registerMobileChannelHeaderButtonComponent = (buttonManifest) => {
        return dispatchChannelHeaderAction(this.id, 'MobileChannelHeaderButton', buttonManifest);
    }

    deregisterComponent = (componentId) => {
        store.dispatch({
            type: ActionTypes.REMOVED_PLUGIN_COMPONENT,
            id: componentId,
        });
    }
}