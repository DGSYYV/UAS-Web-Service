import { prismaClient } from "../database/dbConfig.js";

export const getAllShoes = () => {
  return prismaClient.shoes.findMany({
    include: {
      merek: true,
      shoesType: true,
      sizes: true,
      prices: true,
    },
  });
};

export const getShoesById = (id) => {
  return prismaClient.shoes.findUnique({
    where: {
      id_shoes: id,
    },
    include: {
      merek: true,
      shoesType: true,
      sizes: true,
      prices: true,
    },
  });
};

export const createShoes = (data) => {
  return prismaClient.shoes.create({
    data,
  });
};

export const updateShoes = (id, data) => {
  return prismaClient.shoes.update({
    where: {
      id_shoes: id,
    },
    data,
  });
};

export const deleteShoes = (id) => {
  return prismaClient.shoes.delete({
    where: {
      id_shoes: id,
    },
  });
};