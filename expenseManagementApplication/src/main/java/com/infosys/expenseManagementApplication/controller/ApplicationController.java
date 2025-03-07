package com.infosys.expenseManagementApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infosys.expenseManagementApplication.bean.Category;
import com.infosys.expenseManagementApplication.dao.CategoryDao;

@RestController
@RequestMapping("/exp-mng/")

@CrossOrigin(origins = "http://localhost:5656")
public class ApplicationController {
	@Autowired
	private CategoryDao categoryDao;
	
	
	@GetMapping("/category")
	public List<Category> displayAllCategories(){
		return categoryDao.getAllCategories();
	}
	
	@PostMapping("/category")
	public void saveCategories(@RequestBody Category category){
		categoryDao.save(category);
	}
	
	@PutMapping("/category")
	public void updateCategory(@RequestBody Category category){
		categoryDao.save(category);
	}
	
	@GetMapping("/category/{id}")
	public Category displayCategoryById(@PathVariable Long id){
		return categoryDao.getCategoryById(id);
	}
	
	@DeleteMapping("/category/{id}")
	public void deleteCategoryById(@PathVariable Long id){
		categoryDao.deleteCategoryById(id);
	}
	
	@GetMapping("/category-other")
	public Long generateCategoryId(){
		Long categoryId = categoryDao.generateCategoryId();
	    //System.out.println("Generated Category ID: " + categoryId); // Print to terminal
	    return categoryId;
	}
	
	@GetMapping("/category-other/{categoryName}")
	public Category getCategoryByName(@PathVariable String categoryName) {
		return categoryDao.getCategoryByName(categoryName);
	}

	@PutMapping("/category/{id}")
	public ResponseEntity<?> updateCategory(@PathVariable Long id, @RequestBody Category category){
		Category existingCategory = categoryDao.getCategoryById(id);
		if (existingCategory == null) {
			return ResponseEntity.notFound().build();
		}
		category.setCategoryId(id); // Ensure ID is set before saving
		categoryDao.save(category);
		return ResponseEntity.ok("Category updated successfully");
	}




}
