import { Router } from "express";
import { prisma } from '../db.js';

const router = Router();

//NOTE - Obtener Publicaciones
router.get('/publicaciones', async (req, res) => {
    try {

        const publicacion = await prisma.publicacion.findMany()
        res.json(publicacion);
        
    } catch (error) {

        res.json({error: 'An error occurs when trying to obtain the publication'})

    }
})

router.post('/publicaciones', async (req, res) =>{
    const { contenido, multimedia, id_usuario } = req.body;
    

  try {
    
   const newPublication= await prisma.publicacion.create({
       data: {
        contenido: contenido,
        multimedia: multimedia,
        id_usuario: id_usuario
       }
    })

    res.json((newPublication));

  } catch (error) {
         
      return res.json({error})

  }
  
});



router.put('/publicaciones/:id_publicacion', async(req, res) =>{
    
    const { contenido, multimedia, id_usuario } = req.body;

    try {
        const updatePublication = await prisma.comentario.update({
            where: {
                id_publicacion: parseInt(req.params.id_publicacion),
            },
            data: {
                contenido: contenido,
                multimedia: multimedia,
                id_usuario: id_usuario
            }    
        })

        res.json((updatePublication))

    } catch (error) {

        return res.json({error})

    }
  
});



//NOTE - Eliminación de Publicaciones

router.delete('/publicaciones/:id_publicacion', async(req,res) => {

    try {
        const deletePublication = await prisma.publicacion.delete({
            where: {
                id_publicacion: parseInt(req.params.id_publicacion),
            },
        });
    
        if(!deleteComentario)
            return res.status(404).json({error: "The publication is not found" });
    
        return res.json(deletePublication);
    } catch (error) {

        return res.json({error})

    }
    
});

export default router;