import pigpio
import time

servo_pin = 18  # GPIO pin where the servo is connected
sleep_time = 0.3
servo_neutral_position = 1500
servo_active_position = 1800

pi = pigpio.pi()
pi.set_mode(servo_pin, pigpio.OUTPUT)
# pi.set_servo_pulsewidth(servo_pin, servo_neutral_position)

def move_servo_to_press():
    pi.set_servo_pulsewidth(servo_pin, servo_active_position)
    time.sleep(sleep_time)

    pi.set_servo_pulsewidth(servo_pin, servo_neutral_position)
    time.sleep(sleep_time)  # Allow time for the servo to return

    # Optionally stop the servo PWM signal
    pi.set_servo_pulsewidth(servo_pin, 0)

if __name__ == "__main__":
    move_servo_to_press()  # Press and release the button
