import Joi from "joi";

const createShoesValidationSchema = Joi.object({
  name: Joi.string().required().max(100).messages({
    "string.base": "Nama sepatu harus berupa string",
    "string.empty": "Nama sepatu tidak boleh kosong",
    "string.max": "Nama sepatu maksimal 100 karakter",
    "any.required": "Nama sepatu wajib diisi",
  }),

  color: Joi.string().required().max(50).messages({
    "string.base": "Warna harus berupa string",
    "string.empty": "Warna tidak boleh kosong",
    "string.max": "Warna maksimal 50 karakter",
    "any.required": "Warna wajib diisi",
  }),

  id_type: Joi.number().integer().positive().required().messages({
    "number.base": "ID tipe sepatu harus berupa angka",
    "number.integer": "ID tipe sepatu harus bilangan bulat",
    "number.positive": "ID tipe sepatu harus positif",
    "any.required": "ID tipe sepatu wajib diisi",
  }),

  id_merek: Joi.number().integer().positive().required().messages({
    "number.base": "ID merek harus berupa angka",
    "number.integer": "ID merek harus bilangan bulat",
    "number.positive": "ID merek harus positif",
    "any.required": "ID merek wajib diisi",
  }),
});

const updateShoesValidationSchema = Joi.object({
  name: Joi.string().max(100).messages({
    "string.base": "Nama sepatu harus berupa string",
    "string.max": "Nama sepatu maksimal 100 karakter",
  }),

  color: Joi.string().max(50).messages({
    "string.base": "Warna harus berupa string",
    "string.max": "Warna maksimal 50 karakter",
  }),

  id_shoes_type: Joi.number().integer().positive().messages({
    "number.base": "ID tipe sepatu harus berupa angka",
    "number.integer": "ID tipe sepatu harus bilangan bulat",
    "number.positive": "ID tipe sepatu harus positif",
  }),

  id_merek: Joi.number().integer().positive().messages({
    "number.base": "ID merek harus berupa angka",
    "number.integer": "ID merek harus bilangan bulat",
    "number.positive": "ID merek harus positif",
  }),
}).min(1);

export {
  createShoesValidationSchema,
  updateShoesValidationSchema,
};