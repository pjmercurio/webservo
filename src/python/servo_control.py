import pigpio
import time

servo_pin = 18  # GPIO pin where the servo is connected
sleep_time = 0.25

pi = pigpio.pi()
pi.set_mode(servo_pin, pigpio.OUTPUT)

def move_servo_to_press():
    # Move the servo to 1800 (pressing position)
    pi.set_servo_pulsewidth(servo_pin, 1800)
    time.sleep(sleep_time)  # Adjust the duration as needed for the press

    # Move the servo back to 1500 (neutral position)
    pi.set_servo_pulsewidth(servo_pin, 1500)
    time.sleep(sleep_time)  # Allow time for the servo to return

    # Optionally stop the servo PWM signal
    pi.set_servo_pulsewidth(servo_pin, 0)

if __name__ == "__main__":
    move_servo_to_press()  # Press and release the button
