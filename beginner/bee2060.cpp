#include <iostream>

const int TAM_VETOR = 4;

int main(int argc, char const *argv[])
{
	size_t quantIteracoes;
	short num = 0, quantMultiplos[TAM_VETOR] = {};

	std::cin >> quantIteracoes;

	for (int i = 0; i < quantIteracoes; ++i)
	{
		std::cin >> num;

		for (int j = 0; j < TAM_VETOR; ++j)
			if(num % (2 + j) == 0) quantMultiplos[j]++;
	}

	for (int i = 0; i < TAM_VETOR; ++i)
		std::cout << quantMultiplos[i] << " Multiplo(s) de " << (2 + i) << "\n";

	return 0;
}