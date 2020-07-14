var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form (prevent default action of the event handler)
    event.preventDefault();
    // create a message
    var message = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      roomname: 'hello world'
    };
    // // send post request to the server
    Parse.create(message, function(data) {
      App.fetch();
      // App.initialize();
    });

    // Parse.create
    console.log('click!');
    return false;
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};