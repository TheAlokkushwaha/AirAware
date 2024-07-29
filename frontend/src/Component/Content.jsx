import React from 'react';

const Content = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6 ">
            <div className="max-w-7xl bg-white rounded-lg overflow-hidden flex flex-col lg:flex-row mt-28 lg:mt-0 shadow-lg">
                <div className="w-full lg:w-2/3 p-6 lg:p-20">
                    <h2 className="text-sm text-gray-500 uppercase">Welcome to Indigo</h2>
                    <h1 className="mt-2 text-2xl lg:text-4xl font-extrabold text-gray-900">
                        We are the best in real-time flight updates
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Stay informed with real-time updates on flight status, including delays,
                        cancellations, and gate changes. Our service provides accurate, timely information,
                        helping you efficiently manage travel plans and avoid unexpected surprises during
                        your journey. Stay up-to-date effortlessly.
                    </p>
                    <button className="mt-6 px-5 py-3 bg-orange-500 text-white font-medium rounded-full">
                        About Us
                    </button>
                </div>
                <div className="w-full lg:w-1/3">
                    <img
                        className="object-cover w-full h-64 lg:h-full"
                        src="https://templatekit.tokomoo.com/aviationkit/wp-content/uploads/sites/106/2022/09/image-home-1.jpg"
                        alt="Aviation School"
                    />
                </div>
            </div>
        </div>
    );
};

export default Content;
