import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../LoginView.css";
import { displayAllCategories } from "../../Services/CategoryService";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        displayAllCategories()
            .then((response) => {
                setCategories(response.data);
            })
            .catch(error => console.error("Error fetching categories:", error));
    }, []);

    const removeCategory = (id) => {
        alert("Delete functionality not implemented yet!");
    };

    const returnBack = () => {
        navigate("/AdminMenu");
    };

    return (
        <div 
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1565021324587-5fd009870e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fERhcmslMjBibHVlfGVufDB8fDB8fHww')", 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                minHeight: "100vh", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                flexDirection: "column",
                padding: "20px" 
            }}
        >
            <div 
                className="card" 
                style={{ 
                    width: "80%", 
                    backgroundColor: "rgb(50 64 80 / 59%)", 
                    backdropFilter: "blur(10px)", 
                    borderRadius: "12px", 
                    padding: "20px", 
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                    color: "#ecf0f1", 
                    textAlign: "center" 
                }}
            >
                <h2 style={{ color: "#f1c40f" }}><u>Category List</u></h2>
                <hr style={{ height: "3px", borderWidth: 0, backgroundColor: "#e67e22" }} />
                <table className="table">
                    <thead>
                        <tr style={{ borderRadius: "20px" }}>
                            <th style={{ backgroundColor: "rgba(6, 218, 207, 0.94)" }}>Category Id</th>
                            <th style={{ backgroundColor: "rgba(6, 218, 207, 0.94)" }}>Category Name</th>
                            <th style={{ backgroundColor: "rgba(6, 218, 207, 0.94)" }}>Description</th>
                            <th style={{ backgroundColor: "rgba(6, 218, 207, 0.94)" }}>Update</th>
                            <th style={{ backgroundColor: "rgba(6, 218, 207, 0.94)" }}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.categoryId}>
                                <td style={{ backgroundColor: "rgba(138, 240, 242, 0.9)" }}>{category.categoryId}</td>
                                <td style={{ backgroundColor: "rgba(138, 240, 242, 0.9)" }}>{category.categoryName}</td>
                                <td style={{ backgroundColor: "rgba(138, 240, 242, 0.9)" }}>{category.description}</td>
                                <td style={{ backgroundColor: "rgba(138, 240, 242, 0.9)" }}>
                                    <Link to={`/update-category/${category.categoryId}`}>
                                        <button className="btn" style={{ backgroundColor: "#2980b9", color: "#ecf0f1" }}>Update</button>
                                    </Link>
                                </td>
                                <td style={{ backgroundColor: "rgba(138, 240, 242, 0.9)" }}>
                                    <button 
                                        className="btn" 
                                        onClick={() => removeCategory(category.categoryId)}
                                        style={{ backgroundColor: "#c0392b", color: "#ecf0f1" }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <button className="btn" onClick={returnBack} style={{ backgroundColor: "#27ae60", color: "#ecf0f1", width: "100px" }}>Return</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;
