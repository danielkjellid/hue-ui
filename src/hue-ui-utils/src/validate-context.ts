function getContextValidationMessage({
  hookName,
  providerName,
}: {
  hookName: string
  providerName: string
}) {
  return `${hookName} hook was called outside of context, make sure your app is wrapped with ${providerName} component.`
}

function validateContext<T extends object>({
  context,
  hookName,
  providerName,
}: {
  context: T | undefined
  hookName: string
  providerName: string
}) {
  if (!context) {
    throw new Error(getContextValidationMessage({ hookName, providerName }))
  }
}

export { validateContext, getContextValidationMessage }
