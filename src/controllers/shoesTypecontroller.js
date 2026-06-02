import * as shoesTypeModel from "../models/shoesTypeModel.js";

export const getAll = async (req, res) => {
    try {
        const result = await shoesTypeModel.getAllShoesType();

        res.status(200).json({
            success: true,
            message: "Data shoes type berhasil diambil",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getById = async (req, res) => {
    try {
        const result = await shoesTypeModel.getShoesTypeById(
            req.params.id
        );

        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const create = async (req, res) => {
    try {
        const result = await shoesTypeModel.createShoesType(
            req.body
        );

        res.status(201).json({
            success: true,
            message: "Shoes type berhasil ditambahkan",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const update = async (req, res) => {
    try {
        const result = await shoesTypeModel.updateShoesType(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            message: "Shoes type berhasil diubah",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const remove = async (req, res) => {
    try {
        await shoesTypeModel.deleteShoesType(
            req.params.id
        );

        res.status(200).json({
            success: true,
            message: "Shoes type berhasil dihapus"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};