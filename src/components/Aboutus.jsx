

const Aboutus = () => {
    return (
        <div className="px-4">
            <div className="max-w-[1220px] mx-auto border-l-8 border-[#a02013] mb-6 " data-aos="zoom-in-right">
                <h1 className="ml-4 text-3xl font-bold"> About Us</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-[1220px] mx-auto">

                <div className="w-full md:w-[50%]">
                    <p className="text-gray-600">Pest Solution is the leading provider of pest control in Bangladesh. Pest Solution was founded in 2003 with the objective to meet the need for professional pest control services in this country.

                        We are specialized in exterminating a variety of termites and insects including bed bugs, cockroaches, rodents and other pests. We are focused on high standards and affordability of customer service without sacrificing quality in pest services.</p> <br />
                        <p className="text-right font-semibold hidden lg:block">
                            Address: <br />
                            House 62/11 <br />
                            Road No. #2 <br />
                            Baridhara #J Block <br />
                            Dhaka-1212.



                        </p>

                </div>

                <div data-aos="zoom-in-right">
                    <img className="rounded-sm" src="/src/assets/images/about1.jpg" alt="" />

                </div>




            </div>

        </div>
    );
};

export default Aboutus;