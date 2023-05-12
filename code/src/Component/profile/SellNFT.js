import { useEffect, useState } from "react";
import { useStore } from "../../context/GlobalState";
import { NFTVERSE_POLYGON_ADDRESS, NFTVERSE_BSC_ADDRESS, NFTVERSE_ETHEREUM_ADDRESS } from "../../contract/NFTVERSE";
import { ListNFT, CancelListing, addNFTInDB, getNFTs } from "../../store/asyncActions";
import swal from 'sweetalert';

function SellNFT(){
    const params = new URLSearchParams(window.location.search);
    const nft = JSON.parse(params.get("details"));
    const wallet = params.get("wallet");

    const [{web3, contract, accounts, user_data}] = useStore();
    const [sellPrice, setSellPrice] = useState(0);

    const [listed, setListed] = useState(false);
    const [currentPrice, setCurrentPrice] = useState(0); 
    useEffect(() => {
        (async() => {
            if(contract !== null){
                const price = await contract.methods.viewListing(nft.id).call();
                setCurrentPrice(price);
                if(price > 0){
                    setListed(true);
                }
            }
        })()
    },[contract, listed])


    const handleSubmit = async (e) => {
        e.preventDefault();

        let nfts = getNFTs();
        let objIndex = nfts.findIndex((obj => (obj.id === nft.id)));
        nfts[objIndex].saleType = 2;
        console.log(nfts);

        const owner = await contract.methods.ownerOf(nft.id).call();
        const isListed = await contract.methods.getNFT_Details(nft.id).call(); 

        if(user_data.wallet_address !== accounts[0]){
            swal({text: "Please Connect with correct Wallet", icon: "warning", className: "sweat-bg-color"});
        }
        else if(sellPrice <= 0){
            swal({text: "Selling Price must be greater than 0", icon: "warning", className: "sweat-bg-color"});
        }
        else if(owner !== accounts[0]){
            swal({text: "You are not an Owner of this NFT", icon: "warning", className: "sweat-bg-color"});
        } 
        else if(isListed.listed === true){
            swal({text: "this NFT is already on Selling", icon: "warning", className: "sweat-bg-color"});
        } 
        else{
            try {  
                const ethPrice = web3.utils.toWei(sellPrice, "ether");
                const newTransaction = {
                    tokenID: nft.id,
                    price: ethPrice
                }
                const transaction = await ListNFT(contract, accounts, newTransaction);
                if(transaction.status == true){
                    addNFTInDB(nfts, "NFT Updated");

                    setListed(true);
                    swal({text: "NFT Listed Successfully", icon: "success", className: "sweat-bg-color"});
                }
            }catch (error){
                console.log("error trax = ",error); 
                swal({text: error.message, icon: "error", className: "sweat-bg-color"});
            }
        }
    }

    const cancelListing = async (e) => {
        e.preventDefault();

        let nfts = getNFTs();
        let objIndex = nfts.findIndex((obj => (obj.id === nft.id)));
        nfts[objIndex].saleType = 1;
        console.log(nfts);

        const owner = await contract.methods.ownerOf(nft.id).call();
        const isListed = await contract.methods.getNFT_Details(nft.id).call(); 

        if(user_data.wallet_address !== accounts[0]){
            swal({text: "Please Connect with correct Wallet", icon: "warning", className: "sweat-bg-color"});
        }
        else if(owner !== accounts[0]){
            swal({text: "You are not an Owner of this NFT", icon: "warning", className: "sweat-bg-color"});
        } 
        else if(isListed.listed === false){
            swal({text: "this NFT is not on Selling", icon: "warning", className: "sweat-bg-color"});
        }
        else{
            try {  
                const newTransaction = {
                    tokenID: nft.id,
                }
                const transaction = await CancelListing(contract, accounts, newTransaction);
                if(transaction.status == true){
                    addNFTInDB(nfts, "NFT Updated");

                    setListed(false);
                    swal({text: "NFT Listing cancel Successfully", icon: "success", className: "sweat-bg-color"});
                }
            }catch (error){
                console.log("error trax = ",error); 
                swal({text: error.message, icon: "error", className: "sweat-bg-color"});
            }
        } 
    }

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
                                    <img className="my-assets-images" src={nft.image} alt=""/>
                                </div>
                                <div className="p-3 col-md-6">
                                    <a style={{color: "rgb(218,20,205)"}}>NFTVERSE</a>
                                    <h2>{nft.name}</h2>
                                    <span>Owned by</span><span style={{color: "rgb(218,20,205)"}}> {wallet.slice(0,5)}...........{wallet.slice(37,42)} <br/><br/></span>
                                    <div class="card">
                                        <div className="card-body" style={{backgroundColor:'#120124'}}>
                                            <h6 className="card-subtitle mb-2 text-muted">Current Price</h6>
                                            <h3 className="card-title"><b>{currentPrice / 10**18} ETH</b></h3>
                                            <div className="intro-button">
                                                {
                                                    currentPrice > 0 ? 
                                                    <button type="button" className="btn btn-primary" style={{width:"48%"}} onClick={cancelListing}>Cancel Listing</button> :
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width:"48%"}}>Sell NFT</button> 
                                                }
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
                                            <p>{nft.description}</p>
                                        </div>
                                    </div> 
                                    <br/>  
                                    <div class="card">
                                        <div className="card-header" style={{border:'1px solid white', backgroundColor:'#120124'}}>
                                           <b>Attributes</b>
                                        </div>
                                        <div className="card-body" style={{backgroundColor:'#120124'}}>
                                            <div className="row">
                                                {
                                                    nft.attributes.length > 0 ? 
                                                    nft.attributes.map(attr => (
                                                        <div className="col-md-2 d-flex flex-col bd-highlight mb-3">
                                                            <div className="p-2 bd-highlight" style={{border: "1px solid white", borderRadius: "10%"}}>
                                                                <h6 className="text-center">{attr.trait_type}</h6> 
                                                                <h6 className="text-center text-muted">{attr.value}</h6>
                                                            </div>
                                                        </div> 
                                                    )) : null
                                                }
                                            </div>
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
                                                <span style={{float: 'right'}}>{
                                                    nft.network === 80001 ? 
                                                    NFTVERSE_POLYGON_ADDRESS.slice(0,5)+"..........."+NFTVERSE_POLYGON_ADDRESS.slice(37,42) : 
                                                    nft.network === 5 ? NFTVERSE_ETHEREUM_ADDRESS.slice(0,5)+"..........."+NFTVERSE_ETHEREUM_ADDRESS.slice(37,42) : 
                                                    NFTVERSE_BSC_ADDRESS.slice(0,5)+"..........."+NFTVERSE_BSC_ADDRESS.slice(37,42) 
                                                }</span>
                                            </p>
                                            <p>
                                                Token ID
                                                <span style={{float: 'right'}}>{nft.id}</span>
                                            </p>
                                            <p>
                                                Token Standard 
                                                <span style={{float: 'right'}}>ERC-721</span>
                                            </p>
                                            <p>
                                                Network 
                                                <span style={{float: 'right'}}>{
                                                    nft.network === 80001 ? "Polygon (Matic)" : nft.network === 5 ? "Ethereum (Goreli)" : "Binance Smart Chain (Testnet)"  
                                                }</span>
                                            </p>
                                            <p>
                                                Creator Fee 
                                                <span style={{float: 'right'}}>1%</span>
                                            </p>
                                        </div>
                                    </div> 
                                    <br/>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Sell NFT</h5>
                                <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md mx-auto">
                                        <form className="justify-content-center" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label className="lottery-form-titles">Selling Price:</label>
                                                <input type="number" className="input-text-lottery" placeholder="Enter Selling Price" step=".0000000001" onChange={(e) => setSellPrice(e.target.value)}/>
                                            </div>
                                            
                                            <div className="form-group text-center">
                                                <div className="staking-button">
                                                    <div className="intro-button">
                                                        <button type="submit" className="btn btn-primary field-title" style={{width:'40%'}}>Sell Now</button>
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
            </div>
    )
}
export default SellNFT;