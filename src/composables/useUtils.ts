export const useUtils = () => {
  const isEmptyOrZero = <T extends Record<string, unknown>>(obj: T): boolean => {
    return Object.values(obj).every(
      (value) =>
        value === 0 || value === '' || value === null || value === undefined || value === '0',
    )
  }

  return {
    isEmptyOrZero,
  }
}
