import Web3 from "web3";
import {setupWeb3, addNetwork, addEthereumAccounts, web3LoadingError, setupContract, setupMintFee, userData} from "./actions";
import { NFTVERSE_POLYGON_ADDRESS, NFTVERSE_BSC_ADDRESS, NFTVERSE_ETHEREUM_ADDRESS, NFTVERSE_ABI } from "../contract/NFTVERSE";

import firebaseDb from "../firebase/config";
import swal from 'sweetalert';

const web3 = new Web3(Web3.givenProvider);

export const loadBlockchain = async (dispatch) => {
    try {
        if(web3.givenProvider){
            await web3.givenProvider.enable();
            dispatch(setupWeb3(web3));

            web3.eth.getAccounts().then(accounts => dispatch(addEthereumAccounts(accounts)))

            const networkId = await web3.eth.getChainId();
            if(networkId === 5 || networkId === 80001 || networkId === 97){
                dispatch(addNetwork(networkId));
                getNetworkData(networkId, dispatch);
            }
            else{
                swal({text: "Please Select the Valid Blockchain Network", icon: "error"});
            }
            
            if(window.localStorage.getItem("login_success") === "true"){
                loadData(dispatch);
            }

            web3Events(dispatch);

        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch(error){
        console.log("Error in loading Web3 = ",error);
        if(error.code===4001){
            dispatch(web3LoadingError(error.message));
        }
    }

}

const web3Events = (dispatch) => {
    window.ethereum.on('accountsChanged', async function() {
        let _accounts = await web3.eth.getAccounts();
        dispatch(addEthereumAccounts(_accounts));
        console.log(_accounts[0])
    });

    window.ethereum.on('networkChanged', function (networkId) {
        networkId = parseInt(networkId);
        if(networkId === 5 || networkId === 80001 || networkId === 97){
            dispatch(addNetwork(networkId));
            getNetworkData(networkId, dispatch);
        }
        else{
            swal({text: "Please Select the Valid Blockchain Network", icon: "error"});
        }
    })
}

const getNetworkData = (networkId, dispatch) => {
    let contract = null;
    if(networkId === 5){
        contract = web3.eth.Contract(NFTVERSE_ABI, NFTVERSE_ETHEREUM_ADDRESS);
        dispatch(setupContract(contract))
    }
    else if(networkId === 80001){
        contract = new web3.eth.Contract(NFTVERSE_ABI, NFTVERSE_POLYGON_ADDRESS);
        dispatch(setupContract(contract))
    }
    else if(networkId === 97){
        contract = new web3.eth.Contract(NFTVERSE_ABI, NFTVERSE_BSC_ADDRESS);
        dispatch(setupContract(contract))
    }
    
    contract.methods.mintFee().call().then(mintFee => dispatch(setupMintFee(mintFee)));
}


export const NFTMinting = async(contract, accounts, transaction)=>{
    const receipt =  await contract.methods.createNFT(transaction.tokenUri)
    .send({
        from : accounts[0],
        value: transaction.mintFee,
    });
    return receipt;   
}

export const ListNFT = async(contract, accounts, transaction)=>{
    const receipt =  await contract.methods.listNFT(transaction.tokenID, transaction.price)
    .send({
        from: accounts[0],
    });
    return receipt;   
}

export const CancelListing = async(contract, accounts, transaction)=>{
    const receipt =  await contract.methods.cancelListing(transaction.tokenID)
    .send({
        from: accounts[0],
    });
    return receipt;   
}

export const BuyNFT = async(contract, accounts, transaction)=>{
    const receipt =  await contract.methods.buyNFT(transaction.tokenID)
    .send({
        from: accounts[0],
        value: transaction.price
    });
    return receipt;   
}

export const PlaceBid = async(contract, accounts, transaction)=>{
    const receipt =  await contract.methods.placeBid(transaction.tokenID)
    .send({
        from: accounts[0],
        value: transaction.price
    });
    return receipt;   
}


function loadData(dispatch){
    firebaseDb.child('users').on('value', snapshot => {
        if (snapshot.val() != null) {
            let users =  snapshot.val();
     
             Object.keys(users).forEach((key) => {
                 if(key === window.localStorage.getItem('UUID')){
                    dispatch(userData(users[key]));
                 }
               }
             )
        }
    })
}


export function getOwnerNFTs(wallet){
    let owner_data = null, UUID = null;
    firebaseDb.child('users').on('value', snapshot => {
        if (snapshot.val() != null) {
            let users =  snapshot.val();
             Object.keys(users).forEach((key) => {
                if(users[key].wallet_address === wallet){
                    owner_data = users[key];
                    UUID = key
                }    
            })
        }
    })
    return {owner_data, UUID};
}


export const addOrEdit1 = (UUID, obj, msg) => {
    firebaseDb.child(`users/${UUID}`).set(
        obj,
        err => {
            if (err){
                console.log("Error ",err)
            }
            else{
                console.log(msg)
            } 
        }
    )
}


export const addOrEdit = (obj, msg) => {
    const currentId = window.localStorage.getItem('UUID')
    firebaseDb.child(`users/${currentId}`).set(
        obj,
        err => {
            if (err){
                console.log("Error ",err)
            }
            else{
                console.log(msg)
            } 
        }
    )
}


export function getNFTs(){
    return new Promise((resolve, reject) => {
        firebaseDb.child('nfts').on('value', snapshot => {
            if (snapshot.val() != null) {
                let nfts = [];
                let data = snapshot.val();
                nfts = data["-NV4hOCjMnVfFMMQc9TI"];
                resolve(nfts);
            }
            else{
                resolve([]);
            }
        }, error => {
            reject(error);
        }); 
    });
}


export const addNFTInDB = (obj, msg) => {
    firebaseDb.child('nfts/-NV4hOCjMnVfFMMQc9TI').set(
        obj,
        err => {
            if (err){
                console.log("Error ",err)
            }
            else{
                console.log(msg)
            } 
        },
    )
}


export function generateSecuriyCode() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    return result;
}



