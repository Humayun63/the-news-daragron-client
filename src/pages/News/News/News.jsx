import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details, category_id } = news;
    return (
        <div>
            <Card style={{}}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button variant="danger">
                        <Link to={`/category/${category_id}`} className='text-decoration-none text-white'><FaArrowLeft></FaArrowLeft> All News In this Category</Link>
                    </Button>
                </Card.Body>
            </Card>
            <EditorsInsights />
        </div>
    );
};

export default News;