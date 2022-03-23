import { createWriteStream } from 'fs';
import { get } from 'https';

async function downloadImage(url: string, filepath: string) {
    return new Promise((resolve, reject) => {
        get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
                console.log('Astro Girl downloaded');
            } else {
                // Consume response data to free up memory
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
            }
        });
    });
}

export default downloadImage;