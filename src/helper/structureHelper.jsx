export const apiStructure = {
  status: 404,
  info: "NOT FOUND",
  messsage: "Halaman Tidak Ditemukan",
  data: {},
};

export default function updateStructure(status, info, message, data) {
  apiStructure.status = status ?? 500;
  apiStructure.info = info ?? "SERVER ERROR";
  apiStructure.messsage = message ?? "Server Sedang Gangguan";
  apiStructure.data = data ?? null;

  return apiStructure;
}
