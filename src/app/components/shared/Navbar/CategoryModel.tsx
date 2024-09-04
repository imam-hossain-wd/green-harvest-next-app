import { useState } from 'react';
import {  Modal } from 'antd';
import {
  SendOutlined
} from "@ant-design/icons";
import Button from '../../ui/button/Button';
import Link from 'next/link';

const CategoryModel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFirstCategory, setShowFirstCategory] = useState(true);
  const [showSecondCategory, setShowSecondCategory] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLinkClick = () => {
    setIsModalOpen(false);
  };

  const handleSliderChanger = ()=> {
    setShowFirstCategory(!showFirstCategory);
    setShowSecondCategory(!showSecondCategory)
  }


  return (
    <>
      <Button className='' onClick={showModal} >
      Select Category
      </Button>
      
      
      <Modal className='w-[90%] -mt-5' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
       footer={null} 
      >
   
      {showFirstCategory && <div className='grid lg:hidden grid-cols-2 mt-2'>
       <div className="w-44 p-2 -mt-3 flex flex-col gap-1">
                <h4
                  className="pb-2 mb-1"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Fruits & vagetable
                </h4>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Fresh Fruits
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black no-underline hover:text-primary"
                  href="/"
                >
                  Fresh Vegatables
                </Link>
              </div>

              <div className="w-44 p-2 -mt-3 flex flex-col gap-1 ">
                <h4
                  className="pb-2 mb-1"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Meat & Fish
                </h4>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Frozen Fish
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Meat
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Dried Fish
                </Link>
              </div>

              <div className="w-44 p-2 -mt-2 flex flex-col gap-1 ">
                <h4
                  className="pb-2 mb-1"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Cooking
                </h4>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Spices
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Salt Sugar
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Rice
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Dal or Lantil
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Ready Mix
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Oil
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Ghee
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Shemai & Suji
                </Link>
              </div>

              <div className="w-44 p-2 -mt-2 flex flex-col gap-1 ">
                <h4 className="pb-2 mb-1" style={{borderBottom:"2px dotted #84C225"}}>Bevarages</h4>
                  <Link onClick={() => handleLinkClick()} className="text-black tree-product hover:text-primary no-underline" href="/">Tree</Link>
                  <Link onClick={() => handleLinkClick()} className="text-black hover:text-primary no-underline" href="/">Coffee</Link>
                  <Link onClick={() => handleLinkClick()} className="text-black hover:text-primary no-underline" href="/">Soft Drinks</Link>
                  <Link onClick={() => handleLinkClick()} className="text-black hover:text-primary no-underline" href="/">Powder Drinks</Link>
                </div> 
                <div className="w-44  tree-product-items p-5 -mt-3 flex-col gap-2 ">
                <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}>Bevarages</h4>
                  <Link className="text-black hover:text-primary no-underline" href="/">Tree</Link>
                  <Link className="text-black hover:text-primary no-underline" href="/">Coffee</Link>
                  <Link className="text-black hover:text-primary no-underline" href="/">Soft Drinks</Link>
                  <Link className="text-black hover:text-primary no-underline" href="/">Powder Drinks</Link>
                </div>
               <Button  onClick={handleSliderChanger} className="flex h-7 w-36 justify-center items-center text-xs " >
               <SendOutlined />
               </Button>
                 
       </div>

       }

       {showSecondCategory && <div className='grid lg:hidden grid-cols-2 mt-2'>
       <div className="w-44 p-2 -mt-3 flex flex-col gap-1">
                <h4
                  className="pb-2 mb-1"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Home cleaning
                </h4>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Fresh Fruits
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black no-underline hover:text-primary"
                  href="/"
                >
                  Fresh Vegatables
                </Link>
              </div>

              <div className="w-44 p-2 -mt-3 flex flex-col gap-1 ">
                <h4
                  className="pb-2 mb-1"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Health Product
                </h4>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Baby Care
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Meat
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Dried Fish
                </Link>
              </div>

              <div className="w-44 p-2 -mt-2 flex flex-col gap-1 ">
                <h4
                  className="pb-2 mb-1"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Kitchen Appliances
                </h4>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Spices
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Salt Sugar
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Rice
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Dal or Lantil
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Ready Mix
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Oil
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Ghee
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  href="/"
                >
                  Shemai & Suji
                </Link>
              </div>

              <div className="w-44 p-2 -mt-2 flex flex-col gap-1 ">
                <h4 className="pb-2 mb-1" style={{borderBottom:"2px dotted #84C225"}}>Baby Care</h4>
                  <Link onClick={() => handleLinkClick()} className="text-black tree-product hover:text-primary no-underline" href="/">Tree</Link>
                  <Link onClick={() => handleLinkClick()} className="text-black hover:text-primary no-underline" href="/">Coffee</Link>
                  <Link onClick={() => handleLinkClick()} className="text-black hover:text-primary no-underline" href="/">Soft Drinks</Link>
                  <Link onClick={() => handleLinkClick()} className="text-black hover:text-primary no-underline" href="/">Powder Drinks</Link>
                </div> 
                <div className="w-44  tree-product-items p-5 -mt-3 flex-col gap-2 ">
                <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}>Bevarages</h4>
                  <Link className="text-black hover:text-primary no-underline" href="/">Tree</Link>
                  <Link className="text-black hover:text-primary no-underline" href="/">Coffee</Link>
                  <Link className="text-black hover:text-primary no-underline" href="/">Soft Drinks</Link>
                  <Link className="text-black hover:text-primary no-underline" href="/">Powder Drinks</Link>
                </div>
               <Link className="no-underline ml-28" href="/category">
               <Button onClick={handleSliderChanger} className="flex h-7 w-36 justify-center items-center text-xs " >
               Previous Category ${<SendOutlined />}
               </Button>
            
               </Link>
       </div>
       } 
      </Modal>
    </>
  );
};

export default CategoryModel;