import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState({ temp_c: null, temp_f: null });
  const temperatureUpdateInterval = 30000;

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/move-servo');
      // alert(response.data.message);
    } catch (error) {
      alert('Error moving servo');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await axios.get('/api/temperature');
        setTemperature(response.data);
      } catch (error) {
        console.error('Error fetching temperature:', error);
      }
    };

    // Fetch the temperature immediately when the component mounts, then every 30 seconds
    fetchTemperature();
    const interval = setInterval(fetchTemperature, temperatureUpdateInterval);

    return () => clearInterval(interval);
  }, []);

  const getColorForTemperature = (temp_f) => {
    if (temp_f <= 40) return `rgb(0, 0, 255)`; // Pure blue
    if (temp_f >= 90) return `rgb(255, 0, 0)`; // Pure red
    const ratio = (temp_f - 40) / (90 - 40);  // Calculate the ratio
    const red = Math.round(255 * ratio);
    const blue = Math.round(255 * (1 - ratio));
    return `rgb(${red}, 0, ${blue})`;
  };

  return (
    <div className="container">
      <h1>Servo Control</h1>
      <button className="button" onClick={handleButtonClick} disabled={loading}>
        {loading ? 'Toggling...' : 'Toggle A/C'}
      </button>

      {temperature.temp_f !== null || true && (
        <div className='temperature'>
          <p>
            Current Temperature:
            <span className='temperature-value' style={{ color: getColorForTemperature(temperature.temp_f) }}>
              {` 38.5°F`}
              {/* {` ${temperature.temp_f.toFixed(1)}°F`} */}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
