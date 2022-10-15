import React from 'react'

const Tips = () => {
    return (
        <div className="flex-column d-flex align-items-center">
            <div className="card text-center">
                <div className="card-header">
                    <h1 className="text-center">Password tips</h1>
                </div>
                <div className="card-body d-flex flex-column align-items-center">
                    <div className="d-flex flex-column">
                        <div className="row row--lg features features--tips row--eq-height">
                            <div className="col-md-4">
                                <div className="feature feature--content-left feature--counter">
                                    <div className="feature__icon align-self-start ">
                                        <span className='text-primary font-weight-bold display-6'>1</span>

                                    </div>
                                    <div className="feature__body">
                                        <p className="feature__desc p-3 text-muted">
                                            Change your passwords periodically.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature feature--content-left feature--counter">
                                    <div className="feature__icon align-self-start">
                                        <span className='text-primary font-weight-bold display-6'>2</span>

                                    </div>
                                    <div className="feature__body">
                                        <p className="feature__desc p-3 text-muted">
                                            Never use the same password on multiple sensitive accounts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature feature--content-left feature--counter">
                                    <div className="feature__icon align-self-start">
                                        <span className='text-primary font-weight-bold display-6'>3</span>

                                    </div>
                                    <div className="feature__body">
                                        <p className="feature__desc p-3 text-muted">
                                            Use a password with at least 16 characters. It should contain lowercase letters, uppercase letters, numbers, and symbols.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature feature--content-left feature--counter">
                                    <div className="feature__icon align-self-start">
                                        <span className='text-primary font-weight-bold display-6'>4</span>

                                    </div>
                                    <div className="feature__body">
                                        <p className="feature__desc p-3 text-muted">
                                            Refrain from saving your password in a web browser (Firefox, Chrome, Internet Explorer, Safari). Instead, use a tool which manages an encrypted password locker.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature feature--content-left feature--counter">
                                    <div className="feature__icon align-self-start">
                                        <span className='text-primary font-weight-bold display-6'>5</span>

                                    </div>
                                    <div className="feature__body">
                                        <p className="feature__desc p-3 text-muted">
                                            Do not log into sensitive accounts while connected to a public Wi-Fi hotspot.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature feature--content-left feature--counter">
                                    <div className="feature__icon align-self-start">

                                        <span className='text-primary font-weight-bold display-6'>6</span>
                                    </div>
                                    <div className="feature__body">
                                        <p className="feature__desc p-3 text-muted">
                                            Check that you are using a secure (HTTPS, SSH, SFTP) connection before transmitting your password over the web.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tips
