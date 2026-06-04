import Joi from "joi";

const createSizeValidationSchema = Joi.object({
    id_shoes: Joi.number().integer().positive().required().messages({
        "number.base": "ID sepatu harus berupa angka",
        "number.positive": "ID sepatu harus positif",
        "any.required": "ID sepatu wajib diisi",
        "number.integer": "ID sepatu harus bilangan bulat",
    }),
    amount: Joi.number().positive().required().messages({
        "number.base": "Jumlah harga harus berupa angka",
        "number.positive": "Jumlah harga harus positif",
        "any.required": "Jumlah harga wajib diisi",
        "number.integer": "Jumlah harga harus bilangan bulat",
    }),
});

const updateSizeValidationSchema = Joi.object({
    id_shoes: Joi.number().integer().positive().messages({
        "number.base": "ID sepatu harus berupa angka",
        "number.positive": "ID sepatu harus positif",
        "number.integer": "ID sepatu harus bilangan bulat",
    }),
    amount: Joi.number().positive().messages({
        "number.base": "Jumlah harga harus berupa angka",
        "number.positive": "Jumlah harga harus positif",
        "number.integer": "Jumlah harga harus bilangan bulat",
    }),
}).min(1);

export {
  createSizeValidationSchema,
  updateSizeValidationSchema,
};