import Product from "./product";
import Title from "./title";

function ProductTab({ title, price, features }) {
    return (
        <div>
            <Product title={title} price={price} features={features} />
        </div>
    );
}

export default ProductTab;
