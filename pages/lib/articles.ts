const apiEndpoint = process.env.BACKEND_ENDPOINT || '';

export const getArticles = async () => {

  const params = {
    headers: {
      'Authorization': 'Bearer ' + process.env.STRAPI_TOKEN
    }
  }
  
  return fetch(apiEndpoint + '/api/articles', params).then((response) => {
    return response.json()
  }).catch((err) => {
    throw {
      message: 'Request Error',
      error: err
    }
  });
}
