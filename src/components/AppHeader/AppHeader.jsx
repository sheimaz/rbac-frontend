import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';    

// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import './AppHeader.css'




const AppHeader = ({pageName}) => {


  // if(!pageName){
  //   console.log('pageName must be provided')
  //   return null
  // }

  const routerNavigation= useNavigate()
  const navigateTo = (e) => {
    e.preventDefault();
    routerNavigation(e.target.attributes.href.nodeValue)  }


  return (
  <>
  <Navbar bg="secondary" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand href="./">RBAC</Navbar.Brand>
      <Nav>
        <Nav.Link onClick={navigateTo} href="/">Home</Nav.Link>
        <Nav.Link  onClick={navigateTo} href="/modules">Modules</Nav.Link>
        <Nav.Link  onClick={navigateTo} href="/permissions">Permissions</Nav.Link>
        <Nav.Link onClick={navigateTo} href="/roles">Roles</Nav.Link>
        <Nav.Link  onClick={navigateTo} href="/users">Users</Nav.Link>
{/* 
        <NavLink to ="/">Home</NavLink>
        <NavLink to="/modules">Modules</NavLink>
        <NavLink to="/permissions">Permissions</NavLink>
        <NavLink to="/roles">Roles</NavLink>
        <NavLink to="/users">Users</NavLink> */}

      </Nav>
    </Container>
  </Navbar>
  <section className='PageTitleContainer'>
    <Container>
      <h1>{pageName}</h1>
    </Container>
  </section>
  </>
  )
}

export default AppHeader