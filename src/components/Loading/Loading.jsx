import { Spinner } from 'react-bootstrap';
import "./Loading.css";

const LoadingComponent = () => {
  return (
    <div className="div-loader">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </div>
  );
};

export default LoadingComponent;
