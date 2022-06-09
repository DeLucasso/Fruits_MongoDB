

const kittySchema = new mongoose.Schema({
  size: String
});

const Tank = mongoose.model('Tank', kittySchema);

Tank.create({ size: 'large' }, function (err, small) {
  if (err) return handleError(err);
  // saved!
