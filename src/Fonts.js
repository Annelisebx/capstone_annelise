import React from 'react';

const Fonts = () => {
    const [blogs, setFonts] = useState(null);

    const handleDelete = (id) => {
        const newFonts = blogs.filter(blog => blog.id !== id);
        setFonts(newFonts);
    }

    useEffect(() => {
        fetch('http://localhost:8000/fonts')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
        })
    }, []);

    return (
        <div className="home">
            {/* <FontList fonts={fonts} title="All Fonts!" handleDelete={handleDelete} /> */}

        </div>
    );
}

export default Fonts;