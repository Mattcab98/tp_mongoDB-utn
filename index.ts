import { connectDB } from "./config/mongo";
connectDB();

import { createProduct, getProduct, getSearchProduct,updateProduct, deleteProduct } from './controllers/controllerProduct';
import { createUser, getUser, getSearchUser, updateUser, deleteUser } from './controllers/controllerUser'

// createProduct ({
//     productName: 'Crema Vegetal Suave 5kg',
//     price: 33500,
//     description: 'Una crema ideal para decoracion',
//     stock: 5,
//     category: 'reposteria',
// });

// getProduct();

// getSearchProduct('crema')

// updateProduct('680a50630f34c450f0367514', {price: '40000'});

// deleteProduct('680a50630f34c450f0367514');