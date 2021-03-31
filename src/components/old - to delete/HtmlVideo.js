import React from 'react';
import PropTypes from 'prop-types';

const HtmlVideo = props => (
    <video autoPlay muted loop className="w-100">
        {props.webm && <source src={props.webm} type="video/webm" />}
        {props.mp4s && props.mp4s.map(mp4 => <source key={mp4} src={mp4} type="video/mp4" />)}
        <p>
            A video is not being shown because your browser doesn't support HTML5 video.
        </p>
    </video>
);

HtmlVideo.propTypes = {
    webm: PropTypes.string,
    mp4s: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default HtmlVideo;
