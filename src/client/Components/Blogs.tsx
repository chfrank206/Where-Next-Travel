import * as React from 'react';
import { json } from '../utils/api';
import { useState, useEffect } from 'react';
// import BlogCard from './BlogCard';
import Calendar from 'react-calendar';
import { RouteComponentProps } from 'react-router';
import { User } from '../utils/api';

export interface IBlogsProps extends RouteComponentProps {
    id: number,
    name: string,
    content: string,
    _created: Date
}

const Blogs: React.SFC<IBlogsProps> = props => {

    const [blogs, setBlogs] = useState<IBlogsProps[]>([]);
    const [content, setContent] = useState('');
    const [dateOfEvent, SetDateOfEvent] = useState(new Date());
    const [name, setName] = useState('');

    const getBlogs = async () => {
        let r = await fetch('/api/blogs');
        let blogs = await r.json();
        setBlogs(blogs)
        // let sessions = await json('/api/session', 'GET');
        // setSessions(sessions);
    }

    useEffect(() => {
        getBlogs();
    }, []);

    const eventChange = (dateOfEvent: Date) => {
        SetDateOfEvent(dateOfEvent);
    }

 

    useEffect(() => {
        if (!User || User.userid === null || User.role !== 'admin') {
            props.history.replace('/login');
        }
    }, []);

    return (
        <>
        
        </>            
    );
}

export default Blogs;

