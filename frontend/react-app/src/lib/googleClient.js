
export const client = window.google.accounts.oauth2.initCodeClient({
  client_id: '1031281723602-gbn5o07fbo4iv06oo3fpouv7gr4fho60.apps.googleusercontent.com',
  scope: [
  'openid',
  'email',
  'profile',
   ].join(' '),
  ux_mode: 'popup',
  callback: (response) => {
    const xhr = new XMLHttpRequest();
    console.log('this is response from google', response)
    xhr.open('POST', "http://localhost:5000/api/v1/auth/google", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onload = function() {
      console.log('Auth code response: ' + xhr.responseText);
    };
    xhr.onerror = function() {  
      console.error('Request failed');
    };
    xhr.send('code=' + response.code);
  },
});

