import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import api from '../../../api/statefulApi';
import ShareToast from '../../toast/ShareToast';
import ErrorToast from '../../toast/ErrorToast';

class ShareSection extends React.Component {
    constructor (props, context) {
        super(props, context);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.statefulStatus.value !== this.props.statefulStatus.value;
    }

    componentDidMount() {
        if (!this.props.statefulStatus.value) {
            toast(<ErrorToast title="Unable to contact state server" error={this.props.statefulStatus.error}/>, {
                type: toast.TYPE.ERROR
            });
        }
    }

    render () {
        if (!this.props.statefulStatus.value) {
            return (
                <ToastContainer autoClose={5000} position="top-right"/>
            );
        }

        return (
            <section>
                <button className="aisbtn aisbtn__block" onClick={this.props.share}><i className="fa fa-share"></i> Share Application State</button>
            </section>
        );
    }
}

ShareSection.propTypes = {
    share: PropTypes.func,
    statefulStatus: PropTypes.object
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        share: () => {
            try {
                let data = {
                    app_name: 'caliper',
                    user_state: JSON.stringify(state)
                };
                api.setState(data).then((result) => {
                    toast(<ShareToast href={`${location.origin}/?id=${result.id}`}/>, {
                        autoClose: false,
                        type: toast.TYPE.SUCCESS
                    });
                }).catch((err) => {
                    toast(<ErrorToast title="Unable to contact state server" error={err.message}/>, {
                        type: toast.TYPE.ERROR
                    });
                });
            } catch (err) {
                toast(<ErrorToast title="Unable to serialize state" error={err.message}/>, {
                    type: toast.TYPE.ERROR
                });
            }
        },
        statefulStatus: state.statefulStatus
    };
};

export default connect(mapStateToProps, {
    // actions here
})(ShareSection);
