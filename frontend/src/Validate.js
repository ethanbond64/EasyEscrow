import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';

function Validate(props) {

    const [data, setData] = useState(null);
    const [validated, setValidated] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    return (
        <div className="relative m-auto flex h-screen">
            <div className='relative m-auto flex h-2/3 p-2.5 pb-4 rounded shadow-md w-1/3 bg-slate-100'>
                TODO Validate
            </div>
        </div>
    );
};

export default Validate;