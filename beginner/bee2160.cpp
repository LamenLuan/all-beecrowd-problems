#include <iostream>
#include <bits/stdc++.h>

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	std::string entrada;
	std::getline(std::cin, entrada);

	size_t tamanho = entrada.length();

	std::cout << (tamanho > 80 ? "NO" : "YES") << "\n";

	return 0;
}