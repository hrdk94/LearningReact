function Product({title, price, features}){
    let styles = {
    backgroundColor: "black",
    borderRadius: 10,        
    color: "white",
  };
    return(
        <div style={styles}>
            <h1>Product Name : {title}</h1>
            <p>Price of product : {price} </p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            {price>25000 ?  <p>Discount of 5%: {price - price * 0.05}</p> : null}
        </div>
    )
}

export default Product;