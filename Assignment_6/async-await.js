function getTestUserLater() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('qa.user@example.com'), 4000);
  });
}

async function prepareLoginTest() {
  const testUser = await getTestUserLater();
  console.log(`Test data is ready for: ${testUser}`);
  console.log('The login check can start now.');
}

console.log('First call');
prepareLoginTest();
