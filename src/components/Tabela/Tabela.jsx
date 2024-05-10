import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

function Tabela() {

    const [animais, setAnimais] = useState([]);

    // Recupera a lista de todos os animais do servidor
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/listar-aves');
                if (!response.ok) {
                    throw new Error('Erro ao buscar servidor');
                }
                const listaAnimais = await response.json();
                setAnimais(listaAnimais);
            } catch (error) {
                console.error('Erro: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Genero</th>
                        <th>Envergadura</th>
                    </tr>
                </thead>
                <tbody>
                    {animais.length > 0 ? (
                        animais.map((animal) => (
                            <tr>
                                <td>{animal.nomeanimal}</td>
                                <td>{animal.idadeanimal}</td>
                                <td>{animal.generoanimal}</td>
                                <td>{animal.envergaduraanimal}</td>
                            </tr>
                        )
                        )) : (
                        <p>carregando ... verifique se o servidor esta conectado</p>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default Tabela