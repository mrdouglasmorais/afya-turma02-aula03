import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes: any = ({ component: Component, path: Path, ...rest}: any) => {
  const isLogin: string | null = localStorage.getItem('@tokenAfyaApp');
  return (
    <Route {...rest} render={ props => (
      isLogin !== null ? <Component {...props}/> : <Redirect to="/login"/>
    )}/>
  );
}

export default PrivateRoutes;