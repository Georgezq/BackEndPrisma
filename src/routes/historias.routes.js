import { Router } from "express";
import { prisma } from '../db.js';

const router = Router();

//NOTE - Obtener Historias
router.get('/historias', async (req, res) => {
    try {

        const stories = await prisma.historia.findMany()
        res.json(stories);
        
    } catch (error) {

        res.json({error: 'An error occurs when trying to obtain the stories'})

    }
})

router.post('/historias', async (req, res) =>{
    const { contenidoTexto, contenidoMedia, id_usuario } = req.body;
    

  try {
    
   const newStory = await prisma.historia.create({
       data: {
        contenidoTexto: contenidoTexto,
        contenidoMedia: contenidoMedia,
        id_usuario: id_usuario
       }
    })

    res.json((newStory));

  } catch (error) {
         
      return res.json({error})

  }
  
});



router.put('/historias/:id_historia', async(req, res) =>{
    
    const { contenidoTexto, contenidoMedia, id_usuario } = req.body;


    try {
        const updateHistoria = await prisma.historia.update({
            where: {
                id_historia: parseInt(req.params.id_historia),
            },
            data: {
                contenidoTexto: contenidoTexto,
                contenidoMedia: contenidoMedia,
                id_usuario: id_usuario
            }    
        })

        res.json((updateHistoria))

    } catch (error) {

        return res.json({error})

    }
  
});



//NOTE - Eliminación de Historias

router.delete('/historias/:id_historia', async(req,res) => {

    try {
        const deleteHistoria = await prisma.historia.delete({
            where: {
                id_historia: parseInt(req.params.id_historia),
            },
        });
    
        if(!deleteHistoria)
            return res.status(404).json({error: "The story is not found" });
    
        return res.json(deleteHistoria);
    } catch (error) {

        return res.json({error})

    }
    
});

export default router;