import CaliperFormTemplate from './CaliperFormTemplate';
import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';

console.log('momentLocalizer()');
momentLocalizer(Moment);

const CaliperForm = (props) => {
  return CaliperFormTemplate(props);
};

export default CaliperForm;
