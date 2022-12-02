#include <iostream>
#include <bits/stdc++.h>

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	size_t quant_iteracoes;
	short quant_pessoas;

	while (true)
	{
		std::cin >> quant_iteracoes;
		if (quant_iteracoes == 0)
			break;

		for (size_t i = 0; i < quant_iteracoes; i++)
		{
			std::cin >> quant_pessoas;
			short resto = quant_pessoas % 2 != 0 ? 1 : 2;
			quant_pessoas -= resto;
			std::cout << (quant_pessoas * 2) + resto << "\n";
		}
	}

	return 0;
}