import moment from 'moment';
import CaliperFormTemplate from './CaliperFormTemplate';


const CaliperForm = () => {

    let defaultStartTime = moment().startOf('day').toDate();
    let defaultEndTime = moment().endOf('day').toDate();

    return CaliperFormTemplate({
        defaultStartTime,
        defaultEndTime
    });
};

export default CaliperForm;
