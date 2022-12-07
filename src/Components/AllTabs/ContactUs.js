import React from 'react';


export const ContactUs = () => {
    return (
        <>
            <div className="row justify-content-md-center">
                <div className="col-md-10 p-5">
                    <h3 className="mbr-section-subtitle align-center mbr-light p-3 mbr-fonts-style ">MEET OUR TEAM</h3>
                    <p className="mbr-text align-center pb-3 mbr-fonts-style">
                        We are all very different. We were born in different cities, at different times, we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family.
                    </p>
                    <button className="btn btn-primary" onClick={()=>alert("Server Down! We will contact you soon")}>
                        CONTACT US
                    </button>
                </div>
            </div>
        </>
    )
}