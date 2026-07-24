window.caseData = [];
window.customerData = [];

async function loadCSV(path) {
    const response = await fetch(path);
    const text = await response.text();
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');

    return lines.slice(1).map(line => {
        const values = line.match(/(".*?"|[^,]+)/g);
        const obj = {};
        headers.forEach((h, i) => {
            obj[h.trim()] = values[i]?.replace(/^"|"$/g, '') || '';
        });
        return obj;
    });
}

async function loadTrainingData() {
    window.caseData = await loadCSV('data/cases.csv');
    window.customerData = await loadCSV('data/customers.csv');

    console.log('Cases loaded:', window.caseData.length);
    console.log('Customers loaded:', window.customerData.length);
}
