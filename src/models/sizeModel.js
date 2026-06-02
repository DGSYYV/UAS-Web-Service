import { prismaClient } from "../database/dbConfig.js";

export const getAllSize = () => {
  return prismaClient.size.findMany({
    include: {
      shoes: true,
    },
  });
};

export const getSizeById = (id) => {
  return prismaClient.size.findUnique({
    where: {
      id_size: id,
    },
    include: {
      shoes: true,
    },
  });
};

export const createSize = (data) => {
  return prismaClient.size.create({
    data,
  });
};

export const updateSize = (id, data) => {
  return prismaClient.size.update({
    where: {
      id_size: id,
    },
    data,
  });
};

export const deleteSize = (id) => {
  return prismaClient.size.delete({
    where: {
      id_size: id,
    },
  });
};