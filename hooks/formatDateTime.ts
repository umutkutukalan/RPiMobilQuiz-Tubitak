// Tarih ve saat formatlayıcı (gün.ay.yıl saat:dakika)
export const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.toLocaleDateString("tr-TR", { day: "2-digit" });
  const month = date.toLocaleDateString("tr-TR", { month: "short" });
  const year = date.toLocaleDateString("tr-TR", { year: "numeric" });
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${day} ${month}, ${year} | ${hours}:${minutes}`;
};
