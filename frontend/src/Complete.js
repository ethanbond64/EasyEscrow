import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';

function Complete(props) {

    const [data, setData] = useState(null);
    const [completed, setCompleted] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8000/reference/' + id);

            if (response.status === 200) {
                setCompleted(response.data["reference"]["finished"]);
                setLoading(false);
                console.log(response);
            }
        } catch (error) {
            setLoading(false);
            console.error('Error referencing escrow:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const complete = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8000/finish/' + id);

            if (response.status === 200 && response.data["success"]) {
                setCompleted(true);
                setLoading(false);
                console.log(response);
            }
        } catch (error) {
            setLoading(false);
            console.error('Error completing escrow:', error);
        }
    };


    if (loading) {
        return (
            <div className="relative m-auto flex h-screen">
                <Spinner />
            </div>
        )
    }

    return (
        <div className="relative m-auto flex h-screen">
            <div className='relative m-auto flex h-2/3 p-2.5 pb-4 rounded shadow-md w-1/3 bg-slate-100'>
                TODO Complete. State = {completed ? "Completed" : "Not Completed"}
                <button type="submit" onClick={complete} className="absolute bottom-0 right-0 py-2 px-3 mb-6 mr-6 rounded text-center text-white bg-indigo-500 cursor-pointer hover:bg-indigo-400 focus:bg-indigo-600" >Complete</button>
            </div>
        </div>
    );
};

export default Complete;