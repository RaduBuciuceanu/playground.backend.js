export const handleFailure = response => error => response
  .status(400)
  .json(error)
