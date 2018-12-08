import 'babel-polyfill';
// import axios from 'axios';
// import sslRootCas from 'ssl-root-cas';
// import https from 'https';
//
// https.globalAgent.options.ca = sslRootCas.create();
//
// axios('https://jc.instante.justice.md').then( res => {
//   console.log(res.status);
// }).catch( error => {
//   console.log(error.message);
// });

const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://jc.instante.justice.md';

rp(url)
  .then(function(html){
    //success!
    // const wikiUrls = [];
    // for (let i = 0; i < 45; i++) {
    //   wikiUrls.push($('big > a', html)[i].attribs.href);
    // }
    // console.log(wikiUrls);
    console.log(html);
  })
  .catch(function(err){
    console.log('Error' + err);
    //handle error
  });
