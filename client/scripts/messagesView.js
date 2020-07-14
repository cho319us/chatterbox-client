var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    // iterate over the storage array of Messages
    _.each(Messages.storage, function(messageObj) {
      // if the username and text of the messageObj is exist
      if (messageObj.username && messageObj.text) {
        MessagesView.renderMessage(messageObj);
      }
    });
  },

  renderMessage: function(message) {
    // render each messageObj from the Message storage array
    var renderedMessage = MessageView.render(message);
    // put the rendered Message to the chat
    MessagesView.$chats.append(renderedMessage); // $('#chats').append(renderedMessage);
  }

};