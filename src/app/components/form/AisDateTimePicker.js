import React, {PropTypes} from 'react';
import AisDateTimePickerTemplate from './AisDateTimePickerTemplate';

import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';

// Required by react-widgets: https://jquense.github.io/react-widgets/docs/#/datetime-picker
momentLocalizer(Moment);


const AisDateTimePicker = (props) => {
    return AisDateTimePickerTemplate(props);
};

AisDateTimePicker.propTypes = {
    label: PropTypes.string,
    default: PropTypes.instanceOf(Date)
};

export default AisDateTimePicker;
