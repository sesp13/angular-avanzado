const { request, response } = require('express');

const getHospitals = async (req = request, res = response) => {
  try {
    return res.status(200).json({
      ok: true,
      msg: 'Get hospitals',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Error: Get hospital please check logs',
    });
  }
};

const createHospital = async (req = request, res = response) => {
  try {
    return res.status(200).json({
      ok: true,
      msg: 'Create hospital',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Error: Create hospital please check logs',
    });
  }
};

const updateHospital = async (req = request, res = response) => {
  try {
    return res.status(200).json({
      ok: true,
      msg: 'Update hospital',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Error: Update hospital please check logs',
    });
  }
};

const deleteHospital = async (req = request, res = response) => {
  try {
    return res.status(200).json({
      ok: true,
      msg: 'Delete hospital',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Error: Delete hospital please check logs',
    });
  }
};

module.exports = {
  getHospitals,
  createHospital,
  updateHospital,
  deleteHospital
};
