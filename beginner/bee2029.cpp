#include <iostream>
#include <cmath>

const double PI = 3.14;

static double AreaCilindro(double diametro)
{
	double raio = diametro / 2;
	return PI * std::pow(raio, 2);
}

int main(int argc, char const *argv[])
{
	double volume, diametro;
	std::string entrada;

	while (std::getline(std::cin, entrada) && !entrada.empty())
	{
		volume = std::stod(entrada);
		std::getline(std::cin, entrada);
		diametro = std::stod(entrada);

		double area = AreaCilindro(diametro);
		double altura = volume / area;

		printf("ALTURA = %.2f\n", altura);
		printf("AREA = %.2f\n", area);
	}

	return 0;
}