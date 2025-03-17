
import React, {useState,useEffect} from "react";
import { useNavigate, useParams} from 'react-router-dom';
import '../../LoginView.css';
import {getCustomerById, updateCustomer} from '../../Services/CustomerService'; 

const CustomerUpdate=()=>{
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

const param = useParams();
let navigate=useNavigate();

const setCustomerData=()=>{
getCustomerById(param.customerId).then((response) => { 
    setCustomer (response.data);
});
}

useEffect (() => {
setCustomerData(); 
}, []);

const returnBack=()=>{
navigate('/customer list'); 
}

const onChangeHandler= (event) =>{
    event.persist();
    const name= event.target.name;
    const value=event.target.value;
    setCustomer (values => ({...values, [name]: value }));
    };

    const customerSave=(event)=>{
    event.preventDefault();
    updateCustomer(customer).then((response)=>{ 
        alert("Customer is Updated");
        navigate('/customer-list');
    });
    }


}

export default CustomerUpdate;