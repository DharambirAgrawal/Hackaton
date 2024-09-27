import asyncHandler from 'express-async-handler';


const apiKey = 'AIzaSyBjK5fwqd7zVJ7VMLIs9o2tTLTzD0INW-E';
const searchEngineId = 'b73d15c3688a34761';




export const googleIt = async (req, res) => {
let query;
const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`;    
    fetch(url)
    .then(response => response.json())
    .then(stuff => console.log(stuff.items[2].link))




}

