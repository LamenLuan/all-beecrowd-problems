from sys import stdin

OPERATORS = ('+', '-', '*')

def get_expression_data():
	x, aux = input().split()
	x, y, z = map(int, [x] + aux.split('='))
	return x, y, z

def get_answer_data():
	name, exp_idx, operation = input().split()
	return name, int(exp_idx), operation

def calculator(operation: str, op1: int, op2: int):
	if operation == '+': return op1 + op2
	elif operation == '-': return op1 - op2
	elif operation == '*': return op1 * op2
	else: raise ValueError(f"Operator '{operation}' is invalid")

def answer_is_wrong(operation: str, expression: tuple):
	x, y, z = expression
	if operation == 'I':
		for op in OPERATORS:
			if calculator(op, x, y) == z: return True
		return False
	else:
		return calculator(operation, x, y) != z
	
def get_who_shall_not_pass(expressions: 'list[tuple]', answers: 'list[tuple]'):
	shall_not_pass_list = []
	for answer in answers:
		name, exp_idx, operation = answer
		expression = expressions[exp_idx - 1]
		if answer_is_wrong(operation, expression): shall_not_pass_list.append(name)

	if shall_not_pass_list:
		if len(shall_not_pass_list) == len(answers): return "None Shall Pass!"
		else:
			shall_not_pass_list.sort()
			return ' '.join(shall_not_pass_list)
	else:
		return "You Shall All Pass!"

def main():
	for line in stdin:
		if line == '\n': break
		iterations = int(line)
		expressions = [get_expression_data() for _ in range(iterations)]	
		answers = [get_answer_data() for _ in range(iterations)]
		print(get_who_shall_not_pass(expressions, answers))

if __name__ == '__main__':
	main()