// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import store from 'stores/redux_store.jsx';
import {ActionTypes} from 'utils/constants.jsx';
import {generateId} from 'utils/utils.jsx';

function dispatchPluginComponentAction(name, pluginId, component) {
    const id = generateId();

    store.dispatch({
        type: ActionTypes.RECEIVED_PLUGIN_COMPONENT,
        data: {
            name,
            id,
            pluginId,
            component,
        },
    });

    return id;
}

export default class PluginRegistry {
    constructor(id) {
        this.id = id;
    }

    registerRootComponent = (component) => {
        return dispatchPluginComponentAction('Root', this.id, component);
    }
}