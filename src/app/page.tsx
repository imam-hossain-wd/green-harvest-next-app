import { homeBanner } from '@/utils/assets';
import { Button} from 'antd'
import Image from 'next/image';

const Home = () => {

  return (
    <div>
      <h1 className='text-red-500'>Hello Green Harvest....</h1>

      <Button type="primary">Primary Button</Button>

      <Image src={homeBanner.banner1} width={500} height={500} alt='home banner'/>
    </div>
  );
};

export default Home;