def get_alphabetic_grade(numeric_grade: int):
	if numeric_grade < 0 or numeric_grade > 100:
		raise ValueError("Value must be on range 0 to 100")

	if numeric_grade == 0: grade = 'E'
	elif numeric_grade < 36: grade = 'D'
	elif numeric_grade < 61: grade = 'C'
	elif numeric_grade < 86: grade = 'B'
	else: grade = 'A'

	return grade

def main():
	numeric_grade = int(input())
	alphabetic_grade = get_alphabetic_grade(numeric_grade)
	print(alphabetic_grade)

if __name__ == '__main__':
	main()