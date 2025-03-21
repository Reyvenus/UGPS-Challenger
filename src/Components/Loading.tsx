import { Spinner } from "react-bootstrap"


interface Props {
  isLoading: boolean
}

export const Loading: React.FC<Props> = ({ isLoading }) => {
  return (
    <div>
      {isLoading &&
        <>
          <Spinner
            animation='border'
            variant='primary'
          />
          <p>
            Loading...
          </p>
        </>
      }
    </div>
  )
}

