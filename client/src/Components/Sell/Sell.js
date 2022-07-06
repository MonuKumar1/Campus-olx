import React, { useState, Component } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { callMsGraph } from "../../graph";
import Button from "react-bootstrap/Button";


import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Sell() {

    const { accounts } = useMsal();
    const [user, setUser] = useState({
        name: accounts[0].name,
        email: accounts[0].username,
        mobile: "",
        otherInfo: "" 
    });

    let name, value;

    const handleInput = (e) => {
        console.log(user);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        console.log(user);
        const res = await fetch("/api/create/seller", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        // const data = res.json();
        // console.log(data);

        // if(data.status === 422 || !data){
        //     window.alert("Error creating seller");
        //     console.log("Error creating seller");
        // }
        // else{
        //     window.alert("Successfully created seller");
        //     console.log("Successfully created seller");
        //     history.push("/");
        // }
        
    }


    return (
        <div className="d-lg-inline-flex">
            <form method="POST" className="register-form">
                <MDBInput name="name" className='mb-4' id='form1Example1'  label='Name' readonly
                    value={user.name}
                    onChange={handleInput}
                />


                <MDBInput name="email" type="email" className='mb-4' id='form1Example2' label='Email address' readonly
                    value={user.email}
                    onChange={handleInput}
                />


                <MDBInput name="mobile" id='typePhone' type='tel' className='mb-4'  label='Mobile No.' 
                    value={user.mobile}
                    onChange={handleInput}
                />


                <MDBInput name="otherInfo" className='mb-4' id='other' label='Other Info' 
                    value={user.otherInfo}
                    onChange={handleInput}
                />


                <MDBBtn type='submit' name="seller" onClick={PostData} block>
                    Sign in
                </MDBBtn>
            </form> 

        </div>
        
    );
}
