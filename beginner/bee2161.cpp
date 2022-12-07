#include <iostream>
#include <bits/stdc++.h>

double recursao_fracoes_continuas(short contador_operacoes)
{
	if (contador_operacoes == 0)
		return 0;

	return 1 / (6 + recursao_fracoes_continuas(--contador_operacoes));
}

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	short quant_operacoes;
	std::cin >> quant_operacoes;

	double resultado = 3 + recursao_fracoes_continuas(quant_operacoes);

	printf("%.10lf\n", resultado);

	return 0;
}