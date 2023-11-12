import { Link } from "react-router-dom";


const Banner = () => {
    const customBg = {

        backgroundImage: 'url("/src/assets/images/banner.jpeg")',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'


    }
    return (

        <div className="h-[50vh] mx-auto bg-blend-soft-light" style={customBg}>

            <div className="max-w-[1240px] mx-auto bg-white bg-opacity-70" data-aos="fade-up"
                data-aos-duration="1500"
            >

                <div className=" text-5xl font-thin text-[#a02013] px-10 py-10 rounded-b-sm">
                    <h1>we are <span className="font-bold">Expart</span></h1>
                    <h1>in pest control</h1>
                    <p className="text-lg mt-5">keep your places clean from bad organism</p>
                    <Link to="/services"><button className="bg-[#a02013] text-white text-lg px-2 py-1 rounded-sm">Explore Services</button></Link>
                </div>



            </div>

        </div>
    );
};

export default Banner;
