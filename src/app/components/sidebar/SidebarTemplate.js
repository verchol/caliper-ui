import React from 'react';
import { Link } from 'react-router';

import CaliperForm from './CaliperForm';


const SidebarTemplate = () => {
    return (
            <div className="sidebar">
                <div className="sidebar__logo">
                    <Link to="/"><img src="/images/caliper.svg" alt="Caliper"/></Link>
                </div>

                <CaliperForm />
            </div>
    );
};

export default SidebarTemplate;
