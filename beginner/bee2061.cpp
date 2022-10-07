//Problem #2061: https://www.beecrowd.com.br/judge/en/problems/view/2061

#include <iostream>

const std::string STR_FECHOU = "fechou";

int main(int argc, char const *argv[])
{
	short quantInicial;
	size_t quantIteracoes;
	std::string entrada;

	std::cin >> quantInicial >> quantIteracoes;

	for (size_t i = 0; i < quantIteracoes; i++)
	{
		std::cin >> entrada;
		quantInicial += (entrada == STR_FECHOU) ? 1 : -1;
	}

	std::cout << quantInicial << "\n";

	return 0;
}