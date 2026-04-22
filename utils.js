/**
 * Converts the given date into the format dd/mm/yyyy - hh:mm
 *
 * @param {Date} date - A date object
 * @returns a string representing the formatted string
 */
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hour24 = date.getHours();
  const ampm = hour24 >= 12 ? "pm" : "am";
  const hour = String(hour24 % 12 || 12).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} - ${hour}:${minute} ${ampm}`;
}

export { formatDate };
