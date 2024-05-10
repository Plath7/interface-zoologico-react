class AnimalRequests{
    constructor(){
        this.serverUrl = 'http://localhost:3000';
        this.routeListarAnimal = '/listar-aves';
        this.routeCadastrarAnimal = '/novo/ave';
        this.routeDeletarAnimal = 'remove/animal';
        this.routeAlterarAnimal = 'atualizar/animal';
    }

    async listarAnimais(){
        try {
            const response = await fetch(`${this.serverUrl}${this.routeListarAnimal}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar servidor');
            }
            return await response.json();
        } catch (error) {
            console.error('Erro: ', error);
            return null;
        }
    
    }
}

export default new AnimalRequests