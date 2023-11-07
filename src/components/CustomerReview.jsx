import StarReview from "./StarReview";


const CustomerReview = () => {
    return (
        <div className="px-4">
            <div className="max-w-[1220px] mx-auto border-l-8 border-[#a02013] mb-10" data-aos="zoom-in-right">
                <h1 className="ml-4 text-3xl font-bold">People Review Us</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1220px] mx-auto mb-8 md:mb-12 gap-6">
                <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border-2 border-[#a02013] rounded-md shadow-gray-400 shadow-md w-[80%] mx-auto" data-aos="zoom-out-up">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <div className="flex justify-center">
                            <StarReview></StarReview>
                        </div>
                        <p className="my-4 font-bold">Their service is awesome</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Rabeya Akter</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">from Baridhara,Dhaka</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border-2 border-[#a02013] rounded-md shadow-gray-400 shadow-md w-[80%] mx-auto" data-aos="zoom-out-up">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <div className="flex justify-center">
                            <StarReview></StarReview>
                        </div>
                        <p className="my-4 font-bold">Their service is awesome</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Soniya Begum</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">from Gulshan,Dhaka</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border-2 border-[#a02013] rounded-md shadow-gray-400 shadow-md w-[80%] mx-auto" data-aos="zoom-out-up">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <div className="flex justify-center">
                            <StarReview></StarReview>
                        </div>
                        <p className="my-4 font-bold">Their service is awesome</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Animesh Roy</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">from Mirpur,Dhaka</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border-2 border-[#a02013] rounded-md shadow-gray-400 shadow-md w-[80%] mx-auto" data-aos="zoom-out-up">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <div className="flex justify-center">
                            <StarReview></StarReview>
                        </div>
                        <p className="my-4 font-bold">Their service is awesome</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Runa Layla</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">from Dhanmondi,Dhaka</div>
                        </div>
                    </figcaption>
                </figure>

            </div>




        </div>
    );
};

export default CustomerReview;
