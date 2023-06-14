import React from 'react'
import { expect, it } from 'vitest'
import { render, renderHook } from '@testing-library/react'
import { patchConsoleError } from './patch-console-error'

function itThrowsContextErrorForComponent<P>({
  Component,
  requiredProps,
  errorMessage,
}: {
  Component: React.ComponentType<P>
  requiredProps: P
  errorMessage: string
}) {
  it('throws error when rendered outside of context', async () => {
    patchConsoleError()
    // eslint-disable-next-line react/jsx-props-no-spreading
    expect(() => render(<Component {...requiredProps} />)).toThrow(new Error(errorMessage))
    patchConsoleError.release()
  })
}

function itThrowsContextErrorForHook<T>({
  hook,
  errorMessage,
}: {
  hook: () => T
  errorMessage: string
}) {
  it('throws error when rendered outside of context', async () => {
    patchConsoleError()
    expect(() => renderHook(() => hook())).toThrow(new Error(errorMessage))
    patchConsoleError.release()
  })
}

export { itThrowsContextErrorForComponent, itThrowsContextErrorForHook }
