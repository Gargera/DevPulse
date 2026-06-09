import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../Core/Models/Category/Category';
import { CategoryService } from '../../../Services/category.service';

@Component({
  selector: 'app-categories',
  imports: [FormsModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit{
  private categoryService = inject(CategoryService);

  categories: Category[] = [
                              { id: 1, name: "AI" },
                              { id: 2, name: "Mobile Development" },
                              { id: 3, name: "Programming" },
                              { id: 4, name: "Web Development" }
                            ];
  isLoading: boolean = false;
  categoryName: string = '';
  
  isEditMode: boolean = false;
  editingCategoryId: number | null = null;

  ngOnInit(): void {
     //categories = call api
  }

  deleteCategory(id: number)
  {

  }

  selectCategoryForEdit(cat: Category)
  {

  }

  resetForm()
  {

  }

  onSubmit() 
  {

  }
}
