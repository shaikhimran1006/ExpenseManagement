import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../LoginView.css";
import { saveCustomer, generateCustomerId } from "../../Services/CustomerService";

const CustomerAddition = () =>{
        const [customer, setCustomer]=useState({ 
        customerId:"",
        username: "A",
        customerName:"",
        address:" ",
        email: "A",
        mobile:0,
        occupation:"",
        status: "A"
        });

        const [newId, setNewId] =useState(0);
        let navigate=useNavigate();

        const setCustomerId=()=>{
        generateCustomerId().then((response) => { 
            setNewId (response.data);
        });
        }

        useEffect (() => {
        setCustomerId()
        }, []);

        
    const onChangeHandler= (event) =>{
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    setCustomer(values => ({...values, [name]: value }));
    };

    
const customerSave=(event)=>{
    event.preventDefault(); 
    customer.customerId=newId;
    saveCustomer (customer).then((response)=>{ 
        alert("New Customer is added"); 
        navigate('/CustomerMenu');
    });
}
    return(
        <>Hello</>
    )
}

export default CustomerAddition;