import React, { useState } from 'react';
import axios from 'axios';

function CreateEscrow(props) {

    const [seed, setSeed] = useState(null);
    const [sequence, setSequence] = useState(null);
    const [recAddr, setRecAddr] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        let body = {
            "seed": seed,
            "sequence": sequence,
            "rec_addr": recAddr,
            "components": props.data["components"]
        };

        try {

            const response = await axios.post('http://localhost:8000/escrow', body, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log('Escrow created successfully');
                // setResponseJson(response.data);
                console.log(response);
                // setFile(null);
            }
        } catch (error) {
            console.error('Error creating escrow:', error);
        }
    };


    return (
        <div className='relative mx-auto w-5/6 flex justify-center'>
            {/* <div className='relative my-auto mr-3 h-5/6 p-2.5 pb-4 rounded shadow-md w-1/3 bg-slate-100'>

            </div> */}
            <div className='relative my-auto ml-3  h-5/6 p-2.5 pb-4 rounded shadow-md w-2/3 bg-slate-100'>
                <form className='w-full' onSubmit={handleSubmit}>
                    <span className="text-xl mb-4 font-bold">Fill out address information</span>
                    <br />
                    <span className="text-md mb-4">Field values derived from your document using <a href="https://openai.com/blog/chatgpt/" target="_blank">ChatGPT</a></span>
                    <div class="grid md:grid-cols-2 mt-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group h-fit p-4 pt-2 rounded-lg bg-slate-300">
                            <span className="text-xl font-semibold">Sender: &nbsp; {props.data["components"]["sender"]}</span>
                            <label for="seed" class="block mb-2 text-sm font-medium">Sender seed</label>
                            <input onChange={(e) => setSeed(e.target.value)} type="text" id="seed" class="bg-gray-50 border border-gray-300 text-gray-900 mb-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="XXXXXXXXXXXXXXXXXXXX" required />
                            <label for="sequence" class="block mb-2 text-sm font-medium">Sender sequence</label>
                            <input onChange={(e) => setSequence(e.target.value)} type="text" id="sequence" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="3210123" required />
                        </div>
                        <div class="relative z-0 w-full mb-6 group h-fit p-4 pt-2 rounded-lg bg-slate-300">
                            <span className="text-xl font-semibold">Reciever: &nbsp; {props.data["components"]["reciever"]}</span>
                            <label for="rec_addr" class="block mb-2 text-sm font-medium">Reciever address</label>
                            <input onChange={(e) => setRecAddr(e.target.value)} type="text" id="rec_addr" class="bg-gray-50 border border-gray-300 text-gray-900 mb-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="rXXXXXXXXXXXXXXXXXXXX" required />
                        </div>
                    </div>

                    <div class="grid md:grid-cols-4 md:gap-3">
                        <div class="relative col-span-2 z-0 w-full mb-6 group h-fit  pt-2">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Third party</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={props.data["components"]["thirdParty"] ? props.data["components"]["thirdParty"] : "None"} disabled />
                        </div>
                        <div class="relative z-0 w-full mb-6 group h-fit pt-2">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Amount (USD)</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={`$${props.data["components"]["amount"]}`} disabled />
                        </div>
                        <div class="relative z-0 w-full mb-6 group h-fit pt-2">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Expiration date</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={props.data["components"]["expiration"]} disabled />
                        </div>
                    </div>

                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Escrow condition</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border mb-5 border-gray-300 focus:ring-blue-500 focus:border-blue-500" disabled value={props.data["components"]["condition"]}></textarea>

                    <button type="submit" class="absolute bottom-0 right-0 py-2 px-3 mb-8 mr-10 rounded text-center text-white bg-indigo-500 cursor-pointer hover:bg-indigo-400 focus:bg-indigo-600" >Upload</button>

                </form>
            </div>
        </div>
    );
};

export default CreateEscrow;