import request from 'superagent';
import * as apiURL from '../common/apiUrl';

export async function getProductDetail(id) {
  return request.get(apiURL.productList(id));
}

export default request;
