import React from "react";
import g1 from '../images/g1.gif';
import g2 from '../images/g2.gif';
import g4 from '../images/g4.gif';

function Staking(){

    return(
        <div className="section-one row">
            <div className="staking-section-background row">
                <div className="row staking-head">
                    <div className="col-sm-8"><h1 className="staking-h1">Staking</h1></div>
                    <div className="col-sm-4">
                        <div className="staking-button d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary staking-field-title"  data-bs-toggle="modal" data-bs-target="#exampleModal" >Stake Your NFT</button>
                        </div>
                    </div>
                </div> 
                <div className="row">
                    {/* <span className="lottery-section-heading">
                        <h3>Overview</h3>
                    </span> */}
                    <div className="col-sm pl-6">
                        <h3>Your Staked NFT</h3>
                    </div>
                    {/* <div className="col-sm text-center pr-6 pb-3">
                        <button type="submit" className="btn btn-primary lottery-modal-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal" >Create Lottery</button>
                    </div> */}
                    <div className="stake-stats">
                        <table class="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th className="text-center" scope="col">Token ID </th>
                                    <th className="text-center" scope="col">Time Period</th>
                                    <th className="text-center" scope="col">Reward Earn</th>
                                    <th className="text-center" scope="col">Setting</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center  pt-1h">1</td>
                                    <td className="text-center  pt-1h">Monthly</td>
                                    <td className="text-center  pt-1h">0.0001 ETH</td>
                                    <td className="text-center pt-1h"> 
                                        <button type="submit" className="btn btn-primary stake-setting-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal1" >Claim Reward</button> 
                                        <button type="submit" className="btn btn-primary stake-setting-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal1" >Unstake NFT</button> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center  pt-1h">2</td>
                                    <td className="text-center  pt-1h">Quaterly</td>
                                    <td className="text-center  pt-1h">0.001 ETH</td>
                                    <td className="text-center pt-1h"> 
                                        <button type="submit" className="btn btn-primary stake-setting-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal1" >Claim Reward</button> 
                                        <button type="submit" className="btn btn-primary stake-setting-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal1" >Unstake NFT</button> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center  pt-1h">3</td>
                                    <td className="text-center  pt-1h">Yearly</td>
                                    <td className="text-center  pt-1h">0.01 ETH</td>
                                    <td className="text-center pt-1h"> 
                                        <button type="submit" className="btn btn-primary stake-setting-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal1" >Claim Reward</button> 
                                        <button type="submit" className="btn btn-primary stake-setting-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal1" >Unstake NFT</button> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            

            







            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Staking NFT</h5>
                            <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-9 mx-auto">
                                    <form className="justify-content-center">
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle custom-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Select NFT
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li className="mt-3 pr-5">
                                                    <div className="row pl-6">
                                                        <div className="col-sm">
                                                            <img className="stake-img-dropdown" src={g1}/>
                                                        </div>
                                                        <div className="col-sm stake-img-dropdown-text">
                                                            <p>Shawn</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mt-3 pr-5">
                                                    <div className="row pl-6">
                                                        <div className="col-sm">
                                                            <img className="stake-img-dropdown" src={g2}/>
                                                        </div>
                                                        <div className="col-sm stake-img-dropdown-text">
                                                            <p>Alisa</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mt-3 pr-5">
                                                    <div className="row pl-6">
                                                        <div className="col-sm">
                                                            <img className="stake-img-dropdown" src={g4}/>
                                                        </div>
                                                        <div className="col-sm stake-img-dropdown-text">
                                                            <p>Jey</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <span>
                                            <h5 className="modal-title pt-5 pb-5 ">Time Period</h5>
                                        </span>
                                        <div className="row time-period">
                                            <div className="col-sm">
                                                <input type="radio" name="timePeriod"/>Monthly
                                            </div>
                                            <div className="col-sm">
                                                <input type="radio" name="timePeriod"/>Quarterly
                                            </div>
                                            <div className="col-sm">
                                                <input type="radio" name="timePeriod"/>Yearly
                                            </div>
                                        </div>                                     
                                        <div className="form-group text-center">
                                            <br/>
                                            <div className="staking-button">
                                                <button type="submit" className="btn btn-primary field-title" style={{width:'40%'}}>Stake Now</button>
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

        </div>
    )

}

export default Staking;