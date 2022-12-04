#include <iostream>
#include <bits/stdc++.h>

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	size_t quant_iteracoes;
	std::cin >> quant_iteracoes;

	for (size_t i = 0; i < quant_iteracoes; i++)
	{
		std::string entrada;
		std::cin >> entrada;

		float tempo_digitacao = entrada.length() * 0.01;
		printf("%.2f\n", tempo_digitacao);
	}

	return 0;
}