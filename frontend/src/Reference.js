import React from 'react'
import { isNa } from './Utils';;

function Reference(props) {

    return (
        <div className='relative my-auto ml-3  h-5/6 p-2.5 pb-4 rounded shadow-md w-2/3 bg-slate-100'>
            <form className='w-full'>
                <span className="text-xl mb-4 font-bold">Fill out address information</span>
                <br />
                <span className="text-md mb-4">Field values derived from your document using <a href="https://openai.com/blog/chatgpt/" className='text-blue-500' target="_blank">ChatGPT</a></span>
                <div class="grid md:grid-cols-2 mt-4 md:gap-6">
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

                <div class="grid md:grid-cols-4 md:gap-3">
                    <div class="relative col-span-2 z-0 w-full mb-6 group h-fit  pt-2">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Third party</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={isNa(props.data["components"]["thirdParty"]) ? props.data["components"]["thirdParty"] : "None"} disabled />
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
            </form>
        </div>
    );
};

export default Reference;