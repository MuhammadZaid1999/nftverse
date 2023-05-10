
import g4 from '../../images/g4.gif';
import etherscan from '../../images/etherscan-logo.jpg';

function ViewDetails(){
    return(
        // <div className="Theme_ui">
            <div className="Create-Collection-section row">
                <div className="collection-section-background row">
                    {/* <div className="nav-section-blur row"></div> */}
                    {/* <NavbarAfterLogin/> */}
                    <div className="Create-Collection-Container">
                        <div className="container"> 
                            <div className="row">
                                <div className="p-3 col-md-6">
                                    <img className="my-assets-images" src={g4} alt=""/>
                                </div>
                                <div className="p-3 col-md-6">
                                    <a style={{color: "rgb(218,20,205)"}}>Octapus</a>
                                    <h2>Octapus Mars</h2>
                                    <span>Owned by</span><span style={{color: "rgb(218,20,205)"}}> xyz <br/><br/></span>
                                    <div class="card">
                                        <div className="card-body" style={{backgroundColor:'#120124'}}>
                                            <h6 className="card-subtitle mb-2 text-muted">Current Price</h6>
                                            <h3 className="card-title"><b>0.00001 ETH</b></h3>
                                            <div className="intro-button">
                                            <button type="button" className="btn btn-primary" style={{width:"48%"}}>Buy Now</button>
                                            <button type="button" className="btn btn-primary" style={{width:"48%"}}>Place Bid</button>
                                            </div>
                                        </div>
                                    </div>   
                                     <br/><br/>
                                    <div class="card">
                                        <div class="card-header" style={{border:'1px solid white', backgroundColor:'#120124'}}>
                                            <b>Offers</b>
                                        </div>
                                        <div className="card-body" style={{ backgroundColor:'#120124', height:'165px', overflowY:'scroll', scrollbarColor: 'red yellow'}}>
                                        <table className="table table-fixed table-hover table-dark">
                                            <thead>
                                                <tr>
                                                <th scope="col" style={{ backgroundColor:'#120124'}}>#</th>
                                                <th scope="col" style={{ backgroundColor:'#120124'}}>Price</th>
                                                <th scope="col" style={{ backgroundColor:'#120124'}}>From</th>
                                                <th scope="col" style={{ backgroundColor:'#120124'}}></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td style={{ backgroundColor:'#120124'}}><b>1</b></td>
                                                <td style={{ backgroundColor:'#120124'}}><b>0.000012 ETH</b></td>
                                                <td style={{ backgroundColor:'#120124'}}>abcd</td>
                                                <td style={{ backgroundColor:'#120124'}}>
                                                    <div className="intro-button">
                                                      <button type="submit" className="btn btn-primary">Accept</button>
                                                    </div>
                                               </td>
                                                </tr>
                                                <tr>
                                                <td style={{ backgroundColor:'#120124'}}><b>2</b></td>
                                                <td style={{ backgroundColor:'#120124'}}><b>0.00015 ETH</b></td>
                                                <td style={{ backgroundColor:'#120124'}}>efgh</td>
                                                <td style={{ backgroundColor:'#120124'}}>
                                                    <div className="intro-button">
                                                      <button type="submit" className="btn btn-primary">Accept</button>
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td style={{ backgroundColor:'#120124'}}><b>1</b></td>
                                                <td style={{ backgroundColor:'#120124'}}><b>0.000012 ETH</b></td>
                                                <td style={{ backgroundColor:'#120124'}}>abcd</td>
                                                <td style={{ backgroundColor:'#120124'}}>
                                                    <div className="intro-button">
                                                      <button type="submit" className="btn btn-primary">Accept</button>
                                                    </div>
                                               </td>
                                                </tr>
                                                <tr>
                                                <td style={{ backgroundColor:'#120124'}}><b>2</b></td>
                                                <td style={{ backgroundColor:'#120124'}}><b>0.00015 ETH</b></td>
                                                <td style={{ backgroundColor:'#120124'}}>efgh</td>
                                                <td style={{ backgroundColor:'#120124'}}>
                                                    <div className="intro-button">
                                                      <button type="submit" className="btn btn-primary">Accept</button>
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td style={{ backgroundColor:'#120124'}}><b>1</b></td>
                                                <td style={{ backgroundColor:'#120124'}}><b>0.000012 ETH</b></td>
                                                <td style={{ backgroundColor:'#120124'}}>abcd</td>
                                                <td style={{ backgroundColor:'#120124'}}>
                                                    <div className="intro-button">
                                                      <button type="submit" className="btn btn-primary">Accept</button>
                                                    </div>
                                               </td>
                                                </tr>
                                                <tr>
                                                <td style={{ backgroundColor:'#120124'}}><b>2</b></td>
                                                <td style={{ backgroundColor:'#120124'}}><b>0.00015 ETH</b></td>
                                                <td style={{ backgroundColor:'#120124'}}>efgh</td>
                                                <td style={{ backgroundColor:'#120124'}}>
                                                    <div className="intro-button">
                                                      <button type="submit" className="btn btn-primary">Accept</button>
                                                    </div>
                                                </td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                    </div>   
                                </div>
                                <div className="p-3 col-md-6">
                                    <div class="card">
                                        <div className="card-header" style={{border:'1px solid white', backgroundColor:'#120124'}}>
                                           <b>Description</b>
                                        </div>
                                        <div className="card-body" style={{backgroundColor:'#120124'}}>
                                            <p>By <b>HAVAH_Vega</b></p>
                                            <p>Life is like fishing. The wise ones become the fishermen while the foolish ones become the fish!</p>
                                        </div>
                                    </div> 
                                    <br/>
                                    <div class="card">
                                        <div className="card-header" style={{border:'1px solid white', backgroundColor:'#120124'}}>
                                           <b>About Octapus</b>
                                        </div>
                                        <div className="card-body" style={{backgroundColor:'#120124'}}>
                                            <p>This NFT's collection is created on Ethereum Blockchain
                                            &nbsp;<a target="_blank" href="img_forest.jpg"><img src={etherscan} width="30px" alt=""/></a>
                                            </p>
                                           
                                        </div>
                                    </div>     
                                </div>
                                <div className="p-3 col-md-6">
                                    <div class="card">
                                        <div className="card-header" style={{border:'1px solid white', backgroundColor:'#120124'}}>
                                           <b>Details</b>
                                        </div>
                                        <div className="card-body" style={{backgroundColor:'#120124'}}>
                                            <p>
                                                Contract Address
                                                <span style={{float: 'right'}}>0xdb6f...8848</span>
                                            </p>
                                            <p>
                                                Token ID
                                                <span style={{float: 'right'}}>55</span>
                                            </p>
                                            <p>
                                                Token Standard 
                                                <span style={{float: 'right'}}>ERC-721</span>
                                            </p>
                                            <p>
                                                Network 
                                                <span style={{float: 'right'}}>ETHEREUM</span>
                                            </p>
                                            <p>
                                                Creator Fee 
                                                <span style={{float: 'right'}}>2.5%</span>
                                            </p>
                                            <p>
                                                Catergory 
                                                <span style={{float: 'right'}}>Arts</span>
                                            </p>
                                        </div>
                                    </div> 
                                    <br/>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}
export default ViewDetails;