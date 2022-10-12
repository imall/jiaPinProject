const { getData } = require('./googleapi.js');

(async () => {
  const resp = await getData('1_DXdRg2UCoo1YxSTmsYMSRkLJqPlquDWol5bxZdIQXQ', '0');
  console.log(resp);
})();