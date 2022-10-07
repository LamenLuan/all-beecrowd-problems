//Problem #2126: https://www.beecrowd.com.br/judge/en/problems/view/2126

#include <iostream>

void imprimeCaso(size_t quantCasos, size_t quanSubs, size_t idxSeq)
{
	std::cout << "Caso #" << quantCasos << ":\n";

	if (quanSubs > 0)
		std::cout << "Qtd.Subsequencias: " << quanSubs << "\n"
							<< "Pos: " << idxSeq << "\n";
	else
		std::cout << "Nao existe subsequencia\n";

	std::cout << "\n";
}

int main(int argc, char const *argv[])
{
	size_t quantCasos = 1;
	std::string sequencia, subSequencia;

	while (std::getline(std::cin, subSequencia) && !subSequencia.empty())
	{
		size_t idxSeq = 0, proxIdxSeq = 0, quantSubSequencias = 0;

		std::getline(std::cin, sequencia);

		while ((proxIdxSeq = sequencia.find(subSequencia, idxSeq)) != std::string::npos)
		{
			quantSubSequencias++;
			idxSeq = proxIdxSeq + 1;
		}

		imprimeCaso(quantCasos++, quantSubSequencias, idxSeq);
	}

	return 0;
}