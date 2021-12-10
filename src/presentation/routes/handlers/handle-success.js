export const handleSuccess = response => value => response
  .status(200)
  .json(value)
