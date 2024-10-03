const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        console.log(success);
    }, 500);
};
const delayedException = () => {
    setTimeout(() => {
        // Instead of throwing an error, log the error object
        let error = { error: 'delayed exception!' };
        console.log(error);
    }, 500);
};
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved after 500ms!');
        }, 500);
    });
};
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Promise rejected after 500ms!'));
        }, 500);
    });
};
delayedSuccess();
delayedException();
resolvedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
rejectedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
