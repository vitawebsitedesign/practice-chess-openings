import React from 'react';
import PropTypes from 'prop-types';
import Hyperlink from './Hyperlink';

const getAnchorListItems = urls => urls.map((u, idx) =>
    <Hyperlink key={idx} href={u}>
        {u}
    </Hyperlink>
);

const getRows = urlsByType => Object.keys(urlsByType).map(title =>
    <div key={title} className="mb-3 text-bold">
        <div className="category text-capitalize">{title}</div>
        <div>
            {getAnchorListItems(urlsByType[title])}
        </div>
    </div>
);

const ExhibitUrls = props => getRows(props.urlsByType);

ExhibitUrls.propTypes = {
    urlsByType: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
};

export default ExhibitUrls;
