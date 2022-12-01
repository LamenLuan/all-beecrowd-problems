#include <iostream>
#include <bits/stdc++.h>

const short NOTAS[] = {2, 5, 10, 20, 50, 100};
const size_t TAM = sizeof(NOTAS) / sizeof(short);

bool troco_possivel(short valor)
{
	for (size_t i = 0; i < TAM; i++)
	{
		for (size_t j = 0; j < TAM; j++)
			if (NOTAS[i] + NOTAS[j] == valor)
				return true;
	}

	return false;
}

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	short preco, dinheiroRecebido;

	while (true)
	{
		std::cin >> preco >> dinheiroRecebido;

		if (preco == 0 && dinheiroRecebido == 0)
			break;

		short troco = dinheiroRecebido - preco;
		std::cout << (troco_possivel(troco) ? "possible" : "impossible") << "\n";
	}

	return 0;
}