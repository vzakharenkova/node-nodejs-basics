const parseEnv = () => {
  const envObj = process.env;
  const result = [];

  for (let key in envObj) {
    if (key.startsWith('RSS_')) {
      result.push(`${key}=${envObj[key]}`);
    }
  }

  console.log(result.join('; '));
};

parseEnv();
