import Joi from "joi";

const createSizeValidationSchema = Joi.object({
    id_shoes: Joi.number().integer().positive().required().messages({
        "number.base": "ID sepatu harus berupa angka",
        "number.positive": "ID sepatu harus positif",
        "any.required": "ID sepatu wajib diisi",
    }),
    stock_qty: Joi.number().integer().min(0).required().messages({
        "number.base": "Jumlah stok harus berupa angka",
        "number.integer": "Jumlah stok harus bilangan bulat",
        "number.positive": "Jumlah stok harus positif",
        "any.required": "Jumlah stok wajib diisi",
    }),
});

const updateSizeValidationSchema = Joi.object({
  id_shoes: Joi.number().integer().positive().messages({
    "number.base": "ID sepatu harus berupa angka",
    "number.integer": "ID sepatu harus bilangan bulat",
    "number.positive": "ID sepatu harus positif",
  }),
  stock_qty: Joi.number().integer().min(0).messages({
    "number.base": "Jumlah stok harus berupa angka",
    "number.integer": "Jumlah stok harus bilangan bulat",
    "number.positive": "Jumlah stok harus positif",
  }),
}).min(1);

export {
  createSizeValidationSchema,
  updateSizeValidationSchema,
};