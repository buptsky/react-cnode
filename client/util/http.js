import axios from 'axios';

const baseUrl = process.env.API_BASE || '';

const parseUrl = (url, params) => {
  let ret = '';
  const str = Object.keys(params).reduce((result, key) => {
    ret += `${key}=${params[key]}&`;
    return ret;
  }, '');
  return `${baseUrl}/api${url}?${str.substr(0, str.length - 1)}`;
};

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(parseUrl(url, params)).then((res) => {
      const data = res.data;
      if (data && data.success) {
        resolve(data);
      } else {
        reject(data);
      }
    }).catch((err) => {
      reject(err);
    });
  });
};

export const post = (url, params, reqData) => {
  return new Promise((resolve, reject) => {
    axios.post(parseUrl(url, params), reqData).then((res) => {
      const data = res.data;
      if (data && data.success) {
        resolve(data);
      } else {
        reject(data);
      }
    }).catch((err) => {
      reject(err);
    });
  });
};
