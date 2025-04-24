import mongoose, { Schema } from "mongoose";


interface ProductInterface {
    productName: string;
    price?: number;
    description?: string;
    stock?: number;
    category?: "golosinas" | "reposteria" | "descartables" | "cotillon y fiestas" | "decoracion tortas";
};

const ProductSchema: Schema = new Schema<ProductInterface>({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true, unique: true},
    stock: { type: Number, required: true },
    category: { type: String, required: true, enum: ["golosinas", "reposteria", "descartables", "cotillon y fiestas", "decoracion tortas"] }
});

ProductSchema.set("strict", true);

const ProductModel = mongoose.model<ProductInterface>("product", ProductSchema);

const createProduct = async (dataProduct: ProductInterface) => {
    try {
        const newProduct = new ProductModel(dataProduct);
        console.log('Producto agregado correctamente')
        return await newProduct.save()
    } catch (error: any) {
        return { message: error.message};
    };
}

const getProduct = async () => {
    try {
        const products = await ProductModel.find();
        // console.log(products)
        return products
    } catch (error) {
        console.log(error);
        console.log('LOS PRODUCTOS NO PUDIERON SER CARGADOS', error);
    }
}

const getSearchProduct = async (productName: string) => {
    try {
        const products = await getProduct();

        const product = products?.find(product => product.productName.toLowerCase().includes(productName.toLowerCase()));

        if (!product) {
            console.log('El usuario no pudo ser encontrado');
        } else {
            console.log('La busqueda del usuario fue realizada con exito: ', product);
        }

    } catch (error) {
        console.log(error);
        console.log('Producto no encontrado', error);
    }
}

const updateProduct = async (id: string, body: object) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, body, { new: true })
        if (!updatedProduct) {
            console.log('El producto no fue encontrado')
        } else {
            console.log(updatedProduct);
        }
    } catch (error) {
        console.error('Error al intentar actualizar el producto:', error);
    }
}

const deleteProduct = async (id: String) => {
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(id)
        if (!deletedProduct) {
            console.log('Usuario no encontrado, no pudo ser eliminado');
        } else {
            console.log(`El producto ${deleteProduct} a sido eliminado correctamente`);
        }
    } catch (error) {
        console.log(error);
        console.log('ERROR AL ACCEDER A LOS USUARIOS');
    }
}

export { createProduct, getProduct, getSearchProduct,updateProduct, deleteProduct };