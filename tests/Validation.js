// ...existing code...
// Remove or adjust this check if present:
if (existingRequests.some(req => req.date === newRequest.date)) {
  showError("A pickup is already scheduled for this date.");
  return;
}
// ...existing code...