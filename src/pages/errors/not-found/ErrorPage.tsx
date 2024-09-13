import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../ui/Button/button';

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/login');
    };

    return (
        <div

        >
            <div >
                404
            </div>
            <div  >
                Página no encontrada
            </div>
            <div >
                La página que busca no existe.
            </div>
            <Button

                onClick={handleGoHome}

            >
                Ir a Inicio
            </Button>
        </div>
    );
};

export default ErrorPage;
