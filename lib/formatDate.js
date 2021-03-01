export default function formatDate(dateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  const date = dateString ? new Date(dateString) : Date.now();
  return date.toLocaleDateString('en-US', options);
}
