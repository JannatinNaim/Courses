# Project Proposal
# a. Idea
# b. Name
# c. Description
# d. Features
# e. Technical Specification


class Student:
    def __init__(self, ID=0, name="", roll=0):
        self.ID = ID
        self.name = name
        self.roll = roll

    def greet(self):
        print(f"Hi! I'm {self.name}. Nice to meet you.")


x = Student(ID=1, name="Jannatin Naim", roll=69)
y = Student(ID=2, name="Nushrat Jahan", roll=33)
z = Student(ID=3, name="Someone Else")

# print(x.name)
# print(y.name)
# print(z.name)

# x.greet()
# y.greet()
# z.greet()

z.ID = 101
x.name = "Just Someone"
x.roll = 22

# print(x.ID)


class Customer:
    def __init__(self, ID, name, age, phone):
        self.ID = ID
        self.name = name
        self.age = age
        self.phone = phone


customer = Customer(123, "Jannatin Naim", 17, 8801234567890)
