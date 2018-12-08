import 'babel-polyfill';
import axios from 'axios';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

axios('https://jc.instante.justice.md').then( res => {
  console.log(res.data);
}).catch( error => {
  console.log(error);
});
