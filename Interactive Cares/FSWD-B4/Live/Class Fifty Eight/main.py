# x = [i ** 2 for i in range(10)]
# print(x)

# x = [
#     'Let G be a graph of cardinality n'.split(),
#     'If G contains no loops'.split(),
#     'prove that G is simple graph'.split(),
# ]

# a = []
# for i in x:
#     for j in i:
#         a.append(j)
# print(a)

# a = [j for i in x for j in i]
# print(a)

# x = [[1, 2, 3], [4, 5, 6], [7, 8], 9]

# flat_x = [j for i in x if type(i) == type([]) for j in i]
# print(flat_x)

# flat_x = []
# for i in x:
#     if type(i) == type([]):
#         for j in i:
#             flat_x.append(j)
#     else:
#         flat_x.append(i)
# print(flat_x)

# import math


# pi = math.pi
# print(2 * math.acos(0))
# print(math.factorial(5))
# print(math.gcd(125, 595))


# write a program to find the output of the following piecewise function.
# f(x) = sin(x) + 5 if x < 3
# f(x) = asin(x) + 5 if 3 <= x < 10
# f(x) = sinh(x) + 5 elsewhere

import math


# x = 2
x = int(input("enter the value of x: "))

if x < 3:
    print(math.sin(x) + 5)
elif 3 <= x < 10:
    print(math.asin(x) + 5)
else:
    print(math.sinh(x) + 5)
