'use client'
import { Button, Drawer, Dropdown } from "antd";
import { useState } from "react";
import {
  CloseOutlined,
  LoginOutlined,
  MenuOutlined,
  UserOutlined,
  SendOutlined,
  PhoneOutlined,
  MailOutlined,
  TwitterOutlined,WhatsAppOutlined ,FacebookFilled ,LinkedinFilled
} from "@ant-design/icons";
import './style.css'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { logo } from "@/utils/assets";
import Image from "next/image";




const Navbar = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
//   const accessToken = useAppSelector(selectAccessToken);
//   const { role } = getUserInfo() as any;

const role = 'user'
  const pathname = usePathname();
  const [showFirstCategory, setShowFirstCategory] = useState(true);
  const [showSecondCategory, setShowSecondCategory] = useState(false);
  
  const handleSliderChanger = ()=> {
    setShowFirstCategory(!showFirstCategory);
    setShowSecondCategory(!showSecondCategory)
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const accountItems = [
    {
      key: "1",
      label: (
        <div>
          <div className="flex flex-col">
            <Button type="text">
              <Link href={`/dashboard/${role}/account`}> Account</Link>
            </Button>
            <Button type="text">
              <Link href="/dashboard"> Dashboard</Link>
            </Button>
            <Button
            //   onClick={() => {
            //     removeUserInfo(authKey);
            //     dispatch(clearAccessToken());
            //   }}
              danger
              type="text"
            >
              Log out
            </Button>
          </div>
        </div>
      ),
    },
  ];

 const closedButton = (
  <div className="flex justify-between">
    {/* <CategoryModel /> */}

    <Button
      onClick={() => setOpen(!open)}
      className="lg:hidden text-xl h-8 w-8 rounded-full flex justify-center items-center mr-3"
    >
      <CloseOutlined />
    </Button>
        

        </div>
  );

  const navMenuItems = (
    <li className="list-none flex flex-col justify-center items-center lg:flex-row">
      <Link
      style={{borderBottom:'1px solid gray'}}
        className={`${
          location.pathname === "/" ? "text-primary" : ""
        } text-black hover:text-primary text-base mt-2 w-full text-center lg:mt-0 lg:mr-3 no-underline`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${
          location.pathname === "/product" ? "text-primary" : ""
        } text-black hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline`}
        href="/product"
      >
        Product
      </Link>
      <Link
        className={`${
          location.pathname === "/contact-us" ? "text-primary" : ""
        } text-black hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline`}
        href="/contact-us"
      >
        Contact us
      </Link>
      <Link
        className={`${
          location.pathname === "/about" ? "text-primary" : ""
        } text-black hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline`}
        href="/about"
      >
        About us
      </Link>


      <div className="relative group ">
        <div className="group w-full">
          <Link 
            className={`${
              location.pathname === "/category" ? "text-primary" : ""
            } text-black hover:text-primary text-base mt-2 lg:mt-0 lg:mr-3 no-underline hidden lg:block`}
            href="/category"
          >
            Category
          </Link>

          <div
            className="absolute h-[500px] hidden delay-700  transition-all space-y-2 text-gray-800 rounded-md shadow-md z-20 group-hover:block"
            style={{ transitionDuration: "30s",transitionDelay:"1s"}}
          >
            <div className="w-[300px] lg:w-[800px] text-[15px]  -ml-20 lg:-ml-[400px] mt-6 shadow-2xl bg-white z-10 p-5 category-parent group-hover:flex flex-wrap justify-around ">

             {
              showFirstCategory &&  <div className="grid grid-cols-4">
                <div className="w-44 p-5 -mt-3 flex flex-col gap-2">
                <h4
                  className="pb-2"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Fruits & vagetable
                </h4>
                <Link
                  className="text-black hover:text-primary no-underline"
                  href="/category/fruit-vegetable/fruit"
                >
                  Fresh Fruits
                </Link>
                <Link
                  className="text-black no-underline hover:text-primary"
                  href="/category/fruit-vegetable/vegetable"
                >
                  Fresh Vegatables
                </Link>
              </div>

              <div className="w-44 p-5 -mt-3 flex flex-col gap-2 ">
                <h4
                  className="pb-2"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Meat & Fish
                </h4>
                <Link
                  className="text-black hover:text-primary no-underline"
                  href="/category/meat-fish/fish"
                >
                  Frozen Fish
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  href="/category/meat-fish/meat"
                >
                  Meat
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  href="/category/meat-fish/dried-fish"
                >
                  Dried Fish
                </Link>
              </div>

              <div className="w-44 p-5 -mt-3 flex flex-col gap-2 ">
                <h4
                  className="pb-2 "
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Cooking
                </h4>
                <Link
                  className="text-black hover:text-primary no-underline"
                  href="/category/cooking/spices"
                >
                  Spices
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  href="/category/cooking/salt-sugar"
                >
                  Salt Sugar
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  href="/category/cooking/rice"
                >
                  Rice
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  href="/category/cooking/dal-lentil"
                >
                  Dal or Lantil
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  href="/category/cooking/ready-mix"
                >
                  Ready Mix
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  href="/category/cooking/oil"
                >
                  Oil
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  href="/category/cooking/ghee"
                >
                  Ghee
                </Link>
                <Link
                  className="text-black hover:text-primary no-underline"
                  href="/category/cooking/shemai-suji"
                >
                  Shemai & Suji
                </Link>
              </div>

              <div className="w-44 p-5 -mt-3 flex flex-col gap-2 ">
                <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}>Bevarages</h4>
                  <Link className="text-black tree-product hover:text-primary no-underline" href="/category/beverages/tea">Tea</Link>
                  <Link className="text-black hover:text-primary no-underline" href="/category/beverages/coffee">Coffee</Link>
                  <Link className="text-black hover:text-primary no-underline" href="/category/beverages/soft-drink">Soft Drinks</Link>
                  <Link className="text-black hover:text-primary no-underline" href="/category/beverages/powder-syrup">Powder Drinks</Link>
                </div> 

               <Button onClick={handleSliderChanger} className="flex ml-[600px] h-8 w-32 justify-center items-center text-xs ">
                  More Category <SendOutlined />
                  </Button>

              </div>

             }

             {
              showSecondCategory &&  <div className="grid grid-cols-4">
              <div className="w-44 p-5 -mt-3 flex flex-col gap-2">
              <h4
                className="pb-2"
                style={{ borderBottom: "2px dotted #84C225" }}
              >
                Health Product
              </h4>
              <Link
                className="text-black hover:text-primary no-underline"
                href="/category/health-product/antiseptics"
              >
                Antiseptics
              </Link>
              <Link
                className="text-black no-underline hover:text-primary"
                href="/category/health-product/handwash-handrub"
              >
               Handwash Handrub
              </Link>
              <Link
                className="text-black no-underline hover:text-primary"
                href="/category/health-product/food-supplements"
              >
               Food Supplements
              </Link>
              <Link
                className="text-black no-underline hover:text-primary"
                href="/category/health-product/herbal-digestive-aids"
              >
               Herbal Digestive Aids
              </Link>
            </div>

            <div className="w-44 p-5 -mt-3 flex flex-col gap-2 ">
              <h4
                className="pb-2"
                style={{ borderBottom: "2px dotted #84C225" }}
              >
                Home & Cleaning
              </h4>
              <Link
                className="text-black hover:text-primary no-underline"
                href="/category/home-cleaning/dish-wash"
              >
                Dishwashing Supplies
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                href="/category/home-cleaning/laundry"
              >
                Laundry
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                href="/category/home-cleaning/cleaning-accessories"
              >
                Cleaning Accessories
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                href="/category/home-cleaning/floor-Glass-cleaner"
              >
                Floor & Glass Cleaner
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                href="/category/home-cleaning/toilet-cleaners"
              >
                Toilet Cleaners
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                href="/category/home-cleaning/trash-bin-basket"
              >
                Trash Bin Basket
              </Link>
            </div>

            <div className="w-44 p-5 -mt-3 flex flex-col gap-2 ">
              <h4
                className="pb-2 "
                style={{ borderBottom: "2px dotted #84C225" }}
              >
                Baby Care
              </h4>
              <Link
                className="text-black hover:text-primary no-underline"
                href="/category/baby-care/diapers"
              >
                Diapers
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                href="/category/baby-care/food"
              >
                Food
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                href="/category/baby-care/baby-skincare"
              >
                Baby Skincare
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                href="/category/baby-care/baby-accessories"
              >
                Baby Accessories
              </Link>
              <Link
                className="text-black hover:text-primary no-underline"
                href="/category/baby-care/wipes"
              >
                Wipes
              </Link>
             
            </div>

            <div className="w-48 p-5 -mt-3 flex flex-col gap-2 ">
              <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}>Kitchen Appliances</h4>
                <Link className="text-black tree-product hover:text-primary no-underline" href="/">Tree</Link>
                <Link className="text-black hover:text-primary no-underline" href="/">Coffee</Link>
                <Link className="text-black hover:text-primary no-underline" href="/">Soft Drinks</Link>
                <Link className="text-black hover:text-primary no-underline" href="/">Powder Drinks</Link>
              </div> 

            <div className="w-44  tree-product-items p-5 -mt-3 flex-col gap-2 ">
              <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}></h4>
                <Link className="text-black hover:text-primary no-underline" href="/">Tree</Link>
                <Link className="text-black hover:text-primary no-underline" href="/">Coffee</Link>
                <Link className="text-black hover:text-primary no-underline" href="/">Soft Drinks</Link>
                <Link className="text-black hover:text-primary no-underline" href="/">Powder Drinks</Link>
              </div>
             <Button onClick={handleSliderChanger} className="flex ml-[600px] h-8 w-32 justify-center items-center text-xs ">
                Previous Category <SendOutlined />
                </Button>
       
            </div>
             }

            </div>
          </div>
        </div>
      </div>
    </li>
  );


  return (
    <div className="relative z-50 h-40 lg:mb-0  w-full overflow-hidden">
   
      <header className="fixed top-0 left-0 right-0  bg-white shadow-md mb-2 ">
     <div className="flex flex-col lg:flex-row  lg:justify-between bg-primary">
     <div className="flex items-center text-sm p-[6px] text-white ">
      <p className="ml-5"><span><PhoneOutlined /></span> 01624243747</p> <p className="ml-3"> <span><MailOutlined className="mr-2"/></span>imamhossain6t9@gmail.com</p>
      </div>

      <div className="flex ml-5 mb-1 lg:mt-0 text-lg w-28 items-center justify-around mr-24">
          <Link
            href="https://twitter.com/imam_hossain_wd"
            className="hover:text-black transition ease-in-out delay-150 text-white  duration-300"
          >
            <TwitterOutlined /> 
          </Link>
          <Link 
            href="https://www.linkedin.com/in/imam-hossain-web-dev/"
            className="transition ease-in-out delay-150 hover:text-black text-white duration-300"
          >
            <LinkedinFilled />
          </Link>
          <Link
            href="https://www.linkedin.com/in/imam-hossain-web-dev/"
            className="transition ease-in-out delay-150 hover:text-black text-white duration-300"
          >
            <WhatsAppOutlined />
          </Link>
          <Link
            href="https://www.linkedin.com/in/imam-hossain-web-dev/"
            className="transition ease-in-out delay-150 hover:text-black text-white duration-300"
          >
            <FacebookFilled />
          </Link>

          
        </div>
     </div>
        <nav className="flex justify-between p-3 w-[90%] mx-auto">
          <div className="flex items-center">
            <Button
              onClick={showDrawer}
              className="lg:hidden text-2xl h-10 w-10 flex justify-center items-center -ml-4 mr-3 "
            >
              <MenuOutlined />
            </Button>

            <div className="lg:flex items-center hidden ">
              <Image width={20} height={20}
                className="w-14 h-12 rounded-full"
                src={logo.navlogo} alt="logo"
              />
              <div>
                <p className="text-[12px] md:text-sm uppercase font-bold ">Green Harvest</p>
                <p className="text-[11px] md:text-xs  mt-[2px] md:mt-1px text-primary font-bold">
                  Super Shop
                </p>
              </div>

              <ul className="hidden lg:flex ml-20">{navMenuItems}</ul>
            </div>
          </div>
          <div className="">
          {/* <div className={`${accessToken ? 'left-[65%] md:left-[70%] lg:left-[85%]' : 'left-[55%] mt-1 lg:left-[83%] md:left-[75%]'} p-4 rounded-md flex absolute top-12 md:top-15 lg:top-7 `}>
            <div className="mr-3 lg:ml-0">
              <CartDrawer />
            </div>

            {accessToken ? (
              <Dropdown menu={{ items: accountItems }} className="">
                <OutletButton className="text-xl h-10 w-10 rounded-full flex justify-center items-center">
                  <UserOutlined />
                </OutletButton>
              </Dropdown>
            ) : (
              <Link className="no-underline flex justify-center items-center" href="/login">
                <OutletButton className="w-24 h-10 flex justify-center items-center rounded-lg text-sm md:text-lg">
                  <LoginOutlined />
                  Login
                </OutletButton>
              </Link>
            )}
          </div> */}
          </div>
        </nav>
        <nav className="m-0 p-0 ">
          {/* navbar items drawer sm device */}
          <Drawer
            placement="left"
            title={closedButton}
            open={open}
            closable={false}
          >
            {navMenuItems}
          </Drawer>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
