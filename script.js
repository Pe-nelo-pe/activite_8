document.querySelector('#button').addEventListener('click', logDebug);

function logDebug(){
  logMessage()
}

function logMessage(){
  console.log('Message');
  console.warn('Attention');
  console.error ('Erreur');
}