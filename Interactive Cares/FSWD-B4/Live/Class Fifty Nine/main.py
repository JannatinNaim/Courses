# sites = []
# index = 0

# while True:
#     user_input = input(":").split(" ")
#     command = ""
#     argument = ""
#     if len(user_input) == 2 and user_input[0] == "visit":
#         command, argument = user_input
#     else:
#         command += user_input[0] + " " + user_input[1]

#     if command == "visit":
#         sites.append(argument)
#         print(f"You're visiting {sites[index]}.")

#         if len(sites) > 1:
#             index += 1
#     elif command == "go front":
#         if len(sites) == 0 or len(sites) - 1 == index:
#             print("You're already at the latest site.")
#         else:
#             index += 1
#             print(f"You're visiting {sites[index]}.")
#     elif command == "go back":
#         if 0 == index:
#             print("You're already at the oldest site.")
#         else:
#             index -= 1
#             print(f"You're visiting {sites[index]}.")
#     elif command == "stop":
#         break

# print("You browse to much.")

# back = []
# current = None
# front = []

# while True:

#     user_input = input(":").split(" ")
#     if len(user_input) != 2:
#         print("Invalid arguments.")
#         continue

#     command, argument = user_input

#     if command.lower() == "visit":
#         current = argument
#         front.clear()

#         if current is not None:
#             back.append(argument)

#         print(f"You're visiting {argument}.")

#     elif command.lower() == "go":

#         if argument.lower() == "back":

#             if len(back) == 0:
#                 print("You're already at the oldest site.")

#             else:
#                 site = back.pop()
#                 front.append(current)
#                 current = site
#                 print(f"You're visiting {site}.")

#         elif argument.lower() == "front":

#             if len(front) == 0:
#                 print("You're already at the latest site.")

#             else:
#                 site = front.pop()
#                 back.append(current)
#                 current = site
#                 print(f"You're visiting {site}.")

#         else:

#             print("Invalid argument.")

#     else:
#         print("Invalid command.")


# x = ['abcd', 12, [1, 2, 3], 5]
# y = [12, 5, [1, 2, 3], 'abcd']

# for element in x:
#     if not y.count(element):
#         break
#     else:
#         y.remove(element)

# if len(y) == 0:
#     print("The lists are an anagrams.")
# else:
#     print("The lists aren't an anagrams.")

# TODO: find the multiplicative inverse of a number

# 5  11
# (5 * x) % 11 = 1
# Extended Euclidean Algorithm
