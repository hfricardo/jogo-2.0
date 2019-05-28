function novaLista(){   									//CRIA UM OBJETO LISTA
	let elemento=null;										//RESERVA O ELEMENTO PRINCIPAL(TOPO)
	length;													//GUARDA O TAMANHO DA LISTA
	lastNode=null;											//GUARDA O ULTIMO ELEMENTO INSERIDO

	
	const novoJogador = (nome,posicao)=>{					//CRIA UM OBJETO NODE
		var _nextNode;										//CRIA UMA VARIAVEL INTERNA NA CLASSE
		var _previousNode;									//CRIA UMA VARIAVEL INTERNA NA CLASSE

		return{
			nextNode:_nextNode,								//PROPRIEDADE PROXIMO JOGADOR
			previousNode:_previousNode,						//PROPRIEDADE ANTERIOR JOGADOR
			strNome:nome,									//PROPRIEDADE (NOME) DO OBJETO JOGADOR
			intPosicao:posicao,								//PROPRIEDADE (INDICE) DO OBJETO JOGADOR
			mostrar:() =>mostrar_jogador(posicao, nome),	//METODO PARA MOSTRAR O JOGADOR
			ocultar:() =>ocultar_jogador(posicao)			//METODO PARA ESCONDER O JOGADOR
		}
	}

	const add = (value) =>{									//METODO PARA INSERIR ADICIONAR JOGADOR NA LISTA
		if(!elemento){               						//CASO O ELEMENTO ESTEJA VAZIO
			elemento = novoJogador(value,length);		    //CRIO UM NOVO OBJETO JOGADOR
			length++;			 							//INCREMENTO O TAMANHO DA LISTA
			elemento.nextNode=elemento;						//DEFINE O PROXIMO ELEMENTO COMO O ELEMENTO PRINCIPAL FAZENDO CIRCULAR
			elemento.previousNode=elemento;					//DEFINE O ANTERIOIR ELEMENTO COMO O ELEMENTO PRINCIPAL FAZENDO CIRCULAR
			lastNode = elemento;							//GUARDA O ULTIMO ELEMENTO
			return elemento;         						//RETORNO PARA A FUNCAO O NOVO ELEMENTO CRIADO
		}		

		novonode = novoJogador(value,length);			//CRIO UM NOVO JOGADOR E DOU O TAMANHO DA LISTA COMO SEU INDICE
		novonode.nextNode = elemento;				//DEFINO O PROXIMO JOGADOR DO NOJO JOGADOR
		novonode.previousNode =  elemento.previousNode; 					//DEFINO O JOGADOR ANTERIOR DO NOVO JOGADOR
		elemento.previousNode.nextNode = novonode;						//DEFINO O ULTIMO JOGADOR ADICIONADO
		elemento.previousNode = novonode;								//DEFINO O JOGADOR ATUAL COMO O NOVO JOGADOR
		//elemento=novonode;
		length++;											//INCREMENTO O TAMANHO DA LISTA
		return novonode; 									//RETORNO PARA A FUNCAO O NOVO ELEMENTO
	}
	
	const remove = (node) => {								//METODO PARA REMOVER JOGADOR DA LISTA
		if(length===0){										//SE A LISTA ESTIVER VAZIA SAIO DO METODO	
			return														
		}

		if (node === elemento){								//SE O JOGADOR A SER REMOVIDO FOR O JOGADOR INICIAL DA LISTA
			elemento = node.nextNode;						//O JOGADOR INICIAL SE TORNA O PROXIMO JOGADOR DO JOGADOR A SER EXCLUIDO
		}

		if (node.nextNode != node){
			node.previousNode.nextNode = node.nextNode;
			node.nextNode.previousNode = node.previousNode;
			length --;
			return true;
		}
		else{
			return false;
		}
		;
	}

	const getByValue = (value) =>{							//RETORNA O JOGADOR PELO NOME INFORMADO
		if(length===0){									//SE A LISTA ESTIVER VAZIA SAI DO METODO
			return null;
		}
		let node = elemento;							//DEFINO O JOGADOR QUE SERA USADO
		do{													//FAZ PRIMEIRO DEPOIS AVALIA O LOOP
			if(node.nome===value){							//SE O NOME DO JOGADOR ATUAL FOR O NOME BUSCADO
				return node;								//RETORNA O NODE DO JOGADOR
			}
		node = node.nextNode;								//DEFINE O JOGADOR ATUAL COMO O PROXIMO JOGADOR
		} while(node != elemento)							//SE O JOGADOR ATUAL FOR NOVAMENTE O PRIMEIRO JOGADOR SAI DO LOOP
		return null;
	}

	return{
		length: () => length,								//PROPRIEDADE TAMANHO DA LISTA
		elemento: () => elemento,							//PROPRIEDADE JOGADOR INICIAL
		add: (value) => add(value),							//METODO PARA ADICIONAR JOGADOR NA LISTA
		getByValue:(value) =>getByValue(value),				//METODO PARA BUSCAR JOGADOR PELO NOME
		remove: (node) => remove(node)						//METODO PARA REMOVER JOGADOR DA LISTA
	}

}