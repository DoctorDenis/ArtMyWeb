export default function filterByGender(array, gender) {
  if (!gender) return array;
  return array.filter((item) => item.gender === gender);
}
