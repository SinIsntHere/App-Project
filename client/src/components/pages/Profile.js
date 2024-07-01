import { fetchData } from "../../main.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

const Profile = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const data = await fetchData('/user/profile', {}, 'GET');
                setUsername(data.username);
                setPosts(data.posts);
            } catch (error) {
                console.error('Profile fetch error:', error);
                navigate('/login');
            }
        };
        fetchProfileData();
    }, [navigate]);

    const handleNewPost = async (e) => {
        e.preventDefault();
        try {
            const newPostData = await fetchData('/post', { content: newPost }, 'POST');
            setPosts([...posts, newPostData]);
            setNewPost('');
        } catch (error) {
            console.error('New post error:', error);
        }
    };

    return (
        <Container>
            <h1>Profile</h1>
            <p>Username: {username}</p>
            <Form onSubmit={handleNewPost}>
                <Form.Group controlId="newPost">
                    <Form.Control
                        type="text"
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="Write a new post"
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Post
                </Button>
            </Form>
            <ListGroup>
                {posts.map((post) => (
                    <ListGroup.Item key={post.id}>{post.content}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default Profile;