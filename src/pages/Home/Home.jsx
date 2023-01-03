// import Container from "react-bootstrap/Container";
// import AppFooter from "../../components/AppFooter/AppFooter";
// import AppHeader from "../../components/AppHeader/AppHeader"

import { useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";

const Home = () => {
    const yearState = useState(2022);

    // let year = 2022;
    console.log('the init year is : ', yearState[0])

    const changeYear = (val) => {
        // year += val;
        yearState[1](yearState[0] + val)
        console.log('the year is now:', yearState[0]);
    }

    return (
    <>
    <AppLayout pageName="Home Page" pageClass="HomePage" >
            <h1>this is home page</h1>
            <h3>{yearState[0]}</h3>
            <div>
                <button onClick={()=>changeYear(-1)}>-</button>{" "}
                <button onClick={()=>changeYear(1)}>+</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis cumque fugiat commodi recusandae hic.
             Iure obcaecati excepturi esse? Facere impedit officia nulla est totam, distinctio reprehenderit ullam soluta odio vitae.</p> 
    </AppLayout>
    </>
    )
}

export default Home;