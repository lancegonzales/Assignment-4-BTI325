const express = require('express');
const path = require('path');
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.render('home', { page: '/' });
});

// About route
app.get('/about', (req, res) => {
    res.render('about', { page: '/about' });
});

// Projects route (mock data)
app.get('/solutions/projects', (req, res) => {
    const projects = [
        { id: 1, title: "Project A", sector: "Industry", summary_short: "Short summary A", feature_img_url: "", impact: "Impact A", original_source_url: "#" },
        { id: 2, title: "Project B", sector: "Transportation", summary_short: "Short summary B", feature_img_url: "", impact: "Impact B", original_source_url: "#" }
    ];
    res.render('projects', { projects: projects, page: '/solutions/projects' });
});

// Individual Project route (mock data)
app.get('/solutions/projects/:id', (req, res) => {
    const project = { id: req.params.id, title: "Project " + req.params.id, sector: "Industry", intro_short: "Detailed project intro", feature_img_url: "", impact: "Detailed impact", original_source_url: "#" };
    res.render('project', { project: project });
});

// 404 route
app.use((req, res) => {
    res.status(404).render('404', { page: '' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
