import { useParams } from 'react-router-dom'
import { productsStatistics } from '../../data/data'
import Single from '../../components/Single/Single'

const Product = () => {
  const { id }: any = useParams()
  return (
    <div className='product'>
      <Single {...productsStatistics[id - 1]} />
    </div>
  )
}

export default Product