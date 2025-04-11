import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () =>{
    return (
        <footer className="relative text-white quicksand">
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/da5crwlqh/image/upload/v1718627166/WhatsApp_Image_2024-06-14_at_20.01.25_d11dac9f_oev1cd.jpg')] bg-cover bg-no-repeat bg-center before:absolute before:inset-0 before:bg-[#636363aa] before:content-['']"></div>
            <div className="relative z-10 flex flex-col justify-around p-12 lg:py-12  lg:flex-row">
                    <div className="my-8 lg:mx-3 ">
                        <h1 className="pb-2 font-bold text-4xl">Khoj</h1>
                    <ul className="space-y-1 text-sm ">
                            <li>Business Hours: 10 AM to 7 PM IST</li>
                        <li className="hover:text-[#6d567b]"><Link to="https://maps.app.goo.gl/k681xW5EfyhkUBpEA">12, Shaurya Avenue, Near city civic centre, Vasna - Ahmedabad 380007</Link></li>
                        <li className="hover:text-[#6d567b]"><Link to="tel:+918320968029"><span className="font-bold">Phone : </span> +91 8320968029 </Link></li>
                        <li className="hover:text-[#6d567b]"><Link to="mailto: khojbyys@gmail.com"><span className="font-bold">Email</span> : khojbyys@gmail.com</Link></li>
                        {/* <li className="mt-5"><Link to={''}><span className="border rounded-md p-3 "><InstagramIcon ></InstagramIcon></span></Link></li> */}
                        </ul>
                        {/* <span>icons</span> */}
                    </div>
                <div className="my-8 lg:mx-3 text-md">
                        <h4 className="font-semibold">Useful Links</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li className="hover:text-[#6d567b]" ><Link to="/">Home</Link></li>
                            <li className="hover:text-[#6d567b]" ><Link to="/">About Us</Link></li>
                            <li className="hover:text-[#6d567b]" ><Link to="/process">Process</Link></li>
                            <li className="hover:text-[#6d567b]" ><Link to="/shipping">Shipping & Return policy</Link></li>
                        </ul>
                    </div>
                <div className="my-8 lg:mx-3 text-md">
                        <h4 className="font-semibold">Our Products</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                            <li className="hover:text-[#6d567b]" ><Link to="/wearables">Wearables</Link></li>
                            <li className="hover:text-[#6d567b]" ><Link to="/homeware">HomeWare</Link></li>
                            <li className="hover:text-[#6d567b]" ><Link to="/accessories">Accessories</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mx-auto relative z-10 w-[90%] border-[#adadad] border-t-[1px] text-center py-8">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">Khoj</strong> <span>All Rights Reserved</span></p>
                </div>
            </footer>
    )
};

export default Footer;