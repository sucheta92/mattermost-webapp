// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';

import {formatText} from 'utils/text_formatting.jsx';
import {localizeMessage} from 'utils/utils.jsx';

export default function HelpCommands() {
    const message = [];
    message.push(localizeMessage('help.commands.title', '# Executing Commands\n___'));
    message.push(localizeMessage('help.commands.intro', 'Slash commands perform operations in Mattermost by typing into the text input box. Enter a `/` followed by a command and some arguments to perform actions.\n\nBuilt-in slash commands come with all Mattermost installations and custom slash commands are configurable to interact with external applications. Learn about configuring custom slash commands on the [developer slash command documentation page](http://docs.mattermost.com/developer/slash-commands.html).'));
    message.push(localizeMessage('help.commands.builtin', '## Built-in Commands\nThe following slash commands are available on all Mattermost installations:'));
    message.push(.. csv-table::
    :header: "Command", "Description", "Example"

    "/away", "Set your status away", "/away"
    "/offline", "Set your status offline", "/offline"
    "/online", "Set your status online", "/online"
    "/dnd", "Set your status to Do Not Disturb", "/dnd"
    "/code *{text}*", "Display text as a code block", "/code File bugs"
    "/collapse", "Turn on auto-collapsing of image previews", "/collapse"
    "/expand", "Turn off auto-collapsing of image previews", "/expand"
    "/echo *{message}* *{delay in seconds}*", "Echo back text from your account", "/echo Hello World 5"
    "/header *{text}*", "Edit the channel header", "/header File bugs here"
    "/invite *@{user}* *~{channel-name}*", "Invite user to the channel","/invite @john ~sampleChannel"
    "/purpose *{text}*", "Edit the channel purpose", "/purpose A channel to discuss bugs"
    "/rename *{text}*", "Rename the channel", "/rename Developers"
    "/help", "Open the Mattermost help page", "/help"
    "/invite_people *{name@domain.com ...}*", "Send an email invite to your Mattermost team","/invite_people john@example.com"
    "/kick *{@username}*", "Remove a member from a public or private channel", "/kick @alice"
    "/remove *{@username}*", "Remove a member from a public or private channel", "/remove @alice"
    "/join *{channel-name}*", "Join the open channel", "/join off-topic"
    "/open *{channel-name}*", "Join the open channel", "/open off-topic"
    "/leave", "Leave the current channel", "/leave"
    "/mute", "Turns off desktop, email and push notifications for the current channel or the [channel] specified", "/mute ~[channel]"
    "/logout", "Log out of Mattermost", "/logout"
    "/me *{message}*", "Do an action", "/me Hello World"
    "/msg *{@username}* *{message}*", "Send a Direct Message to a user", "/msg @alice hello"
    "/groupmsg *{@username1, @username2, ...}* *{message}*", "Sends a Group Message to the specified users", "/groupmsg @alice, @bob hello"
    "/search *{text}*", "Search text in messages", "/search meeting"
    "/settings", "Open the Account Settings dialog", "/settings"
    "/shortcuts", "Display a list of keyboard shortcuts", "/shortcuts"
    "/shrug *{message}*", "Add ``¯\_(ツ)_/¯`` to your message", "/shrug oh well");
    message.push(localizeMessage('help.commands.builtin2', 'Begin by typing `/` and a list of slash command options appears above the text input box. The autocomplete suggestions help by providing a format example in black text and a short description of the slash command in grey text.'));
    message.push('![autocomplete](https://docs.mattermost.com/_images/slashCommandsAutocomplete.PNG)');
    message.push(localizeMessage('help.commands.custom', '## Custom Commands\nCustom slash commands integrate with external applications. For example, a team might configure a custom slash command to check internal health records with `/patient joe smith` or check the weekly weather forecast in a city with `/weather toronto week`. Check with your System Admin or open the autocomplete list by typing `/` to determine if your team configured any custom slash commands.'));
    message.push(localizeMessage('help.commands.custom2', 'Custom slash commands are disabled by default and can be enabled by the System Admin in the **System Console** > **Integrations** > **Webhooks and Commands**. Learn about configuring custom slash commands on the [developer slash command documentation page](http://docs.mattermost.com/developer/slash-commands.html).'));

    return (
        <div>
            <span
                dangerouslySetInnerHTML={{__html: formatText(message.join('\n\n'))}}
            />
            <p className='links'>
                <FormattedMessage
                    id='help.learnMore'
                    defaultMessage='Learn more about:'
                />
            </p>
            <ul>
                <li>
                    <Link to='/help/messaging'>
                        <FormattedMessage
                            id='help.link.messaging'
                            defaultMessage='Basic Messaging'
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/help/composing'>
                        <FormattedMessage
                            id='help.link.composing'
                            defaultMessage='Composing Messages and Replies'
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/help/mentioning'>
                        <FormattedMessage
                            id='help.link.mentioning'
                            defaultMessage='Mentioning Teammates'
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/help/formatting'>
                        <FormattedMessage
                            id='help.link.formatting'
                            defaultMessage='Formatting Messages using Markdown'
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/help/attaching'>
                        <FormattedMessage
                            id='help.link.attaching'
                            defaultMessage='Attaching Files'
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
}
