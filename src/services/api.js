import request from 'superagent';
import * as apiURL from '../common/api_url';

export async function getProductDetail(id) {
  return request.get(apiURL.productList(id));
}

export default request;
