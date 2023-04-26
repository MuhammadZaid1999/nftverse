import React from "react";

function Lottery(){

    return(
        // <div className="Theme_ui">
            <div className="section-one row">
                <div className="lottery-section-background row">
                    <h1 className="lottery-h1">Lottery</h1>
                    <div className="row">
                        {/* <span className="lottery-section-heading">
                            <h3>Overview</h3>
                        </span> */}
                        <div className="col-sm pl-6">
                            <h3>Overview</h3>
                        </div>
                        <div className="col-sm text-right pr-6 pb-3">
                            <button type="submit" className="btn btn-primary lottery-modal-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal" >Create Lottery</button>
                        </div>
                        <div className="lottery-final-stats">
                            <table class="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th className="text-center" scope="col">Total Lottery</th>
                                        <th className="text-center" scope="col">Runing</th>
                                        <th className="text-center" scope="col">Completed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">7</td>
                                        <td className="text-center">3</td>
                                        <td className="text-center">4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="lottery-short-stats mt-6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm d-flex justify-content-end">
                                        <button className="btn-stats-show">Running</button>
                                    </div>
                                    <div className="col-sm">
                                        <button className="btn-stats-show">Completed</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row short-stats-table">
                                <table class="table table-striped table-dark">
                                    <thead>
                                        <tr>
                                            <th className="text-center" scope="col">Title</th>
                                            <th className="text-center" scope="col">Threshold</th>
                                            <th className="text-center" scope="col">Registered Users</th>
                                            <th className="text-center" scope="col">Total Winners</th>
                                            <th className="text-center" scope="col">Show Registered User</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center pt-1h">7</td>
                                            <td className="text-center pt-1h">3</td>
                                            <td className="text-center pt-1h">4</td>
                                            <td className="text-center pt-1h">4</td>
                                            <td className="text-center pt-1h"> 
                                                <button type="submit" className="btn btn-primary lottery-modal-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal1" >View Registered User</button> 
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>








                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Lottery</h5>
                                <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md mx-auto">
                                        <form className="justify-content-center">
                                            <div className="form-group">
                                                <label className="lottery-form-titles">Lottery Title:</label>
                                                <input type="text" className="input-text-lottery" placeholder="Enter Lottery Title"/>
                                            </div>
                                            <div className="form-group">
                                                <label className="lottery-form-titles">Lottery Tags:</label>
                                                <input type="text" className="input-text-lottery" placeholder="Enter Lottery Tags"/>
                                            </div>
                                            <div className="form-group">
                                                <label className="lottery-form-titles">Description:</label>
                                                <textarea className="lottery-desc"></textarea>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6">
                                                    <label className="lottery-form-titles">Total Rounds:</label>
                                                    <input type="number" className="input-number-lottery" placeholder="Enter Total Rounds"/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="lottery-form-titles">Total Winner:</label>
                                                    <input type="number" className="input-number-lottery" placeholder="Enter Total Winner"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6">
                                                    <label className="lottery-form-titles">Threshold:</label>
                                                    <input type="number" className="input-number-lottery" placeholder="Enter Threshold Amount"/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="lottery-form-titles">Raffle Starting Date:</label>
                                                    <input type="date" className="input-number-lottery" placeholder="YY-MM-DD"/>
                                                </div>
                                            </div>
                                            
                                            <div className="form-group text-center">
                                                <br/>
                                                <div className="staking-button">
                                                    <div className="intro-button">
                                                        <button type="submit" className="btn btn-primary field-title" style={{width:'40%'}}>Create Lottery</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>   
                                    </div>
                                </div>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn custom-btn" onClick={(e) => generateArtWork(e)}>Generate ArtWork</button>
                            </div> */}
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Registered User</h5>
                                <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md mx-auto">
                                        <textarea className="show-lottery-user"></textarea>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn custom-btn" onClick={(e) => generateArtWork(e)}>Generate ArtWork</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

    )}

export default Lottery;