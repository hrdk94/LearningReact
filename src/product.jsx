function Product({title, price, features}){
    return(
        <div>
            <h1>Product Name : {title}</h1>
            <p>Price of product : {price} </p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    )
}

export default Product;