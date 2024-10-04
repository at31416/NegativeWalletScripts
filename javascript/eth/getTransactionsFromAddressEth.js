const XLSX = require('xlsx'); // Require the XLSX library

const baseUrl = 'https://api.etherscan.io/api';

const module1 = 'account';
const action = 'txlist';
const address = '0x73b0f910a6eff001e717be8efcbe8e7f5d13ecf2';
const startblock = 0;
const endblock = 99999999;
const page = 1;
const offset = 10000;
const sort = 'desc';
const apikey = 'use your api key here';

const apiUrl = `${baseUrl}?module=${module1}&action=${action}&address=${address}&startblock=${startblock}&endblock=${endblock}&page=${page}&offset=${offset}&sort=${sort}&apikey=${apikey}`;

async function fetchAndCreateExcel() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === "1" && data.result) {
            const transactions = data.result;

            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.json_to_sheet(transactions);

            XLSX.utils.book_append_sheet(wb, ws, "Transactions from eth scan");

            const filePath = 'Transactions eth.xlsx';
            XLSX.writeFile(wb, filePath);

            console.log(`Excel file has been generated: ${filePath}`);
        } else {
            console.error('Error in API response:', data.message);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAndCreateExcel();
