import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

//const dotenv = require('dotenv');
//dotenv.config({ path: '../.env' });

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6B157AA2f157A101cCbA19EE7833d3BaEd0Ac27C'
);

export default instance;
