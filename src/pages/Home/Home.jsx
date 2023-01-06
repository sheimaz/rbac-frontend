// import Container from "react-bootstrap/Container";
// import AppFooter from "../../components/AppFooter/AppFooter";
// import AppHeader from "../../components/AppHeader/AppHeader"
import { useState, useRef, useEffect } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";

const Home = () => {
    const loginRef = useRef();
    const[year, setYear ] = useState(2022);
    const [country, setCountry] = useState("Tunisia")
    // let year = 2022;
    console.log('the init year is : ', year)
    const changeYear = (val) => {
       setYear((valeurActuele) => valeurActuele +  val);
       setYear((valeurActuele) => valeurActuele +  val);
        console.log('LOG FROM + BUTTON', loginRef.current.value)
    }
    const changeCountry = () =>setCountry ('Palestine')
    useEffect(() => {
        console.log('LOG FROM USEEFFECT', loginRef.current.value)
        loginRef.current.value += 'T';
      return () => {
        console.log('UNMOUNTED AND NOT AVAILABLE ON SCREEN')
      }
    }, [year, country])
    
    return (
    <>
    <AppLayout pageName="Home Page" pageClass="HomePage" >
            <h1>this is home page</h1>
            <h3>{year}</h3>
            <div>
                <button onClick={()=>changeYear(-1)}>-</button>{" "}
                <button onClick={()=>changeYear(1)}>+</button>
            </div>
            <input  type="text"   id="login"  name="login"   ref={loginRef}  defaultValue="this is the init value"     />
            <button onClick={changeCountry}>Update Country</button>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis cumque fugiat commodi recusandae hic.
             Iure obcaecati excepturi esse? Facere impedit officia nulla est totam, distinctio reprehenderit ullam soluta odio vitae.</p> 
    </AppLayout>
    </>
    )
}

export default Home;