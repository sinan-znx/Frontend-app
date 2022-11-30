import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  categoryData = [
    {
      category: 'Keyboard',
      image:
        'https://images.unsplash.com/photo-1561112078-7d24e04c3407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGtleWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      category: 'Mouse',
      image:
        'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      category: 'Monitor',
      image:
        'https://images.unsplash.com/photo-1610224353475-f589ea4993f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG1vbml0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      category: 'CPU',
      image:
        'https://images.unsplash.com/photo-1593152167544-085d3b9c4938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNwdXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      category: 'MousePad',
      image:
        'https://images.unsplash.com/photo-1590057518695-5af7cb5ec018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91c2VwYWR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      category: 'Laptop',
      image:
        'https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      category: 'Graphic Card',
      image:
        'https://images.unsplash.com/photo-1555874755-9e24c5e2940e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGdyYXBoaWNzJTIwY2FyZHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      category: 'RAM',
      image:
        'https://images.unsplash.com/photo-1593152077897-2cc2dcbc041f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHJhbXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
    },
  ];
}
