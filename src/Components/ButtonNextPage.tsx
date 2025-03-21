import React from 'react'


interface Props {
  page: number
  isLoading: boolean
  nextPage: (page: number) => void
  prevPage: (page: number) => void
}

export const ButtonNextPage: React.FC<Props> = ({ isLoading, nextPage, prevPage, page }) => {
  return (
    <div>
      <button
        className='btn btn-primary m-1'
        disabled={isLoading}
        onClick={() => prevPage(page - 1)}
        hidden={isLoading}
      >
        Anterior
      </button>
      <button
        className='btn btn-primary m-1'
        disabled={isLoading}
        hidden={isLoading}
        onClick={() => nextPage(page + 1)}
      >
        Siguiente
      </button>
    </div>
  )
}
