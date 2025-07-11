import './App.css'
import { useState } from 'react';
import UserProfile from './basic-state/UserProfile.tsx';
import Button from './basic-state/Button/Button.tsx';
import Alert from './basic-state/Alert/Alert.tsx';
import PostList from './basic-state/RenderaListofPosts/PostList.tsx';
import DataLoader from './basic-state/DisplayDataLoadingStatus/DataLoader.tsx';
import AuthPanel from './basic-state/DisplayFormorMessage/AuthPanel.tsx';
import LikeButton from './basic-state/Likes/LikeButton.tsx';
import FeedbackForm from './basic-state/FeedbackForm/FeedbackForm.tsx';
import SettingsPanel from './basic-state/PropDrilling/SettingsPanel.tsx';
import BookList from './basic-state/BookList/BookList.tsx';
import ProductCard from './basic-state/ProductCard/ProductCard.tsx';
import TaskList from './basic-state/TaskList/TaskList.tsx';
import ShoppingCart from './basic-state/ShoppingCart/ShoppingCart.tsx';
import ListContainer from './basic-state/ListContainer/ListContainer.tsx';
import Card from './basic-state/Card/Card.tsx';
import ThemeSwitcher from './basic-state/ThemeSwitcher/ThemeSwitcher.tsx';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React Components',
      content: 'Learn how to build reusable React components from scratch...',
      thumbnail: 'https://picsum.photos/seed/gallery1/400/300',
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'Modern CSS Techniques for Web Development',
      content: 'Explore the latest CSS features and techniques...',
      thumbnail: 'https://picsum.photos/seed/gallery1/400/300',
      author: 'Jane Smith',
    },
    {
      id: 3,
      title: 'JavaScript ES6+ Features You Should Know',
      content: 'Master the essential ES6+ features that every developer should know...',
      thumbnail: 'https://picsum.photos/seed/gallery1/400/300',
      author: 'Alex Johnson',
    },
  ];
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  const books = [
    { id: 1, title: 'Book A', author: 'Author X', year: 2020 },
    { id: 2, title: 'React Programming', author: 'John Smith', year: 2023 },
    { id: 3, title: 'Advanced JavaScript', author: 'Jane Doe', year: 2022 },
    { id: 4, title: 'UI/UX Design', author: 'Mike Johnson', year: 2021 },
    { id: 5, title: 'Database Systems', author: 'Sarah Wilson', year: 2024 },
    { id: 6, title: 'Computer Networks', author: 'David Brown', year: 2019 },
  ];
  const products = [
    { name: 'Wireless Headphones', price: 99.99, isInStock: true },
    { name: 'Smart Watch', price: 249.99, isInStock: false },
    { name: 'Bluetooth Speaker', price: 79.99, isInStock: true },
    { name: 'Gaming Mouse', price: 59.99, isInStock: true },
  ];
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Complete project documentation', completed: false },
    { id: 2, text: 'Review code changes', completed: true },
    { id: 3, text: 'Update dependencies', completed: false },
    { id: 4, text: 'Write unit tests', completed: false },
    { id: 5, text: 'Deploy to staging', completed: true },
    { id: 6, text: 'Conduct team meeting', completed: false },
    { id: 7, text: 'Fix reported bugs', completed: false },
    { id: 8, text: 'Optimize database queries', completed: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const [showList, setShowList] = useState<boolean>(true);
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <div>
      <h1>User Information</h1>
      <UserProfile name="Alice" age={25} bio="I am a software developer." />
      <UserProfile name="Bob" age={30} bio="I love hiking and photography." />
      <UserProfile name="Charlie" age={20} bio="Student and aspiring musician." />

      <hr className="divider" />

      <h1>Button Component</h1>
      <div>
        <Button text="Primary Button" type="primary" />
        <Button text="Outline Button" type="outline" />
        <Button text="Default Button" type="default" />
      </div>
      <div>
        <Button text="Text Button" type="text" />
        <Button text="Link Button" type="link" />
      </div>

      <hr className="divider" />

      <h1>Alert Component</h1>
      <div className="component-wrapper">
        <Alert type="success" message="Your message has been sent successfully." />
        <Alert type="error" message="A problem has occurred while submitting your data." />
        <Alert type="warning" message="There was a problem with your network connection." />
        <Alert type="info" message="Please read the comments carefully." />
        <Alert type="info" message="" />
      </div>
      
      <div className="App">
        <PostList posts={posts} />
      </div>

      <hr className="divider" />

      <h1>Data Loader Component</h1>
      <div className="flex-center-wrapper flex-gap-20">
        <DataLoader />
      </div>
      <div className="flex-center-wrapper">
        <AuthPanel />
      </div>
      <div className="component-wrapper">
        <LikeButton />
      </div>
      <div className="component-wrapper">
        <FeedbackForm />
      </div>
      <div className="app-container">
        <h2>App Component</h2>
        <button onClick={toggleTheme} className="theme-toggle-button">
          Toggle Theme
        </button>
        <SettingsPanel theme={theme} />
      </div>
      <div className="app-container">
        <BookList books={books} />
      </div>
      <div style={{ display: 'flex', gap: '16px', padding: '40px', flexWrap: 'wrap' }}>
        {products.map((p, index) => (
          <ProductCard
            key={index}
            name={p.name}
            price={p.price}
            isInStock={p.isInStock}
          />
        ))}
      </div>
      <div style={{ padding: '40px' }}>
        <TaskList tasks={tasks} onTaskToggle={toggleTask} />
      </div>
      <div style={{ display: 'flex', padding: '40px', justifyContent: 'center', alignItems: 'center'}}>
        <ShoppingCart />
      </div>
      <div
        style={{
          height: '50vh',
          display: 'flex',
          justifyContent: 'center', // Căn giữa ngang
          alignItems: 'center',     // Căn giữa dọc
          flexDirection: 'column',
          backgroundColor: '#f5f5f5',
        }}
      >
        <button
          onClick={() => setShowList((prev) => !prev)}
          style={{
            marginBottom: '20px',
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: showList ? '#f5222d' : '#1890ff',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          {showList ? 'Hide List' : 'Show List'}
        </button>

        <ListContainer showList={showList} items={items} />
      </div>
      <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
        <Card>
          <h2>Welcome!</h2>
          <UserProfile name="Alice" age={25} bio="I am a software developer."/>
        </Card>

        <Card>
          <button style={{
            padding: '10px 20px',
            backgroundColor: '#1890ff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Click Me
          </button>
        </Card>
      </div>
      <div style={{ height: '25vh', paddingTop: '80px', backgroundColor: '#f0f2f5' }}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default App;
