from user import *


class Hospital:
    def __init__(self):
        self.hospital_admin = HospitalAdmin(101, "Jannatin Naim", "password")
        self.hospital_admin.save()

    @staticmethod
    def admin_login():
        username = input("username: ")
        password = input("password: ")

        with open("admin.csv", "r") as file:
            all_admins = file.readlines()

            for admin in all_admins:
                data = admin.strip().split(',')

                if data[1] == username:
                    if data[2] == password:
                        print(f"{username} logged in.")
                        return True

            print(f"Login failed for {username}. Please try again.")
            return False
