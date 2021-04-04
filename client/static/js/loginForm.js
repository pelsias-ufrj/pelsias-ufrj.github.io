$('#submit').on('click', (e)=>{
    e.preventDefault();
    var data = $('#form').serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
        }, {});
    console.log(data)
    const url = 'http://localhost:5000/api/login'
    const requestOpts = {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'data': data 
      })
    }
    fetch(url, requestOpts).then(response => response.json()).then(responseJson => {
      console.log(responseJson)
        if(responseJson.status === 200){
            window.location.href = "/addposts"
        }
    })
})