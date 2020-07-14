var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    // iterate over the Message
    _.each(Messages, function(messageObj) {
      // render each messageObj from the MessageArr
      var renderedMessage = MessageView.render(messageObj);
      // put the rendered Message to the
      MessagesView.$chats.append(renderedMessage);
      // $('#chats').append(renderedMessage);
    });
  }

};