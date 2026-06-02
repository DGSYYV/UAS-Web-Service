import * as PriceModel from "../models/priceModel.js";

export const getAll = async (req, res) => {
  try {
    const data = await PriceModel.getAllPrice();

    res.status(200).json({
      success: true,
      message: "Data price berhasil diambil",
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

    const data = await PriceModel.getPriceById(Number(id));

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Data price tidak ditemukan",
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
      id_shoes,
      amount,
      effective_date,
      status,
    } = req.body;

    const data = await PriceModel.createPrice({
      id_shoes: Number(id_shoes),
      amount,
      effective_date: new Date(effective_date),
      status,
    });

    res.status(201).json({
      success: true,
      message: "Price berhasil ditambahkan",
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
      id_shoes,
      amount,
      effective_date,
      status,
    } = req.body;

    const data = await PriceModel.updatePrice(
      Number(id),
      {
        id_shoes: Number(id_shoes),
        amount,
        effective_date: new Date(effective_date),
        status,
      }
    );

    res.status(200).json({
      success: true,
      message: "Price berhasil diupdate",
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

    await PriceModel.deletePrice(Number(id));

    res.status(200).json({
      success: true,
      message: "Price berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};