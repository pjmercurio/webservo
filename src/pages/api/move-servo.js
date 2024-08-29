import { exec } from 'child_process';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Execute the Python script to move the servo
    exec('python3 ~/Documents/webservo/src/python/servo_control.py', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: 'Failed to move servo' });
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return res.status(500).json({ error: 'Failed to move servo' });
      }
      res.status(200).json({ message: 'Servo moved successfully' });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
