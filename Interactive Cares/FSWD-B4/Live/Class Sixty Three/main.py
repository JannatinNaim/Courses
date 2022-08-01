# def func(*args):
#     nums = {}

#     for num in args:
#         key = str(num)

#         if key in nums:
#             nums[key] = nums[key] + 1

#         else:
#             nums[key] = 1

#     max_occurrence = max(nums.values())
#     min_occurrence = min(nums.values())

#     max_num = 0
#     min_num = 0

#     for key in nums:
#         if nums[key] == max_occurrence:
#             max_num = int(key)

#         if nums[key] == min_occurrence:
#             min_num = int(key)

#     return abs(max_num - min_num)


# print(func(1, 2, 3, 4, 1, 2, 1))

import random
import timeit


# def fib(n):
#     if n == 0:
#         return 0

#     if n == 1:
#         return 1

#     return fib(n - 1) + fib(n - 2)


# start = timeit.default_timer()
# fib(32)
# stop = timeit.default_timer()

# print("Function Took: ", stop - start)


# fib_list = [0, 1]


# def better_fib(n):
#     if len(fib_list) - 1 >= n:
#         return fib_list[n]

#     fib_list.append(better_fib(n - 1) + better_fib(n - 2))

#     return fib_list[n]


# start = timeit.default_timer()
# better_fib(99)
# stop = timeit.default_timer()

# print("Improved Function Took: ", stop - start)


# def another_fib(n):
#     another_fib_list = []

#     for i in range(n + 1):
#         another_fib_list.append(0)

#     another_fib_list[1] = 1

#     for i in range(2, n + 1):
#         another_fib_list[i] = another_fib_list[i - 1] + another_fib_list[i - 2]

#     return another_fib_list[n]


# start = timeit.default_timer()
# another_fib(99)
# stop = timeit.default_timer()

# print("Another Function Took: ", stop - start)


# print(random.randint(10, 10000))


random.seed(int(input("Randomizer: ")))
x = random.randint(1, 5)
y = input("Enter a number between 1 and 5: ")

if x == int(y):
    print("You won.")
else:
    print("You lost.")
    print(f"You should've said {x}.")
