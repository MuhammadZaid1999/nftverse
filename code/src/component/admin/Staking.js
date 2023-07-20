
import Username from "./Username"
export default function Staking(){
    return(
        // <div className="Theme_ui">
            <div className="section-one row">
                <div className="lottery-section-background row">
                    <br/><br/><br/><br/><br/>
                    <div className="row">
                        <Username/>
                        <h1 className="lottery-h1">Staking</h1>
                        {/* <span className="lottery-section-heading">
                            <h3>Overview</h3>
                        </span> */}
                        <div className="col-sm pl-6">
                            <h3>Overview</h3>
                        </div>
                        <div className="lottery-final-stats">
                            <table class="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th className="text-center" scope="col">Total Stacked NFTs</th>
                                        <th className="text-center" scope="col">Contract Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">5</td>
                                        <td className="text-center">
                                            <span>2 ETH</span>
                                            &nbsp;&nbsp;
                                            <span className="intro-button"><button type="button" className="btn btn-primary">Add Fund</button></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                    {/* <span className="lottery-section-heading">
                        <h3>Overview</h3>
                    </span> */}
                    <div className="col-sm pl-6">
                        <br/><br/>
                        <h3>Staked NFT</h3>
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center  pt-1h">1</td>
                                    <td className="text-center  pt-1h">Monthly</td>
                                    <td className="text-center  pt-1h">0.0001 ETH</td>
                                </tr>
                                <tr>
                                    <td className="text-center  pt-1h">2</td>
                                    <td className="text-center  pt-1h">Quaterly</td>
                                    <td className="text-center  pt-1h">0.001 ETH</td>
                                </tr>
                                <tr>
                                    <td className="text-center  pt-1h">3</td>
                                    <td className="text-center  pt-1h">Yearly</td>
                                    <td className="text-center  pt-1h">0.01 ETH</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                    </div>
                </div>
            </div>
    )
}