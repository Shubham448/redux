import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addEvent } from '../actions/event';
import { listUsers } from '../actions/user';

const AddEvent = () => {
    let history = useHistory();
    const [event, setEvent] = useState();
    const createEvent = useSelector(state => {
        console.log(state)
        return (
            state.addEvent
        )
    });
    const userRecords = useSelector((state) => state.userList);
    const { users } = userRecords;
    console.log(userRecords)
    const { loading, success, error } = createEvent;
    const handleChange = e => {
        console.log({ ...event, [e.target.name]: e.target.value })
        setEvent({ ...event, [e.target.name]: e.target.value });
    };
    console.log(success)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listUsers());
        if (success) {
            history.push('/')
        };
    }, [success, history]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addEvent(event));
    };

    return (
        <div>
            { loading ? (
                <div> Loading... </div>
            ) : error ? (
                <div> {error} </div>
            ) : (
                        <form onSubmit={e => submitHandler(e)}>
                            <div className="form-group">
                                <label htmlFor="name" className='mt-2'>Name</label>
                                <input type="text" className="form-control" id="name" name="name" onChange={e => handleChange(e)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="form-control" id="description" name="description" onChange={e => handleChange(e)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor='userId'>Assosicated User:</label>
                                <select onChange={e => handleChange(e)} className="form-control" name='userId' >
                                    
                                <option> Please Select </option>
                                    {
                                        users.map((item) => {
                                            return (
                                                <option key={item.id} value={item.id} > {item.name} </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <Link to='/'> <button type="submit" className="btn btn-primary">Back</button> </Link>
                            <button type="submit" className="btn btn-primary float-right">Add Event</button>
                        </form>
                    )}
        </div>
    )
};

export default AddEvent;