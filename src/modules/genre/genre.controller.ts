import { Router } from "express";

const GenreRoutes = Router();


// ciar um novo gênero
GenreRoutes.post('/', (req, res) => {
    try {
        
    } catch (error) {
        console.error('Error creating genre:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


export default GenreRoutes;