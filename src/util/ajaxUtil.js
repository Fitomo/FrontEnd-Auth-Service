export function updateUserInDB(data, callback) {
  fetch('/api/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  }).then(() => {
      fetch('/api/user/'+data.id)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log('json', json);
        callback(json);
      });
    });
}
