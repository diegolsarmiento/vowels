function vowels(stringA){
    const vocals = ['a','e','i','o','u', 'A','E','I','O','U'];
    const arrayA = stringA.split('');
    let cont = 0;

    arrayA.filter(letter => {
      if (vocals.indexOf(letter) !== -1){
        cont++
      }
    });

    return console.log(cont);
}

vowels('Aveces la vida empieza cuando algo termina');