This is a ecommerce online plateform project which is frontend is created by NextJS and backend is created by Django & Django Restframework.

To run this project ==>

Setup python, nodejs, postgresql, git

then clone the project using git clone

Now follow the steps ==>

1. Create a virtual enviroment using python3 -m venv <name of enviroment> and activate it

2. Then install all the dependencies using pip install -r requirements.txt

3. Create a database in postgresql and change settings.py file database section according to your database setup

4. then run python manage.py migrate

5. Create a superuser and you can access django admin panel

6. Then goto frontend folder and install Nextjs dependencies using pnpm install

7. start nextjs project by pnpm run dev

Now you can navigate through the project.

If you wanna check the api with postman or other utility tools here is all the api list 

==========================================

Base URL = http://127.0.0.1:8000

For user login (POST) => /account/login/
For user register (POST) => /account/register/  [provide first_name, last_name, username, email, password]

+++++++ To work with below urls need jwt tokens as authorization ++++++++

For getting all the category (GET) => /api/category/

For getting category by id (GET) => /api/category/<str:id>/ [provide category ID]

For creating a category (POST) => /api/category/create/ [provide name]

For updating a category by ID (PUT) => /api/category/edit/<str:id>/ [provide category ID]

For deleting a category by ID (DELETE) => /api/category/delete/<str:id>/ [provide category ID]


For getting all the warehouse (GET) => /api/warehouse/

For getting warehouse by ID (GET) => /api/warehouse/<str:id>/ [provide warehouse ID]

For creating a warehouse (POST) => /api/warehouse/create/ [provide name, location]

For updating a warehouse by ID(PUT) => /api/warehouse/edit/<str:id>/ [provide warehouse ID]

For deleting a warehouse by ID (DELETE) => /api/warehouse/delete/<str:id>/ [provide warehouse ID]



For getting all the product(GET) => /api/product/

For getting product by ID (GET) => /api/product/<str:id>/ [provide product ID]

For creating a product (POST) => /api/product/create/ [provide categoryId, warehouseId, name, description, price, countInStock, quantity, notes, images]

For updating a product by ID (PUT) => /api/product/edit/<str:id>/ [provide product ID]

For deleteing a product by ID (DELETE) => /api/product/delete/<str:id>/ [provide product ID]



For updating stock of a product (PUT) => /api/product/<str:id>/stock/edit [provide product Id hasStock{boolean}, countInStock, quantiy]



Notice: If you find any bugs please let me know for my future reference and asking forgiveness for it.
