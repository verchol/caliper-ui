import React from 'react';

const HomePage = () => {
    return (
        <div className="page">

            <h1>Caliper Home Page</h1>
            <p>
                Caliper is an error metric tracking application
                developed for NGA Research.
            </p>

            <div className="grid-test-1">
                <div className="something">
                    Just some
                </div>
                <div className="anything">
                    text to show
                </div>
                <div className="stuff">
                    what a standard
                </div>
                <div className="more-stuff">
                    grid looks like.
                </div>
            </div>

            <div className="grid-test-2">
                <div className="this">
                    Here's a grid
                </div>
                <div className="that">
                    that's separated
                </div>
                <div className="whatever">
                    into thirds with gutters.
                </div>
            </div>

            <div className="grid-test-3">
                <div className="who">
                    Here's a
                </div>
                <div className="what">
                    grid that's
                </div>
                <div className="where">
                    separated into
                </div>
                <div className="when">
                    quarters with gutters.
                </div>
            </div>

        </div>
    );
};

export default HomePage;
