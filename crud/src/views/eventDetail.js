import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { editEvent, eventDetail } from '../actions/event';
import { listUsers } from '../actions/user';

const EventDetail = () => {
    const { id } = useParams();
    const [updateEvent, setEvent] = useState();
    const EventRecord = useSelector((state) => state.eventDetail);
    const { loading, event, error } = EventRecord;
    const userRecords = useSelector((state) => {
        console.log(state)
        return (
            state.userList
        )
    });
    const { users } = userRecords;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(eventDetail(id));
        dispatch(listUsers());
    }, [id, dispatch]);
    const handleChange = e => {
        console.log({ ...updateEvent, [e.target.name]: e.target.value });
        setEvent({ ...updateEvent, [e.target.name]: e.target.value });
    };
    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(editEvent(updateEvent, id))
    };

    return (
        <div>
            {
                loading ? (
                    <div> Loading... </div>
                ) : error ? (
                    <div> {error} </div>
                ) : (
                            <form onSubmit={e => handleSubmit(e)} >
                                <div className="form-group">
                                    <label htmlFor="name" className='mt-2'>Name</label>
                                    <input type="text" className="form-control" id="name" name="name" defaultValue={event.name || ''} onChange={e => handleChange(e)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" className="form-control" id="description" name="description" defaultValue={event.description || ''} onChange={e => handleChange(e)} />
                                </div>
                                <div className="form-group">
                                <label htmlFor='userId'>Assosicated User:</label>
                                <select select={event.userId} defaultChecked={event.userId} defaultValue={event.userId} onChange={e => handleChange(e)} className="form-control" name='userId' id='userId' >
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
                                <button type="submit" className="btn btn-primary float-right">Update Event</button>
                            </form>
                        )
            }
        </div>
    )
};

export default EventDetail;