import { IncomingForm } from "formidable";
const fs = require('fs')

const data = require('./../../../data/new.json')


export default function handler(req, res) {
console.log(data)
data.push({
    name: 'John Doe',
})



res.status(200).json({ data})
saveData()
}

function saveData() {
fs.writeFileSync('data/new.json', JSON.stringify(data, null, 4));
    
}