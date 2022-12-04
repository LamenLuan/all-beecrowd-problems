#include <iostream>
#include <bits/stdc++.h>

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	std::string entrada;

	while (std::getline(std::cin, entrada) && !entrada.empty())
	{
		short proximo_numero = std::stoi(entrada);
		std::cout << proximo_numero - 1 << "\n";
	}

	return 0;
}