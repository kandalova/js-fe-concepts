function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, ms)
  })
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return await response.json();
  } else {
    throw new HttpError(response);
  }
}


loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404


class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");

  try{
    const user = await loadJson(`https://api.github.com/users/${name}`);
    alert(`Полное имя: ${user.name}.`);
    return user;

  }
  catch(err){
    if (err instanceof HttpError && err.response.status == 404) {
      alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      return demoGithubUser();
    } else {
      throw err;
    }
  }
}

demoGithubUser();