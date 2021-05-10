import { postForm } from '../axious';

export function userLogin(params) {
  return postForm('baseweb/login/userLogin.do', params);
}
