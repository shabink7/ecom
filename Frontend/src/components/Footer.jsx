import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex flex-col gap-14 my-10 mt-40 text-sm'>
      {/* Main Grid Layout */}
      <div className='sm:grid grid-cols-[3fr_1fr_1fr] gap-14'>
        {/* Column 1: Logo and Description */}
        <div>
          <img src={assets.real} className='mb-5 w-32' alt="Company Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur labore quod suscipit culpa accusamus.
          </p>
        </div>

        {/* Column 2: Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-451-512-114</li>
            <li>Contact@realmadrid.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div>
        <hr className='border-gray-300' />
        <p className='py-5 text-sm text-center'>
          Copyright 2024 @ realmadrid.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
