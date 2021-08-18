import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefa";
import TipoFiltro from "../model/TipoFIltro";

const tarefasIniciais: Tarefa[] = [
    Tarefa.criarAtiva(1, 'Estudar Next'),
     Tarefa.criarConcluida(2, 'Limpar carro'),
    Tarefa.criarAtiva(3, 'Comprar livro do mês'),
]

export default new ListaTarefas(tarefasIniciais, TipoFiltro.NENHUM)