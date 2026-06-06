

const Phone = require("../models/Phone");

exports.savePhone = async (req, res) => {
  try {
    const { phone, feature } = req.body;
    console.log(req.body);
    const newPhone = new Phone({
      phone,
      feature,
    });

    await newPhone.save();

    res.status(201).json({
      success: true,
      data: newPhone,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getPhones = async (req, res) => {
  try {
    const phones = await Phone.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: phones,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};