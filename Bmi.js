const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()


   let height=  parseInt(document.querySelector("#sec1").value);
  let weight =   parseInt(document.querySelector("#sec2").value);
  let results = document.querySelector('#results');

  if( height <0 ){

   results.innerHTML = `Please Give a valid height  ${height}`  }
  else if( weight<0 ){

   results.innerHTML =  `Please Give a valid weight  ${weight}`
     
  }
  else{
     const  BMI = ( weight/((height * height)/10000)).toFixed(2) ;
     // show the result.
    results.innerHTML = `<span> YOUR BMI = ${BMI} </span>`;
  }
    

});