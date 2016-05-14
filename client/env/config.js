// YOU DO NOT NEED TO EDIT this code.
//
// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.
if (!/(&|\?)username=/.test(window.location.search)) {
  var newSearch = window.location.search;
  if (newSearch !== '' & newSearch !== '?') {
    newSearch += '&';
  }
  newSearch += 'username=' + (prompt('What is your name?') || 'anonymous');
  console.log(newSearch);
  $.ajax({
    url: 'http://127.0.0.1:3000/classes/users/',
    type: 'POST',
    data: JSON.stringify({username: 'testing123'}),
    success: function(data) { console.log('success', data); },
    error: function(data) { console.log('failure', data); }
  });
  window.location.search = newSearch;
}
