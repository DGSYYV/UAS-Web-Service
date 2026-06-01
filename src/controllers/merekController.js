const Merek = require('../models/merekModel');

const getAll = async (req,res) => {
    const data = await Merek.getAll();

    res.status(200).json({
        success:true,
        data
    });
};

const getById = async (req,res) => {
    const data = await Merek.getById(req.params.id);

    res.status(200).json({
        success:true,
        data
    });
};

const create = async (req,res) => {
    const data = await Merek.create(req.body);

    res.status(201).json({
        success:true,
        data
    });
};

const update = async (req,res) => {
    const data = await Merek.update(
        req.params.id,
        req.body
    );

    res.status(200).json({
        success:true,
        data
    });
};

const remove = async (req,res) => {
    await Merek.remove(req.params.id);

    res.status(200).json({
        success:true,
        message:"Data berhasil dihapus"
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};