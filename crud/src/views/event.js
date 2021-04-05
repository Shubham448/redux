import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEvent, listEvents } from '../actions/event';

const EventList = () => {
    const [id, setId] = useState();
    const eventRecords = useSelector((state) => state.eventList);
    const { loading, events, error } = eventRecords;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listEvents());
    }, [dispatch]);
    const removeEvent = async id => {
        setId(id);
    };
    const deletedEvent = () => {
        dispatch(deleteEvent(id));
    };

    return (
        <div>
            { loading ? (
                <div> Loading... </div>
            ) : error ? (
                <div> {error} </div>
            ) : (
                        <div>
                            <Link to='/add'> <button className="btn btn-success float-right mt-2 mb-2">Add Event</button> </Link>
                            <table className="table table-bordered" >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Assosicated User</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                {events && events.length > 0 && events.map((item) => (
                                    <tbody key={item.id}>
                                        <tr>
                                            <td> {item.name} </td>
                                            <td> {item.description} </td>
                                            <td> {item.user.name} </td>
                                            <td>
                                                <Link to={(`/event/${item.id}`)}> Edit </Link> /
                                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => removeEvent(item.id)}> Delete </button>
                                            </td>
                                        </tr>
                                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLongTitle">Delete Event</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Are you sure want to delete this event ?
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal"> Close </button>
                                                        <button type="button" className="btn btn-primary" onClick={() => deletedEvent()}> Delete Event </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </tbody>
                                ))}

                            </table>

                        </div>
                    )

            }
        </div >
    )
};

export default EventList;