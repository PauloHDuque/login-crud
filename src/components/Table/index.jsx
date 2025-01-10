import PropTypes from "prop-types";
import styles from "./styles.module.css";

Table.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onEditProduct: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};

export default function Table({ products, onEditProduct, onDeleteProduct }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>R$ {product.price.toFixed(2)}</td>
            <td className={styles.actionContainer}>
              <button
                className={styles.btn}
                onClick={() => onEditProduct(product)}
              >
                Editar
              </button>
              <button
                className={styles.btn}
                onClick={() => onDeleteProduct(product.id)}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
