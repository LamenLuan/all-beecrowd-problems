#include <iostream>

int main(int argc, char const *argv[])
{
	short horario_saida, duracao, diferenca_zona;
	std::cin >> horario_saida >> duracao >> diferenca_zona;

	short horario_chegada = horario_saida + duracao + diferenca_zona;
	if (horario_chegada > 23)
		horario_chegada -= 24;
	else if (horario_chegada < 0)
		horario_chegada += 24;

	std::cout << horario_chegada << "\n";

	return 0;
}