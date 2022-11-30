#include <iostream>
#include <bits/stdc++.h>

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	std::string textoHorario;

	while (std::getline(std::cin, textoHorario) && !textoHorario.empty())
	{
		short quantMinutos = ((textoHorario[0] - '0') + 1) * 60;
		quantMinutos += std::stoi(textoHorario.substr(2));

		short atrasoMaximo = quantMinutos - 480;
		if (atrasoMaximo < 0)
			atrasoMaximo = 0;

		std::cout << "Atraso maximo: " << atrasoMaximo << "\n";
	}

	return 0;
}