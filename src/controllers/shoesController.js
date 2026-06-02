import * as ShoesModel from "../models/shoesModel.js";

export const getAll = async (req, res) => {
  try {
    const data = await ShoesModel.getAllShoes();

    res.status(200).json({
      success: true,
      message: "Data shoes berhasil diambil",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await ShoesModel.getShoesById(Number(id));

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Data shoes tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const {
      name,
      color,
      id_shoes_type,
      id_merek,
    } = req.body;

    const data = await ShoesModel.createShoes({
      name,
      color,
      id_shoes_type: Number(id_shoes_type),
      id_merek: Number(id_merek),
    });

    res.status(201).json({
      success: true,
      message: "Data shoes berhasil ditambahkan",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      color,
      id_shoes_type,
      id_merek,
    } = req.body;

    const data = await ShoesModel.updateShoes(
      Number(id),
      {
        name,
        color,
        id_shoes_type: Number(id_shoes_type),
        id_merek: Number(id_merek),
      }
    );

    res.status(200).json({
      success: true,
      message: "Data shoes berhasil diupdate",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    await ShoesModel.deleteShoes(Number(id));

    res.status(200).json({
      success: true,
      message: "Data shoes berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};