import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "src", "data" , "products.json");

export const getProducts = () => {
    const data = JSON.parse(fs.readFileSync(filePath));
    return data;
}