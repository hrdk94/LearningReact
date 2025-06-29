function printHello(){
    console.log("Hello!")
}

function MsgBox({sender, receiver, text}){
    let styles = {
        backgroundColor: "Grey",
        borderRadius: "10px",
        color:"white"
    }
    return(
        <div style={styles}>
            <button onClick={printHello}>Click me!</button>
             <h3>Message from : {sender}</h3>
            <h3>Message to : {receiver}</h3>
            <p>Message is : {text} </p>
        </div>
    )
}
export default MsgBox