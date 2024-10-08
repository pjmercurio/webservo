import sqlite3
import random
import os
import glob
import time
from datetime import datetime

# Initialize the GPIO Pins for 1-Wire communication
os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')

# Set up the location of the sensor in the system
base_dir = '/sys/bus/w1/devices/'
device_folder = glob.glob(base_dir + '28*')[0]  # Automatically finds the correct device folder
device_file = device_folder + '/w1_slave'

def read_temp_raw():
    with open(device_file, 'r') as f:
        lines = f.readlines()
    return lines

def read_temp():
    lines = read_temp_raw()
    # Wait for a valid response
    while lines[0].strip()[-3:] != 'YES':
        time.sleep(0.2)
        lines = read_temp_raw()
    equals_pos = lines[1].find('t=')
    if equals_pos != -1:
        temp_string = lines[1][equals_pos+2:]
        temp_c = float(temp_string) / 1000.0  # The temperature in Celsius
        temp_f = temp_c * 9.0 / 5.0 + 32.0  # Convert to Fahrenheit
        return temp_c, temp_f


# Path to your SQLite database
#db_path = '/var/data/my_temperatures.db'

if __name__ == "__main__":
    temp_c, temp_f = read_temp()
    print(f"Temperature: {temp_c:.2f}°C / {temp_f:.2f}°F")
    #log_temperature()
