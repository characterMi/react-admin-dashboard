import { useParams } from 'react-router-dom'
import { Single } from '../../components'
import { productsStatistics } from '../../data/data'

const Product = () => {
  const { id }: any = useParams()
  return (
    <div className='product'>
      <Single {...productsStatistics[id - 1]} />
    </div>
  )
}

export default Product