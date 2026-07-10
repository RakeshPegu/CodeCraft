import { useAuthStore } from "@/stores/auth.store";

export const googleClient = () =>{
  return window.google.accounts.oauth2.initCodeClient({
  client_id: '1031281723602-gbn5o07fbo4iv06oo3fpouv7gr4fho60.apps.googleusercontent.com',
  scope: [
  'openid',
  'email',
  'profile',
   ].join(' '),
  ux_mode: 'popup',
  callback: (response) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:5000/api/v1/auth/google", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.withCredentials = true
    xhr.onload = function() {
      const response = JSON.parse(xhr.responseText)
      const user = response.user
      useAuthStore?.getState().setUserInfo(user)
      useAuthStore?.getState().setAccessToken(response.accessToken)
    };
    xhr.onerror = function() {  
      console.error('Request failed');
    };
    xhr.send('code=' + response.code);
  },
});

}