import * as SizeModel from "../models/sizeModel.js";

export const getAll = async (req, res) => {
  try {
    const data = await SizeModel.getAllSize();

    res.status(200).json({
      success: true,
      message: "Data size berhasil diambil",
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

    const data = await SizeModel.getSizeById(Number(id));

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Data size tidak ditemukan",
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
    const { id_shoes, stock_qty } = req.body;

    const data = await SizeModel.createSize({
      id_shoes: Number(id_shoes),
      stock_qty: Number(stock_qty),
    });

    res.status(201).json({
      success: true,
      message: "Data size berhasil ditambahkan",
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
    const { id_shoes, stock_qty } = req.body;

    const data = await SizeModel.updateSize(
      Number(id),
      {
        id_shoes: Number(id_shoes),
        stock_qty: Number(stock_qty),
      }
    );

    res.status(200).json({
      success: true,
      message: "Data size berhasil diupdate",
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

    await SizeModel.deleteSize(Number(id));

    res.status(200).json({
      success: true,
      message: "Data size berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};