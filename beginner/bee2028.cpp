#include <iostream>
#include <bits/stdc++.h>

short QuantNumeros(short n)
{
	return (0.5 * (-1 + n) * n) + 1 + n;
}

void ImprimeSequencia(short ultimoValorSequencia)
{
	std::cout << "0";

	for (size_t i = 1; i <= ultimoValorSequencia; i++)
	{
		for (size_t j = 0; j < i; j++)
			std::cout << " " << i;
	}

	std::cout << "\n\n";
}

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	long quantTestes = 1;
	std::string entrada;

	while (std::getline(std::cin, entrada) && !entrada.empty())
	{
		short ultimoValorSequencia = std::stoi(entrada);

		short quantNumerosChad = QuantNumeros(ultimoValorSequencia);

		std::cout << "Caso " << quantTestes++ << ": " << quantNumerosChad
							<< " numero" << (quantNumerosChad == 1 ? "" : "s") << "\n";

		ImprimeSequencia(ultimoValorSequencia);
	}

	return 0;
}