from sys import stdin

def create_cypher_dictionary(cypher1: str, cypher2: str):
	cypher_dict: 'dict[str, str]' = {}

	cypher1 = cypher1.lower()
	cypher2 = cypher2.lower()

	for c1, c2 in zip(cypher1, cypher2):
		cypher_dict[c1] = c2
		cypher_dict[c2] = c1
	
	return cypher_dict

def decipher_messages(cypher1: str, cypher2: str, messages: 'list[str]'):
	cypher_dict = create_cypher_dictionary(cypher1, cypher2)

	for i, msg in enumerate(messages):
		new_msg = ""
		for char in msg:
			lower_char = char.lower()
			if lower_char in cypher_dict:
				upper = char.isupper()
				char = cypher_dict[lower_char]
				if upper: char = char.upper()
			new_msg += char
		messages[i] = new_msg

	return messages

def main():
	for line in stdin:
		if line == '\n': break
		_, input_rows = map(int, line.split(maxsplit=2))
		cypher1, cypher2 = [input() for _ in range(2)]
		messages = [input() for _ in range(input_rows)]
		print('\n'.join(decipher_messages(cypher1, cypher2, messages)) + '\n')

if __name__ == '__main__':
	main()