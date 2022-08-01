def power(a, b):
    if b < 0:
        return 1 / power(a, -b)
    if b == 0:
        return 1
    else:
        return a * power(a, b - 1)


def is_palindrome(s):
    if len(s) == 0 or len(s) == 1:
        return True
    if s[0] != s[-1]:
        return False
    else:
        return is_palindrome(s[1:-1])


# coins = [6, 2, 3, 5]
# discarded_coins = []
# used_coins = {}
# target = 8


# def is_possible_to_create_coin(coins: list[int], n: int):
#     if n in coins or n == 0:
#         return True
#     if n < 0:
#         return False
#     else:
#         r_value = False
#         for i in coins:
#             if i not in discarded_coins:
#                 r_value = r_value or is_possible_to_create_coin(coins, n - i)
#                 if r_value == False:
#                     discarded_coins.append(i)
#                 else:
#                     if str(i) in used_coins:
#                         used_coins[str(i)] = used_coins[str(i)] + 1
#                     else:
#                         used_coins[str(i)] = 0
#         return r_value


# print(is_possible_to_create_coin(coins, target))
# print(used_coins)

coins = {}


def isPossible(currency, n):
    if str(n) in coins.keys():
        return coins[str(n)]
    if n in currency or n == 0:
        return True
    elif n < 0:
        return False
    else:
        retval = False
        for number in currency:
            retval = retval or isPossible(currency, n - number)
            coins[str(n)] = retval
        return retval


print(isPossible([1, 2, 3, 4], 7))
