This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Hardware You'll Need:
- RaspberryPi (I'm using a Zero 2W)
- 9g mini servo
- Temperature probe (optional)
- 4.7kΩ pull-up resistor for temperature probe (optional)

### Wiring Up The Pi:

TODO: Insert pics here

### Setting Up The Software:
- Copy the files from this repo to `~/Documents`
- Install node.js: `curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs`
- Install deps: cd into the `~/Documents/webservo` folder and run `npm install`
- Build the production site: `npm run build`
- Set up the service to run automatically on startup: `sudo nano /etc/systemd/system/webservo.service`
- Then paste this into the webservo.service file (note the username as this may differ in your case):
`[Unit]
Description=Next.js Web App For Controlling A/C
After=network.target

[Service]
ExecStart=/usr/bin/npm run start --prefix /home/pi/Documents/webservo
WorkingDirectory=/home/pi/Documents/webservo
Restart=always
User=pi
Environment=PORT=3000

[Install]
WantedBy=multi-user.target`


### Testing:

It's easiest to test the hardware parts first, and separately:

For the servo motor, run the command: `python3 ~/Documents/webservo/src/python/servo_control.py` and see if the servo moves.

For the temp probe, run the command: `python3 ~/Documents/webservo/src/python/temperature.py` and the temperature should be printed in the console.


To test the webapp, navigate to the webservo directory (I have it in the root of the Documents folder) and run `npm run dev`.  
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Examples:

![GIFMaker_me-1](https://github.com/user-attachments/assets/bbc5e86b-62f9-40f8-9bbb-2ca1466f92f7) ![GIFMaker_me-2](https://github.com/user-attachments/assets/1648a83e-e295-4f32-ac6b-0813d298f58d) ![IMG_1201](https://github.com/user-attachments/assets/3a618523-c6e7-4ed9-9bf8-8b87b69b65cc)




