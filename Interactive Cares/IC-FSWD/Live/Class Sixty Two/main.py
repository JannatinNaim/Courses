# # def is_prime(n):
# #     prime = True

# #     for i in range(2, n):
# #         if n % i == 0:
# #             prime = False
# #             break

# #     return prime

# def is_prime(n):
#     if type(n) != type(0):
#         return False

#     if n < 2:
#         return False

#     limit = int(n ** 0.5)

#     for i in range(2, limit + 1):
#         if n % i == 0:
#             return False

#     return True


# def primes_up_to(n):
#     for i in range(2, n + 1):
#         prime = is_prime(i)

#         if prime:
#             print(i, end=" ")

#     print()


# primes_up_to(100)


# def func(**kwargs):
#     # for i in kwargs:
#     #     print(i)
#     for key, value in kwargs.items():
#         print(key, value)


# func(name="asdf", age=12)


# def better_print(name, *args, **kwargs):
#     print("name", name)

#     for i in args:
#         print(i, end=kwargs["end"])


# better_print("naim", "asdf", "sheesh", "damn", end=" hehe\n")

# Binary Search
# Greedy

def recursion():
    pass


def recursive_sum(n):
    if n == 0:
        return 0
    return recursive_sum(n - 1) + n


print(recursive_sum(99))
