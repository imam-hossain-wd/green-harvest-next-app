import { Space, Spin } from 'antd';

const LoadingPage = () => {
    <div className="flex justify-center h-screen items-center">
    <Space size="middle">
    <div className='flex justify-center items-center'>
    <Spin size="large" />
    </div>
  </Space>
  </div>
};

export default LoadingPage;