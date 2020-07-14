exports.list = (model) => {
  return new Promise((resolve, reject) => {
    return model.find().exec((err, items) => {
      if (err) return reject(new Error(err));
      if (!items) return reject(new Error(`No ${model} Found`));
      return resolve(items);
    });
  });
};

exports.listById = (model, req) => {
  return new Promise((resolve, reject) => {
    return model.findById(req.params.id).exec((err, items) => {
      if (err) return reject(new Error(err));
      if (!items) return reject(new Error(`No ${model} Found`));
      return resolve(items);
    });
  });
};

exports.create = (model, req) => {
  return new Promise((resolve, reject) => {
    const doc = new model(req.body);
    return doc.save((err) => {
      if (err) return reject(new Error(err));
      return resolve(doc);
    });
  });
};

exports.update = (model, req) => {
  return new Promise((resolve, reject) => {
    return model
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .exec((err, items) => {
        if (err) return reject(new Error(err));
        if (!items) return reject(new Error(`No ${model} document Found`));
        return resolve(items);
      });
  });
};

exports.delete = (model, req) => {
  return new Promise((resolve, reject) => {
    return model.deleteOne({ _id: req.params.id }).exec((err, items) => {
      if (err) return reject(new Error(err));
      if (!items) return reject(new Error(`No ${model} document Found`));
      return resolve(items);
    });
  });
};
