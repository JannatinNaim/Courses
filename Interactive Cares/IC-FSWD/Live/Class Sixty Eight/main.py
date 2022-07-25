# Stack Class
# a. push
# b. pop
# c. top

from unicodedata import name


class Stack:
    def __init__(self, *args):
        self.stack = [arg for arg in args]

    def push(self, *args):
        self.stack.extend(args)

    def pop(self):
        try:
            return self.stack.pop()
        except:
            return None

    def top(self):
        try:
            return self.stack[-1]
        except:
            return None

    def __del__(self):
        del self.stack
        print("Stack has been deleted.")


x = Stack('a', 'b', 'c', 'd')

x.push('e')

y = x.pop()
print(y)
z = x.pop()
print(z)

print(x.top())
print(x.stack)

currentUser = None


class User:
    def __init__(self, name="", username="", password=""):
        self.name = name
        self.username = username
        self.password = password

    def login(self, username, password):
        if username == self.username and password == self.password:
            print(f"User {self.name} logged in.")
            globals()["currentUser"] = self

    def logout(self):
        print(f"User {self.name} logged out.")
        globals()["currentUser"] = None


class Admin(User):
    def __init__(self, name="", username="", password=""):
        super().__init__(name, username, password)
        self.is_privileged = True

    def login(self, username, password):
        # super().login(username, password)

        if username == self.username and password == self.password and self.is_privileged:
            print(f"User {self.name} logged in.")


user = User("A")
admin = Admin("B")

user.login("", "")
user.logout()

admin.login("", "")
admin.logout()

admin.is_privileged = False

admin.login("", "")

# Citizen -> Voter ID, Name, Birth Date, Blood Group
# Employee -> Company Name, Salary
#     check_blood_group(blood_group):


class Citizen:
    def __init__(self, voter_id="", name="", birth_date="", blood_group=""):
        self.voter_id = voter_id
        self.name = name
        self.birth_date = birth_date
        self.blood_group = blood_group


class Employee(Citizen):
    def check_blood_group(self, blood_group):
        if self.blood_group == blood_group:
            print("Same blood group.")
