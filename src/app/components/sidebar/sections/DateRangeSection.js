import moment from 'moment';
import DateRangeSectionTemplate from './DateRangeSectionTemplate';


const DateRangeSection = () => {

    let defaultStartTime = moment().startOf('day').toDate();
    let defaultEndTime = moment().endOf('day').toDate();

    return DateRangeSectionTemplate({
        defaultStartTime,
        defaultEndTime
    });
};

export default DateRangeSection;
