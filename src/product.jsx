function Product({title, price, features}){
    let styles = {
    backgroundColor: price>20000? "black": "green",
    borderRadius: 10,        
    color: "white",
  };
  let count = 0;
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
            <button onClick={(count)=>{
                count=count+1
            }}>Click me to count! {count}</button>
        </div>
    )
}

export default Product;