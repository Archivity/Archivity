import React from 'react';

const Contact = () => {
    return (
        <>
            {/*Contact_card_section start*/}

            <div className="container-fluid d-flex align-content-center justify-content-center my-5" id="contact">
                                <div className="card contact_card" id="about_me" style={{width: "25rem"}}>
                                    <h2 className="card-title text-center"><span className="span_text">Contact</span> Me</h2>
                                    <div>
                                        <form action="mailto:viprock234@gmail.com" method="POST" encType="text/plain">
                                            <div className="form-group my-5">
                                                <input type="text" className="form-control" id="input_box" required
                                                    placeholder="&#61447; Name" name="name"/>
                                            </div>
                                            <div className="form-group my-5">
                                                <input type="email" className="form-control" id="input_box" required
                                                    placeholder="&#xf0e0; Email" name="email"/>
                                            </div>
                                            <div className="form-group my-5">
                                                <input type="number" className="form-control" id="input_box" required
                                                    placeholder="&#xf095; Mobile" name="mobile"/>
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" id="Textarea1" rows="3" required
                                                    placeholder="&#xf075; Message" name="message"></textarea>
                                            </div>
                                            <div className="text-center my-5">
                                                <button type="submit"
                                                    className="btn btn-primary text-center">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>

                            {/*Contact_card_section end*/}
        </>
    )
}

export default Contact
