import React, { useState } from 'react';

function CreateEscrow(props) {

    return (
        <div className='relative mx-auto w-5/6 flex justify-center'>
            <div className='relative my-auto mr-3 h-5/6 p-2.5 pb-4 rounded shadow-md w-1/3 bg-slate-100'>

            </div>
            <div className='relative my-auto ml-3  h-5/6 p-2.5 pb-4 rounded shadow-md w-2/3 bg-slate-100'>
                <form className='w-full'>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group h-fit p-4 pt-2 rounded-lg bg-slate-300">
                            <span className="text-xl font-semibold">Sender: &nbsp; {props.data["components"]["sender"]}</span>
                            <label for="seed" class="block mb-2 text-sm font-medium">Sender seed</label>
                            <input type="text" id="seed" class="bg-gray-50 border border-gray-300 text-gray-900 mb-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="XXXXXXXXXXXXXXXXXXXX" required />
                            <label for="sequence" class="block mb-2 text-sm font-medium">Sender sequence</label>
                            <input type="text" id="sequence" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="3210123" required />
                        </div>
                        <div class="relative z-0 w-full mb-6 group h-fit p-4 pt-2 rounded-lg bg-slate-300">
                            <span className="text-xl font-semibold">Reciever: &nbsp; {props.data["components"]["reciever"]}</span>
                            <label for="rec_addr" class="block mb-2 text-sm font-medium">Reciever address</label>
                            <input type="text" id="rec_addr" class="bg-gray-50 border border-gray-300 text-gray-900 mb-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="rXXXXXXXXXXXXXXXXXXXX" required />
                        </div>
                    </div>
                    <button type="submit" class="absolute bottom-0 right-0 py-2 px-3 mb-8 mr-10 rounded text-center text-white bg-indigo-500 cursor-pointer hover:bg-indigo-400 focus:bg-indigo-600" >Upload</button>

                    {JSON.stringify(props.data)}
                </form>
            </div>
        </div>
    );
};

export default CreateEscrow;