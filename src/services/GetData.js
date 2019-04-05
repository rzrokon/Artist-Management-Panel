export function GetData(type){

    let BaseUrl = 'http://45.114.84.83:9002/api/';

    return new Promise((resolve,reject) => {

        fetch(BaseUrl+type,{
            method: 'GET',
            headers: {
                Authorization: "Token " + sessionStorage.getItem('irtoken')
            }
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