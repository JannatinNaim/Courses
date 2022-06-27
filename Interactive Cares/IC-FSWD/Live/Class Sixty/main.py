# numbers = [
#     "zero",
#     "one",
#     "two",
#     "three",
#     "four",
#     "five",
#     "six",
#     "seven",
#     "eight",
#     "nine",
#     "ten",
#     "eleven",
#     "twelve",
#     "thirteen",
#     "fourteen",
#     "fifteen",
#     "sixteen",
#     "seventeen",
#     "eighteen",
#     "nineteen"
# ]

# tens_numbers = [
#     "zero",
#     "ten",
#     "twenty",
#     "thirty",
#     "forty",
#     "fifty",
#     "sixty",
#     "seventy",
#     "eighty",
#     "ninety"
# ]

# tens_place_numbers = [
#     "zero"
#     "eleven",
#     "twelve",
#     "thirteen",
#     "fourteen",
#     "fifteen",
#     "sixteen",
#     "seventeen",
#     "eighteen",
#     "nineteen"
# ]

# number = 0

# # user_input = "eight thousand seven hundred and twelve"
# user_input = "eighty"
# arguments = user_input.lower().split(" ")

# while "and" in arguments:
#     arguments.remove("and")

# if len(arguments) == 1:
#     if arguments[0] in numbers:
#         x = numbers.index(arguments[0])
#         print(x)
#         exit(0)
#     elif arguments[0] in tens_numbers:
#         x = tens_numbers.index(arguments[0])
#         print(x)
#         exit(0)

# if "thousand" in arguments:
#     x = numbers.index(arguments[0])
#     number += 1000 * x

# if "hundred" in arguments:
#     if "thousand" in arguments:
#         x = numbers.index(arguments[2])
#         number += 100 * x
#     else:
#         x = numbers.index(arguments[0])
#         number += 100 * x

# if arguments[-1] in tens_place_numbers:
#     x = tens_place_numbers.index(arguments[-1])
#     number += x + 10
# else:
#     if arguments[-2].endswith("ty"):
#         x = tens_numbers.index(arguments[-2])
#         number += 10 * x

#     if arguments[-1] in numbers:
#         x = numbers.index(arguments[-1])
#         number += x

# print(number)


# numbers = ['zero', 'one', 'two', 'three', 'four',
#            'five', 'six', 'seven', 'eight', 'nine',
#            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
#            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
# alt_numbers = ['zero', 'ten', 'twenty', 'thirty', 'forty',
#                'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

# n = input('Enter the number: ')
# n = n.lower()
# number = 0
# split_n = n.split()
# while 'and' in split_n:
#     split_n.remove('and')
# if len(split_n) == 1:
#     if split_n[0] in numbers:
#         temp = numbers.index(split_n[0])
#         print(temp)
#         exit(0)
#     elif split_n[0] in alt_numbers:
#         temp = alt_numbers.index(split_n[0])
#         print(temp * 10)
#         exit(0)
# if 'thousand' in split_n:
#     temp = numbers.index(split_n[0])
#     number += 1000 * temp
# if 'hundred' in split_n:
#     if 'thousand' in split_n:
#         temp = numbers.index(split_n[2])
#     else:
#         temp = numbers.index(split_n[0])
#     number += 100 * temp
# if split_n[-2].endswith('ty'):
#     temp = alt_numbers.index(split_n[-2])
#     number += 10 * temp
# if split_n[-1] in numbers:
#     temp = numbers.index(split_n[-1])
#     number += temp

# print(number)

# x = {
#     "zero": 0,
#     "one": 1,
#     "two": 2,
# }

# print(x["two"])

# x["three"] = 3

# print(x)

# x = (1, 2)
