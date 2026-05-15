const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC_DATA_DIR = path.join(ROOT, 'src', '_data', 'calculators');

// Ensure directory exists
fs.mkdirSync(SRC_DATA_DIR, { recursive: true });

let allCalcs = [];
for (let i = 1; i <= 6; i++) {
  try {
    const code = fs.readFileSync(path.join(ROOT, 'js', `calc-${i}.js`), 'utf8');
    // Extract the array using regex
    const match = code.match(/var\s+C\d+\s*=\s*(\[[\s\S]*\]);/);
    if (match) {
      // Evaluate the array string to get the JS objects
      const calcs = eval(match[1]);
      allCalcs = allCalcs.concat(calcs);
      console.log(`Parsed calc-${i}.js: Found ${calcs.length} calculators`);
    } else {
      console.log(`Could not find array in calc-${i}.js`);
    }
  } catch (e) {
    console.error(`Error processing calc-${i}.js:`, e.message);
  }
}

let count = 0;
allCalcs.forEach(calc => {
  if (calc && calc.id) {
    const filePath = path.join(SRC_DATA_DIR, `${calc.id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(calc, null, 2), 'utf8');
    count++;
  }
});

console.log(`Migrated ${count} calculators to JSON files in src/_data/calculators/`);
