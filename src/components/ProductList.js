import SingleItem from "./SingleItem";
import PropTypes from 'prop-types';


const ProductList = ({ products }) => {
    return(
<div className="products" id="products">
    { products.map((product) => (
<SingleItem
    key={product.id}
    product={product}
    />

    ))}
</div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array,
};

export default ProductList;