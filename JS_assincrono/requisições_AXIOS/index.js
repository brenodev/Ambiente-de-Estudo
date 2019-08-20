axios.get('https://api.github.com/users/brenodev')
  .then(function(res){
    console.log(res)
  })
  .catch(function(err){
    console.log(err)
  })