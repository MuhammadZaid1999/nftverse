import firebaseDb from "../../firebase/config";
import Web3 from "web3";
import { useState, useEffect } from "react";
import { generateSecuriyCode } from "../../store/asyncActions";
import swal from 'sweetalert';


function Register() {

    const initialFieldValues = {
        wallet_address: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        nfts:[{id:'',name:'',image:'', description:'', network: '', attributes:[]}]
    }
    const [values, setValues] = useState(initialFieldValues);

    const securityCode = {
        code: '',
        confirmCode: '',
    }
    const [security, setSecurity] = useState(securityCode);


    function disableCopy(event) {
        event.preventDefault();
    }

    useEffect(() => {
        let security_code = generateSecuriyCode();
        setSecurity({...security, code: security_code});
    },[])


    const addOrEdit = async (obj) => {   
        firebaseDb.child('users').push(
          obj,
          async err => {
            if (err){
                console.log(err)
            }
            else{
                await swal({text: "Registered Successfully", icon: "success"});
                window.location.href = '/Login'
            }      
        }
    )}

    const connectWallet = async () => {
        const web3 = new Web3(Web3.givenProvider);
        await web3.givenProvider.enable();

        const accounts = await web3.eth.getAccounts();
        setValues({...values, wallet_address: accounts[0] })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        if(values.wallet_address === ""){
            swal({text: "Connect Your Wallet", icon: "warning"});
        }
        else if(values.password !== values.confirm_password){
            swal({text: "Password and Confirm Password does not matched", icon: "error"});
        }
        else if(security.code !== security.confirmCode){
            swal({text: "Incorrect Security Code", icon: "error", className: "sweat-bg-color"});
        }
        else{
            addOrEdit(values);
        }
    }

    return (
        // <div className="Theme_ui">
            <div className="Create-Collection-section row">
                <div className="collection-section-background row">
                    {/* <div className="nav-section-blur row"></div> */}
                    {/* <NavbarBeforeLogin/> */}
                    <div className="Create-Collection-Container">
                            <div className="container">
                                <div className="Create-Collection-Title row text-center"> 
                                    <h1 className="Create-collection-head">Register Account</h1> 
                                </div>
                                    <div className="row">
                                        <div className="col-md-5 mx-auto">
                                        <form className="justify-content-center" onSubmit={e => handleSubmit(e)}>
                                            <div className="form-group">
                                                <div className="col-md-10">
                                                    <label className="field-title">Wallet Address</label>
                                                    <input type="text" className="input-register" placeholder="0x0000000000000000000000000000000000000" value={values.wallet_address} readOnly required/>
                                                </div>
                                                    <div className="col-md-2" style={{margin:"-10.5% 0% 4% 85%"}}>
                                                        <div className="intro-button">
                                                            <button type="button" className="btn btn-primary" onClick={()=> connectWallet()}>Connect</button>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="field-title">UserName</label>
                                                <input type="text" className="input-register" placeholder="Enter UserName" onChange={(e)=> setValues({...values, username: e.target.value })} required/>
                                            </div>
                                            <div className="form-group">
                                                <label className="field-title">Email</label>
                                                <input type="email" className="input-register" placeholder="Enter Email Address" onChange={(e)=> setValues({...values, email: e.target.value })} required/>
                                            </div>
                                            <div className="form-group">
                                                <label className="field-title">Password</label>
                                                <input type="password" className="input-register" placeholder="Enter Password" onChange={(e)=> setValues({...values, password: e.target.value })} required/>
                                            </div>
                                            <div className="form-group">
                                                <label className="field-title">Confirm Password</label>
                                                <input type="password" className="input-register" placeholder="Enter Confirm Password" onChange={(e)=> setValues({...values, confirm_password: e.target.value })} required/>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <label className="field-title">Security Code</label>
                                                    <div className="col-md-5" style={{marginRight:"8%"}}>
                                                    <input type="text" className="input-register" value={security.code} style={{fontFamily: "'Shadows Into Light', cursive", cursor: "not-allowed"}} readOnly onCopy={(e) => disableCopy(e)}/>
                                                    </div>
                                                    <div className="col-md-6">
                                                    <input type="text" className="input-register" placeholder="Enter Security Code" onChange={(e)=> setSecurity({...security, confirmCode: e.target.value })} required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group text-center">
                                                <br/>
                                                <div className="intro-button">
                                                    <button type="submit" className="btn btn-primary field-title" style={{width:'40%'}}>Register</button>
                                               </div>
                                            </div>
                                           
                                            
                                        </form>           
                                        </div>
                                    </div>
                                
                
                                
                            </div>
                        
                    </div>
                    
                </div>
            </div>
        // </div>
    )
}

export default Register;