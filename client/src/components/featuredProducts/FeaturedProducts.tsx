import { useFetch } from '../../hooks/useFetch';
import Card from '../card/Card';
import './FeaturedProducts.scss';

interface FeaturedProps {
  type: string;
}

function FeaturedProducts({ type }: FeaturedProps) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h2>{type} products</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          atque veritatis sit. Ea, omnis soluta in unde inventore earum porro!
          Itaque, eum obcaecati eligendi id porro, quam, error voluptates
          officiis blanditiis quidem vero molestias placeat? Cumque aliquam
          magni voluptas ab.
        </p>
      </div>
      <div className="bottom">
        {error
          ? 'Deu ruim em algo...'
          : loading
          ? 'carregando dados'
          : data.map((item, index) => <Card item={item} key={index} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;
