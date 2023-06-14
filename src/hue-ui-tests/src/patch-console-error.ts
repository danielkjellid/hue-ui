/* eslint-disable no-console */
const { error } = console

function patchConsoleError() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  console.error = () => {}
}

patchConsoleError.release = () => {
  console.error = error
}

export { patchConsoleError }
