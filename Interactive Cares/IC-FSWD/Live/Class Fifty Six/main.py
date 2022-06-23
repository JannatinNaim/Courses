# grade_point = int(input("Enter a grade point: "))

# if 0 > grade_point > 100:
#     print("Your grade is beyond our understanding.")
# elif grade_point >= 80:
#     print("A+")
# elif grade_point >= 70:
#     print("A")
# elif grade_point >= 60:
#     print("A-")
# elif grade_point >= 50:
#     print("B")
# elif grade_point >= 40:
#     print("C")
# elif grade_point >= 33:
#     print("D")
# else:
#     print("F")

# for i in range(0, 10, 2):
#     print(i)
#     print(i ** 2)

# size = 5
# row = size + 1
# column = size + 1

# for i in range(row):
#     for j in range(column):
#         # if i == j:
#         #     print(f"({i}, {j})", end=" ")
#         # if i >= j:
#         #     print(f"({i}, {j})", end=" ")
#         # if i <= j:
#         #     print(f"({i}, {j})", end=" ")
#         print(f"({i}, {j})", end=" ")
#     print()

# # Perfect numbers.
# limit = 1000
# for number in range(limit + 1):
#     factors = []
#     for i in range(1, number):
#         if number % i == 0:
#             factors.append(i)

#     sum_of_factors = sum(factors)
#     # sum_of_factors = 0
#     # for i in factors:
#     #     sum_of_factors += i

#     if sum_of_factors == number:
#         print(number)

for n in range(1, 1001):
    sum_of_factors = 0

    for i in range(1, n):
        if n % i == 0:
            sum_of_factors += i

    if sum_of_factors == n:
        print(n)
