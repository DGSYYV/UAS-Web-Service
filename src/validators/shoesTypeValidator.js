import Joi from "joi";

const createShoesTypeValidationSchema = Joi.object({
  type_name: Joi.string().required().max(100).messages({
    "string.base": "Tipe sepatu harus berupa string",
    "string.empty": "Tipe sepatu tidak boleh kosong",
    "string.max": "Tipe sepatu maksimal 100 karakter",
    "any.required": "Tipe sepatu wajib diisi",
  }),

});

const updateShoesTypeValidationSchema = Joi.object({
  type_name: Joi.string().max(100).messages({
    "string.base": "Tipe sepatu harus berupa string",
    "string.empty": "Tipe sepatu tidak boleh kosong",
    "string.max": "Tipe sepatu maksimal 100 karakter",
  }),
}).min(1);

export {
  createShoesTypeValidationSchema,
  updateShoesTypeValidationSchema,
};