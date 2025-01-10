import { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../../components/Forms/ProductForm";
import Table from "../../components/Table";

function Crud() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleAddProduct = async (product) => {
    try {
      if (editingProduct) {
        await axios.put(
          `http://localhost:3001/products/${editingProduct.id}`,
          product
        );
        setEditingProduct(null);
      } else {
        await axios.post("http://localhost:3001/products", product);
      }
      fetchProducts();
    } catch (error) {
      console.error("Erro ao adicionar/editar produto:", error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  return (
    <div>
      <ProductForm
        onAddProduct={handleAddProduct}
        initialData={editingProduct}
      />
      <Table
        products={products}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
}

export default Crud;
