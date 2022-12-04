#include <iostream>
#include <bits/stdc++.h>

std::string time_format(short number)
{
	return (number < 10 ? "0" : "") + std::to_string(number);
}

std::string time_format(short hours, short minutes)
{
	return time_format(hours) + ":" + time_format(minutes);
}

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	size_t quant_iteracoes;
	std::cin >> quant_iteracoes;

	for (size_t i = 0; i < quant_iteracoes; i++)
	{
		short hora, minuto;
		bool porta_abriu;

		std::cin >> hora >> minuto >> porta_abriu;
		const std::string porta_abriu_str = porta_abriu ? "abriu" : "fechou";

		std::cout << time_format(hora, minuto) << " - A porta " << porta_abriu_str << "!\n";
	}

	return 0;
}