import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import initSh from './markdown/InitEcs.md';
import gfm from 'remark-gfm';
import emoji from 'emoji-dictionary';
import CodeBlock from './CodeBlock';

class InitShell extends Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(initSh).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name))
        return <ReactMarkdown plugins={[gfm]} source={markdown} renderers={{ text: emojiSupport, code: CodeBlock }} />;
    }
}

export default InitShell;
