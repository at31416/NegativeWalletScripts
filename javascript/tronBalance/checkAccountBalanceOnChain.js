const XLSX = require('xlsx');

let str = "0      TLYbSXUAmzhKRK8zuwLhTxnqGYj1uLMu2f                 108             0                              \n" +
    "1      TG8BrVcueq8Y1PbTKWJ9AAJdZbqgYZjBra                 107             0                              \n" +
    "2      TXuqHFmjRSUjAHggyRqvm5ecaAYVABvE11                 106             0                              \n" +
    "3      TPXK1gXMppomAZvuHnicyVGB32pBog31Lf                 105             0                              \n" +
    "4      TXUUMi2LwifpcQjSXTYBKvniGgEipuB2RR                 104             0                              \n" +
    "5      TDstBiq8x6zd7JwSN5FAKeuhDhKPuyeNSD                 103             0                              \n" +
    "6      TMdVoZfa66p2K52RKPidycJDA36D2eyaYd                 102             0                              \n" +
    "7      TQvBr2uKAdfvTrK5CrsEvqoQRTpS1iNdaP                 101             0                              \n" +
    "8      TUirJxQnGs4ZjJTNJdE5DvQC9s3zQJMYSp                 100             0                              \n" +
    "9      TFaKxhwkpGE671U3GaqxdfPq4iLZs5h6NL                 99              0                              \n" +
    "10     TE2h3e1CqyXtp5MqaAYjHp7izT7ZEqp2An                 98              0                              \n" +
    "11     TLkdSqy6Ffj1vXzj34ySws2G4BYn22eWsC                 97              0                              \n" +
    "12     TVQjDreY5uwCea2YBvV7V3Dd8MPLQzFwDk                 96              0                              \n" +
    "13     THpeBhbDRv1zacBF3VuX4ZYgUEKmNXFmkm                 95              0                              \n" +
    "14     TMFiE38wdkcuQAGmiX3RNMGFMUe6AYDHFU                 94              0                              \n" +
    "15     TCgaz3o1G4sTWNq27MTRCNic56sX272Sx3                 93              0                              \n" +
    "16     TP5ejrs7yTb1bHtqnQ1tN6TcZPF6NYkppg                 92              0                              \n" +
    "17     THictB6L1Di3hmgAp8BHniLBpwQBc3Ff4T                 91              0                              \n" +
    "18     TCKNehqtPikZeAx9Rwz9U68bXtexD1E8cx                 90              0                              \n" +
    "19     TK83HASgLDYwVTx5CAVZecLneZKYvEfSvv                 89              0                              \n" +
    "20     TWrdCBoP7ektKHjwSPHjF4icc9jCqohvnK                 88              0                              \n" +
    "21     TLyxw9bxCeuASzwYY1XKErSncWSbAqz4na                 87              0                              \n" +
    "22     TJkpRGsD3jwFhukLFXyYop8pBdTxfWbDww                 86              0                              \n" +
    "23     TEKE4pKeLZAXjB7gddKoxTz5wUdBxuCfcd                 85              0                              \n" +
    "24     TQcNSQibPQpdatPts1hvndBJC8hZhsUBd7                 84              0                              \n" +
    "25     TQxLC4TyhAtZVCMsVFPtGwkbWVNvcK79NN                 83              0                              \n" +
    "26     TWNAMkNFASzafET6uScmTthWSMRaJxoL83                 82              0                              \n" +
    "27     TGdWsof2mJM5ipkD25r5uPFS6p8ubXaSef                 81              0                              \n" +
    "28     TJ6ptydJkUn4SS2K9pWSwrU4zf9aj4Sefv                 80              0                              \n" +
    "29     TYkPaqsMMPUMNCXpu7KDoD5TxC9JfK55Z9                 79              0                              \n" +
    "30     TN9kHBywHCniqtZaFugbiyaSxkEH26uY3c                 78              0                              \n" +
    "31     TAFcvHH7Use2irGEPfuiGw83wgo8hQzGRp                 77              0                              \n" +
    "32     TNhU9xc57UkvRsS3o5MYzf4U8CE7fWLWbT                 76              0                              \n" +
    "33     TESLHGZ6NYgDL74W7Q2CybW3WUcEWNPuuZ                 75              0                              \n" +
    "34     TTXnEBR3VKZ3rqYpFUoDVrDMpatjHiwedw                 74              0                              \n" +
    "35     TUJzRhh3W4gbGSVe3Uqtomp67nZLAUDyGF                 73              0                              \n" +
    "36     TFAwr7rCQpgK2PbMD6G1iZedfdxNMwi7yz                 72              0                              \n" +
    "37     TCAUDHdHivxGxAEdgxRExcUvoeskLdFPja                 71              0                              \n" +
    "38     THPSeNYC4pyDcENadxH6U6iQvNAavGuFdd                 70              0                              \n" +
    "39     TZ8c8aGevceqbP64dGPUfMHgzVWZX1SN5G                 69              0                              \n" +
    "40     TCsbwk6YkPoNWX39zsUJk9hMa93ZQUbz8R                 68              0                              \n" +
    "41     TTbuRLgemfkA948vJDnnuwkbQbrWQ7bJQd                 67              0                              \n" +
    "42     TV23yH3e6h3hvh84LrQUCdM9tqpJzbmuDw                 66              0                              \n" +
    "43     TDn1Chx5noJkPDuT9NmYngAyjiFWb9cjsF                 65              0                              \n" +
    "44     TK8vRbxXkSgyoz8GJqi2xBaEECEPBrJxpn                 64              0                              \n" +
    "45     TJQorzLB2V9HLCmMYv5evy1JBDktR9f7NW                 63              0                              \n" +
    "46     TR7ZhWmMaBiDbxmJxPhhftp1Qe6iy4yAZD                 62              0                              \n" +
    "47     TQq4uX8v1bjXofDaWwKCoNCcXnRrgBoS6s                 61              0                              \n" +
    "48     TB1R4nqPJc9uU4dKACeTo2MCSJDR2bFfXK                 60              0                              \n" +
    "49     TUismt9H4yXac94vX9goihimrgvXhHKn7C                 59              0                              \n" +
    "50     TQoL42vW1w4H2Ff34i7Ttunv49KeZsxiWL                 58              0                              \n" +
    "51     TEZ7N2N5SJddGiqogBJZzGcVr9ApbA1nRf                 57              0                              \n" +
    "52     TQB36C7qFuX3Ux5T8mDAZ2V96GG6e7iPQ8                 56              0                              \n" +
    "53     TVnyCqdMK5XGzHsHa943No3FSVnwGiNVDA                 55              0                              \n" +
    "54     TJ7FjE8Md3paYuSCwkXfszwaAKz35ivugC                 54              0                              \n" +
    "55     TGRrWmyzgEdjRAqtnYh8Nm9dCJr6dKu7jw                 53              0                              \n" +
    "56     TK9dczMFnFP5QsS7jVbjCLuESPkXK9HwKm                 52              0                              \n" +
    "57     TPyGf869LaFQKZpxXi689k9w2zPnoeqs7U                 51              0                              \n" +
    "58     TPQqHcKG5oC3kGY2g8Xi9JmZXXn426PoYi                 50              0                              \n" +
    "59     TKDsca1ZbrnBxFQkfYZqJ4uHZ1Rejjnt6H                 49              0                              \n" +
    "60     TYXxD8Q65Pjezw8gsG84pRx7XmJhtvWhQN                 48              0                              \n" +
    "61     TM7g9kPLRrvNHt4zKAeSrgPT8t5LLouEmP                 47              0                              \n" +
    "62     TL9cbRNEw1D6TJEMX93gYXga4igf7UKMAZ                 46              0                              \n" +
    "63     TPRZUwb5eazqKuu6Gn1y6t4BPGtrRNEoHM                 45              0                              \n" +
    "64     TKHNQnkGkiDRfAT5tekKgGZ646sytK8oHu                 44              0                              \n" +
    "65     TKATPVouqD8KcmGEgjQfz18hKGwMboVnqq                 43              0                              \n" +
    "66     TMudqbKnyVXE8TyWLpRKzcq9e5tLebDUsH                 42              0                              \n" +
    "67     TLYtAVcu56ZCweB3ZNQiGhzsT1THPzifG5                 41              0                              \n" +
    "68     TJNPtUSUUhgxPxL3iBZepPJnjZdGCnmW2V                 40              0                              \n" +
    "69     TQiYDciXTnRxi4kJZ2vmbjwgioL69sXbQi                 39              0                              \n" +
    "70     TEVkjBXpAmqbzGUmHUVwmk9njEqPu2BsRX                 38              0                              \n" +
    "71     TVnT3n2r9WTx5j27pWgLmWuY3AH8H3Zu8D                 37              0                              \n" +
    "72     TMeNVRL8MCye4qs8JfgTbg8exwfD6tP5WY                 36              0                              \n" +
    "73     TGurYLevtZ8xv8VQ3ty9sRDrh9kbpPjsL6                 35              0                              \n" +
    "74     TMJNDdmAodFSex7v76PYHPj68pkUKyL93w                 34              0                              \n" +
    "75     TTJnXErDQLAzQNkSWcbnKbL3KZwkoJF9kp                 33              0                              \n" +
    "76     TANebYw6krEdrgm3crekCAPEuiEPaAnZSF                 32              0                              \n" +
    "77     TVgX7NsKN2QJ26AHn6bePMV9VoNjwrukh4                 31              0                              \n" +
    "78     TAyjcQ1j5A21Kb7WyaPCZhTcdzH8Aq7FLF                 30              0                              \n" +
    "79     TCExEKMEGLGYDL73Et24yBLYJrU8dn9rz3                 29              0                              \n" +
    "80     TR1trkyXvfHHpmxPg4xHNDbfiU2oowaBvx                 28              0                              \n" +
    "81     TDHa1qjVY6immR1R8WmRSZBUswH954M699                 27              0                              \n" +
    "82     TZ8brdH9iuBPeNpYE5mZ13hQfVnPf9bjAQ                 26              0                              \n" +
    "83     THQ1Q4s6xnJwMuzrefYAPuCyBk7a3ipEfZ                 25              0                              \n" +
    "84     TGVS4qQEm9AQPUPxWgUyr55ciDWXpbBVUW                 24              0                              \n" +
    "85     TMcuZQg5B9Qx9BAqfeSHES58XMRH7bqa8Z                 23              0                              \n" +
    "86     TKv7TQFf64n8fuApSzYM3p6v98isVb1oN2                 22              0                              \n" +
    "87     TEvS8VbMnDqpyX4o4vwVF1QiSPxrKLWQz5                 21              0                              \n" +
    "88     TPKPsKTZed6KJUtLCrxQ5DfJxR5EkPbVPa                 20              0                              \n" +
    "89     TNnBxPa3RQr1fNAg5ujz4YCCcqCETWb2nL                 19              0                              \n" +
    "90     TFmDbXqS8oZj6jAa6yFsCPinuumRVEj6vY                 18              0                              \n" +
    "91     TL4j7DX2umra37m1gViGeRQa7suwH3FRoq                 17              0                              \n" +
    "92     TYH2kBEBgpAbFxUVBQ4D9dYQkba3w93ubA                 16              0                              \n" +
    "93     TM9AjRVsHuvHLVgTGMkNBpT4j8uWfKKUNK                 15              0                              \n" +
    "94     TXVkdRSsDYEv6nxLtiYHZaXbSzXTNJNJup                 14              0                              \n" +
    "95     TEUtpo98out3oVSQ9o9BBXCagYtX9ZkHpg                 13              0                              \n" +
    "96     TTbvQYuq4rHFVznNsDNrKGuJBMKCCtnjaK                 12              0                              \n" +
    "97     TQyjNk7PzQ1WFTQAUQdFc5B4nu9ZPj9x1f                 11              0                              \n" +
    "98     TLoruXzWHRyF2GCiD5hxTyfLcV6KNqBBsC                 10              0                              \n" +
    "99     TRQ6nKvUinAWBft1bu3yYCLcNgWt3ZfZjP                 9               0                              \n" +
    "100    TSwrP3E7B6Mj764hDzcyZngHN8Ax7SVMEh                 8               0                              \n" +
    "101    TGDnqotez8iyjeWV5MhgNGjynNK3FDEBJa                 7               0                              \n" +
    "102    TCBZJe7SASAPoZFgeAKi149WNrMoV8FQSq                 6               0                              \n" +
    "103    TJgawPJED9vLztCwhyNdBF9onV8iZfewLo                 5               0                              \n" +
    "104    TKQEFfSFJht7rz4CVGd9Dpmntodt7Q3xrt                 4               0                              \n" +
    "105    TJruzQ3veMjZY714duqA5NvNhWFg4hWPgP                 3               0                              \n" +
    "106    TXBeRE3Sz8qAgqchbU1xxahmEcWnCzgQ7q                 2               0                              \n" +
    "107    TJDdrXTeiHVgD2eLc2N4HUi7YoD1PPa4WA                 1               0                              \n" +
    "108    TVom8GPRJRqCBJ43mmU6SnjshWHQtFKfsV                 0               0                              \n";



// List of addresses
let addresses = str.match(/[A-Za-z0-9]{34}/g);

// Token ID to check
const tokenIdToCheck = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";

// Results storage
const positiveBalanceAddresses = [];
const allTokenAddresses = [];

// Function to fetch account data
async function fetchAccountData(address) {
    const url = `https://apilist.tronscanapi.com/api/accountv2?address=${address}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data for address: ${address}`);
    }
    return response.json();
}

// Main function to process addresses
async function processAddresses() {
    for (const address of addresses) {
        console.log("processing add: ", address);
        try {
            const data = await fetchAccountData(address);
            const tokenData = data.withPriceTokens.find(token => token.tokenId === tokenIdToCheck);

            // Check if the token data exists
            if (tokenData) {
                console.log("found token balance: ", tokenData.balance);
                allTokenAddresses.push(address);
                // Check if the balance is positive
                if (parseFloat(tokenData.balance) > 0) {
                    positiveBalanceAddresses.push(address);
                }
            } else{
                console.log("not found token balance for address: ");
            }
        } catch (error) {
            console.error(`Error processing address ${address}: ${error.message}`);
        }
    }

    // Write results to Excel
    writeResultsToExcel();
}

// Function to write results to an Excel file
function writeResultsToExcel() {
    const workbook = XLSX.utils.book_new();

    // Create sheets
    const positiveBalanceSheet = XLSX.utils.json_to_sheet(positiveBalanceAddresses.map(addr => ({ Address: addr })));
    const allTokenSheet = XLSX.utils.json_to_sheet(allTokenAddresses.map(addr => ({ Address: addr })));

    // Append sheets to workbook
    console.log(positiveBalanceSheet);
    XLSX.utils.book_append_sheet(workbook, positiveBalanceSheet, 'Positive Balance Addresses');
    console.log("all");
    console.log(allTokenSheet);
    XLSX.utils.book_append_sheet(workbook, allTokenSheet, 'All Token Addresses');

    // Write to file
    XLSX.writeFile(workbook, 'addresses.xlsx');
}

// Start processing
processAddresses();
