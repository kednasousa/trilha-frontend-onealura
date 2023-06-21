const BotaoConclui = () => {
	const botaoConclui = document.createElement('button')

	botaoConclui.classList.add('check-button')
	botaoConclui.innerText = 'conclui'

	botaoConclui.addEventListener('click', concuirTarefa)

	return botaoConclui
}

const concuirTarefa = (evento) => {
	const botaoConclui = evento.target

	const tarefaCompleta = botaoConclui.parentElement

	tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui