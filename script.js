let states = document.querySelector('#states');

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        .then(statesReturned => {
            return statesReturned.json()
        })
        .then(statesFormated => {
            for(i = 0; i <= statesFormated.length; i++){
                states.innerHTML += '<li>' + statesFormated[i].nome;
            };
        })
        .catch(error => console.log(error));