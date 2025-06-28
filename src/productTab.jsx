import Product from "./product"
import Title from "./title"

function producttab(props){
    return(
        <div>
            <Product title={props.title} price={props.price}/>
            <Title />
        </div>
        
    )
}

export default producttab;