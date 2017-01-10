import React from 'react';

const HomePage = () => {
    return (
        <div className="page">

            <h1>Caliper Home Page</h1>
            <p>
                Caliper is an error metric tracking application
                developed for NGA Research.
            </p>

            <div className="flex-grid">
                <div className="col">
                    Just some
                </div>
                <div className="col">
                    text to show
                </div>
                <div className="col">
                    what a standard
                </div>
                <div className="col">
                    grid looks like.
                </div>
            </div>

            <div className="flex-grid-thirds">
                <div className="col">
                    Here's a grid
                </div>
                <div className="col">
                    that's separated
                </div>
                <div className="col">
                    into thirds with gutters.
                </div>
            </div>

            <div className="flex-grid-quarters">
                <div className="col">
                    Here's a
                </div>
                <div className="col">
                    grid that's
                </div>
                <div className="col">
                    separated into
                </div>
                <div className="col">
                    quarters with gutters.
                </div>
            </div>

        </div>
    );
};

export default HomePage;
