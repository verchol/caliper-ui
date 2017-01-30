import React from 'react';
import { Provider } from 'react-redux';

const Wrap = (Component, store) => {
    class Wrapped extends React.Component {
        render () {
            if (this.props.title) {
                this.props.glContainer.setTitle(this.props.title);
            }
            return (
                <Provider store={store}>
                    <Component {...this.props} />
                </Provider>
            );
        }
    }
    return Wrapped;
};

export default Wrap;
