import { Router } from "express";
import { prisma } from '../db.js';

const router = Router();

//NOTE - Obtener Comentarios
router.get('/comentarios', async (req, res) => {
    try {

        const comentario = await prisma.comentario.findMany()
        res.json(comentario);
        
    } catch (error) {

        res.json({error: 'An error occurs when trying to obtain the stories'})

    }
})

router.post('/comentarios', async (req, res) =>{
    const { contenido, reaccion, id_historia, id_usuario } = req.body;
    

  try {
    
   const newComment = await prisma.comentario.create({
       data: {
        contenido: contenido,
        reaccion: reaccion,
        id_historia: id_historia,
        id_usuario: id_usuario
       }
    })

    res.json((newComment));

  } catch (error) {
         
      return res.json({error})

  }
  
});



router.put('/comentarios/:id_comentario', async(req, res) =>{
    
    const { contenido, reaccion, id_historia, id_usuario } = req.body;


    try {
        const updateComentario = await prisma.comentario.update({
            where: {
                id_historia: parseInt(req.params.id_historia),
            },
            data: {
                contenido: contenido,
                reaccion: reaccion,
                id_historia: id_historia,
                id_usuario: id_usuario
            }    
        })

        res.json((updateComentario))

    } catch (error) {

        return res.json({error})

    }
  
});



//NOTE - Eliminación de Comentarios

router.delete('/comentarios/:id_comentario', async(req,res) => {

    try {
        const deleteComentario = await prisma.comentario.delete({
            where: {
                id_comentario: parseInt(req.params.id_comentario),
            },
        });
    
        if(!deleteComentario)
            return res.status(404).json({error: "The story is not found" });
    
        return res.json(deleteComentario);
    } catch (error) {

        return res.json({error})

    }
    
});

export default router;