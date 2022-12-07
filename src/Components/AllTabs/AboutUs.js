import React from 'react';

export const AboutUs = () => {
    return (
        <>
            <div className="row justify-content-md-center">
                <div className="col-md-10 p-5">
                    <h3 className="mbr-section-subtitle align-center mbr-light p-3 mbr-fonts-style ">ABOUT TEAM</h3>
                    <p className="mbr-text align-center pb-3 mbr-fonts-style">
                        We have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family.
                    </p>
                    <p className="mbr-text align-center pb-3 mbr-fonts-style">
                        We are all very different. We were born in different cities, at different times, we love different music, food, movies. It is our company. We are its heart. We are not just a team, we are a family.
                    </p>
                    <button className="btn btn-primary" onClick={() => alert("Thank you for being interested in us!")}>
                        Know More!
                    </button>
                </div>
            </div>
        </>
    )
}