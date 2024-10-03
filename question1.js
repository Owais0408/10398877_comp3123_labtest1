function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            // Filter out non-string values and lower case the remaining words
            const result = mixedArray
                .filter(item => typeof item === 'string') // Keep only strings
                .map(item => item.toLowerCase()); // Convert to lower case

            resolve(result); // Resolve the promise with the result
        } catch (error) {
            reject(error); // Reject the promise if an error occurs
        }
    });
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result); // Output: ['pizza', 'wings']
    })
    .catch(error => {
        console.error('Error:', error);
    });
