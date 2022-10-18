#include <iostream>
#include <bits/stdc++.h>

const std::vector<std::string> OPCOES = {"papel", "pedra", "ataque"};

short TraduzJokenpoParaShort(std::string str)
{
	for (size_t i = 0; i < OPCOES.size(); i++)
	{
		if (OPCOES[i].compare(str) == 0)
			return i;
	}

	return -1;
}

std::string VerificaRespostasContraPedra(short jogador2)
{
	std::string resposta;

	if (jogador2 == 0)
		resposta = "Jogador 1 venceu";
	else
		resposta = jogador2 == 1 ? "Sem ganhador" : "Jogador 2 venceu";

	return resposta;
}

std::string VerificaRespostaAdversario(short jogador1, short jogador2)
{
	std::string resposta;

	if (jogador1 == 0)
		resposta = jogador2 == 0 ? "Ambos venceram" : "Jogador 2 venceu";
	else if (jogador1 == 1)
		resposta = VerificaRespostasContraPedra(jogador2);
	else
		resposta = jogador2 == 2 ? "Aniquilacao mutua" : "Jogador 1 venceu";

	return resposta;
}

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	std::string entrada;

	size_t quantIteracoes;
	std::cin >> quantIteracoes;

	for (size_t i = 0; i < quantIteracoes; i++)
	{
		std::cin >> entrada;
		short jogador1 = TraduzJokenpoParaShort(entrada);

		std::cin >> entrada;
		short jogador2 = TraduzJokenpoParaShort(entrada);

		std::string resposta = VerificaRespostaAdversario(jogador1, jogador2);
		std::cout << resposta << "\n";
	}

	return 0;
}