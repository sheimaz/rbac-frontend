import Container from "react-bootstrap/Container"
import AppFooter from "../AppFooter/AppFooter"
import AppHeader from "../AppHeader/AppHeader"

import './AppLayout.css'


function AppLayout({pageName,pageClass, children}) {
  return (
    <div className={"page "+pageClass}>
        <AppHeader pageName={pageName}/>
        <section className="mainContent">
            <Container>
                {children}
            </Container>
        </section>
        <AppFooter/>
    </div>
  )
}

export default AppLayout