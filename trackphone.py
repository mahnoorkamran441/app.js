import phonenumbers
from phonenumbers import geocoder

# Replace with the phone numbers you want to locate
phone_number1 = phonenumbers.parse("+923232157226", "PK")
phone_number2 = phonenumbers.parse("+923238604979", "PK")

# Get the locations
location1 = geocoder.description_for_number(phone_number1, "en")
location2 = geocoder.description_for_number(phone_number2, "en")

# Print results
print("Phone number 1 location:", location1)
print("Phone number 2 location:", location2)
parsed = phonenumbers.parse("+923232157226", "PK")
print("Parsed phone number:", parsed)
from phonenumbers import carrier

print("Carrier:", carrier.name_for_number(parsed, "en"))
from phonenumbers import timezone

print("Timezones:", timezone.time_zones_for_number(parsed))
parsed = phonenumbers.parse("+923232157226", "PK")
print("Parsed phone number:", parsed)
