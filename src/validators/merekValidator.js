import Joi from "joi";

const createMerekValidationSchema = Joi.object({
  nama_merek: Joi.string().required().max(100).messages({
    "string.base": "Nama merek harus berupa string",
    "string.empty": "Nama merek tidak boleh kosong",
    "string.max": "Nama merek maksimal 100 karakter",
    "any.required": "Nama merek wajib diisi",
  }),
});

const updateMerekValidationSchema = Joi.object({
  nama_merek: Joi.string().max(100).messages({
    "string.base": "Nama merek harus berupa string",
    "string.empty": "Nama merek tidak boleh kosong",
    "string.max": "Nama merek maksimal 100 karakter",
  }),
}).min(1);

export {
  createMerekValidationSchema,
  updateMerekValidationSchema,
};