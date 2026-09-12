const potrace = require('potrace');
const fs = require('fs');
const path = require('path');

const venuePath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\1920bb50-12a4-4061-a6c7-d4015d6a9cd0\\jaipur_palace_crosshatch_venue_1789215125160.png';
const carPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\1920bb50-12a4-4061-a6c7-d4015d6a9cd0\\vintage_car_heart_balloons_empty_badge_1789215562365.png';

const outDir = path.join(__dirname, '..', 'src', 'assets');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Trace Venue Palace
const venueParams = {
  color: '#7A1E1E',
  threshold: 160,
  turdSize: 2,
  optTolerance: 0.2
};

potrace.trace(venuePath, venueParams, (err, svg) => {
  if (err) console.error('Error tracing venue:', err);
  else {
    fs.writeFileSync(path.join(outDir, 'palace-venue.svg'), svg);
    console.log('Venue SVG generated successfully!');
  }
});

// 2. Trace Vintage Car
const carParams = {
  color: '#7A1E1E',
  threshold: 150,
  turdSize: 4,
  optTolerance: 0.3
};

potrace.trace(carPath, carParams, (err, svg) => {
  if (err) console.error('Error tracing car:', err);
  else {
    fs.writeFileSync(path.join(outDir, 'wedding-car.svg'), svg);
    console.log('Car SVG generated successfully!');
  }
});
