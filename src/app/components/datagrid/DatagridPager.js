import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import DropdownList from 'react-widgets/lib/DropdownList';
import * as resultsActions from '../../state/actions/resultsActions';
import * as paramsActions from '../../state/actions/paramsActions';
import api from '../../api/stateApi';

class DatagridPager extends React.Component {
    constructor (props, context) {
        super(props, context);
    }

    render () {
        let stats = '';
        if (this.props.results.headers && this.props.results.headers.rowCount > 0) {
            stats = 'Total Reports: ' + this.props.results.headers.rowCount.toLocaleString();
        }

        return (
            <div className="datagrid__pager">
                <div className="datagrid__pager-controls-container">
                    <div className="datagrid__pager-controls">
                        <div className="controls">
                            <button className="aisbtn aisbtn__small" onClick={() => this.props.setPage(this.props.params._page - 1)} disabled={this.props.params._page === 1}>Previous</button>
                            <DropdownList className="dropdownList__pages" dropUp={true} value={this.props.params._page} data={this.props.pages} onChange={this.props.setPage.bind(this)} />
                            <button className="aisbtn aisbtn__small" onClick={() => this.props.setPage(this.props.params._page + 1)} disabled={this.props.results.headers ? this.props.params._page === this.props.results.headers.pageCount : true}>Next</button>
                        </div>
                    </div>
                    <div className="datagrid__pager-stats">
                        {stats}
                    </div>
                </div>
                <div className="datagrid__pager-share">
                    <button className="aisbtn aisbtn__small share" onClick={() => this.props.share()}><i className="fa fa-share-alt"></i></button>
                </div>
            </div>
        );
    }
}

DatagridPager.propTypes = {
    results: PropTypes.object,
    params: PropTypes.object,
    setPage: PropTypes.func,
    pages: PropTypes.array,
    share: PropTypes.func
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        results: state.results,
        params: state.params,
        share: () => {
            let data = {
                app_name: 'caliper',
                user_state: JSON.stringify(state)
            };
            api.setState(data).then((result) => {
                console.log(result.id);
            }).catch((err) => {
                alert('Unable to contact state server - ' + err);
            });
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (index, params) => {
            // use config value for key
            let updatedParams = {
                _page: index
            };
            // update params state
            dispatch(paramsActions.updateParams(updatedParams));
            // update grid
            // TODO get updated params from above dispatch call somehow instead
            updatedParams = Object.assign({}, params, updatedParams);
            dispatch(resultsActions.fetchAllResults(updatedParams));
        }
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, {
        results: stateProps.results,
        params: stateProps.params,
        setPage: (index) => dispatchProps.setPage(index, stateProps.params),
        pages: stateProps.results.headers ? Array.from({length: stateProps.results.headers.pageCount}, (v, i) => i + 1) : [1],
        share: () => stateProps.share()
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DatagridPager);
