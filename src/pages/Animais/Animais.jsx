import './Animais.css'
import React, { useEffect, useState } from 'react';
import CardAnimal from '../../components/CardAnimal/CardAnimal';
import Navegar from '../../components/Navegacao/Navegacao';
import AnimalRequests from '../../fetch/AnimalRequests';

function Animais() {

    // RECUPERANDO LISTA DE ANIMAIS DO SERVIDOR
    const [animais, setAnimais] = useState(null);

    // Recupera a lista de todos os animais do servidor
    useEffect(() => {
        const fetchData = async () => {
                setAnimais(await AnimalRequests.listarAnimais());
        }
        fetchData();
    }, []);

    return (
        <>
            <Navegar />
            <div className='ctn-animais'>
                {animais ? (
                    // Renderize o seu componente para cada item da lista
                    animais.map(animal => (
                        <CardAnimal key={animal.idanimal} animal={animal} />
                    ))
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </>
    );
}

export default Animais;