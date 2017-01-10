import React, {PropTypes} from 'react';
import DateTimePickerTemplate from './DateTimePickerTemplate';

import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';

// Required by react-widgets: https://jquense.github.io/react-widgets/docs/#/datetime-picker
momentLocalizer(Moment);


const DateTimePicker = (props) => {
  return DateTimePickerTemplate(props);
};

DateTimePicker.propTypes = {
    label: PropTypes.string,
};

export default DateTimePicker;
