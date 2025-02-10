import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Web Servo Switch for A/C</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

function selectLocation(index) {
  console.log("selecting location at index: ", index);
  const hasLocationSetting = !!localStorage.getItem(localStorageLocationKey);
  const locationLinks = document.querySelectorAll('.location-dd-link');
  locationLinks[0].click();
  setTimeout(() => {
      if (locationLinks.length > 1) {
          locationLinks[index].click();
          if (!hasLocationSetting) document.querySelector('.location-wrapper').classList.add('is-ready');
          // Event listener for the confirm button
          if (isConfirmListenerBound) return;
          document.getElementById('confirm-location-button').addEventListener('click', function() {
              const locationOptions = document.querySelectorAll('#locationSelect option');
              const locationWrapper = document.querySelector('.location-wrapper');
              const locationIndex = getCurrentLocationIndex();
              const locationCode = locationOptions[locationIndex].getAttribute('data-location') || 'US';
              locationWrapper.classList.remove('is-ready');
              saveLocation(locationCode);
          });
          locationLinks.forEach((element) => {
             element.addEventListener('click', function() {
            const locationCode = element.getAttribute('data-location') || 'US';
            runLocationScript(locationCode);
          });
      });
      isConfirmListenerBound = true;
      }
  }, 400);
}
