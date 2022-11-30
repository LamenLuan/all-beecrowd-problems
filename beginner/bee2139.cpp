#include <iostream>
#include <bits/stdc++.h>

const short diasNoMes[] = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 25};

int main(int argc, char const *argv[])
{
	const short QTD_MESES = 12;
	const short DIA_VESPERA = 24;
	const short DIA_NATAL = DIA_VESPERA + 1;

	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	std::string entrada, mensagem;

	while (std::getline(std::cin, entrada) && !entrada.empty())
	{
		size_t idxEspaco = entrada.find(" ");

		short mes = std::stoi(entrada.substr(0, idxEspaco));
		short dia = std::stoi(entrada.substr(idxEspaco + 1));

		if (mes == QTD_MESES && dia >= DIA_VESPERA)
		{
			if (dia == DIA_VESPERA)
				std::cout << "E vespera de natal!\n";
			else
				std::cout << (dia == DIA_NATAL ? "E natal!" : "Ja passou!") << "\n";
		}
		else
		{
			short somaDias = diasNoMes[mes - 1] - dia;
			if (mes < QTD_MESES)
			{
				for (size_t i = mes; i < QTD_MESES; i++)
					somaDias += diasNoMes[i];
			}
			std::cout << "Faltam " << somaDias << " dias para o natal!\n";
		}
	}

	return 0;
}