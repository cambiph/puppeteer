# Puppeteer response checker

Check the response codes for all resources.

### Installing

```javascript
npm install
```
## Running

Add the URL's you want to tests to `lib\urls.js` and then perform:

```javascript
npm start
```

All resources that do not return a repsonse OK (20x) will be written to results.csv.

## Built With

* [Puppeteer](https://github.com/GoogleChrome/puppeteer) - The framework used

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
