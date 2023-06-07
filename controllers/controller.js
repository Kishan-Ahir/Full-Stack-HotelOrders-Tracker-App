const path = require("path");
const sequelize = require("../database/database");
const table1 = require("../models/table1");
const table2 = require("../models/table2");
const table3 = require("../models/table3");

// Add order to Table1
exports.addorder = async (req, res) => {
  const name = req.body.itemName;
  const price = req.body.itemPrice;

  await table1.create({
    name: name,
    price: price
  })
    .then(async () => {
      const details = await table1.findAll();
      const totalamount = await table1.sum("price");
      const total = { details, totalamount };
      res.status(200).json(total);
    })
    .catch((err) => {
      console.log("Not able to store at table 1.");
    });
};

// Add order to Table2
exports.addorderat2 = async (req, res) => {
  const name = req.body.itemName;
  const price = req.body.itemPrice;

  await table2.create({
    name: name,
    price: price
  })
    .then(async () => {
      const details = await table2.findAll();
      const totalamount = await table2.sum("price");
      const total = { details, totalamount };
      res.status(200).json(total);
    })
    .catch((err) => {
      console.log("Not able to store at table 1.");
    });
};

// Add order to Table3
exports.addorderat3 = async (req, res) => {
  const name = req.body.itemName;
  const price = req.body.itemPrice;

  await table3.create({
    name: name,
    price: price
  })
    .then(async () => {
      const details = await table3.findAll();
      const totalamount = await table3.sum("price");
      const total = { details, totalamount };
      res.status(200).json(total);
    })
    .catch((err) => {
      console.log("Not able to store at table 1.");
    });
};

// Get orders from Table1
exports.getorderfrom1 = async (req, res) => {
  const orders = await table1.findAll();
  const totalamount = await table1.sum("price");
  const details = { orders, totalamount };
  res.status(200).json(details);
};

// Get orders from Table2
exports.getorderfrom2 = async (req, res) => {
  const orders = await table2.findAll();
  const totalamount = await table2.sum("price");
  const details = { orders, totalamount };
  res.status(200).json(details);
};

// Get orders from Table3
exports.getorderfrom3 = async (req, res) => {
  const orders = await table3.findAll();
  const totalamount = await table3.sum("price");
  const details = { orders, totalamount };
  res.status(200).json(details);
};

// Delete order from Table1
exports.deleteorderfromtable1 = async (req, res) => {
  const id = req.params.id;
  await table1.destroy({ where: { id: id } });
  const totalamount = await table1.sum("price");
  res.status(200).json(totalamount);
};

// Delete order from Table2
exports.deleteorderfromtable2 = async (req, res) => {
  const id = req.params.id;
  await table2.destroy({ where: { id: id } });
  const totalamount = await table2.sum("price");
  res.status(200).json(totalamount);
};

// Delete order from Table3
exports.deleteorderfromtable3 = async (req, res) => {
  const id = req.params.id;
  await table3.destroy({ where: { id: id } });
  const totalamount = await table3.sum("price");
  res.status(200).json(totalamount);
};

// Edit order from Table1
exports.editorderfromtable1 = async (req, res) => {
  const id = req.params.id;
  await table1.destroy({ where: { id: id } });
  const totalamount = await table1.sum("price");
  res.status(200).json(totalamount);
};

// Edit order from Table2
exports.editorderfromtable2 = async (req, res) => {
  const id = req.params.id;
  await table2.destroy({ where: { id: id } });
  const totalamount = await table2.sum("price");
  res.status(200).json(totalamount);
};

// Edit order from Table3
exports.editorderfromtable3 = async (req, res) => {
  const id = req.params.id;
  await table3.destroy({ where: { id: id } });
  const totalamount = await table3.sum("price");
  res.status(200).json(totalamount);
};

// Get the main file (orderTracker.html)
exports.getmainfile = (req, res) => {
  sequelize.sync().then(() => {
    res.sendFile(path.join(__dirname, "../", "views", "orderTracker.html"));
  });
};
