from sys import stdin

def decyhper_message(alphabet, blink_order: list):
	return "".join(map(lambda i: alphabet[i - 1], blink_order))

def main():
	for line in stdin:
		if line == '\n': break
		num_of_blinks = int(input())
		blink_order = [int(i) for i in input().split(maxsplit=num_of_blinks)]
		print(decyhper_message(line, blink_order))

if __name__ == '__main__':
	main()