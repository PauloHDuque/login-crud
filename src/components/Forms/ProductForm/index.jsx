import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

ProductForm.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};

ProductForm.defaultProps = {
  initialData: null,
};

export default function ProductForm({ onAddProduct, initialData }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
      setPrice(initialData.price || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ name, description, price: parseFloat(price) });
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gerenciamento de Produtos</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">{initialData ? "Atualizar" : "Adicionar"}</button>
      </form>
    </div>
  );
}
