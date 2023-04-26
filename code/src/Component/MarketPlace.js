import React from "react";
import g1 from '../images/g1.gif';
import g2 from '../images/g2.gif';
import g3 from '../images/g3.gif';
import g4 from '../images/g4.gif';
import { NavLink } from "react-router-dom";

function MarketPlace(){

    return(
        // <div className="Theme_ui">
            <div className="Create-Collection-section row">
                <div className="collection-section-background row">
                    {/* <div className="nav-section-blur row"></div> */}
                    <div className="my-assets-container">
                        <div className="Container">
                            <div className="row">
                                <div className="myassets-Title row">
                                    <h1 className="my-assets-head d-flex justify-content-center">MarketPlace</h1>
                                </div>

                                <div className="nftContainer">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <form className="form-inline">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-6 mx-sm-3 mb-2">
                                                        <label for="inputPassword2" className="sr-only">Select Network from Metamask</label>
                                                        <input type="text" readOnly value="Ethereum" className="form-control" style={{width: "100%"}}/>
                                                    </div>                                
                                                </div>
                                            </form>
                                        </div>
                                      <div className="col-md-4">
                                            <form className="form-inline">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-6 mx-sm-3 mb-2">
                                                    <label for="inputPassword2" className="sr-only">Select Type</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option value="1">All</option>
                                                        <option value="2">Newly Created</option>
                                                        <option value="3">On Sale</option>
                                                    </select>
                                                    </div>
                                                    <div className="col-md-2" style={{marginTop:"4.5%"}}>
                                                        <div className="intro-button">
                                                           <button type="submit" className="btn btn-primary mb-2">Confirm</button>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </form>
                                      </div>
                                      <div className="col-md-4">
                                        <form className="form-inline">
                                            <div className="row justify-content-center">
                                                <div className="form-group mx-sm-3 mb-2 col-md-2">
                                                    <label for="inputPassword2" className="sr-only">Min</label>
                                                    <input type="text" className="form-control" id="inputPassword2" />
                                                </div>
                                                <div className="form-group mx-sm-3 mb-2 col-md-2">
                                                    <label for="inputPassword2" className="sr-only">Max</label>
                                                    <input type="text" className="form-control" id="inputPassword2" />
                                                </div>
                                                <div className="col-md-2" style={{marginTop:"4.5%"}}>
                                                    <div className="intro-button">
                                                       <button type="submit" className="btn btn-primary mb-2">Confirm</button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </form>
                                      </div>
                                            <div className="col-md-12">
                                                <br/>
                                                <form className="form-inline">
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-9">
                                                            <div className="form-group mx-sm-4 mb-2">
                                                                <input type="text" className="form-control" id="inputPassword2" placeholder="Search by NFT Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="intro-button">
                                                               <button type="submit" className="btn btn-primary mb-2" style={{width:"85%"}}>Search</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                       </div>
                                    <div className="row">
                                        <div className="col-md">
                                            <div className="my-assets-field col-sm">
                                                <img className="my-assets-images" src={g1} alt ="" />
                                                <div className="my-assets-Title">
                                                    <span>Octapus Wiz</span>
                                                    <div className="intro-button" style={{marginTop:"-6%"}}><button className="btn btn-sm float-end"><NavLink className="nav-link" to="/ViewDetails">Expand Item</NavLink></button></div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-md">
                                            <div className="my-assets-field col-sm">
                                                <img className="my-assets-images" src={g2} alt ="" />
                                                <div className="my-assets-Title"><span>Octapus halt</span></div>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="my-assets-field col-sm">
                                                <img className="my-assets-images" src={g3} alt ="" />
                                                <div className="my-assets-Title"><span>Octapus Virgo</span></div>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="my-assets-field col-sm">
                                                <img className="my-assets-images" src={g4} alt ="" />
                                                <div className="my-assets-Title"><span>Octapus Mars</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            

        // </div>
    )
}

export default MarketPlace;