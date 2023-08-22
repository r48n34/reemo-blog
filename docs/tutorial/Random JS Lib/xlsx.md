---
sidebar_position: 1
---

# [xlsx] xlsx 

## Basic start up 

https://www.npmjs.com/package/xlsx

```bash title="Terminal"
npm i xlsx
```

## Read file to JSON array

```ts title="server.ts"
async function readFile(i:number): object[] {
    const workbook = XLSX.readFile('004.xlsx');  // Sheet path
    const first_worksheet = workbook.Sheets[workbook.SheetNames[i]]; // Which work sheet
    const data = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });

    return data;
}
```