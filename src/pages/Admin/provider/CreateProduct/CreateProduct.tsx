import { ChangeEvent, PropsWithChildren, useCallback, useState } from 'react'
import { CreateProductContext } from 'pages/Admin/context'

export const CreateProductProvider = ({ children }: PropsWithChildren) => {
  return (
    <CreateProductContext.Provider value={{}}>
      {children}
    </CreateProductContext.Provider>
  )
}
