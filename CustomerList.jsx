import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../LoginView.css";
import { getAllCustomers } from "../../Services/CustomerService";

const CustomerList=()=>{
    
const [customers, setCustomers] =useState([]);
let navigate=useNavigate();

const setCustomerData=()=>{
getAllCustomers ().then((response) => { 
    setCustomers (response.data);
});
}

useEffect (() => {
setCustomerData();
}, []);

const returnBack=()=>{
navigate('/AdminMenu');
}
return(
    <a>Hi</a>
)

}
export default CustomerList;