define(['core/sails.io'], function(io) {
  // This will connect.
  // Whatever gets returned gets stored, so we end up having just 1 socket connection (rather than 32).
  return io.connect();
});
