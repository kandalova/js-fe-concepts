(function question6() {
  const p = new Promise((_, reject) => {
    setTimeout(() => {
      console.log('reject');
      reject();
    }, 2000);
  });

  p.then(
    () => console.log('10'),
    () => console.log('11')
  ).then(
    () => console.log('13'),
    () => console.log('14')
  );

  p.then(
    () => console.log('18'),
    () => console.log('19')
  );

  p.then(
    () => console.log('23'),
    () => console.log('24')
  );
})();

// reject
// 11
// 19
// 24
// 13


(function question6() {
  const p = Promise.reject();

  p
    .then(
      () => console.log('6'),
    )
    .catch(
      () => console.log('9')
    ).then(
    () => console.log('11'),
  );

  p
    .then(
      () => console.log('16'),
    )
    .catch(
      () => console.log('19')
    ).then(
    () => console.log('21'),
  );
})();
// 9
// 19
// 11
// 21