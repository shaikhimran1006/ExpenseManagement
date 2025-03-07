import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../LoginView.css";
import { displayCategoryById, updateCategory } from "../../Services/CategoryService";

const CategoryUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState({
        categoryId: "",
        categoryName: "",
        description: ""
    });
    
    useEffect(() => {
        displayCategoryById(id)
            .then((response) => {
                if (response.data) {
                    setCategory(response.data);
                } else {
                    console.error("Category data is empty");
                }
            })
            .catch((error) => {
                console.error("Error fetching category:", error);
                alert("Failed to fetch category details.");
            });
    }, [id]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory((prevCategory) => ({ ...prevCategory, [name]: value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedCategory = {
            categoryId: id, 
            categoryName: category.categoryName,
            description: category.description
        };

        updateCategory(id, updatedCategory)
            .then(() => {
                alert("Category updated successfully!");
                navigate("/category-list", { state: { reload: true } }); // 🔹 Send a reload signal
            })
            .catch((error) => console.error("Error updating category:", error));
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
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)", 
                    borderRadius: "12px", 
                    padding: "25px", 
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                    color: "#ffffff"
                }}
            >
                <h2 className="text-center"><u>Update Category</u></h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="form-group text-start">
                        <label>Category Id:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={category.categoryId} 
                            readOnly 
                        />
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>Category Name:</label>
                        <input 
                            type="text" 
                            name="categoryName" 
                            className="form-control" 
                            value={category.categoryName} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>Category Description:</label>
                        <input 
                            type="text" 
                            name="description" 
                            className="form-control" 
                            value={category.description} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <br />
                    <button className="btn w-100" type="submit" style={{ backgroundColor: "#3498DB", color: "#fff" }}>Update</button>
                </form>
            </div>
        </div>
    );
};

export default CategoryUpdate;
