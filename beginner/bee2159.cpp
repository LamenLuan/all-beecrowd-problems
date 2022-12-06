#include <iostream>
#include <cmath>
#include <bits/stdc++.h>

const double SCHOENFELD_ROSSER_CONST = 1.25506;

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	int entrada;
	std::cin >> entrada;

	double quant_minima = entrada / std::log(entrada);
	double quant_maxima = SCHOENFELD_ROSSER_CONST * quant_minima;

	printf("%.1lf %.1lf\n", quant_minima, quant_maxima);

	return 0;
}