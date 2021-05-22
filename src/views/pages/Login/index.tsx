import React from 'react';

import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';

import { SectionComponent } from './styles';

const Login: React.FC = () => {
  return(
    <>
    <NavBar />
    <div className="container">
      <SectionComponent>
        <h1>Login</h1>
      </SectionComponent>
    </div>
    <Footer/>
    </>
  );
}

export default Login;