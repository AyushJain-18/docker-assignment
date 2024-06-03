async function makeAPICalls() {
  const url = 'http://127.0.0.1:63012/api/items';
  const numberOfCalls = 100000;

  for (let i = 0; i < numberOfCalls; i++) {
    try {
      const response = await fetch(url);
      const response1 = await fetch(url);
      const response2 = await fetch(url);
      const response3 = await fetch(url);
      const response4 = await fetch(url);
      console.log(`Call ${i + 1}: Status ${response.status}`);
    } catch (error) {
      console.error(`Call ${i + 1}: Error ${error.response.status}`);
    }
  }
}

makeAPICalls();
