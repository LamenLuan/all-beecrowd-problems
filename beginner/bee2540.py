from sys import stdin

def main():
	lines = stdin.readlines()
	iterator = iter(lines)
	for line in iterator:
		numOfVotes = int(line)
		votes = next(iterator)[:-1].split(' ')
		numOfYesVotes = votes.count('1')
		response = 'impeachment' if numOfYesVotes >= (numOfVotes * 2 / 3) else 'acusacao arquivada'
		print(response)

if __name__ == '__main__':
	main()