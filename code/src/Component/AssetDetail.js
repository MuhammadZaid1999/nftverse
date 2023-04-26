import React from "react";
import g1 from '../images/g1.gif';
import g4 from '../images/g4.gif';


function AssetDetail(){
    let imageFile=()=>{
    // let input = document.getElementById("image");
    // let imageName = document.getElementById("imageName")
    // document.querySelector("input[type=file]").files[0];

        // imageName.innerText = inputImage.name;
    // })
}
    return(
        // <div className="Theme_ui">
            <div className="Create-Collection-section row">
                <div className="collection-section-background row">
                    {/* <div className="nav-section-blur row"></div> */}
                    {/* <NavbarAfterLogin/> */}
                    <div className="Detail-container">
                        <div className="Container">
                            <div className="row">
                                <hr/>
                                <div className="Detail-Title col-sm d-flex justify-content-end"> 
                                    <button className="btn btn-primary btn-lg">SELL</button>
                                </div>
                                <hr/>

                                <div className="nftDetail">
                                    <div className="row">
                                        <div className="col-lg-4 nftDetail-image-container">
                                            {/* <div className="row nftDetail-activity"><h5>Mark as favorite</h5></div> */}
                                            <div className="nftDetail-logo"><img src={g4} width="50" height="50"/></div>
                                            <img className="nftDetail-image" src={g1}></img>
                                        </div>
                                        <div className="col-lg-8 nftDetail-image-desc">
                                            <div className="row image-desc-name">
                                                <div className="col-sm-6">
                                                    <h4>Octapus - uMJMTMA7jQ</h4>
                                                </div>
                                                <div className="col-sm-6 d-flex justify-content-end">
                                                    <h4>Social Links</h4>
                                                </div>
                                            </div>
                                            <div className="row image-desc-id">
                                                <h2># 11002</h2>
                                                <h4>Owned By <span className="image-desc-owned-by">You</span></h4>
                                            </div>

                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    
                    
                </div>
                {/* <h1>Hii</h1> */}
            </div>



        // </div>
    )
}

export default AssetDetail;