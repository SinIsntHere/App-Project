const About = () => {
    return (
        <div>
            <h1 className="text-center display-1">About Us</h1>
            <div className="container">
                <hr />
                <h2 className="text-center text-info">Some Facts...</h2>
                <hr />
                {/*Row 1 of Facts*/}
                <div className="row">
                    <div className="col-md p-3">
                        App is under constant construction.
                    </div>
                    <div className="col-md p-3">
                        I have no idea what I'm doing 90% of the time.
                    </div>
                    <div className="col-md p-3">
                        This app may turn into a passion project in the future.
                    </div>
                </div>
                <button className="mt-4 btn btn-primary">Learn More</button>

                {/*Row 2 of Facts*/}
                <hr />
                <h2 className="text-center text-info">Random Facts...</h2>
                <div className="row">
                    <div className="col-md p-3">
                        The speed of a computer mouse is measured in "Mickeys" so theres that.
                    </div>
                    <div className="col-md p-3">
                        Bats sleep upside-down.
                    </div>
                    <div className="col-md p-3">
                        The Mona Lisa has no eyebrows.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;