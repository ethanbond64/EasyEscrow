import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';

function Validate(props) {

    // const [data, setData] = useState(null);
    const [validated, setValidated] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8000/reference/' + id);

            if (response.status === 200) {
                setValidated(response.data["reference"]["fulfilled"]);
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

    const validate = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8000/validate/' + id);

            if (response.status === 200 && response.data["success"]) {
                setValidated(true);
                setLoading(false);
                console.log(response);
            }
        } catch (error) {
            setLoading(false);
            console.error('Error validating escrow:', error);
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
                TODO Validate. State = {validated ? "Validated" : "Not validated"}
                <button type="submit" onClick={validate} className="absolute bottom-0 right-0 py-2 px-3 mb-6 mr-6 rounded text-center text-white bg-indigo-500 cursor-pointer hover:bg-indigo-400 focus:bg-indigo-600" >Validate</button>
            </div>
        </div>
    );
};

export default Validate;