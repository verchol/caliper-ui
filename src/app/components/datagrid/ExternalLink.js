import React from 'react';
import _ from 'lodash';


class ExternalLink extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let link = this.props.metadata.link;
        let href = _.template(link.template)({
            data: this.props.data
        });
        return (
            <a href={href}><img src={link.icon} alt={this.props.data} /></a>
        );
    }
};

export default ExternalLink;
