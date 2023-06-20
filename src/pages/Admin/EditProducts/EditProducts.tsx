import { useParams } from 'react-router-dom'

type Props = {}

function EditProducts(props: Props) {
  const { editID } = useParams()

  return <div>EditProducts : {editID}</div>
}

export default EditProducts
