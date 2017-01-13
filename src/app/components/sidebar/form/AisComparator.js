import React, {PropTypes} from 'react';
import AisCheckbox from './AisCheckbox';
import AisTextInput from './AisTextInput';
import DropdownList from 'react-widgets/lib/DropdownList';


const AisComparator = ({name, label}) => {

    const comparators = ['equal to', 'less than', 'greater than'];

    return (
        <div className="aisform__comparator">
            <AisCheckbox name={name} label={label + ' is '} />
            <div className="aisform__comparator-operators">
                <DropdownList defaultValue={'equal to'} data={comparators} />
                <AisTextInput name={'val'} label={'Value'} />
            </div>
        </div>
    );
};

AisComparator.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string
//    onChange: PropTypes.func
};

export default AisComparator;
