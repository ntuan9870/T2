
   function showSwal(type,message) {
  'use strict';
  if (type === 'auto-close') {
  swal({
  title: message,
  text: 'Cửa sổ sẽ tự đóng trong vòng 2 giây',
  timer: 2000,
  button: false
  }).then(
  function() {},
  // handling the promise rejection
  function(dismiss) {
  if (dismiss === 'timer') {
  console.log('I was closed by the timer')
  }
  }
  )
  }else{
  swal("Error occured !");
  }
  }

