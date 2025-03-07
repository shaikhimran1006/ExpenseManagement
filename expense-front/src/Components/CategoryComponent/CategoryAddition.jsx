import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../LoginView.css";
import { saveCategory, generateCategoryId } from "../../Services/CategoryService";

const CategoryAddition = () => {
    const [category, setCategory] = useState({
        categoryId: 0,
        categoryName: "",
        description: ""
    });
    const [newId, setNewId] = useState(0);
    let navigate = useNavigate();

    useEffect(() => {
        generateCategoryId()
            .then((response) => {
                setNewId(response.data);
            })
            .catch(error => console.error("Error fetching category ID:", error));
    }, []);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setCategory(prevValues => ({ ...prevValues, [name]: value }));
    };

    const categorySave = (event) => {
        event.preventDefault();
        const updatedCategory = { ...category, categoryId: newId };
        saveCategory(updatedCategory)
            .then((response) => {
                if (response.data) {
                    alert("Category Added Successfully");
                    navigate("/AdminMenu");
                } else {
                    console.error("Failed to add category");
                }
            })
            .catch(error => console.error("Error saving category:", error));
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
                justifyContent: "center" 
            }}
        >
            <div 
                className="card" 
                style={{ 
                    width: "450px", 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",  // Transparent effect
                    backdropFilter: "blur(10px)", 
                    borderRadius: "12px", 
                    padding: "25px", 
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                    color: "#ffffff" // Light Grey Text
                }}
            >
                <h2 className="text-center"><u>New Category Addition</u></h2>
                <br />
                <form onSubmit={categorySave}>
                    <div className="form-group text-start">
                        <label>Category Id:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={newId} 
                            readOnly 
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#ffffff", border: "1px solid #ccc" }}
                        />
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>Category Name:</label>
                        <input 
                            type="text" 
                            name="categoryName" 
                            className="form-control" 
                            value={category.categoryName} 
                            onChange={onChangeHandler} 
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#ffffff", border: "1px solid #ccc" }}
                        />
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>Category Description:</label>
                        <input 
                            type="text" 
                            name="description" 
                            className="form-control" 
                            value={category.description} 
                            onChange={onChangeHandler} 
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#ffffff", border: "1px solid #ccc" }}
                        />
                    </div>
                    <br />
                    <button className="btn w-100" type="submit" style={{ backgroundColor: "#3498DB", color: "#fff" }}>Save</button>
                </form>
            </div>
        </div>
    );
};

export default CategoryAddition;
