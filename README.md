This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Hardware You'll Need:
- RaspberryPi (I'm using a Zero 2W)
- 9g mini servo
- Temperature probe (optional)

### Wiring Up The Pi:

TODO: Insert pics here


### Testing

It's easiest to test the hardware parts first, and separately:
For the servo motor, run the command: `python3 ~/Documents/webservo/src/python/servo_control.py` and see if the servo moves.
For the temp probe, run the command: `python3 ~/Documents/webservo/src/python/temperature.py` and and temperature should be printed in the console.

To test the webapp, navigate to the webservo directory (I have it in the root of the Documents folder) and run `npm run dev`.  
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
