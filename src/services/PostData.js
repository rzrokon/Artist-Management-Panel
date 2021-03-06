export function PostData(type, userData){

    let BaseUrl = 'http://45.114.84.83:9002/';

    return new Promise((resolve,reject) => {

        fetch(BaseUrl+type,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

    });
}