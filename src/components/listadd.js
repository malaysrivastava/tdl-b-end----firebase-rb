import React, { useState, useEffect } from 'react';

const ListAdd = (props) => {
    const initialFieldValues = {
        eventname: '',
        date: '',
        desc: ''   
     }

    var [values, setValues] = useState(initialFieldValues)


    useEffect(() => {
        if (props.currentId === '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-university"></i>
                    </div>
                </div>
                <input className="form-control" name="eventname" placeholder="Event Name"
                    value={values.eventname}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-dropbox"></i>
                        </div>
                    </div>

                    <input type="date" className="form-control" name="date" placeholder="Date"
                        value={values.date}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-link"></i>
                        </div>
                    </div>
                    <input className="form-control" name="desc" placeholder="Description"
                        value={values.desc}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
           
            <div className="form-group">
                <input type="submit" value={props.currentId === "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>
        </form>
    );
}

export default ListAdd;