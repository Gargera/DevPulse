import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../Core/Models/Category/Category';
import { CategoryService } from '../../../Services/category.service';

@Component({
  selector: 'app-categories',
  imports: [FormsModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  private categoryService = Inject(CategoryService);

  categories: Category[] = [];
  isLoading: boolean = true;
  categoryName: string = '';
  
  isEditMode: boolean = false;
  editingCategoryId: number | null = null;

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
