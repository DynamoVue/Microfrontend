import React, { useState, useEffect, useContext } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { AppContext } from './bootstrap';

type BlogType = {
    author: string; 
    title: string;
}

const App: React.FC<any> = (props: any) => {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const { globalStore } = useContext(AppContext);

    useEffect(() => {
        if (globalStore && globalStore.GetPartnerState("MarketingApp")) {
            globalStore.Subscribe('MarketingApp', state => {
                setBlogs(state.blogs.data);
            });
        }
    }, [globalStore]);

    return (
        <StylesProvider>
            <div>
                This is my dashboard
                {
                    blogs && blogs.length > 0 ? blogs.map((blog, index) => (
                        <div key={index}>
                            {blog.title} - {blog.author}
                        </div>
                    )): 'No Posts Yet'
                }
            </div>
        </StylesProvider>
    )
}

export default App;