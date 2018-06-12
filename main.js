import { testUrl } from './lib/functions';
import { urls } from './lib/url';

async function run() {
  urls.forEach(async url => {
    try {
      console.log('Testing ' + url);
      await testUrl(url);
    } catch (err) {
      console.log(err);
    }
  });
}

run();
