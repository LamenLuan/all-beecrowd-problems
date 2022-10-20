#include <iostream>
#include <bits/stdc++.h>

const short QUANT_PARTICIPANTES = 5;

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	short idChaCorreto, resposta = 0, acertos = 0;
	std::cin >> idChaCorreto;

	for (size_t i = 0; i < QUANT_PARTICIPANTES; i++)
	{
		std::cin >> resposta;
		if (resposta == idChaCorreto)
			acertos++;
	}

	std::cout << acertos << "\n";

	return 0;
}