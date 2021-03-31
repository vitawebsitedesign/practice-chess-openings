import React from 'react';

const Hyperlink = props => (
    <span>
        <a href={props.href} title={props.title || "click to open this link in a new tab"} target="_blank" rel="noreferrer">
            {props.children}
        </a>
        <i title="this link will open in a new tab" className="ml-1 align-text-bottom material-icons md-18 text-secondary">open_in_new</i>
    </span>
);

export default Hyperlink;
