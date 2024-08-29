import { exec } from 'child_process';

export default function handler(req, res) {
  exec('python3 ~/Documents/webservo/src/python/temperature.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ error: 'Failed to read temperature' });
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).json({ error: 'Failed to read temperature' });
    }
    const temp_output = stdout.trim().split(' / ');
    const temp_c = parseFloat(temp_output[0].replace('Temperature: ', '').replace('°C', ''));
    const temp_f = parseFloat(temp_output[1].replace('°F', ''));

    res.status(200).json({ temp_c, temp_f });
  });
}
