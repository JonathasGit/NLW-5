import {useState} from 'react'; 



export default function button(props) {
    const [counter, setCounter] = useState(1);


    //[estado, alterarEstado]
    // counter = counter + 1;
    //console.log(counter);



    function increment() {
       setCounter(counter+1);
    }




    return(
        <>
        <span>{counter}</span>
        <button onClick={increment}>{props.children}</button> 
        <br />
        </>
    )
}